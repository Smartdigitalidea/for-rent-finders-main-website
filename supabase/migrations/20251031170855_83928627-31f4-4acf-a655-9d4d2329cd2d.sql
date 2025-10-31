-- Create blog_posts table
CREATE TABLE IF NOT EXISTS public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured BOOLEAN DEFAULT false,
  image_url TEXT,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  meta_title TEXT,
  meta_description TEXT,
  keywords TEXT[],
  slug TEXT UNIQUE,
  tags TEXT[],
  read_time TEXT
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view published blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (status = 'published');

CREATE POLICY "Anyone can view all blog posts"
  ON public.blog_posts
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert blog posts"
  ON public.blog_posts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can update blog posts"
  ON public.blog_posts
  FOR UPDATE
  USING (true);

CREATE POLICY "Anyone can delete blog posts"
  ON public.blog_posts
  FOR DELETE
  USING (true);

-- Create trigger for updated_at
CREATE TRIGGER set_blog_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.blog_posts;

-- Create automated blog logs table
CREATE TABLE IF NOT EXISTS public.automated_blog_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.blog_posts(id) ON DELETE CASCADE,
  status TEXT NOT NULL,
  error_message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.automated_blog_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view automated blog logs"
  ON public.automated_blog_logs
  FOR SELECT
  USING (true);

CREATE POLICY "Anyone can insert automated blog logs"
  ON public.automated_blog_logs
  FOR INSERT
  WITH CHECK (true);