
const HowItWorksServiceSection = () => {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* How our FREE service works section */}
          <div>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-[#232C5C] mb-6">
                How our <span className="text-[#F68036]">FREE</span> service works
              </h2>
              <p className="text-xl text-[#232C5C]">SIMPLE 4-step process.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=800&fit=crop" 
                  alt="For Rent Finders - Digital apartment search service" 
                  className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
                />
              </div>

              {/* Right side - 4 steps */}
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F68036] to-[#F68036]/90 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 flex-shrink-0">01</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#232C5C] mb-3">SEARCH</h3>
                    <p className="text-[#232C5C] leading-relaxed">
                      Search and explore our impressive range of apartments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F68036] to-[#F68036]/90 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 flex-shrink-0">02</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#232C5C] mb-3">INQUIRE</h3>
                    <p className="text-[#232C5C] leading-relaxed">
                      Inquire to access personalized options and all the details you need on any apartment that caught your interest.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F68036] to-[#F68036]/90 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 flex-shrink-0">03</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#232C5C] mb-3">TOUR</h3>
                    <p className="text-[#232C5C] leading-relaxed">
                      Tour your top choices with one of our Realtors. *Virtual tours available
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F68036] to-[#F68036]/90 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20 flex-shrink-0">04</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[#232C5C] mb-3">APPLY</h3>
                    <p className="text-[#232C5C] leading-relaxed">
                      Apply to your favorite apartment- that's it! We take care of everything.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksServiceSection;
