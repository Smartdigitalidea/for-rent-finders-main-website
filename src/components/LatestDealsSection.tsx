import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Star, Clock, Phone, Heart } from 'lucide-react';

interface Deal {
  id: number;
  title: string;
  location: string;
  originalPrice: number;
  discountedPrice: number;
  savings: number;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
  features: string[];
  expiresIn: string;
  rating: number;
  availability: string;
  featured: boolean;
}

const LatestDealsSection = () => {
  const [likedDeals, setLikedDeals] = useState<Set<number>>(new Set());

  const deals: Deal[] = [
    {
      id: 1,
      title: "Luxury Waterfront High-Rise",
      location: "Brickell, Miami",
      originalPrice: 3200,
      discountedPrice: 2800,
      savings: 400,
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
      features: ["Ocean View", "Pool", "Gym", "Concierge"],
      expiresIn: "3 days",
      rating: 4.9,
      availability: "Available Now",
      featured: true
    },
    {
      id: 2,
      title: "Modern Studio in Arts District",
      location: "Wynwood, Miami",
      originalPrice: 2100,
      discountedPrice: 1850,
      savings: 250,
      beds: 0,
      baths: 1,
      sqft: 600,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
      features: ["Rooftop Deck", "Co-working", "Pet Friendly"],
      expiresIn: "5 days",
      rating: 4.7,
      availability: "Move-in Ready",
      featured: false
    },
    {
      id: 3,
      title: "Beachside Paradise Condo",
      location: "Las Olas, Fort Lauderdale",
      originalPrice: 2800,
      discountedPrice: 2400,
      savings: 400,
      beds: 1,
      baths: 1,
      sqft: 850,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      features: ["Beach Access", "Resort Pool", "Spa"],
      expiresIn: "7 days",
      rating: 4.8,
      availability: "February 1st",
      featured: true
    },
    {
      id: 4,
      title: "Downtown Penthouse Suite",
      location: "Downtown Fort Lauderdale",
      originalPrice: 4500,
      discountedPrice: 3900,
      savings: 600,
      beds: 3,
      baths: 2,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
      features: ["City Views", "Private Balcony", "Wine Cellar"],
      expiresIn: "2 days",
      rating: 4.9,
      availability: "Available Now",
      featured: false
    }
  ];

  const toggleLike = (dealId: number) => {
    setLikedDeals(prev => {
      const newSet = new Set(prev);
      if (newSet.has(dealId)) {
        newSet.delete(dealId);
      } else {
        newSet.add(dealId);
      }
      return newSet;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/30 to-gold/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4" />
            Limited Time Offers
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Latest <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Exclusive Deals</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            View our latest deals on For Rent Finders apartments. These exclusive offers won't last long - secure your dream apartment today with special pricing and incentives.
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {deals.map((deal, index) => (
            <div
              key={deal.id}
              className={`luxury-card rounded-3xl overflow-hidden group relative transition-all duration-700 hover:scale-105 hover:luxury-glow ${
                deal.featured ? 'ring-2 ring-gold/50' : ''
              } ${index % 2 === 0 ? 'fade-in-left' : 'fade-in-right'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Featured Badge */}
              {deal.featured && (
                <div className="absolute top-4 left-4 z-20">
                  <Badge className="luxury-button bg-gradient-to-r from-gold to-gold/80 text-gold-foreground border-0 font-bold">
                    ⭐ Featured Deal
                  </Badge>
                </div>
              )}

              {/* Heart Button */}
              <button
                onClick={() => toggleLike(deal.id)}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 transition-all duration-300 hover:scale-110"
              >
                <Heart
                  className={`w-5 h-5 transition-colors ${
                    likedDeals.has(deal.id) ? 'text-red-500 fill-current' : 'text-muted-foreground'
                  }`}
                />
              </button>

              {/* Savings Badge */}
              <div className="absolute top-4 right-16 z-20">
                <Badge className="bg-gradient-to-r from-success to-success/80 text-success-foreground font-bold border-0">
                  Save ${deal.savings}/mo
                </Badge>
              </div>

              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Expires Overlay */}
                <div className="absolute bottom-4 left-4">
                  <Badge variant="destructive" className="bg-destructive/90 backdrop-blur-sm">
                    <Clock className="w-3 h-3 mr-1" />
                    Expires in {deal.expiresIn}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {deal.title}
                    </h3>
                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{deal.location}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="font-medium">{deal.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {deal.availability}
                    </Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-3 mb-6">
                  <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
                    ${deal.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${deal.originalPrice.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">/month</span>
                </div>

                {/* Specs */}
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Bed className="w-4 h-4" />
                    <span>{deal.beds || 'Studio'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Bath className="w-4 h-4" />
                    <span>{deal.baths}</span>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Square className="w-4 h-4" />
                    <span>{deal.sqft.toLocaleString()} sq ft</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {deal.features.map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    onClick={() => window.open(`tel:855-367-7368`, '_self')}
                    className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground font-semibold shadow-elegant hover:shadow-luxury transition-all duration-500"
                  >
                    View Details
                  </Button>
                  <Button 
                    onClick={() => window.open(`tel:855-367-7368`, '_self')}
                    variant="outline" 
                    size="icon" 
                    className="bg-card hover:bg-primary/10 border-border/50 hover:border-primary/30 transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <div className="luxury-card rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Don't Miss Out on These 
              <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent"> Exclusive Offers</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              These deals are available for a limited time only. Contact us now to secure your preferred apartment with special pricing and move-in incentives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => window.open(`tel:855-367-7368`, '_self')}
                size="lg" 
                className="bg-gradient-to-r from-orange to-orange-glow hover:from-orange-glow hover:to-orange text-orange-foreground px-8 py-4 text-lg font-semibold shadow-orange hover:shadow-luxury transition-all duration-500 transform hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 855-FOR-RENT
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-card hover:bg-primary/10 border-border/50 hover:border-primary/30 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                View All Deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestDealsSection;