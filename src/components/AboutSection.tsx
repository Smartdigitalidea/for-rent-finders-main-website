
import { Shield, Users, Award, Heart } from 'lucide-react';
import BackgroundPatterns from './BackgroundPatterns';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 py-0 relative overflow-hidden">
      {/* Enhanced Background with Multiple Patterns */}
      <div className="absolute inset-0">
        {/* Primary bubble pattern */}
        <BackgroundPatterns variant="bubbles" className="opacity-20" />
        
        {/* Secondary wave pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-primary/10 via-transparent to-orange/10 transform -skew-y-1"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-l from-secondary/10 via-transparent to-primary/10 transform skew-y-1"></div>
        </div>
        
        {/* Floating glow orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/20 to-orange/20 rounded-full blur-3xl animate-float opacity-30"></div>
        <div className="absolute top-60 right-20 w-80 h-80 bg-gradient-to-br from-orange/25 to-secondary/25 rounded-full blur-3xl animate-float opacity-25" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-3xl animate-float opacity-20" style={{ animationDelay: '4s' }}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
            linear-gradient(rgba(51, 132, 179, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(51, 132, 179, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 my-[40px] relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header with glow effects */}
          <div className="text-center mb-16 relative">
            {/* Glow background for title */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-20 bg-gradient-to-r from-primary/10 via-orange/10 to-secondary/10 rounded-full blur-2xl"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 mb-6 relative z-10 drop-shadow-lg">
              About <span className="text-[#3384B3] drop-shadow-lg glow-text">For Rent Finders</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-body">Miami | Broward Apartments Locator</p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#3384B3] to-orange-500 mx-auto rounded-full shadow-lg"></div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              {/* Content glow background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/5 via-orange/5 to-secondary/5 rounded-3xl blur-xl"></div>
              
              <div className="relative z-10 bg-white/70 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-white/50">
                <h3 className="text-2xl font-heading font-semibold text-gray-800 mb-6 glow-text">
                  Your Trusted Local Real Estate Experts
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed font-body">
                  We're local experts helping renters find apartments in Fort Lauderdale and Miami. 
                  Whether you're relocating for work, upgrading your living situation, or just exploring 
                  new neighborhoods, we'll match you with options perfectly tailored to your needs, 
                  lifestyle, and budget.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed font-body">
                  With years of experience in the South Florida market, we understand the unique 
                  challenges renters face - from competitive markets to complex application processes. 
                  That's why we do all the heavy lifting for you, completely free of charge.
                </p>
                
                {/* Stats with glow effects */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-orange/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-lg">
                      <div className="text-3xl font-bold text-[#3384B3] mb-2 glow-text">300+</div>
                      <div className="text-sm text-gray-600 font-body">Happy Renters</div>
                    </div>
                  </div>
                  <div className="text-center relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange/10 to-secondary/10 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                    <div className="relative bg-white/80 p-4 rounded-xl backdrop-blur-sm border border-white/50 shadow-lg">
                      <div className="text-3xl font-bold text-[#3384B3] mb-2 glow-text">4.9★</div>
                      <div className="text-sm text-gray-600 font-body">Average Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image with enhanced effects */}
            <div className="relative">
              {/* Image glow background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-orange/20 to-secondary/20 rounded-3xl blur-2xl"></div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                  alt="Happy renter in new apartment" 
                  className="rounded-2xl shadow-2xl w-full relative z-10 border-4 border-white/50" 
                />
                <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 z-20">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-red-500 fill-current drop-shadow-sm" />
                    <span className="text-sm font-medium font-body">Loved by renters</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid with enhanced styling */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative">
              {/* Card glow background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-orange/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group-hover:border-primary/20">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3384B3]/20 to-orange/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-[#3384B3] drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-[#3384B3] transition-colors">100% Free Service</h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  No hidden fees, no charges to you. We're compensated by landlords and property 
                  managers, so our service is completely free for renters.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Card glow background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-orange/20 to-secondary/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group-hover:border-orange/20">
                <div className="w-12 h-12 bg-gradient-to-br from-orange/20 to-[#3384B3]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-[#3384B3] drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-[#3384B3] transition-colors">Local Real Estate Experts</h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  Our team lives and works in South Florida. We know the market, the neighborhoods, 
                  and the best buildings for every lifestyle and budget.
                </p>
              </div>
            </div>

            <div className="group relative">
              {/* Card glow background */}
              <div className="absolute -inset-2 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-3xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group-hover:border-secondary/20">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-[#3384B3]/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-[#3384B3] drop-shadow-sm" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-gray-800 mb-4 group-hover:text-[#3384B3] transition-colors">Stress-Free Apartment Hunting</h4>
                <p className="text-gray-600 leading-relaxed font-body">
                  We handle the research, scheduling, and paperwork coordination. You just focus 
                  on finding the perfect place to call home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
