
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import SurveyModal from './SurveyModal';
import BackgroundPatterns from './BackgroundPatterns';

const NeighborhoodsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const neighborhoods = [
    {
      name: "Brickell",
      city: "Miami",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Miami's financial district with luxury high-rises",
      price: "$2,500+"
    },
    {
      name: "Las Olas",
      city: "Fort Lauderdale", 
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
      description: "Beachfront luxury with world-class dining",
      price: "$2,000+"
    },
    {
      name: "South Beach",
      city: "Miami",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      description: "Iconic Art Deco and vibrant nightlife",
      price: "$3,000+"
    }
  ];

  return (
    <>
      <section id="neighborhoods" className="py-20 relative overflow-hidden">
        {/* Enhanced Background Patterns */}
        <BackgroundPatterns variant="waves" className="opacity-30" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/15 to-accent/15 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-accent/5 to-background/95"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Popular Neighborhoods
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 glow-text">
                Explore <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Top Areas</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover the most sought-after neighborhoods in Miami and Fort Lauderdale, 
                each offering unique lifestyle and amenities.
              </p>
              
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mt-8 shadow-lg"></div>
            </div>

            {/* Neighborhoods grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {neighborhoods.map((neighborhood, index) => (
                <div 
                  key={neighborhood.name}
                  className="luxury-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={neighborhood.image}
                      alt={neighborhood.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{neighborhood.name}</h3>
                      <p className="text-sm opacity-90">{neighborhood.city}</p>
                    </div>
                    
                    <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {neighborhood.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {neighborhood.description}
                    </p>
                    
                    <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-glow hover:to-orange-glow text-white font-semibold">
                      View Listings
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Section */}
            <div className="text-center fade-in-up">
              <div className="relative bg-gradient-to-br from-primary/10 via-orange-500/5 to-background luxury-card p-8 md:p-12 rounded-3xl overflow-hidden">
                {/* Background Pattern Overlay */}
                <BackgroundPatterns variant="dots" className="opacity-20" />
                
                {/* Glow Effects */}
                <div className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-xl floating"></div>
                <div className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-full blur-xl floating" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-2 mb-6">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                    <span className="text-orange-600 font-semibold">Can't Decide?</span>
                    <Sparkles className="w-6 h-6 text-orange-500" />
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 glow-text">
                    Let Us Help You <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Choose!</span>
                  </h3>
                  
                  <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                    Our local experts know every neighborhood inside and out. We'll match you with 
                    the perfect area based on your lifestyle, budget, and preferences.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <Button 
                      size="lg"
                      onClick={() => setIsModalOpen(true)}
                      className="bg-gradient-to-r from-primary to-orange-500 hover:from-primary-glow hover:to-orange-glow text-white font-bold px-8 py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1 sm:flex-none"
                    >
                      Get Matched
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-primary/20 text-primary hover:bg-primary/5 font-bold px-8 py-4 text-lg rounded-2xl flex-1 sm:flex-none"
                    >
                      Browse All Areas
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city="" />
    </>
  );
};

export default NeighborhoodsSection;
