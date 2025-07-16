import { Shield, Users, Award, Heart } from 'lucide-react';
const AboutSection = () => {
  return <section id="about" className="bg-gray-50 py-0">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About <span className="text-[#3384B3]">For Rent Finders</span>
            </h2>
            <p className="text-xl text-gray-600 mb-4">Miami | Broward Apartments Locator</p>
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full"></div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Your Trusted Local Real Estate Experts
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're local experts helping renters find apartments in Fort Lauderdale and Miami. 
                Whether you're relocating for work, upgrading your living situation, or just exploring 
                new neighborhoods, we'll match you with options perfectly tailored to your needs, 
                lifestyle, and budget.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                With years of experience in the South Florida market, we understand the unique 
                challenges renters face - from competitive markets to complex application processes. 
                That's why we do all the heavy lifting for you, completely free of charge.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3384B3] mb-2">300+</div>
                  <div className="text-sm text-gray-600">Happy Renters</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#3384B3] mb-2">4.9★</div>
                  <div className="text-sm text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" alt="Happy renter in new apartment" className="rounded-2xl shadow-2xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <span className="text-sm font-medium">Loved by renters</span>
                </div>
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-[#3384B3]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">100% Free Service</h4>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees, no charges to you. We're compensated by landlords and property 
                managers, so our service is completely free for renters.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-[#3384B3]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Local Real Estate Experts</h4>
              <p className="text-gray-600 leading-relaxed">
                Our team lives and works in South Florida. We know the market, the neighborhoods, 
                and the best buildings for every lifestyle and budget.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-[#3384B3]" />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">Stress-Free Apartment Hunting</h4>
              <p className="text-gray-600 leading-relaxed">
                We handle the research, scheduling, and paperwork coordination. You just focus 
                on finding the perfect place to call home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutSection;