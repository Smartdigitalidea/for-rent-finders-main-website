import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, category } = await req.json();

    if (!openAIApiKey) {
      return new Response(
        JSON.stringify({ error: 'OpenAI API key not configured' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
      );
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Generate blog post with OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a professional rental expert creating helpful blog content for renters in Miami and Fort Lauderdale. Write engaging, informative articles that help people find their perfect apartment.'
          },
          {
            role: 'user',
            content: `Write a comprehensive blog post about: ${topic}. Category: ${category}. Include practical tips and local insights for Miami/Fort Lauderdale renters. Return JSON with title, excerpt (150 chars max), and content (at least 800 words).`
          }
        ],
        temperature: 0.7,
      }),
    });

    const aiData = await response.json();
    const blogData = JSON.parse(aiData.choices[0].message.content);

    // Insert into Supabase
    const { data, error } = await supabase
      .from('blog_posts')
      .insert({
        title: blogData.title,
        excerpt: blogData.excerpt,
        content: blogData.content,
        category,
        image_url: `https://images.unsplash.com/photo-${Math.floor(Math.random() * 9999999999)}?auto=format&fit=crop&w=800&q=80`,
        featured: Math.random() > 0.7
      })
      .select()
      .single();

    if (error) throw error;

    return new Response(JSON.stringify({ success: true, post: data }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});