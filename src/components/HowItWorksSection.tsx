
import { Search, Target, Home, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SurveyModal from './SurveyModal';

const HowItWorksSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const steps = [{
    step: 1,
    icon: Search,
    title: "Tell Us What You're Looking For",
    description: "Fill out a short survey so we can understand your needs, budget, timeline, and preferences.",
    details: "Takes less than 3 minutes • Completely personalized • No obligation"
  }, {
    step: 2,
    icon: Target,
    title: "Get Matched Instantly",
    description: "We search listings, talk to landlords, and narrow down the best options for you.",
    details: "Access to exclusive listings • Pre-screened properties • Professional relationships"
  }, {
    step: 3,
    icon: Home,
    title: "Tour & Move In",
    description: "We help you schedule viewings, handle paperwork, and move into your new home.",
    details: "Coordinated tours • Application assistance • Move-in support"
  }];

  return (
    <>
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                How <span className="text-[#3384B3]">It Works</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Finding your perfect apartment has never been easier. Our streamlined process 
                gets you from search to move-in with minimal stress and maximum results.
              </p>
              <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
            </div>

            {/* Steps */}
            <div className="relative">
              {/* Connection lines for desktop */}
              <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-[#3384B3] via-[#A2CDDD] to-[#3384B3] opacity-30"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                {steps.map((step, index) => (
                  <div key={step.step} className="relative">
                    {/* Step card */}
                    <div className="bg-white border-2 border-gray-100 hover:border-[#A2CDDD] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                      {/* Step number */}
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3384B3] to-[#A2CDDD] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-6 mx-auto relative z-10">
                        {step.step}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                        {step.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-center leading-relaxed">
                        {step.description}
                      </p>

                      <p className="text-sm text-[#3384B3] text-center font-medium">
                        {step.details}
                      </p>
                    </div>

                    {/* Arrow for mobile */}
                    {index < steps.length - 1 && (
                      <div className="lg:hidden flex justify-center my-6">
                        <ArrowRight className="w-6 h-6 text-[#3384B3] rotate-90" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-[#3384B3] to-[#A2CDDD] p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Find Your Perfect Apartment?
                </h3>
                <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
                  Join hundreds of satisfied renters who found their dream home with our help. 
                  Start your free apartment search today!
                </p>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-[#3384B3] px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center space-x-2"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
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
