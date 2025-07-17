
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const deepseekApiKey = Deno.env.get('DEEPSEEK_API_KEY');

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  if (!deepseekApiKey) {
    return new Response(
      JSON.stringify({ error: 'DeepSeek API key not configured' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting bulk blog post generation with DeepSeek...');

    // Updated blog topics with current 2025 trends and DeepSeek optimization
    const blogTopics = [
      {
        title: "Miami Rental Market Forecast 2025: Expert Predictions and Trends",
        category: "Market Analysis",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Complete Guide to Renting with Pets in South Florida 2025",
        category: "Pet-Friendly Living",
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Smart Home Technology: Must-Have Features for Modern Renters",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Hurricane Season 2025: Rental Insurance and Emergency Preparedness Guide",
        category: "Safety & Insurance",
        imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Co-Living Revolution: The Future of Urban Rental Living in Miami",
        category: "Living Trends",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Electric Vehicle Charging: How It's Reshaping Apartment Hunting",
        category: "Sustainability",
        imageUrl: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Remote Work Revolution: Finding the Perfect Home Office Setup",
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
        title: "Luxury vs Location: Making Smart Trade-offs in Today's Market",
        category: "Decision Making",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Digital Revolution: Virtual Tours and Online Lease Signing Guide",
        category: "Technology",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
        featured: false
      }
    ];

    const generatedPosts = [];

    for (let i = 0; i < blogTopics.length; i++) {
      const topic = blogTopics[i];
      console.log(`Generating blog post ${i + 1}/10: ${topic.title}`);

      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic.title}" for a South Florida rental company specializing in Miami and Fort Lauderdale.

CONTENT REQUIREMENTS:
- 1200-1800 words (authoritative and detailed)
- Current 2025 market data and trends
- Expert-level insights for renters
- Actionable tips and practical advice
- Local South Florida market knowledge
- Professional, helpful tone

STRUCTURE & FORMATTING:
- Compelling introduction with current market context
- 4-5 main sections with <h2> headings
- Subsections with <h3> headings where needed
- Use <p>, <ul>, <li>, <strong> tags for proper HTML structure
- Include bullet points for key takeaways
- End with strong call-to-action for "For Rent Finders"

CONTENT FOCUS:
- Include specific Miami/Fort Lauderdale neighborhoods and areas
- Address current rental market challenges and opportunities
- Provide insider knowledge and expert tips
- Include relevant statistics and market insights
- Make content highly scannable and valuable
- Address common renter concerns and questions

COMPANY INTEGRATION:
- Naturally mention "For Rent Finders" services throughout
- Position as local market experts and rental assistance specialists
- Include compelling call-to-action encouraging readers to contact the company
- Emphasize local expertise and personalized service

Create content that establishes authority, provides genuine value, and encourages readers to choose For Rent Finders for their rental needs.`;

      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${deepseekApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { 
              role: 'system', 
              content: 'You are an expert real estate and rental market writer with deep knowledge of South Florida markets. Create detailed, SEO-optimized blog posts that provide genuine value to readers looking for rental properties in Miami and Fort Lauderdale. Write with authority and include local insights.' 
            },
            { role: 'user', content: prompt }
          ],
          temperature: 0.7,
          max_tokens: 6000,
          top_p: 0.9
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
        ? excerptMatch[1].replace(/<[^>]*>/g, '').substring(0, 180) + '...'
        : content.replace(/<[^>]*>/g, '').substring(0, 180) + '...';

      // Estimate read time (average reading speed: 200 words per minute)
      const wordCount = content.split(' ').length;
      const readTime = Math.ceil(wordCount / 200);

      const blogPost = {
        title: topic.title,
        excerpt: excerpt,
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
      console.log(`Word count: ${wordCount}, Read time: ${readTime} min, Featured: ${topic.featured}`);

      // Add delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    console.log(`Generated ${generatedPosts.length}/10 blog posts successfully using DeepSeek`);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Generated ${generatedPosts.length} blog posts successfully with DeepSeek`,
        posts: generatedPosts.map(post => ({ 
          id: post.id, 
          title: post.title,
          category: post.category,
          featured: post.featured 
        })),
        api_used: 'DeepSeek',
        total_generated: generatedPosts.length
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-blog-posts function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate blog posts with DeepSeek', 
        details: error.message 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
