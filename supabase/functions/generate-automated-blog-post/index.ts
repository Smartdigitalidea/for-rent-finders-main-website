
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
    const { schedule_type } = await req.json();
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log(`Starting automated blog generation for ${schedule_type}`);

    // Log the automation attempt
    const { data: logEntry } = await supabase
      .from('automated_blog_logs')
      .insert({
        schedule_type,
        status: 'processing'
      })
      .select()
      .single();

    // Define topic themes based on schedule
    const mondayTopics = [
      {
        title: "Miami Rental Market Weekly Update: January 2025 Trends",
        category: "Market Analysis",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Budget-Friendly Apartments: Best Deals This Week in South Florida",
        category: "Budget Living",
        imageUrl: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Credit Score Requirements: What Changed in 2025 Rental Market",
        category: "Financial Tips",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "First-Time Renter's Guide: Avoiding Common Mistakes in 2025",
        category: "Beginner Tips",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
      }
    ];

    const fridayTopics = [
      {
        title: "Weekend Guide: Best Neighborhoods for Young Professionals in Miami",
        category: "Lifestyle",
        imageUrl: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Pet-Friendly Apartments: Complete Guide for Miami Pet Owners",
        category: "Pet Living",
        imageUrl: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Luxury Living: High-End Amenities Worth the Extra Cost",
        category: "Luxury Living",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Beach vs Downtown: Choosing Your Perfect Miami Location",
        category: "Location Guide",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80"
      }
    ];

    // Select topics based on schedule type
    const topicPool = schedule_type === 'monday' ? mondayTopics : fridayTopics;
    const selectedTopic = topicPool[Math.floor(Math.random() * topicPool.length)];

    console.log(`Generating blog post: ${selectedTopic.title}`);

    // Enhanced prompt for DeepSeek with specific content strategy
    const prompt = `Write a comprehensive, SEO-optimized blog post about "${selectedTopic.title}" for a South Florida rental company.

REQUIREMENTS:
- 1400-1800 words (detailed and authoritative)
- Target audience: Renters in Miami and Fort Lauderdale area
- Include current 2025 market trends and data
- Use engaging H2 and H3 subheadings for readability
- Write in a helpful, expert tone with actionable advice
- Include specific Miami/Fort Lauderdale neighborhoods and areas
- Add practical tips and insider knowledge
- Include relevant statistics and market insights
- End with a strong call-to-action for "For Rent Finders" services

CONTENT STRUCTURE:
1. Compelling introduction with current market context
2. 3-4 main sections with H2 headings
3. Subsections with H3 headings where appropriate
4. Bullet points or numbered lists for key tips
5. Conclusion with clear next steps

FORMATTING:
- Use proper HTML structure: <h2>, <h3>, <p>, <ul>, <li>, <strong>
- Create scannable content with good white space
- Include actionable takeaways in each section
- Make it highly readable and valuable for renters

FOCUS AREAS:
- Local market expertise and insider knowledge
- Practical, actionable advice renters can use immediately
- Current 2025 trends and changes in the rental market
- Specific neighborhoods, price ranges, and local amenities
- Address common renter concerns and questions

The company is "For Rent Finders" - a professional rental assistance service helping people find perfect apartments in South Florida. Mention the company naturally throughout the content and end with a compelling call-to-action.`;

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
            content: 'You are an expert real estate and rental market writer specializing in South Florida. Create detailed, SEO-optimized blog posts that provide genuine value to readers looking for rental properties in Miami and Fort Lauderdale. Write with authority, include local insights, and always provide actionable advice.' 
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.7,
        max_tokens: 6000,
        top_p: 0.9
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('DeepSeek API error:', errorText);
      throw new Error(`DeepSeek API error: ${response.status} - ${errorText}`);
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

    // Determine if this should be a featured post (30% chance)
    const featured = Math.random() < 0.3;

    const blogPost = {
      title: selectedTopic.title,
      excerpt: excerpt,
      content: content,
      category: selectedTopic.category,
      image_url: selectedTopic.imageUrl,
      featured: featured,
      read_time: `${readTime} min read`,
      author: 'For Rent Finders Team'
    };

    // Insert the blog post
    const { data: insertedPost, error: insertError } = await supabase
      .from('blog_posts')
      .insert(blogPost)
      .select()
      .single();

    if (insertError) {
      console.error('Error inserting blog post:', insertError);
      
      // Update log with error
      await supabase
        .from('automated_blog_logs')
        .update({
          status: 'failed',
          error_message: insertError.message,
          topic: selectedTopic.title
        })
        .eq('id', logEntry.id);

      throw insertError;
    }

    // Update log with success
    await supabase
      .from('automated_blog_logs')
      .update({
        status: 'completed',
        topic: selectedTopic.title,
        post_id: insertedPost.id
      })
      .eq('id', logEntry.id);

    console.log(`Successfully generated automated blog post: ${selectedTopic.title}`);
    console.log(`Post ID: ${insertedPost.id}, Word count: ${wordCount}, Read time: ${readTime} min`);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: `Successfully generated ${schedule_type} blog post`,
        post: {
          id: insertedPost.id,
          title: insertedPost.title,
          word_count: wordCount,
          read_time: readTime,
          featured: featured
        }
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-automated-blog-post function:', error);
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to generate automated blog post', 
        details: error.message 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
