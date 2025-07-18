
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
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-primary/20 rounded-full blur-3xl floating" style={{
            animationDelay: '1s'
          }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-2xl floating" style={{
            animationDelay: '2s'
          }}></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-accent/5 to-background/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20 fade-in-up">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-glow">
                How <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">It Works</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Finding your perfect apartment has never been easier. Our streamlined process 
                gets you from search to move-in with minimal stress and maximum results.
              </p>
              <div className="w-32 h-1 bg-gradient-to-r from-primary to-orange-500 mx-auto rounded-full mt-8 shadow-lg"></div>
            </div>

            {/* New Modern Steps Layout */}
            <div className="relative">
              {/* Flowing Connection Line */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2">
                <div className="w-full h-full bg-gradient-to-r from-primary via-orange-500 to-emerald-500 opacity-20 rounded-full"></div>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-orange-500 to-emerald-500 opacity-40 rounded-full animate-pulse"></div>
              </div>
              
              {/* Steps Grid with Staggered Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {steps.map((step, index) => (
                  <div 
                    key={step.step} 
                    className={`relative fade-in-up group ${
                      index === 1 ? 'md:translate-y-12 lg:translate-y-16' : ''
                    }`}
                    style={{
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {/* Step Connection Point */}
                    <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className={`w-6 h-6 bg-gradient-to-br ${step.color} rounded-full shadow-xl floating`}
                           style={{ animationDelay: `${index * 0.5}s` }}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-md opacity-60`}></div>
                      </div>
                    </div>

                    {/* Enhanced Step Card */}
                    <div className="relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-3xl p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:scale-105 hover:-translate-y-3 group-hover:bg-white/95">
                      {/* Glow effect behind card */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-2xl transition-all duration-700 -z-10`}></div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-4 -right-4 z-10">
                        <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold shadow-2xl floating transform rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                          <span className="relative z-10">{step.step}</span>
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-lg opacity-60`}></div>
                        </div>
                      </div>

                      {/* Enhanced Icon Container */}
                      <div className="mb-8 relative">
                        <div className={`w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-br ${step.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl floating relative overflow-hidden`}>
                          <step.icon className="w-10 h-10 lg:w-12 lg:h-12 text-white relative z-10" />
                          <div className="absolute inset-0 bg-white/10 rounded-3xl"></div>
                          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-3xl blur-xl opacity-50 scale-110`}></div>
                        </div>
                      </div>

                      {/* Content with improved spacing */}
                      <div className="text-center space-y-6">
                        <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          {step.description}
                        </p>

                        <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${step.color} bg-opacity-10 rounded-full`}>
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full animate-pulse`}></div>
                          <p className={`text-sm font-semibold ${step.glowColor === 'orange' ? 'text-orange-600' : 'text-primary'}`}>
                            {step.details}
                          </p>
                        </div>
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute top-6 left-6 w-3 h-3 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full"></div>
                      <div className="absolute bottom-6 right-6 w-4 h-4 bg-gradient-to-br from-orange-400/30 to-primary/30 rounded-full"></div>
                    </div>

                    {/* Mobile Arrow Connector */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-12">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-orange-500 rounded-full flex items-center justify-center shadow-xl">
                          <ArrowRight className="w-6 h-6 text-white rotate-90 floating" />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Bottom CTA */}
            <div className="mt-24 text-center fade-in-up" style={{
              animationDelay: '0.8s'
            }}>
              <div className="relative bg-gradient-to-br from-primary via-primary to-orange-500 p-12 lg:p-20 rounded-3xl shadow-2xl overflow-hidden">
                {/* Background pattern overlay */}
                <BackgroundPatterns variant="dots" className="opacity-20" />
                
                {/* Enhanced glow effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-orange-500/90 rounded-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl floating"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl floating" style={{ animationDelay: '1s' }}></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl lg:text-5xl font-bold text-white mb-8 text-glow">
                    Ready to Find Your Perfect Apartment?
                  </h3>
                  <p className="text-white/90 mb-10 max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed">
                    Join hundreds of satisfied renters who found their dream home with our help. 
                    Start your free apartment search today!
                  </p>
                  <button 
                    onClick={() => setIsModalOpen(true)} 
                    className="bg-white text-primary px-12 py-5 lg:px-16 lg:py-6 rounded-2xl font-bold text-lg lg:text-xl hover:bg-gray-50 transition-all duration-300 inline-flex items-center space-x-4 shadow-2xl hover:shadow-3xl transform hover:scale-105 hover:-translate-y-2 group"
                  >
                    <span>Get Started Now</span>
                    <ArrowRight className="w-6 h-6 floating group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
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

export default HowItWorksSection;
