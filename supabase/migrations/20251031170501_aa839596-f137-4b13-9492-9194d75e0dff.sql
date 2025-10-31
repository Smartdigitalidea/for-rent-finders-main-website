-- Create properties table
CREATE TABLE IF NOT EXISTS public.properties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  location TEXT NOT NULL,
  images TEXT[] DEFAULT '{}',
  price TEXT NOT NULL,
  price_num INTEGER NOT NULL,
  original_price TEXT,
  beds INTEGER NOT NULL,
  baths INTEGER NOT NULL,
  sqft INTEGER NOT NULL,
  amenities TEXT[] DEFAULT '{}',
  description TEXT NOT NULL,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.properties ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Anyone can view published properties
CREATE POLICY "Anyone can view published properties"
  ON public.properties
  FOR SELECT
  USING (status = 'published');

-- Anyone can view all properties (for admin purposes)
CREATE POLICY "Anyone can view all properties"
  ON public.properties
  FOR SELECT
  USING (true);

-- Anyone can insert properties
CREATE POLICY "Anyone can insert properties"
  ON public.properties
  FOR INSERT
  WITH CHECK (true);

-- Anyone can update properties
CREATE POLICY "Anyone can update properties"
  ON public.properties
  FOR UPDATE
  USING (true);

-- Anyone can delete properties
CREATE POLICY "Anyone can delete properties"
  ON public.properties
  FOR DELETE
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.properties
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.properties;