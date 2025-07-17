
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (!openAIApiKey) {
    return new Response(
      JSON.stringify({ error: 'OpenAI API key not configured' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting blog post generation...');

    // Blog post topics with current trends for 2025
    const blogTopics = [
      {
        title: "Miami Rental Market Forecast 2025: What Renters Need to Know",
        category: "Market Trends",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "The Ultimate Guide to Renting with Pets in South Florida",
        category: "Pet-Friendly Living",
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Smart Home Features Every Modern Renter Should Look For",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Hurricane Season 2025: Rental Insurance and Emergency Preparedness",
        category: "Safety & Insurance",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Co-Living Spaces in Miami: The Future of Urban Rental Living",
        category: "Living Trends",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Electric Vehicle Charging: How It Affects Your Apartment Choice",
        category: "Sustainability",
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Work From Home Setup: Finding the Perfect Rental for Remote Work",
        category: "Remote Work",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Gen Z Rental Preferences: What Young Renters Want in 2025",
        category: "Demographics",
        imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Luxury Amenities vs. Location: Making the Right Trade-off",
        category: "Decision Making",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Digital Lease Signing and Virtual Tours: The New Normal",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
        featured: false
      }
    ];

    const generatedPosts = [];

    for (let i = 0; i < blogTopics.length; i++) {
      const topic = blogTopics[i];
      console.log(`Generating blog post ${i + 1}: ${topic.title}`);

      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic.title}" for a South Florida rental company. 

      Requirements:
      - 1200-1800 words
      - Include current 2025 market trends and data
      - Use engaging subheadings (H2, H3)
      - Write in a helpful, expert tone
      - Include actionable tips and advice
      - Focus on Miami and Fort Lauderdale markets
      - Make it highly readable and valuable for renters
      - Include relevant statistics and market insights
      - End with a call-to-action encouraging readers to contact the rental company

      Format the content with proper HTML structure using <h2>, <h3>, <p>, <ul>, <li> tags for better readability.
      
      The company is "For Rent Finders" - a professional rental assistance service in South Florida.`;

      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o',
          messages: [
            { 
              role: 'system', 
              content: 'You are an expert real estate and rental market writer. Create detailed, SEO-optimized blog posts that provide genuine value to readers looking for rental properties in South Florida.' 
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 3000
        }),
      });

      if (!response.ok) {
        console.error(`Failed to generate content for post ${i + 1}:`, await response.text());
        continue;
      }

      const data = await response.json();
      const content = data.choices[0].message.content;

      // Generate excerpt from first paragraph
      const excerptMatch = content.match(/<p>(.*?)<\/p>/);
      const excerpt = excerptMatch 
        ? excerptMatch[1].substring(0, 200) + '...'
        : content.substring(0, 200) + '...';

      // Estimate read time (average reading speed: 200 words per minute)
      const wordCount = content.split(' ').length;
      const readTime = Math.ceil(wordCount / 200);

      const blogPost = {
        title: topic.title,
        excerpt: excerpt.replace(/<[^>]*>/g, ''), // Remove HTML tags from excerpt
        content: content,
        category: topic.category,
        image_url: topic.imageUrl,
        featured: topic.featured,
        read_time: `${readTime} min read`,
        author: 'For Rent Finders Team'
      };

      // Insert into database
      const { data: insertedPost, error } = await supabase
        .from('blog_posts')
        .insert(blogPost)
        .select()
        .single();

      if (error) {
        console.error(`Error inserting post ${i + 1}:`, error);
        continue;
      }

      generatedPosts.push(insertedPost);
      console.log(`Successfully generated and saved post ${i + 1}: ${topic.title}`);

      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    console.log(`Generated ${generatedPosts.length} blog posts successfully`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Generated ${generatedPosts.length} blog posts successfully`,
        posts: generatedPosts.map(post => ({ id: post.id, title: post.title }))
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-blog-posts function:', error);
    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred', details: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
