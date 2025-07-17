
-- Delete existing blog posts
DELETE FROM public.blog_posts;

-- Insert 10 new blog posts with provided images
INSERT INTO public.blog_posts (title, excerpt, content, category, image_url, featured, read_time, author, status) VALUES 
(
  'Miami Beach Living: Your Ultimate Guide to Waterfront Apartments',
  'Discover the best waterfront apartments in Miami Beach with stunning ocean views, luxury amenities, and vibrant nightlife just steps away.',
  '<h2>Why Choose Miami Beach for Your Next Home?</h2><p>Miami Beach offers an unparalleled lifestyle combining luxury living with tropical paradise. From South Beach''s Art Deco charm to Mid-Beach''s family-friendly atmosphere, there''s something for everyone.</p><h3>Top Neighborhoods in Miami Beach</h3><ul><li><strong>South Beach:</strong> Iconic nightlife and dining scene</li><li><strong>Mid-Beach:</strong> Perfect for families with top-rated schools</li><li><strong>North Beach:</strong> Quieter, more affordable option</li></ul><h3>What to Expect</h3><p>Living in Miami Beach means waking up to ocean views, having world-class restaurants at your doorstep, and enjoying year-round sunshine. The average rent ranges from $2,500 to $6,000 depending on the area and amenities.</p><p>Ready to find your perfect Miami Beach apartment? Contact For Rent Finders today for personalized assistance in finding your dream waterfront home.</p>',
  'Neighborhoods',
  'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  true,
  '6 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Budget-Friendly Apartments in Fort Lauderdale: Best Value for Money',
  'Find affordable yet comfortable apartments in Fort Lauderdale without compromising on quality. Our guide covers the best budget-friendly neighborhoods.',
  '<h2>Affordable Living in Fort Lauderdale</h2><p>Fort Lauderdale offers excellent value for renters seeking quality apartments without breaking the bank. With careful research, you can find great deals in desirable neighborhoods.</p><h3>Best Budget-Friendly Areas</h3><ul><li><strong>Flagler Village:</strong> Up-and-coming arts district</li><li><strong>Victoria Park:</strong> Historic charm with reasonable prices</li><li><strong>Plantation:</strong> Suburban feel with great amenities</li></ul><h3>Money-Saving Tips</h3><p>Consider slightly older buildings that still offer modern amenities, look for apartments a bit further from the beach, and don''t overlook smaller complexes that often have lower overhead costs.</p><p>Our team at For Rent Finders specializes in finding hidden gems that offer maximum value. Let us help you discover your perfect affordable apartment in Fort Lauderdale.</p>',
  'Budget Living',
  'https://images.unsplash.com/photo-1589083130544-0d6a2926e519?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '5 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Luxury High-Rise Living in Downtown Miami: Premium Amenities Guide',
  'Explore the finest luxury high-rise apartments in downtown Miami featuring world-class amenities, concierge services, and breathtaking city views.',
  '<h2>The Ultimate in Urban Luxury</h2><p>Downtown Miami''s luxury high-rises redefine modern living with unprecedented amenities and services. From infinity pools to private wine cellars, these buildings offer resort-style living.</p><h3>Premium Building Features</h3><ul><li><strong>Rooftop pools and spas:</strong> Unwind with panoramic city views</li><li><strong>State-of-the-art fitness centers:</strong> Professional-grade equipment</li><li><strong>Concierge services:</strong> 24/7 assistance for all your needs</li></ul><h3>Investment Potential</h3><p>Luxury downtown apartments not only provide exceptional living experiences but also strong investment potential. The area continues to grow with new developments and infrastructure improvements.</p><p>Ready to experience luxury living? Contact For Rent Finders to schedule private viewings of Miami''s most exclusive properties.</p>',
  'Luxury Living',
  'https://images.unsplash.com/photo-1543968332-f99478b1ebdc?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  true,
  '7 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Pet-Friendly Apartments in South Florida: Complete Guide for Pet Owners',
  'Discover the best pet-friendly apartments in Miami and Fort Lauderdale with dog parks, pet services, and welcoming communities for you and your furry friends.',
  '<h2>Finding the Perfect Home for You and Your Pet</h2><p>South Florida offers numerous pet-friendly communities that welcome both you and your furry companions. From dog parks to pet grooming services, these apartments cater to pet owners'' needs.</p><h3>Top Pet Amenities to Look For</h3><ul><li><strong>On-site dog parks:</strong> Safe spaces for exercise and socialization</li><li><strong>Pet washing stations:</strong> Convenient grooming facilities</li><li><strong>Pet-sitting services:</strong> Peace of mind when traveling</li></ul><h3>Pet Policies and Fees</h3><p>Most pet-friendly apartments charge pet deposits ranging from $200-$500 and monthly pet rent of $25-$50. Some breed restrictions may apply, so always check policies before applying.</p><p>Let For Rent Finders help you find pet-friendly apartments that welcome both you and your beloved companions with open arms.</p>',
  'Pet Living',
  'https://images.unsplash.com/photo-1605107140735-3640719d3404?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '5 min read',
  'For Rent Finders Team',
  'published'
),
(
  'First-Time Renter Guide: Essential Tips for South Florida Apartment Hunting',
  'Navigate the South Florida rental market like a pro with our comprehensive guide covering everything from credit scores to lease negotiations.',
  '<h2>Your First Apartment: What You Need to Know</h2><p>Renting your first apartment in South Florida can be overwhelming, but with the right preparation and knowledge, you can find the perfect place to call home.</p><h3>Essential Preparation Steps</h3><ul><li><strong>Credit Score:</strong> Aim for 650+ for best options</li><li><strong>Income Requirements:</strong> Most landlords require 3x monthly rent</li><li><strong>Documentation:</strong> Gather pay stubs, bank statements, and references</li></ul><h3>Red Flags to Avoid</h3><p>Be wary of apartments that seem too good to be true, landlords who ask for payment before viewing, or properties with multiple maintenance issues during tours.</p><p>Our experienced team at For Rent Finders guides first-time renters through every step of the process, ensuring you make informed decisions and avoid common pitfalls.</p>',
  'Beginner Tips',
  'https://images.unsplash.com/photo-1580729739238-17abfd5e940f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '8 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Wynwood vs Brickell: Choosing the Right Miami Neighborhood for Your Lifestyle',
  'Compare two of Miami''s hottest neighborhoods - the artistic Wynwood and the sophisticated Brickell - to find your perfect match.',
  '<h2>Two Distinct Miami Experiences</h2><p>Wynwood and Brickell represent two very different sides of Miami living. Whether you''re drawn to street art and craft breweries or prefer luxury towers and financial district convenience, we''ll help you choose.</p><h3>Wynwood: The Creative Hub</h3><ul><li><strong>Atmosphere:</strong> Artistic, young, and vibrant</li><li><strong>Dining:</strong> Trendy cafes and craft breweries</li><li><strong>Rent Range:</strong> $1,800 - $3,500/month</li></ul><h3>Brickell: The Urban Sophisticate</h3><ul><li><strong>Atmosphere:</strong> Professional, upscale, and cosmopolitan</li><li><strong>Dining:</strong> Fine dining and rooftop bars</li><li><strong>Rent Range:</strong> $2,500 - $5,000/month</li></ul><p>Contact For Rent Finders to explore both neighborhoods and discover which one aligns with your lifestyle and budget preferences.</p>',
  'Neighborhoods',
  'https://images.unsplash.com/photo-1740479948571-3216df03c364?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  true,
  '6 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Studio vs One-Bedroom: Maximizing Space and Value in South Florida',
  'Decide between a studio and one-bedroom apartment with our detailed comparison of costs, space efficiency, and lifestyle considerations.',
  '<h2>Making the Right Space Decision</h2><p>Choosing between a studio and one-bedroom apartment involves balancing budget, lifestyle needs, and space preferences. Both options have unique advantages in the South Florida market.</p><h3>Studio Apartments: Compact Efficiency</h3><ul><li><strong>Average Cost:</strong> $1,400 - $2,500/month</li><li><strong>Best For:</strong> Young professionals, minimalists</li><li><strong>Pros:</strong> Lower rent, easier to clean, prime locations</li></ul><h3>One-Bedroom: Room to Breathe</h3><ul><li><strong>Average Cost:</strong> $1,800 - $3,500/month</li><li><strong>Best For:</strong> Remote workers, couples</li><li><strong>Pros:</strong> Separate bedroom, more storage, better resale</li></ul><p>Our team at For Rent Finders can show you examples of both layouts to help you make the best decision for your needs and budget.</p>',
  'Apartment Types',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '5 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Credit Score Requirements for South Florida Rentals: What You Need to Know',
  'Understand credit score requirements for different types of apartments and learn how to improve your chances of approval in competitive markets.',
  '<h2>Credit Scores and Rental Success</h2><p>Your credit score plays a crucial role in securing your ideal South Florida apartment. Understanding requirements and improvement strategies can significantly impact your rental journey.</p><h3>Credit Score Ranges and Options</h3><ul><li><strong>Excellent (750+):</strong> Access to all properties, often waived deposits</li><li><strong>Good (650-749):</strong> Most apartments available, standard deposits</li><li><strong>Fair (550-649):</strong> Limited options, higher deposits required</li></ul><h3>Improving Your Rental Application</h3><p>If your credit score needs work, consider offering a larger security deposit, providing a co-signer, or showing additional income documentation to strengthen your application.</p><p>For Rent Finders works with landlords who consider various factors beyond credit scores, helping you find opportunities that match your situation.</p>',
  'Credit & Approval',
  'https://images.unsplash.com/photo-1606851451080-87bd56382a05?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '7 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Moving to Miami: Essential Neighborhood Guide for Newcomers',
  'Everything you need to know about Miami''s diverse neighborhoods, from transportation and nightlife to schools and shopping.',
  '<h2>Welcome to the Magic City</h2><p>Miami''s neighborhoods each offer unique personalities and amenities. Whether you''re relocating for work or lifestyle, understanding each area helps you make the right choice.</p><h3>Popular Neighborhoods Overview</h3><ul><li><strong>Coconut Grove:</strong> Bohemian charm with lush greenery</li><li><strong>Little Havana:</strong> Rich Cuban culture and authentic cuisine</li><li><strong>Design District:</strong> High-end shopping and contemporary art</li></ul><h3>Transportation and Commuting</h3><p>Miami''s public transportation includes Metrorail, Metrobus, and the new Brightline service. Many neighborhoods are also bike-friendly with dedicated lanes and Citi Bike sharing programs.</p><p>Let For Rent Finders introduce you to Miami''s diverse neighborhoods and help you find the perfect area that matches your lifestyle and commute needs.</p>',
  'City Comparison',
  'https://images.unsplash.com/photo-1695852296785-7f239105de8f?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  false,
  '8 min read',
  'For Rent Finders Team',
  'published'
),
(
  'Luxury Amenities Worth the Extra Cost: ROI on High-End Apartment Features',
  'Evaluate which luxury amenities provide real value and enhance your daily life versus those that are merely impressive but impractical.',
  '<h2>Smart Luxury: Investing in Amenities That Matter</h2><p>Not all luxury amenities are created equal. Some genuinely enhance your quality of life and provide long-term value, while others are impressive but rarely used.</p><h3>High-Value Amenities</h3><ul><li><strong>Fitness Centers:</strong> Save $100+ monthly on gym memberships</li><li><strong>Concierge Services:</strong> Time-saving conveniences for busy professionals</li><li><strong>Rooftop Spaces:</strong> Entertainment value and guest impressions</li></ul><h3>Amenities to Question</h3><p>Beach volleyball courts, wine cellars, and movie theaters sound amazing but consider how often you''ll actually use them versus the monthly premium you''ll pay.</p><p>Our For Rent Finders team helps you evaluate amenity packages to ensure you''re paying for features that align with your actual lifestyle and usage patterns.</p>',
  'Luxury Living',
  'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  true,
  '6 min read',
  'For Rent Finders Team',
  'published'
);
