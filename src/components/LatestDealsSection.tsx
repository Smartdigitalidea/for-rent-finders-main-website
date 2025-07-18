
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Star, Phone } from 'lucide-react';
import SurveyModal from './SurveyModal';
import BackgroundPatterns from './BackgroundPatterns';

const LatestDealsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deals = [
    {
      id: 1,
      title: "Luxury Brickell High-Rise",
      location: "Brickell, Miami",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
      price: "$2,800",
      originalPrice: "$3,200",
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.8,
      features: ["Pool", "Gym", "Concierge", "Bay Views"]
    },
    {
      id: 2,
      title: "Beachfront Paradise",
      location: "Las Olas, Fort Lauderdale",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
      price: "$2,200",
      originalPrice: "$2,600",
      beds: 1,
      baths: 1,
      sqft: 900,
      rating: 4.9,
      features: ["Beach Access", "Pool", "Parking", "Balcony"]
    },
    {
      id: 3,
      title: "Modern Downtown Loft",
      location: "Downtown, Fort Lauderdale",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      price: "$1,900",
      originalPrice: "$2,300",
      beds: 1,
      baths: 1,
      sqft: 800,
      rating: 4.7,
      features: ["Rooftop", "Gym", "Pet-Friendly", "Workspace"]
    }
  ];

  return (
    <>
      <section id="deals" className="py-20 relative overflow-hidden">
        {/* Enhanced Background with Multiple Patterns */}
        <BackgroundPatterns variant="bubbles" className="opacity-40" />
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-72 h-72 bg-gradient-to-br from-primary/15 to-orange-500/15 rounded-full blur-3xl floating"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-br from-orange-400/15 to-primary/15 rounded-full blur-3xl floating" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-40 right-40 w-64 h-64 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-full blur-2xl floating" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Gradient Overlay with Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-accent/5 to-background/90"></div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-32 left-1/4 w-3 h-3 bg-primary/30 rounded-full floating" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-60 right-1/3 w-2 h-2 bg-orange-500/40 rounded-full floating" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-primary/25 rounded-full floating" style={{ animationDelay: '2.5s' }}></div>
          <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-orange-400/35 rounded-full floating" style={{ animationDelay: '3.5s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Section Header */}
            <div className="text-center mb-16 fade-in-up">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/10 to-primary/10 text-orange-600 px-6 py-3 rounded-full text-sm font-medium mb-6 luxury-card">
                <Star className="w-4 h-4 text-orange-500 fill-current" />
                Exclusive Offers
                <Star className="w-4 h-4 text-orange-500 fill-current" />
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 glow-text">
                Don't Miss Out on These <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Exclusive Offers</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
                Hand-picked premium apartments with special pricing available for a limited time. 
                These exclusive deals won't last long!
              </p>
              
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full shadow-lg"></div>
            </div>

            {/* Enhanced Deals Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {deals.map((deal, index) => (
                <div 
                  key={deal.id}
                  className="relative luxury-card rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500 fade-in-up hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-orange-500/20 opacity-0 group-hover:opacity-100 rounded-3xl blur-xl transition-opacity duration-500"></div>
                  
                  {/* Deal Badge */}
                  <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Save ${parseInt(deal.originalPrice.replace('$', '').replace(',', '')) - parseInt(deal.price.replace('$', '').replace(',', ''))}
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{deal.rating}</span>
                  </div>

                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {deal.title}
                        </h3>
                        <div className="flex items-center text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{deal.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-primary">{deal.price}</span>
                      <span className="text-lg text-muted-foreground line-through">{deal.originalPrice}</span>
                      <span className="text-sm text-white bg-green-500 px-2 py-1 rounded-full font-semibold">
                        Limited Time
                      </span>
                    </div>

                    {/* Property Details */}
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="w-4 h-4" />
                        <span>{deal.beds} Bed</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{deal.baths} Bath</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Square className="w-4 h-4" />
                        <span>{deal.sqft} sqft</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {deal.features.slice(0, 3).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {deal.features.length > 3 && (
                        <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium">
                          +{deal.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2">
                      <Button 
                        className="flex-1 bg-gradient-to-r from-primary to-orange-500 hover:from-primary-glow hover:to-orange-glow text-white font-semibold"
                        onClick={() => setIsModalOpen(true)}
                      >
                        Get Details
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/20 text-primary hover:bg-primary/5"
                      >
                        <Phone className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="text-center fade-in-up">
              <div className="relative bg-gradient-to-br from-primary via-primary-glow to-orange-500 p-10 md:p-16 rounded-3xl overflow-hidden shadow-2xl">
                {/* Background Pattern Overlay */}
                <BackgroundPatterns variant="grid" className="opacity-20" />
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full floating"></div>
                <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full floating" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-12 w-8 h-8 bg-white/10 rounded-full floating" style={{ animationDelay: '2s' }}></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 glow-text">
                    Ready to Secure Your Dream Deal?
                  </h3>
                  <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                    These exclusive offers are available for a limited time. Don't miss out on 
                    significant savings on premium apartments!
                  </p>
                  <Button 
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-primary hover:bg-gray-50 font-bold px-10 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    View All Exclusive Deals
                  </Button>
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

export default LatestDealsSection;
