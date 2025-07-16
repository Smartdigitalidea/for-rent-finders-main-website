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
  return <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary-glow via-background to-accent overflow-hidden pt-20">
      {/* Hero Pattern Background */}
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: 'var(--pattern-dots)',
        backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'var(--pattern-grid)',
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Luxury Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-gold/20 rounded-full blur-3xl floating"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-full blur-3xl floating" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-gold/20 to-secondary/20 rounded-full blur-3xl floating" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      <div className="container mx-auto relative z-10 my-[60px] px-[16px] py-[50px]">
        <div className="max-w-4xl mx-auto text-center px-0">
          {/* Trust signals */}
          <div className="flex justify-center items-center flex-wrap gap-4 mb-12 fade-in-up">
            <div className="flex items-center space-x-2 luxury-card px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold text-foreground">4.9 Rating</span>
            </div>
            <div className="flex items-center space-x-2 luxury-card px-6 py-3 rounded-full">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">300+ Happy Renters</span>
            </div>
            <div className="bg-gradient-to-r from-success to-success/80 text-success-foreground px-6 py-3 rounded-full font-semibold shadow-lg">
              100% Free Service
            </div>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight fade-in-up luxury-text-glow lg:text-6xl">
            Find Your 
            <span className="bg-gradient-to-r from-primary via-primary-glow to-gold bg-clip-text text-transparent"> Dream Apartment</span>
            <br />
            in Miami or Fort Lauderdale
          </h1>

          {/* Subheadline */}
          <p style={{
          animationDelay: '0.2s'
        }} className="text-xl md:text-2xl text-muted-foreground mb-16 max-w-4xl mx-auto leading-relaxed fade-in-up lg:text-2xl">
            We help renters like you get matched with the perfect apartment — all for free. 
            <span className="text-primary font-semibold"> Expert local knowledge, personalized service, stress-free experience.</span>
          </p>

          {/* City selection buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <Button size="lg" onClick={() => handleCitySelect('Fort Lauderdale')} className="bg-gradient-to-r from-orange to-orange-glow hover:from-orange-glow hover:to-orange text-orange-foreground px-10 py-6 text-xl font-bold rounded-2xl shadow-orange hover:shadow-luxury transition-all duration-500 transform hover:scale-105 hover:translateY(-2px) w-full sm:w-auto min-w-[250px] group">
              <MapPin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Fort Lauderdale
            </Button>
            
            <div className="text-muted-foreground font-bold text-xl luxury-text-glow">or</div>
            
            <Button size="lg" onClick={() => handleCitySelect('Miami')} className="bg-gradient-to-r from-secondary to-secondary-glow hover:from-secondary-glow hover:to-accent text-secondary-foreground px-10 py-6 text-xl font-bold rounded-2xl shadow-elegant hover:shadow-luxury transition-all duration-500 transform hover:scale-105 hover:translateY(-2px) w-full sm:w-auto min-w-[250px] group">
              <MapPin className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
              Miami
            </Button>
          </div>

          {/* Features highlight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto fade-in-up" style={{
          animationDelay: '0.6s'
        }}>
            <div className="luxury-card p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🏠</div>
              <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">Local Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">We know every neighborhood, building, and landlord in the area. Our deep local knowledge ensures perfect matches.</p>
            </div>
            
            <div className="luxury-card p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105" style={{
            animationDelay: '0.1s'
          }}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💯</div>
              <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">100% Free Service</h3>
              <p className="text-muted-foreground leading-relaxed">No hidden fees, no charges. We're paid by landlords, not renters. Your satisfaction is our priority.</p>
            </div>
            
            <div className="luxury-card p-8 rounded-3xl group hover:luxury-glow transition-all duration-500 hover:scale-105" style={{
            animationDelay: '0.2s'
          }}>
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="font-bold text-xl text-foreground mb-4 group-hover:text-primary transition-colors">Lightning Fast Results</h3>
              <p className="text-muted-foreground leading-relaxed">Get matched with premium apartments within 24 hours of your inquiry. Time is precious, we respect that.</p>
            </div>
          </div>
        </div>
      </div>

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city={selectedCity} />
    </section>;
};
export default HeroSection;