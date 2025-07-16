-- Create blog posts table for dynamic content generation
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'For Rent Finders Team',
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  read_time TEXT NOT NULL DEFAULT '5 min read',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access (blog is public)
CREATE POLICY "Blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial blog posts
INSERT INTO public.blog_posts (title, excerpt, content, category, image_url, featured) VALUES
(
  'The Best Neighborhoods in Miami for Renters in 2025',
  'Discover the top areas to rent in Miami this year, from affordable gems to luxury hotspots, complete with insider tips on what to expect.',
  'Miami''s rental market continues to evolve, offering diverse neighborhoods for every lifestyle and budget. From the vibrant arts scene in Wynwood to the luxury high-rises of Brickell, each area has its unique character and advantages...',
  'Neighborhoods',
  'https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80',
  true
),
(
  'How to Budget for Your First Apartment',
  'Complete guide to apartment budgeting including hidden costs, security deposits, utilities, and smart money-saving tips for new renters.',
  'Budgeting for your first apartment involves more than just monthly rent. Understanding all the associated costs helps you make informed decisions and avoid financial surprises...',
  'Finance',
  'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80',
  false
),
(
  'Studio vs 1-Bedroom: What''s Best for You?',
  'Weighing the pros and cons of studio apartments versus one-bedrooms in South Florida, including cost analysis and lifestyle considerations.',
  'Choosing between a studio and one-bedroom apartment is a crucial decision that affects your daily life and budget. Each option offers distinct advantages depending on your lifestyle, work habits, and financial situation...',
  'Apartment Types',
  'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
  false
),
(
  'How Credit Score Affects Apartment Approval',
  'Everything you need to know about credit requirements for renting, how to improve your score, and alternative options for those with poor credit.',
  'Your credit score plays a crucial role in apartment approval, but it''s not the only factor landlords consider. Understanding how credit affects your rental prospects can help you prepare and improve your chances...',
  'Credit',
  'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80',
  true
),
(
  'Fort Lauderdale vs Miami: A Complete Living Guide',
  'Detailed comparison of living costs, lifestyle, amenities, and rental markets between Fort Lauderdale and Miami to help you choose the perfect city.',
  'Both Fort Lauderdale and Miami offer unique advantages for renters, but understanding the differences in cost of living, lifestyle, and amenities can help you make the right choice for your situation...',
  'City Comparison',
  'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=800&q=80',
  false
),
(
  'Luxury Amenities That Are Actually Worth the Cost',
  'Which premium apartment amenities provide real value and which ones are just marketing fluff - a comprehensive analysis for smart renters.',
  'Not all luxury amenities are created equal. Some genuinely enhance your quality of life and provide value, while others are expensive add-ons that you''ll rarely use...',
  'Luxury Living',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
  false
);