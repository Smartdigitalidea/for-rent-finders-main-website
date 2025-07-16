import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverButton } from '@/components/ui/hover-button';
import { MapPin, Building, Waves, TreePine, Car, DollarSign, Users, Coffee, ShoppingBag, Star } from 'lucide-react';

const Neighborhoods = () => {
  const neighborhoods = [
    {
      city: "Miami",
      areas: [
        {
          name: "Brickell",
          description: "Miami's financial district with luxury high-rises and stunning bay views.",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          priceRange: "$2,500 - $5,000",
          highlights: ["Financial District", "Luxury Towers", "Bay Views", "Urban Lifestyle"],
          rating: 4.8,
          commute: "5 min to Downtown",
          icon: Building
        },
        {
          name: "South Beach",
          description: "Iconic beachfront living with Art Deco architecture and vibrant nightlife.",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
          priceRange: "$3,000 - $8,000",
          highlights: ["Ocean Front", "Art Deco", "Nightlife", "Celebrity Spots"],
          rating: 4.9,
          commute: "15 min to Downtown",
          icon: Waves
        },
        {
          name: "Wynwood",
          description: "Trendy arts district with colorful murals, galleries, and hip restaurants.",
          image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop",
          priceRange: "$1,800 - $3,500",
          highlights: ["Street Art", "Galleries", "Trendy Dining", "Young Crowd"],
          rating: 4.7,
          commute: "10 min to Downtown",
          icon: TreePine
        },
        {
          name: "Coral Gables",
          description: "Mediterranean-style architecture with family-friendly atmosphere and excellent schools.",
          image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
          priceRange: "$2,200 - $4,500",
          highlights: ["Family-Friendly", "Great Schools", "Mediterranean Style", "Safe"],
          rating: 4.6,
          commute: "20 min to Downtown",
          icon: Car
        }
      ]
    },
    {
      city: "Fort Lauderdale",
      areas: [
        {
          name: "Las Olas",
          description: "Upscale beachfront area with luxury shopping, dining, and entertainment.",
          image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
          priceRange: "$2,000 - $4,500",
          highlights: ["Beach Access", "Luxury Shopping", "Fine Dining", "Boating"],
          rating: 4.8,
          commute: "10 min to Downtown",
          icon: Waves
        },
        {
          name: "Downtown",
          description: "Urban core with modern condos, business district, and cultural attractions.",
          image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
          priceRange: "$1,600 - $3,200",
          highlights: ["Urban Living", "Business District", "Cultural Hub", "River Views"],
          rating: 4.5,
          commute: "City Center",
          icon: Building
        },
        {
          name: "Victoria Park",
          description: "Historic neighborhood with tree-lined streets and charming vintage homes.",
          image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&h=600&fit=crop",
          priceRange: "$1,400 - $2,800",
          highlights: ["Historic Charm", "Tree-Lined", "Walkable", "Community Feel"],
          rating: 4.6,
          commute: "8 min to Downtown",
          icon: TreePine
        },
        {
          name: "Flagler Village",
          description: "Up-and-coming arts district with modern amenities and creative spaces.",
          image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
          priceRange: "$1,500 - $2,900",
          highlights: ["Arts District", "Modern Amenities", "Creative Spaces", "Growing Area"],
          rating: 4.4,
          commute: "5 min to Downtown",
          icon: Car
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/30 to-primary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Explore Neighborhoods
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Discover <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">South Florida</span> Neighborhoods
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              From beachfront luxury to urban excitement, explore the diverse neighborhoods of Miami and Fort Lauderdale to find your perfect home.
            </p>
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {neighborhoods.map((cityData, cityIndex) => (
              <div key={cityData.city} className="mb-20 last:mb-0">
                {/* City Header */}
                <div className="text-center mb-16 fade-in-up">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                      {cityData.city}
                    </span> Neighborhoods
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Areas Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  {cityData.areas.map((area, index) => (
                    <div 
                      key={area.name}
                      className="luxury-card rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Image */}
                      <div className="aspect-[4/3] overflow-hidden relative">
                        <img
                          src={area.image}
                          alt={area.name}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                        
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center gap-2 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-full">
                            <area.icon className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-medium">{area.name}</span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center gap-1 bg-card/90 backdrop-blur-sm px-3 py-2 rounded-full">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{area.rating}</span>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="absolute bottom-4 left-4">
                          <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 rounded-full">
                            <div className="flex items-center gap-2">
                              <DollarSign className="w-4 h-4" />
                              <span className="font-semibold">{area.priceRange}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold mb-2">{area.name}</h3>
                            <div className="flex items-center text-muted-foreground mb-3">
                              <MapPin className="w-4 h-4 mr-1" />
                              <span>{area.commute}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {area.description}
                        </p>

                        {/* Highlights */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {area.highlights.map((highlight, idx) => (
                            <span 
                              key={idx} 
                              className="bg-orange-500/10 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <HoverButton className="flex-1 bg-gradient-to-r from-primary to-orange-500 text-white font-semibold">
                            View Listings
                          </HoverButton>
                          
                          <HoverButton className="bg-white/80 text-primary border border-primary/20 px-6">
                            <MapPin className="w-4 h-4" />
                          </HoverButton>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-orange-500/5 to-background relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/30 to-primary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto fade-in-up">
            <div className="luxury-card p-12 rounded-3xl text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <Users className="w-10 h-10 text-orange-500" />
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Need Help Choosing a <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Neighborhood?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                Our local experts know every neighborhood intimately. We'll help you understand commute times, school districts, amenities, and the unique character of each area to find your perfect match.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-background/50 p-6 rounded-2xl">
                  <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Lifestyle Match</h4>
                  <p className="text-sm text-muted-foreground">Find neighborhoods that match your lifestyle preferences</p>
                </div>
                
                <div className="bg-background/50 p-6 rounded-2xl">
                  <Car className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Commute Analysis</h4>
                  <p className="text-sm text-muted-foreground">Optimize your daily commute and transportation options</p>
                </div>
                
                <div className="bg-background/50 p-6 rounded-2xl">
                  <ShoppingBag className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Local Insights</h4>
                  <p className="text-sm text-muted-foreground">Discover hidden gems and local amenities</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverButton className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-8 py-4 text-lg">
                  Schedule Consultation
                </HoverButton>
                
                <HoverButton className="bg-white/80 text-primary border border-primary/20 font-semibold px-8 py-4 text-lg">
                  Browse All Areas
                </HoverButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Neighborhoods;