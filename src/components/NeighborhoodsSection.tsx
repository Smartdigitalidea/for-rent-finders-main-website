
import { useState, useEffect } from 'react';
import { MapPin, Star, ArrowRight, DollarSign, Home, Users } from 'lucide-react';
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
    <section id="neighborhoods" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Explore Prime <span className="text-[#3384B3]">Neighborhoods</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the best areas to call home in South Florida, from Miami's cosmopolitan energy 
              to Fort Lauderdale's coastal charm.
            </p>
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Neighborhoods grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {neighborhoods.map((neighborhood, index) => (
              <div key={neighborhood.name} className="group">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
                  {/* Image container */}
                  <div className="relative h-64 md:h-80 overflow-hidden">
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
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    
                    {/* Location badge */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-[#3384B3]" />
                        <span className="text-sm font-semibold text-gray-800">{neighborhood.name}</span>
                      </div>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-[#3384B3] text-white px-3 py-2 rounded-full flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-semibold">{neighborhood.stats.rating}</span>
                      </div>
                    </div>

                    {/* Stats overlay */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex justify-between items-center">
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-4 h-4 text-green-600" />
                            <span className="text-sm font-bold text-gray-800">{neighborhood.stats.avgRent}/mo</span>
                          </div>
                        </div>
                        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full">
                          <div className="flex items-center space-x-2">
                            <Home className="w-4 h-4 text-[#3384B3]" />
                            <span className="text-sm font-bold text-gray-800">{neighborhood.stats.properties}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{neighborhood.name}</h3>
                      <p className="text-[#3384B3] font-semibold mb-4">{neighborhood.subtitle}</p>
                      <p className="text-gray-600 leading-relaxed">{neighborhood.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2 text-[#3384B3]" />
                        Key Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {neighborhood.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#3384B3] rounded-full"></div>
                            <span className="text-sm text-gray-600">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button className="w-full bg-gradient-to-r from-[#3384B3] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3384B3] text-white font-semibold py-3 rounded-2xl transition-all duration-300 group-hover:shadow-lg">
                      <span>Explore {neighborhood.name}</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't decide? Let us help you choose!
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Our local experts know every neighborhood inside and out. We'll match you with the perfect area based on your lifestyle, budget, and preferences.
            </p>
            <Button className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary text-primary-foreground px-8 py-4 text-lg font-semibold rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105">
              <MapPin className="w-5 h-5 mr-2" />
              Get Neighborhood Recommendations
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
