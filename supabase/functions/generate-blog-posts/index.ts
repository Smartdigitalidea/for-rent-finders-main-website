
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

    console.log('Starting immediate blog post generation with DeepSeek...');

    // South Florida focused blog topics similar to your examples
    const blogTopics = [
      {
        title: "Miami Apartment Spotlight: Brickell City Centre Living Experience",
        category: "Apartment Spotlight",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Exploring the Best Miami Beach Rooftop Bars and Lounges",
        category: "Lifestyle & Entertainment",
        imageUrl: "https://images.unsplash.com/photo-1544966503-7ad532bf1d64?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Should I Move To Fort Lauderdale? Complete 2025 Guide",
        category: "Relocation Guide",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Family-Friendly Restaurants in Coral Gables Every Parent Should Know",
        category: "Family Living",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Fort Lauderdale Apartment Spotlight: Las Olas Boulevard Luxury Living",
        category: "Apartment Spotlight",
        imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "The Ultimate Guide to Finding Your Perfect Apartment in Miami 2025",
        category: "Apartment Hunting",
        imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Exploring Miami: 15 Free Activities Every Renter Should Experience",
        category: "Budget Living",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Wynwood District Living: Miami's Coolest Neighborhood for Young Professionals",
        category: "Neighborhood Guide",
        imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
        featured: true
      },
      {
        title: "Best Coffee Shops in South Beach for Remote Workers and Students",
        category: "Remote Work",
        imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
        featured: false
      },
      {
        title: "Aventura vs Brickell: Which Miami Neighborhood Fits Your Lifestyle?",
        category: "Neighborhood Comparison",
        imageUrl: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        featured: false
      }
    ];

    const generatedPosts = [];

    for (let i = 0; i < blogTopics.length; i++) {
      const topic = blogTopics[i];
      console.log(`Generating blog post ${i + 1}/10: ${topic.title}`);

      const prompt = `Write a comprehensive, SEO-optimized blog post about "${topic.title}" for For Rent Finders, a South Florida rental company specializing in Miami and Fort Lauderdale.

CONTENT REQUIREMENTS:
- 1200-1800 words (authoritative and detailed)
- Target audience: People looking for apartments in Miami/Fort Lauderdale
- Include current 2025 market insights and local knowledge
- Professional, helpful, and engaging tone
- Actionable advice and insider tips

STRUCTURE & SEO:
- Compelling introduction with hook and local context
- 4-5 main sections with descriptive <h2> headings
- Subsections with <h3> headings where needed
- Use proper HTML: <p>, <ul>, <li>, <strong>, <em> tags
- Include bullet points for key takeaways
- Meta description worthy excerpt in opening
- Local SEO keywords naturally integrated

CONTENT FOCUS FOR "${topic.category}":
${topic.category === 'Apartment Spotlight' ? 
  '- Detailed building/area overview with amenities, pricing insights, nearby attractions\n- Transportation options and walkability scores\n- Resident lifestyle and community features\n- Comparison with similar properties in the area' :
topic.category === 'Lifestyle & Entertainment' ?
  '- Specific venues with addresses, hours, and pricing\n- Local insider tips and hidden gems\n- Best times to visit and what to expect\n- Transportation and parking information' :
topic.category === 'Relocation Guide' ?
  '- Cost of living breakdown with real numbers\n- Job market insights and major employers\n- Neighborhoods overview with pros/cons\n- Weather, culture, and lifestyle considerations' :
topic.category === 'Family Living' ?
  '- Kid-friendly menu options and pricing\n- Location details and parking information\n- Age-appropriate activities and amenities\n- Safety and cleanliness considerations' :
topic.category === 'Apartment Hunting' ?
  '- Step-by-step process with timelines\n- Required documentation and credit requirements\n- Market timing and negotiation strategies\n- Red flags to avoid and questions to ask' :
topic.category === 'Budget Living' ?
  '- Specific activity details with costs (free!)\n- Best times to visit and seasonal considerations\n- Transportation options and accessibility\n- Pro tips for maximizing the experience' :
topic.category === 'Neighborhood Guide' ?
  '- Demographic and lifestyle overview\n- Housing costs and apartment availability\n- Local businesses, restaurants, and nightlife\n- Transportation and commute options' :
topic.category === 'Remote Work' ?
  '- WiFi quality, power outlets, and workspace setup\n- Operating hours, pricing, and membership options\n- Noise levels and professional atmosphere\n- Location and parking details' :
  '- Detailed comparison of lifestyle, costs, amenities\n- Demographics and target residents\n- Transportation and accessibility\n- Investment potential and market trends'
}

LOCAL EXPERTISE:
- Include specific Miami/Fort Lauderdale streets, buildings, and landmarks
- Reference actual neighborhoods like Brickell, South Beach, Las Olas, Aventura
- Mention local transportation (Metromover, Brightline, etc.)
- Include current market data and pricing insights
- Address hurricane season, beach lifestyle, and tropical climate

COMPANY INTEGRATION:
- Naturally mention "For Rent Finders" as local experts 2-3 times
- Position as insider knowledge source with years of local experience
- Include strong call-to-action encouraging readers to contact For Rent Finders
- Emphasize personalized service and local market expertise

Create content that establishes For Rent Finders as THE authority on South Florida rentals while providing genuine value to readers.`;

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
              content: 'You are an expert real estate and rental market writer with deep knowledge of South Florida markets, specifically Miami and Fort Lauderdale. Create detailed, SEO-optimized blog posts that provide genuine local value to readers looking for rental properties. Write with authority, include specific local insights, and always provide actionable advice. Use a professional but approachable tone.' 
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
        message: `Generated ${generatedPosts.length} South Florida focused blog posts successfully with DeepSeek`,
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
