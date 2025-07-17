
import { Search, Target, Home, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SurveyModal from './SurveyModal';
import BackgroundPatterns from './BackgroundPatterns';

const HowItWorksSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [{
    step: 1,
    icon: Search,
    title: "Tell Us What You're Looking For",
    description: "Fill out a short survey so we can understand your needs, budget, timeline, and preferences.",
    details: "Takes less than 3 minutes • Completely personalized • No obligation",
    color: "from-primary to-blue-400",
    glowColor: "primary"
  }, {
    step: 2,
    icon: Target,
    title: "Get Matched Instantly",
    description: "We search listings, talk to landlords, and narrow down the best options for you.",
    details: "Access to exclusive listings • Pre-screened properties • Professional relationships",
    color: "from-orange-500 to-orange-400",
    glowColor: "orange"
  }, {
    step: 3,
    icon: Home,
    title: "Tour & Move In",
    description: "We help you schedule viewings, handle paperwork, and move into your new home.",
    details: "Coordinated tours • Application assistance • Move-in support",
    color: "from-green-500 to-emerald-400",
    glowColor: "emerald"
  }];

  return (
    <>
      <section id="how-it-works" className="py-20 relative overflow-hidden">
        {/* Background Patterns */}
        <BackgroundPatterns variant="bubbles" className="opacity-60" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl floating" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-accent/5 to-background/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-glow">
                How <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">It Works</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Finding your perfect apartment has never been easier. Our streamlined process 
                gets you from search to move-in with minimal stress and maximum results.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mt-8 shadow-lg"></div>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connection lines for desktop */}
              <div className="hidden lg:block absolute top-32 left-0 w-full h-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-primary via-orange-500 to-emerald-500 opacity-30 animate-glow-pulse"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                {steps.map((step, index) => (
                  <div key={step.step} className="relative fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Step card */}
                    <div className="how-it-works-card rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group">
                      {/* Glow effect behind card */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>
                      
                      {/* Step number with enhanced styling */}
                      <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-2xl lg:text-3xl font-bold mb-8 mx-auto relative z-10 shadow-2xl floating ${step.glowColor === 'orange' ? 'orange-glow' : 'card-glow'}`}>
                        <span className="relative z-10">{step.step}</span>
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-md opacity-50`}></div>
                      </div>

                      {/* Enhanced icon */}
                      <div className="mb-6 text-center">
                        <step.icon className={`w-12 h-12 lg:w-16 lg:h-16 mx-auto text-${step.glowColor === 'orange' ? 'orange-500' : 'primary'} floating`} style={{ animationDelay: `${index * 0.5}s` }} />
                      </div>

                      {/* Content with improved typography */}
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6 text-center leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 text-center leading-relaxed text-lg">
                        {step.description}
                      </p>

                      <p className={`text-sm lg:text-base text-${step.glowColor === 'orange' ? 'orange-500' : 'primary'} text-center font-semibold`}>
                        {step.details}
                      </p>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-orange-500/20 rounded-full blur-sm"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-full blur-sm"></div>
                    </div>

                    {/* Enhanced arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-8">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center shadow-lg card-glow">
                          <ArrowRight className="w-6 h-6 text-white rotate-90" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-20 text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
              <div className="relative bg-gradient-to-br from-primary via-primary to-orange-500 p-12 lg:p-16 rounded-3xl shadow-2xl overflow-hidden">
                {/* Background pattern overlay */}
                <BackgroundPatterns variant="dots" className="opacity-20" />
                
                {/* Glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-orange-500/80 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 text-glow">
                    Ready to Find Your Perfect Apartment?
                  </h3>
                  <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
                    Join hundreds of satisfied renters who found their dream home with our help. 
                    Start your free apartment search today!
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="bg-white text-primary px-10 py-4 lg:px-12 lg:py-5 rounded-2xl font-bold text-lg lg:text-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-3 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-1"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-6 h-6 floating" />
                  </button>
                </div>

                {/* Decorative floating elements */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 rounded-full floating"></div>
                <div className="absolute bottom-6 left-6 w-12 h-12 bg-white/10 rounded-full floating" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-8 w-8 h-8 bg-white/10 rounded-full floating" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city="" />
    </>
  );
};

export default HowItWorksSection;
