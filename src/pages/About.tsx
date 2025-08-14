import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverButton } from '@/components/ui/hover-button';
import { Users, Award, MapPin, Clock, Heart, Shield, Star, Building, Home } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "1000+", label: "Happy Renters", icon: Users },
    { number: "5+", label: "Years Experience", icon: Clock },
    { number: "98%", label: "Success Rate", icon: Award },
    { number: "24/7", label: "Support Available", icon: Heart },
  ];

  const values = [
    {
      icon: Heart,
      title: "Personalized Service",
      description: "We treat every client like family and understand your unique needs.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop"
    },
    {
      icon: Shield,
      title: "100% Free",
      description: "Our service is completely free for renters - no hidden fees ever.",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop"
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Born and raised in South Florida, we know every neighborhood intimately.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop"
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 1000 successful apartment matches with 98% satisfaction rate.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=2000&h=800&fit=crop"
            alt="Luxury apartment background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#232C5C]/80 via-[#232C5C]/60 to-[#F68036]/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 text-[#F68036]" />
              About For Rent Finders
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white">
              Your Trusted <span className="text-[#F68036]">Apartment Experts</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              We're passionate local experts who make finding your perfect apartment in Miami and Fort Lauderdale completely stress-free and 100% free for you.
            </p>

            <HoverButton className="bg-[#F68036] hover:bg-[#F68036]/90 text-white font-semibold px-8 py-4 text-lg">
              Get Started Today
            </HoverButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="bg-white p-8 rounded-3xl mb-4 hover:scale-105 transition-transform duration-300 shadow-lg border border-gray-100">
                  <stat.icon className="w-8 h-8 text-[#F68036] mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-[#232C5C] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-[#232C5C]/70 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story with House Images */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#232C5C]">
                  Our <span className="text-[#F68036]">Story</span>
                </h2>
                
                <div className="space-y-6 text-lg text-[#232C5C]/80 leading-relaxed">
                  <p>
                    Founded by South Florida natives who experienced the frustration of apartment hunting firsthand, For Rent Finders was born from a simple mission: make finding your perfect home effortless and free.
                  </p>
                  
                  <p>
                    After years in the real estate industry, we noticed how overwhelming and time-consuming apartment searching could be. Renters were spending weeks scrolling through listings, scheduling viewings, and dealing with unresponsive landlords.
                  </p>
                  
                  <p>
                    We decided to change that. Today, we've helped over 1,000 renters find their dream apartments across Miami-Dade and Broward counties, and we're just getting started.
                  </p>
                </div>
              </div>

              <div className="fade-in-right">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <img 
                      src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
                      alt="Luxury apartment living room"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop"
                      alt="Modern apartment kitchen"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    />
                  </div>
                  <div className="space-y-4 pt-8">
                    <img 
                      src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop"
                      alt="Apartment building exterior"
                      className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    />
                    <div className="bg-[#F68036] text-white p-6 rounded-2xl text-center">
                      <div className="text-3xl font-bold">1000+</div>
                      <div className="text-sm">Happy Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values with House Images */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#232C5C]">
                What Makes Us <span className="text-[#F68036]">Different</span>
              </h2>
              <p className="text-xl text-[#232C5C]/70 max-w-3xl mx-auto">
                Our commitment to excellence and personalized service sets us apart in the South Florida rental market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-3xl hover:scale-105 transition-all duration-300 fade-in-up shadow-lg border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mb-6">
                    <img 
                      src={value.image}
                      alt={value.title}
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                  </div>
                  
                  <div className="w-16 h-16 bg-[#F68036]/10 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-[#F68036]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-[#232C5C]">{value.title}</h3>
                  <p className="text-[#232C5C]/70 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section with House Background */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Image with Opacity */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=2000&h=800&fit=crop"
            alt="Beautiful house background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#232C5C]/70 via-[#232C5C]/50 to-[#F68036]/60"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/95 backdrop-blur-sm p-12 rounded-3xl shadow-2xl border border-white/20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#232C5C]">
                Ready to Find Your <span className="text-[#F68036]">Perfect Home?</span>
              </h2>
              
              <p className="text-xl text-[#232C5C]/70 mb-10">
                Join over 1,000 happy renters who found their dream apartments with our expert help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverButton className="bg-[#F68036] hover:bg-[#F68036]/90 text-white font-semibold px-8 py-4 text-lg">
                  Start Your Search
                </HoverButton>
                
                <HoverButton className="bg-white text-[#F68036] border-2 border-[#F68036] font-semibold px-8 py-4 text-lg hover:bg-[#F68036] hover:text-white transition-all duration-300">
                  Call 855-FOR-RENT
                </HoverButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;