-- Create a sample bookings table to demonstrate linking data to properties
CREATE TABLE public.property_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  property_id UUID NOT NULL REFERENCES public.properties(id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  total_price TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.property_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view all bookings"
ON public.property_bookings
FOR SELECT
USING (true);

CREATE POLICY "Anyone can insert bookings"
ON public.property_bookings
FOR INSERT
WITH CHECK (true);

CREATE POLICY "Anyone can update bookings"
ON public.property_bookings
FOR UPDATE
USING (true);

CREATE POLICY "Anyone can delete bookings"
ON public.property_bookings
FOR DELETE
USING (true);

-- Add trigger for automatic timestamp updates
CREATE TRIGGER update_property_bookings_updated_at
BEFORE UPDATE ON public.property_bookings
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();

-- Enable realtime
ALTER PUBLICATION supabase_realtime ADD TABLE public.property_bookings;