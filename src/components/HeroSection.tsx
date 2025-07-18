
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';
import SurveyModal from './SurveyModal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsModalOpen(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20" style={{
      background: 'linear-gradient(135deg, #7EB1CF 0%, #F8FCFD 35%, #AAD1E0 65%, #F8FCFD 100%)'
    }}>
      {/* Premium Background Patterns */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
              radial-gradient(circle at 25px 25px, rgba(126, 177, 207, 0.15) 2px, transparent 2px),
              radial-gradient(circle at 75px 75px, rgba(170, 209, 224, 0.15) 2px, transparent 2px)
            `,
          backgroundSize: '100px 100px, 150px 150px'
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `
              linear-gradient(rgba(126, 177, 207, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(170, 209, 224, 0.05) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#7EB1CF]/30 to-[#AAD1E0]/30 rounded-full blur-3xl floating"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-br from-[#AAD1E0]/40 to-[#7EB1CF]/40 rounded-full blur-3xl floating" style={{
          animationDelay: '1s'
        }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-[#F8FCFD]/30 to-[#7EB1CF]/30 rounded-full blur-3xl floating" style={{
          animationDelay: '2s'
        }}></div>
      </div>

      <div className="container mx-auto relative z-10 my-[60px] px-4 py-[50px]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust signals - Reduced size on mobile, better tablet layout */}
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-12 fade-in-up">
            <div className="flex items-center space-x-1 sm:space-x-2 luxury-card px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full whitespace-nowrap">
              <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-foreground text-xs sm:text-sm md:text-base">4.9 Rating</span>
            </div>
            
            <div className="bg-gradient-to-r from-success to-success/80 text-success-foreground px-2 sm:px-3 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full font-semibold shadow-lg whitespace-nowrap text-xs sm:text-sm md:text-base bg-[#dcfce6]">
              100% Free Service
            </div>
          </div>

          {/* Main headline - Mobile optimized for two lines with increased margins */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 leading-tight fade-in-up luxury-text-glow px-6 sm:px-4 md:px-0">
            Find Your 
            <span className="bg-gradient-to-r from-primary via-primary-glow to-gold bg-clip-text text-transparent"> Dream Apartment</span>
            <br />
            in Miami or Fort Lauderdale
          </h1>

          {/* Subheadline - Improved responsive text */}
          <p style={{
            animationDelay: '0.2s'
          }} className="text-base sm:text-lg md:text-xl text-muted-foreground mb-12 sm:mb-16 max-w-4xl mx-auto leading-relaxed fade-in-up">
            We help renters like you get matched with the perfect apartment — all for free. 
            <span className="text-primary font-semibold"> Expert local knowledge, personalized service, stress-free experience.</span>
          </p>

          {/* City selection buttons - Better responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 fade-in-up" style={{
            animationDelay: '0.4s'
          }}>
            <Button 
              size="lg" 
              onClick={() => handleCitySelect('Fort Lauderdale')} 
              className="bg-gradient-to-r from-orange to-orange-glow hover:from-orange-glow hover:to-orange text-orange-foreground px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-orange hover:shadow-luxury transition-all duration-500 transform hover:scale-105 hover:translateY(-2px) w-full sm:w-auto min-w-[200px] sm:min-w-[250px] group"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              Fort Lauderdale
            </Button>
            
            <div className="text-muted-foreground font-bold text-lg sm:text-xl luxury-text-glow">or</div>
            
            <Button 
              size="lg" 
              onClick={() => handleCitySelect('Miami')} 
              className="bg-gradient-to-r from-secondary to-secondary-glow hover:from-secondary-glow hover:to-accent text-secondary-foreground px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105 hover:translateY(-2px) w-full sm:w-auto min-w-[200px] sm:min-w-[250px] group"
            >
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 group-hover:scale-110 transition-transform" />
              Miami
            </Button>
          </div>

          {/* Features highlight - Better responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto fade-in-up" style={{
            animationDelay: '0.6s'
          }}>
            <div className="luxury-card p-6 sm:p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105">
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">Local Expertise</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">We know every neighborhood, building, and landlord in the area. Our deep local knowledge ensures perfect matches.</p>
            </div>
            
            <div className="luxury-card p-6 sm:p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105" style={{
              animationDelay: '0.1s'
            }}>
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">💯</div>
              <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">100% Free Service</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">No hidden fees, no charges. We're paid by landlords, not renters. Your satisfaction is our priority.</p>
            </div>
            
            <div className="luxury-card p-6 sm:p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105" style={{
              animationDelay: '0.2s'
            }}>
              <div className="text-4xl sm:text-5xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="font-bold text-lg sm:text-xl text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors">Lightning Fast Results</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">Get matched with premium apartments within 24 hours of your inquiry. Time is precious, we respect that.</p>
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
