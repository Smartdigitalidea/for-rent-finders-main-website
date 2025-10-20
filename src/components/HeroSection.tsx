
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import SurveyModal from './SurveyModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=2000&q=80",
      alt: "Modern apartment living room with ocean view"
    },
    {
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=2000&q=80",
      alt: "Luxury apartment kitchen with modern appliances"
    },
    {
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=2000&q=80",
      alt: "Elegant apartment bedroom with city view"
    },
    {
      url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80",
      alt: "Spacious apartment balcony overlooking the city"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Image Slider Background */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img 
            key={index}
            src={image.url} 
            alt={image.alt} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Gradient overlay for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
      </div>

      {/* Background Content Element */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="text-center opacity-10">
          <h2 className="text-8xl md:text-9xl font-bold text-white/20 mb-4">
            Free Apartment Search
          </h2>
          <p className="text-4xl md:text-5xl text-white/20 font-medium">
            Get matched with your perfect apartment in 24 hours
          </p>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-[#F68036] w-8' : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10 px-4 py-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8 fade-in-up">
            <MapPin className="w-4 h-4 text-[#F68036]" />
            <span className="font-medium text-sm">Miami, Fort Lauderdale & The Palm Beaches</span>
          </div>

          {/* Main Content - Centered */}
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight fade-in-up">
              MIAMI, FORT LAUDERDALE &<br />THE PALM BEACHES'
              <br />
              <span className="text-[#F68036] drop-shadow-lg">#1 APARTMENT</span>
              <br />
              LOCATOR
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed fade-in-up" style={{ animationDelay: '0.1s' }}>
              Find your dream apartment today for <span className="text-[#F68036] font-bold">FREE!</span>
            </p>



            {/* Call-to-Action Button */}
            <div className="flex justify-center mb-8 fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                onClick={() => handleCitySelect('Miami')} 
                className="bg-[#F68036] hover:bg-[#F68036]/90 text-white px-10 py-4 text-lg font-bold rounded-lg shadow-2xl hover:shadow-[#F68036]/25 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto group"
              >
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center space-x-6 text-white/80 text-sm fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center space-x-1">
                <span className="text-[#F68036]">★★★★★</span>
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#F68036]">🏠</span>
                <span>275+ Properties</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SurveyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        city={selectedCity} 
      />
    </section>
  );
};

export default HeroSection;
