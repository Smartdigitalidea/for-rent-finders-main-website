
-- Enable pg_cron extension for scheduled tasks
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Enable pg_net extension for HTTP requests
CREATE EXTENSION IF NOT EXISTS pg_net;

-- Schedule blog post generation for every Monday at 9:00 AM EST
SELECT cron.schedule(
  'monday-blog-post',
  '0 14 * * 1', -- 14:00 UTC = 9:00 AM EST (considering EST/EDT)
  $$
  SELECT
    net.http_post(
        url:='https://hfcwwvaaupipdfrqxlaf.supabase.co/functions/v1/generate-automated-blog-post',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmY3d3dmFhdXBpcGRmcnF4bGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NjMzODUsImV4cCI6MjA2ODIzOTM4NX0.kO73ZSopaQqt0mShRyvn120RSXnW27eKkakzmg-QcmU"}'::jsonb,
        body:='{"schedule_type": "monday", "time": "' || now() || '"}'::jsonb
    ) as request_id;
  $$
);

-- Schedule blog post generation for every Friday at 9:00 AM EST
SELECT cron.schedule(
  'friday-blog-post',
  '0 14 * * 5', -- 14:00 UTC = 9:00 AM EST (considering EST/EDT)
  $$
  SELECT
    net.http_post(
        url:='https://hfcwwvaaupipdfrqxlaf.supabase.co/functions/v1/generate-automated-blog-post',
        headers:='{"Content-Type": "application/json", "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhmY3d3dmFhdXBpcGRmcnF4bGFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2NjMzODUsImV4cCI6MjA2ODIzOTM4NX0.kO73ZSopaQqt0mShRyvn120RSXnW27eKkakzmg-QcmU"}'::jsonb,
        body:='{"schedule_type": "friday", "time": "' || now() || '"}'::jsonb
    ) as request_id;
  $$
);

-- Create a table to track automated blog generation
CREATE TABLE IF NOT EXISTS public.automated_blog_logs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  schedule_type TEXT NOT NULL,
  topic TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  error_message TEXT,
  post_id UUID REFERENCES blog_posts(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS for the logs table
ALTER TABLE public.automated_blog_logs ENABLE ROW LEVEL SECURITY;

-- Create policy for viewing logs (public read access for monitoring)
CREATE POLICY "Automated blog logs are publicly readable" 
  ON public.automated_blog_logs 
  FOR SELECT 
  USING (true);
