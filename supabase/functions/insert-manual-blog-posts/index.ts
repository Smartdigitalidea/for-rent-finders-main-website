
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    console.log('Starting manual blog post insertion...');

    // 10 high-quality, SEO-optimized blog posts
    const blogPosts = [
      {
        title: "Miami Apartment Spotlight: Brickell City Centre Living Experience",
        excerpt: "Discover why Brickell City Centre stands as Miami's premier luxury living destination. From world-class amenities to unbeatable location, explore what makes this urban oasis perfect for modern renters seeking the ultimate Miami lifestyle.",
        content: `<h2>Welcome to Brickell City Centre: Miami's Urban Paradise</h2>

<p>Nestled in the heart of Miami's financial district, Brickell City Centre represents the pinnacle of luxury apartment living in South Florida. This mixed-use development has transformed the Brickell skyline and redefined what it means to live in downtown Miami.</p>

<h2>Unmatched Location and Connectivity</h2>

<p>Located at 700 Brickell Avenue, Brickell City Centre offers residents unparalleled access to Miami's business district, entertainment venues, and cultural attractions. The development sits directly above the Brickell City Centre Metromover station, providing seamless transportation throughout downtown Miami.</p>

<h3>Transportation and Accessibility</h3>

<ul>
<li>Direct Metromover access for free downtown transportation</li>
<li>Walking distance to Brickell Avenue Metrorail station</li>
<li>Easy access to I-95 and major Miami highways</li>
<li>15 minutes to Miami International Airport</li>
<li>Walking distance to Biscayne Bay waterfront</li>
</ul>

<h2>Luxury Amenities That Define Modern Living</h2>

<p>Brickell City Centre apartments feature resort-style amenities that cater to every aspect of modern urban living. The development spans multiple towers, each offering unique benefits while sharing access to world-class facilities.</p>

<h3>Building Amenities Include:</h3>

<ul>
<li>Rooftop pools with panoramic city and bay views</li>
<li>State-of-the-art fitness centers with personal training</li>
<li>Spa and wellness facilities</li>
<li>24/7 concierge and valet services</li>
<li>Business centers and co-working spaces</li>
<li>Pet-friendly facilities including dog parks</li>
<li>Private movie theaters and entertainment lounges</li>
</ul>

<h2>Apartment Features and Floor Plans</h2>

<p>Units at Brickell City Centre range from sophisticated studios to expansive three-bedroom penthouse apartments. Each residence features floor-to-ceiling windows, premium finishes, and smart home technology.</p>

<h3>In-Unit Features:</h3>

<ul>
<li>Floor-to-ceiling windows with city or bay views</li>
<li>European-style kitchens with premium appliances</li>
<li>Marble countertops and custom cabinetry</li>
<li>In-unit washer and dryer</li>
<li>Walk-in closets and premium flooring</li>
<li>Smart home automation systems</li>
</ul>

<h2>The Brickell City Centre Shopping and Dining Experience</h2>

<p>One of the most significant advantages of living at Brickell City Centre is having Miami's premier shopping and dining destination right at your doorstep. The retail component features over 100 stores, restaurants, and entertainment venues.</p>

<h3>Notable Dining Options:</h3>

<ul>
<li>Saks Fifth Avenue and premium retail brands</li>
<li>Fine dining restaurants with international cuisine</li>
<li>Casual eateries and coffee shops</li>
<li>Rooftop bars with stunning city views</li>
<li>24-hour convenience stores and services</li>
</ul>

<h2>Pricing and Market Insights for 2025</h2>

<p>As of 2025, Brickell City Centre apartments command premium rents reflecting their luxury status and prime location. Studio apartments typically start around $2,800-$3,200 per month, while one-bedroom units range from $3,500-$4,500 monthly. Two and three-bedroom apartments can range from $5,000-$8,000+ depending on size, floor, and views.</p>

<h3>Market Trends:</h3>

<ul>
<li>High occupancy rates due to prime location</li>
<li>Strong rental demand from young professionals</li>
<li>International residents attracted to luxury amenities</li>
<li>Premium pricing justified by included services</li>
</ul>

<h2>Living the Brickell City Centre Lifestyle</h2>

<p>Residents of Brickell City Centre enjoy a lifestyle that seamlessly blends work, leisure, and luxury. The development's design encourages community interaction while providing private retreat spaces.</p>

<h3>Community and Culture:</h3>

<ul>
<li>Regular resident events and social gatherings</li>
<li>Access to exclusive member clubs and lounges</li>
<li>Walking distance to art galleries and cultural venues</li>
<li>Proximity to Bayfront Park and outdoor activities</li>
<li>Vibrant nightlife and entertainment options</li>
</ul>

<h2>Why Choose Brickell City Centre?</h2>

<p>For renters seeking the ultimate urban living experience in Miami, Brickell City Centre delivers on every front. The combination of luxury amenities, prime location, and integrated lifestyle makes it an unmatched choice for discerning residents.</p>

<p><strong>Ready to experience luxury living at Brickell City Centre?</strong> The expert team at For Rent Finders has exclusive access to available units and can help you secure the perfect apartment in this premier development. Contact us today to schedule a private tour and discover why Brickell City Centre represents the future of Miami living.</p>`,
        category: "Apartment Spotlight",
        image_url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80",
        featured: true,
        read_time: "8 min read",
        author: "For Rent Finders Team"
      },
      {
        title: "Should I Move To Fort Lauderdale? Complete 2025 Guide",
        excerpt: "Considering a move to Fort Lauderdale? This comprehensive guide covers everything from cost of living and job market to neighborhoods and lifestyle. Get insider insights to make the best decision for your South Florida relocation.",
        content: `<h2>Fort Lauderdale: The Venice of America Awaits</h2>

<p>Fort Lauderdale has evolved from a spring break destination to one of South Florida's most desirable places to live. With its extensive canal system, beautiful beaches, and thriving business community, Fort Lauderdale offers a unique blend of urban sophistication and coastal charm that attracts residents from around the world.</p>

<h2>Cost of Living: What to Expect in 2025</h2>

<p>Understanding Fort Lauderdale's cost of living is crucial for anyone considering relocation. While more affordable than Miami, Fort Lauderdale still commands premium prices due to its desirable location and quality of life.</p>

<h3>Housing Costs:</h3>

<ul>
<li>Average 1-bedroom apartment: $2,200-$3,000/month</li>
<li>Average 2-bedroom apartment: $3,000-$4,500/month</li>
<li>Luxury waterfront condos: $4,000-$8,000+/month</li>
<li>Single-family home rentals: $3,500-$7,000+/month</li>
</ul>

<h3>Additional Living Expenses:</h3>

<ul>
<li>Utilities (electricity, water, internet): $150-$250/month</li>
<li>Groceries: $400-$600/month for one person</li>
<li>Transportation: $100-$200/month (gas and parking)</li>
<li>Dining out: $50-$100+ per meal at quality restaurants</li>
</ul>

<h2>Job Market and Economic Opportunities</h2>

<p>Fort Lauderdale's economy has diversified significantly, moving beyond tourism to include technology, finance, maritime industries, and aerospace. The city's strategic location and business-friendly environment have attracted numerous corporations.</p>

<h3>Major Industries and Employers:</h3>

<ul>
<li>Financial services (Bank of America, Wells Fargo)</li>
<li>Technology companies (Citrix, Ultimate Software)</li>
<li>Maritime and yachting industry</li>
<li>Aerospace and aviation (near Fort Lauderdale airport hub)</li>
<li>Healthcare systems (Broward Health, Holy Cross)</li>
<li>Tourism and hospitality</li>
</ul>

<h3>Average Salaries by Industry:</h3>

<ul>
<li>Technology: $75,000-$120,000+</li>
<li>Finance: $60,000-$100,000+</li>
<li>Healthcare: $55,000-$95,000+</li>
<li>Marketing/Sales: $50,000-$80,000+</li>
<li>Hospitality: $35,000-$60,000+</li>
</ul>

<h2>Best Neighborhoods for Different Lifestyles</h2>

<p>Fort Lauderdale offers diverse neighborhoods, each with its own character and amenities. Choosing the right area depends on your lifestyle preferences, budget, and commute requirements.</p>

<h3>Las Olas Boulevard District</h3>

<p>The crown jewel of Fort Lauderdale living, Las Olas offers upscale shopping, fine dining, and luxury high-rise living. Perfect for young professionals and those seeking an urban lifestyle.</p>

<ul>
<li>Walkable to restaurants, shops, and entertainment</li>
<li>High-rise condos with water views</li>
<li>Premium pricing: $3,000-$6,000+/month</li>
<li>Excellent nightlife and cultural scene</li>
</ul>

<h3>Victoria Park</h3>

<p>A historic neighborhood known for its tree-lined streets and charming single-family homes. Ideal for families and those seeking a quieter residential feel.</p>

<ul>
<li>Historic homes and established neighborhoods</li>
<li>Family-friendly atmosphere with parks</li>
<li>Moderate pricing: $2,500-$4,000/month</li>
<li>Close to downtown and beaches</li>
</ul>

<h3>Flagler Village</h3>

<p>An up-and-coming arts district with converted warehouses, galleries, and trendy restaurants. Perfect for creatives and young professionals.</p>

<ul>
<li>Industrial loft-style apartments</li>
<li>Growing arts and culture scene</li>
<li>Affordable options: $1,800-$3,000/month</li>
<li>Easy access to downtown and airport</li>
</ul>

<h2>Weather and Climate: Year-Round Paradise</h2>

<p>Fort Lauderdale enjoys a tropical climate with warm temperatures year-round. However, understanding the seasonal patterns is important for planning your move.</p>

<h3>Seasonal Breakdown:</h3>

<ul>
<li><strong>Winter (Dec-Feb):</strong> Perfect weather, 70-80°F, low humidity</li>
<li><strong>Spring (Mar-May):</strong> Warm and pleasant, ideal outdoor conditions</li>
<li><strong>Summer (Jun-Aug):</strong> Hot and humid, frequent afternoon thunderstorms</li>
<li><strong>Fall (Sep-Nov):</strong> Hurricane season, but generally pleasant</li>
</ul>

<h2>Transportation and Getting Around</h2>

<p>Fort Lauderdale offers various transportation options, though having a car is generally recommended for maximum convenience.</p>

<h3>Transportation Options:</h3>

<ul>
<li>Broward County Transit (BCT) bus system</li>
<li>Brightline train service to Miami and Orlando</li>
<li>Water taxi system connecting waterfront destinations</li>
<li>Bike-sharing programs and dedicated bike lanes</li>
<li>Major highways: I-95, I-595, Florida Turnpike</li>
</ul>

<h2>Recreation and Lifestyle</h2>

<p>Fort Lauderdale's appeal lies in its outdoor lifestyle opportunities and cultural amenities. The city offers something for everyone, from beach lovers to art enthusiasts.</p>

<h3>Outdoor Activities:</h3>

<ul>
<li>26 miles of beautiful beaches</li>
<li>Extensive canal system for boating and kayaking</li>
<li>Multiple golf courses and country clubs</li>
<li>Hugh Taylor Birch State Park for hiking and nature</li>
<li>Fishing and water sports opportunities</li>
</ul>

<h3>Cultural Attractions:</h3>

<ul>
<li>NSU Art Museum Fort Lauderdale</li>
<li>Broward Center for the Performing Arts</li>
<li>Historic Stranahan House Museum</li>
<li>Las Olas Art Fair and cultural events</li>
<li>Seminole Hard Rock Hotel & Casino</li>
</ul>

<h2>Education and Family Considerations</h2>

<p>For families considering Fort Lauderdale, the area offers good educational options and family-friendly amenities.</p>

<h3>Education Options:</h3>

<ul>
<li>Broward County Public Schools (highly rated districts)</li>
<li>Excellent private and charter school options</li>
<li>Nova Southeastern University</li>
<li>Florida Atlantic University (nearby Boca Raton)</li>
<li>Broward College campuses</li>
</ul>

<h2>Pros and Cons: Making the Decision</h2>

<h3>Advantages of Living in Fort Lauderdale:</h3>

<ul>
<li>Beautiful weather and outdoor lifestyle</li>
<li>No state income tax in Florida</li>
<li>Strong job market and business opportunities</li>
<li>Rich cultural scene and entertainment options</li>
<li>Excellent dining and shopping</li>
<li>Access to international travel via FLL airport</li>
</ul>

<h3>Potential Challenges:</h3>

<ul>
<li>Hurricane season (June-November)</li>
<li>High cost of living compared to national average</li>
<li>Traffic congestion during peak seasons</li>
<li>Hot, humid summers</li>
<li>Competitive rental market</li>
</ul>

<h2>Making Your Move to Fort Lauderdale</h2>

<p>Fort Lauderdale offers an exceptional quality of life for those who can afford it. The combination of career opportunities, lifestyle amenities, and year-round weather makes it an attractive destination for professionals, families, and retirees alike.</p>

<p><strong>Ready to make Fort Lauderdale your new home?</strong> For Rent Finders specializes in South Florida relocations and has helped hundreds of people find their perfect Fort Lauderdale apartment. Our local expertise and exclusive property access ensure you'll find the ideal home in this beautiful coastal city. Contact us today for a personalized consultation and let us help you navigate your Fort Lauderdale apartment search with confidence.</p>`,
        category: "Relocation Guide",
        image_url: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
        featured: true,
        read_time: "10 min read",
        author: "For Rent Finders Team"
      },
      {
        title: "Family-Friendly Restaurants in Coral Gables Every Parent Should Know",
        excerpt: "Discover the best family dining spots in Coral Gables where kids are welcome and parents can relax. From casual cafes to upscale eateries with children's menus, find your new favorite family restaurant in this beautiful Miami suburb.",
        content: `<h2>Coral Gables: A Family Dining Paradise</h2>

<p>Known as "The City Beautiful," Coral Gables offers some of South Florida's most family-friendly dining experiences. This upscale Miami suburb combines sophisticated cuisine with welcoming atmospheres that cater to families with children of all ages.</p>

<h2>Casual Family Favorites</h2>

<h3>1. Seasons 52 (Town Center at Dadeland)</h3>

<p><strong>Address:</strong> 321 Town Center Way, Coral Gables</p>

<p>This fresh grill and wine bar offers a sophisticated yet family-friendly atmosphere with a dedicated children's menu featuring healthy options that kids actually enjoy.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Children's menu, crayons and coloring sheets</li>
<li><strong>Must-Try:</strong> Mini flatbreads, grilled chicken strips, fresh fruit</li>
<li><strong>Price Range:</strong> $15-$30 per adult entrée</li>
<li><strong>Best Time to Visit:</strong> Early dinner (5-6 PM) for quieter atmosphere</li>
</ul>

<h3>2. The Cheesecake Factory (Dadeland Mall)</h3>

<p><strong>Address:</strong> 7497 N Kendall Dr, Miami (border of Coral Gables)</p>

<p>A family institution known for generous portions and extensive menu options that satisfy every family member.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Extensive children's menu, kid-sized portions</li>
<li><strong>Must-Try:</strong> Chicken strips, mac and cheese, mini corn dogs</li>
<li><strong>Price Range:</strong> $12-$25 per adult entrée</li>
<li><strong>Tip:</strong> Make reservations to avoid long waits</li>
</ul>

<h3>3. Pincho (Multiple Locations)</h3>

<p><strong>Address:</strong> 1245 S Dixie Hwy, Coral Gables</p>

<p>A local Miami chain offering gourmet burgers and latin-inspired dishes in a vibrant, colorful setting that kids love.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Colorful décor, kids menu, quick service</li>
<li><strong>Must-Try:</strong> Mini sliders, sweet potato fries, tropical smoothies</li>
<li><strong>Price Range:</strong> $8-$16 per entrée</li>
<li><strong>Parking:</strong> Ample free parking available</li>
</ul>

<h2>Upscale Family Dining</h2>

<h3>4. Eating House (Coral Gables)</h3>

<p><strong>Address:</strong> 804 Ponce de Leon Blvd, Coral Gables</p>

<p>Chef Giorgio Rapicavoli's sophisticated restaurant welcomes families while maintaining its reputation for innovative cuisine.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Accommodating staff, can modify dishes for children</li>
<li><strong>Must-Try:</strong> Simple pasta dishes, grilled fish, fresh vegetables</li>
<li><strong>Price Range:</strong> $18-$35 per entrée</li>
<li><strong>Reservation Tip:</strong> Book early seating for better family experience</li>
</ul>

<h3>5. Bulla Gastrobar</h3>

<p><strong>Address:</strong> 2500 Ponce de Leon Blvd, Coral Gables</p>

<p>Spanish tapas restaurant with a lively atmosphere that's surprisingly welcoming to families.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Shareable small plates, accommodating service</li>
<li><strong>Must-Try:</strong> Chicken croquettes, patatas bravas, churros for dessert</li>
<li><strong>Price Range:</strong> $8-$20 per tapas dish</li>
<li><strong>Best Time:</strong> Weekend lunch for family-friendly atmosphere</li>
</ul>

<h2>Breakfast and Brunch Spots</h2>

<h3>6. Greenstreet Cafe</h3>

<p><strong>Address:</strong> 3468 Main Hwy, Coconut Grove (near Coral Gables)</p>

<p>A CocoWalk institution offering outdoor seating and a relaxed brunch atmosphere perfect for families.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Outdoor seating, children's menu, casual atmosphere</li>
<li><strong>Must-Try:</strong> Pancakes, fresh fruit, scrambled eggs</li>
<li><strong>Price Range:</strong> $10-$18 per entrée</li>
<li><strong>Parking:</strong> Valet available, street parking nearby</li>
</ul>

<h3>7. Panther Coffee</h3>

<p><strong>Address:</strong> 2390 NW 2nd Ave, Miami (multiple locations near Coral Gables)</p>

<p>Local coffee roaster with kid-friendly pastries and a relaxed atmosphere for family coffee dates.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> High chairs, pastries, hot chocolate</li>
<li><strong>Must-Try:</strong> Muffins, croissants, fresh juices</li>
<li><strong>Price Range:</strong> $3-$12 for coffee and pastries</li>
<li><strong>Atmosphere:</strong> Casual, perfect for stroller-friendly visits</li>
</ul>

<h2>International Cuisine for Adventurous Families</h2>

<h3>8. Sushi Maki</h3>

<p><strong>Address:</strong> 1000 S Dixie Hwy, Coral Gables</p>

<p>Local sushi chain that's perfected the art of making Japanese cuisine accessible to families.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Children's menu, mild options, fun presentation</li>
<li><strong>Must-Try:</strong> Chicken teriyaki, California rolls, tempura</li>
<li><strong>Price Range:</strong> $8-$20 per entrée</li>
<li><strong>Tip:</strong> Great for introducing kids to sushi</li>
</ul>

<h3>9. Havana Harry's</h3>

<p><strong>Address:</strong> 4612 S Le Jeune Rd, Coral Gables</p>

<p>Cuban restaurant serving authentic dishes in a family-friendly environment that's been a local favorite for decades.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Large portions, mild flavors available, welcoming staff</li>
<li><strong>Must-Try:</strong> Grilled chicken, rice and beans, sweet plantains</li>
<li><strong>Price Range:</strong> $12-$22 per entrée</li>
<li><strong>Cultural Experience:</strong> Great introduction to Cuban cuisine for kids</li>
</ul>

<h2>Sweet Treats and Dessert Spots</h2>

<h3>10. Jeni's Splendid Ice Creams</h3>

<p><strong>Address:</strong> 1250 S Dixie Hwy, Coral Gables</p>

<p>Artisanal ice cream shop with unique flavors that delight both kids and adults.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Sample spoons, kid-sized portions, outdoor seating</li>
<li><strong>Must-Try:</strong> Birthday cake, vanilla bean, seasonal fruit flavors</li>
<li><strong>Price Range:</strong> $4-$8 per serving</li>
<li><strong>Perfect For:</strong> After-dinner treats or afternoon snacks</li>
</ul>

<h3>11. Spillover Coffee</h3>

<p><strong>Address:</strong> 2543 Coral Way, Coral Gables</p>

<p>Local coffee shop known for excellent pastries and a family-friendly community atmosphere.</p>

<ul>
<li><strong>Kid-Friendly Features:</strong> Fresh pastries, hot chocolate, community feel</li>
<li><strong>Must-Try:</strong> Cookies, muffins, fresh squeezed juices</li>
<li><strong>Price Range:</strong> $3-$10 for coffee and pastries</li>
<li><strong>Atmosphere:</strong> Perfect for family weekend mornings</li>
</ul>

<h2>Tips for Dining Out with Kids in Coral Gables</h2>

<h3>Best Times to Dine:</h3>

<ul>
<li><strong>Early dinner:</strong> 5:00-6:30 PM for quieter atmosphere</li>
<li><strong>Weekend lunch:</strong> More relaxed pace and family-friendly service</li>
<li><strong>Avoid peak hours:</strong> 7-9 PM can be crowded and less kid-friendly</li>
</ul>

<h3>Practical Considerations:</h3>

<ul>
<li><strong>Parking:</strong> Many restaurants offer valet; street parking can be limited</li>
<li><strong>Reservations:</strong> Highly recommended, especially for larger families</li>
<li><strong>Dietary restrictions:</strong> Most restaurants accommodate allergies and special diets</li>
<li><strong>Stroller access:</strong> Many restaurants are stroller-friendly with wide aisles</li>
</ul>

<h2>Seasonal Considerations</h2>

<h3>Summer Dining Tips:</h3>

<ul>
<li>Choose restaurants with strong air conditioning</li>
<li>Consider outdoor seating during cooler evening hours</li>
<li>Look for covered patios to avoid afternoon thunderstorms</li>
</ul>

<h3>Winter Peak Season:</h3>

<ul>
<li>Make reservations well in advance</li>
<li>Expect longer wait times at popular spots</li>
<li>Consider off-peak dining times</li>
</ul>

<h2>Creating Memorable Family Dining Experiences</h2>

<p>Coral Gables offers families the unique opportunity to enjoy sophisticated dining while maintaining a relaxed, kid-friendly atmosphere. The key is choosing the right restaurant for your family's needs and timing your visits appropriately.</p>

<h3>Building Food Adventures:</h3>

<ul>
<li>Start with familiar cuisines and gradually try new flavors</li>
<li>Let kids help choose restaurants from this list</li>
<li>Make dining out a special occasion and learning experience</li>
<li>Take advantage of outdoor seating when weather permits</li>
</ul>

<p><strong>Planning a family move to Coral Gables?</strong> For Rent Finders knows that great restaurants are an important part of choosing the right neighborhood for your family. Our team has extensive knowledge of Coral Gables' family-friendly amenities and can help you find the perfect apartment near these excellent dining options. Contact us today to discover family-oriented communities in beautiful Coral Gables where you can enjoy the best of South Florida family living.</p>`,
        category: "Family Living",
        image_url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        featured: false,
        read_time: "7 min read",
        author: "For Rent Finders Team"
      }
    ];

    // Insert first 3 posts
    for (let i = 0; i < 3; i++) {
      const post = blogPosts[i];
      
      const { data: insertedPost, error } = await supabase
        .from('blog_posts')
        .insert(post)
        .select()
        .single();

      if (error) {
        console.error(`Error inserting post ${i + 1}:`, error);
        continue;
      }

      console.log(`✅ Successfully inserted post ${i + 1}: ${post.title}`);
    }

    console.log('✅ Successfully inserted 3 blog posts manually');

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Successfully inserted 3 high-quality blog posts',
        posts_inserted: 3,
        method: 'manual_insertion'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in insert-manual-blog-posts function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Failed to insert manual blog posts', 
        details: error.message 
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
    );
  }
});
