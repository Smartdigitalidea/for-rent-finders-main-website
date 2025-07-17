
import { useState, useEffect } from 'react';
import { MapPin, Star, ArrowRight, DollarSign, Home, Users, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NeighborhoodsSection = () => {
  // Fort Lauderdale rotating images
  const fortLauderdaleImages = [
    'https://images.unsplash.com/photo-1530686577637-0ccce382b327?q=80&w=1834&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1484199383121-dfa3c30608cd?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1598077990988-67debdcfa318?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1585433341185-9e60b28ed0a7?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  // Miami sliding images
  const miamiImages = [
    'https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1501509497947-782640bc1412?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1506966953602-c20cc11f75e3?q=80&w=1728&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  ];

  const [fortLauderdaleImageIndex, setFortLauderdaleImageIndex] = useState(0);
  const [miamiImageIndex, setMiamiImageIndex] = useState(0);

  // Rotate Fort Lauderdale images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setFortLauderdaleImageIndex((prev) => (prev + 1) % fortLauderdaleImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [fortLauderdaleImages.length]);

  // Slide Miami images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setMiamiImageIndex((prev) => (prev + 1) % miamiImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [miamiImages.length]);

  const neighborhoods = [
    {
      name: "Miami",
      subtitle: "The Magic City",
      description: "Experience world-class beaches, vibrant nightlife, and luxury high-rise living in America's most international city.",
      images: miamiImages,
      currentImageIndex: miamiImageIndex,
      isSliding: true,
      stats: {
        avgRent: "$2,800",
        properties: "1,200+",
        rating: "4.8"
      },
      highlights: [
        "South Beach luxury condos",
        "Brickell financial district",
        "Wynwood arts scene",
        "World-class dining"
      ]
    },
    {
      name: "Fort Lauderdale",
      subtitle: "Venice of America", 
      description: "Discover beautiful canals, yacht-friendly marinas, and a more relaxed pace while staying close to Miami's excitement.",
      images: fortLauderdaleImages,
      currentImageIndex: fortLauderdaleImageIndex,
      isSliding: false,
      stats: {
        avgRent: "$2,200",
        properties: "800+",
        rating: "4.7"
      },
      highlights: [
        "Las Olas Boulevard",
        "Luxury waterfront living",
        "Boating community",
        "Family-friendly beaches"
      ]
    }
  ];

  return (
    <section id="neighborhoods" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section header with modern design */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg mb-6">
              <MapPin className="w-5 h-5 text-[#3384B3] mr-2" />
              <span className="text-[#3384B3] font-semibold">Prime Locations</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
              Explore Prime <br />
              <span className="bg-gradient-to-r from-[#3384B3] to-[#2563EB] bg-clip-text text-transparent">
                Neighborhoods
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover the best areas to call home in South Florida, from Miami's cosmopolitan energy 
              to Fort Lauderdale's coastal charm.
            </p>
          </div>

          {/* Enhanced neighborhoods showcase */}
          <div className="space-y-16">
            {neighborhoods.map((neighborhood, index) => (
              <div key={neighborhood.name} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}>
                
                {/* Image Section */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="relative h-80 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                    {neighborhood.isSliding ? (
                      // Miami sliding images
                      <div className="relative w-full h-full">
                        {neighborhood.images.map((image, imgIndex) => (
                          <img
                            key={imgIndex}
                            src={image}
                            alt={`${neighborhood.name} ${imgIndex + 1}`}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out ${
                              imgIndex === neighborhood.currentImageIndex
                                ? 'translate-x-0'
                                : imgIndex < neighborhood.currentImageIndex
                                ? '-translate-x-full'
                                : 'translate-x-full'
                            }`}
                          />
                        ))}
                      </div>
                    ) : (
                      // Fort Lauderdale rotating images
                      <img
                        src={neighborhood.images[neighborhood.currentImageIndex]}
                        alt={neighborhood.name}
                        className="w-full h-full object-cover transition-opacity duration-500"
                      />
                    )}
                    
                    {/* Enhanced overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Floating stats cards */}
                    <div className="absolute top-6 left-6 right-6 flex justify-between">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-bold text-gray-800">{neighborhood.stats.rating}</span>
                        </div>
                      </div>
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg">
                        <div className="flex items-center space-x-2">
                          <DollarSign className="w-5 h-5 text-green-600" />
                          <span className="font-bold text-gray-800">{neighborhood.stats.avgRent}</span>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{neighborhood.name}</h3>
                            <p className="text-[#3384B3] font-semibold">{neighborhood.subtitle}</p>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600">
                            <Home className="w-5 h-5" />
                            <span className="font-semibold">{neighborhood.stats.properties}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                      {neighborhood.name}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                      {neighborhood.description}
                    </p>
                  </div>

                  {/* Enhanced highlights */}
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <h4 className="font-bold text-gray-800 mb-6 flex items-center text-lg">
                      <Users className="w-6 h-6 mr-3 text-[#3384B3]" />
                      Key Highlights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {neighborhood.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center space-x-3 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                          <div className="w-3 h-3 bg-gradient-to-r from-[#3384B3] to-[#2563EB] rounded-full"></div>
                          <span className="text-gray-700 font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced CTA */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="flex-1 bg-gradient-to-r from-[#3384B3] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3384B3] text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <span>Explore {neighborhood.name}</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-[#3384B3] text-[#3384B3] hover:bg-[#3384B3] hover:text-white py-4 rounded-2xl transition-all duration-300"
                      onClick={() => window.open('https://www.instagram.com/for_rent_finders/?locale=fr&hl=af', '_blank')}
                    >
                      <Instagram className="w-5 h-5 mr-2" />
                      View on Instagram
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced bottom CTA */}
          <div className="text-center mt-20">
            <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Can't decide? Let us help you choose!
              </h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our local experts know every neighborhood inside and out. We'll match you with the perfect area based on your lifestyle, budget, and preferences.
              </p>
              <Button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground px-12 py-6 text-xl font-semibold rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105">
                <MapPin className="w-6 h-6 mr-3" />
                Get Neighborhood Recommendations
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
