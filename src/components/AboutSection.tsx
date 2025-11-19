
import { Shield, GraduationCap, Clock, MapPin, ArrowRight, Star, Building } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Why Choose For Rent Finders Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#232C5C] mb-6">
              Why Choose <span className="text-[#F68036]">For Rent Finders</span>?
            </h2>
            <p className="text-xl text-[#232C5C] mb-16 max-w-3xl mx-auto">
              We're not just another apartment finder - we're your local experts.
            </p>
          </div>

          {/* Features Grid - Redesigned Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center mb-20">
            {/* Left Column - First 2 Benefits */}
            <div className="space-y-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#232C5C] mb-3">100% FREE Service</h3>
                <p className="text-[#232C5C] leading-relaxed">
                  No hidden fees, no commissions, no surprises. Our service is completely free for renters.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#232C5C] mb-3">Licensed Realtors</h3>
                <p className="text-[#232C5C] leading-relaxed">
                  Our team consists of licensed real estate professionals with deep market knowledge.
                </p>
              </div>
            </div>

            {/* Center Column - Main Image */}
            <div className="relative">
              <div className="relative">
                <img 
                  src="https://i.imgur.com/egEWrQf.jpeg" 
                  alt="For Rent Finders - Digital apartment search service" 
                  className="rounded-2xl shadow-2xl w-full relative z-10 border-4 border-white/50"
                />
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#F68036]/10 to-[#232C5C]/10 rounded-2xl"></div>
              </div>
            </div>

            {/* Right Column - Last 2 Benefits */}
            <div className="space-y-8">
              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#232C5C] mb-3">Fast Results</h3>
                <p className="text-[#232C5C] leading-relaxed">
                  We typically find matches within 24-48 hours and get you into your dream apartment quickly.
                </p>
              </div>

              <div className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#232C5C] mb-3">Local Experts</h3>
                <p className="text-[#232C5C] leading-relaxed">
                  We know every neighborhood, building, and landlord in Miami & Fort Lauderdale.
                </p>
              </div>
            </div>
          </div>

          {/* What Our Clients Say section */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-[#232C5C] mb-6">What Our Clients Say</h3>
              <p className="text-xl text-[#232C5C]">Real stories from real people who found their dream apartments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F68036] fill-current" />
                  ))}
                </div>
                <p className="text-[#232C5C] mb-6 leading-relaxed">
                  "For Rent Finders made my apartment search so easy! They found me the perfect place in Miami Beach within 2 days. The service was completely free and professional."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F68036] rounded-full flex items-center justify-center text-white font-bold">JM</div>
                  <div>
                    <div className="font-bold text-[#232C5C]">Jennifer Martinez</div>
                    <div className="text-sm text-[#232C5C]">Miami Beach Resident</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F68036] fill-current" />
                  ))}
                </div>
                <p className="text-[#232C5C] mb-6 leading-relaxed">
                  "I was struggling to find a pet-friendly apartment in Fort Lauderdale. The team knew exactly where to look and found me a great place with no pet fees!"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F68036] rounded-full flex items-center justify-center text-white font-bold">DT</div>
                  <div>
                    <div className="font-bold text-[#232C5C]">David Thompson</div>
                    <div className="text-sm text-[#232C5C]">Fort Lauderdale Resident</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#F68036] fill-current" />
                  ))}
                </div>
                <p className="text-[#232C5C] mb-6 leading-relaxed">
                  "As a newcomer to the area, I had no idea where to start. For Rent Finders guided me through the entire process and found me an amazing apartment in my budget."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F68036] rounded-full flex items-center justify-center text-white font-bold">AW</div>
                  <div>
                    <div className="font-bold text-[#232C5C]">Amanda Wilson</div>
                    <div className="text-sm text-[#232C5C]">New Miami Resident</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Us section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-4xl font-bold text-[#232C5C] mb-6">White-Glove Service, <span className="text-[#F68036]">Elevated Results</span></h3>
              <p className="text-[#232C5C] leading-relaxed mb-6 text-lg">
                Founded by South Florida natives with a deep understanding of Miami's luxury lifestyle, For Rent Finders was created to transform the way discerning renters secure their next home.
              </p>
              <p className="text-[#232C5C] leading-relaxed mb-6">
                We recognized a major gap—high-caliber clients were wasting valuable time with outdated listings and unresponsive leasing offices. So we built something different: a white-glove, concierge-style rental experience—completely free to you.
              </p>
              <p className="text-[#232C5C] leading-relaxed mb-8">
                From sleek high-rises in Brickell to waterfront escapes in Fort Lauderdale, Miami Beach, Boca Raton, and the Palm Beaches, we curate only the best options tailored to your lifestyle.
              </p>
              <button className="border-2 border-[#F68036] text-[#F68036] hover:bg-[#F68036] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 group">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#232C5C] mb-2">1,000+</div>
                <div className="text-sm text-[#232C5C]">Successful Placements</div>
                <div className="text-xs text-[#232C5C]">Across 3 counties</div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#232C5C] mb-2">3</div>
                <div className="text-sm text-[#232C5C]">Counties Covered</div>
                <div className="text-xs text-[#232C5C]">Miami-Dade, Broward, Palm Beach</div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#232C5C] mb-2">100%</div>
                <div className="text-sm text-[#232C5C]">Free Service</div>
                <div className="text-xs text-[#232C5C]">No hidden fees ever</div>
              </div>

              <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="w-16 h-16 bg-[#F68036] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
                <div className="text-3xl font-bold text-[#232C5C] mb-2">5.0</div>
                <div className="text-sm text-[#232C5C]">Client Ratings</div>
                <div className="text-xs text-[#232C5C]">Average review score</div>
              </div>
            </div>
          </div>

          {/* CTA Section - Ready to Secure Your Dream Deal */}
          <div className="mt-20">
            <div className="relative bg-gradient-to-br from-[#232C5C] via-[#232C5C] to-[#F68036] p-10 md:p-16 rounded-3xl overflow-hidden shadow-2xl">
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 left-8 w-12 h-12 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-12 w-8 h-8 bg-white/10 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
              
              <div className="relative z-10 text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  Ready to Secure Your Dream Deal?
                </h3>
                <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  These exclusive offers are available for a limited time. Don't miss out on 
                  significant savings on premium apartments!
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
