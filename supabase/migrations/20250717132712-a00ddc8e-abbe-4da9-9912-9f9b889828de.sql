
-- Add new columns to blog_posts table for enhanced functionality
ALTER TABLE public.blog_posts 
ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'scheduled', 'archived')),
ADD COLUMN IF NOT EXISTS meta_title TEXT,
ADD COLUMN IF NOT EXISTS meta_description TEXT,
ADD COLUMN IF NOT EXISTS keywords TEXT[],
ADD COLUMN IF NOT EXISTS slug TEXT UNIQUE,
ADD COLUMN IF NOT EXISTS scheduled_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS tags TEXT[];

-- Create index for better search performance
CREATE INDEX IF NOT EXISTS idx_blog_posts_status ON public.blog_posts(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_search ON public.blog_posts USING gin(to_tsvector('english', title || ' ' || excerpt || ' ' || content));

-- Update RLS policies to allow admin operations
DROP POLICY IF EXISTS "Blog posts are publicly readable" ON public.blog_posts;

-- Create new RLS policies
CREATE POLICY "Blog posts are publicly readable" 
  ON public.blog_posts 
  FOR SELECT 
  USING (status = 'published');

CREATE POLICY "Allow admin operations on blog posts" 
  ON public.blog_posts 
  FOR ALL 
  USING (true)
  WITH CHECK (true);

-- Create storage bucket for blog images
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images', 
  'blog-images', 
  true, 
  5242880, -- 5MB limit
  ARRAY['image/jpeg', 'image/png', 'image/webp', 'image/gif']
) ON CONFLICT (id) DO NOTHING;

-- Create storage policies for blog images
CREATE POLICY "Public can view blog images" 
  ON storage.objects 
  FOR SELECT 
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can upload blog images" 
  ON storage.objects 
  FOR INSERT 
  WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Admin can update blog images" 
  ON storage.objects 
  FOR UPDATE 
  USING (bucket_id = 'blog-images');

CREATE POLICY "Admin can delete blog images" 
  ON storage.objects 
  FOR DELETE 
  USING (bucket_id = 'blog-images');

-- Enable realtime for blog_posts table
ALTER TABLE public.blog_posts REPLICA IDENTITY FULL;
ALTER PUBLICATION supabase_realtime ADD TABLE public.blog_posts;

-- Function to generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title_text TEXT)
RETURNS TEXT
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title_text, '[^a-zA-Z0-9\s-]', '', 'g'),
        '\s+', '-', 'g'
      ),
      '-+', '-', 'g'
    )
  );
END;
$$;

-- Trigger to auto-generate slug if not provided
CREATE OR REPLACE FUNCTION public.set_blog_post_slug()
RETURNS TRIGGER
LANGUAGE plpgsql
AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug := public.generate_slug(NEW.title);
    
    -- Ensure slug is unique
    WHILE EXISTS (SELECT 1 FROM public.blog_posts WHERE slug = NEW.slug AND id != COALESCE(NEW.id, gen_random_uuid())) LOOP
      NEW.slug := NEW.slug || '-' || extract(epoch from now())::int;
    END LOOP;
  END IF;
  
  RETURN NEW;
END;
$$;

CREATE TRIGGER blog_post_slug_trigger
  BEFORE INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blog_post_slug();
