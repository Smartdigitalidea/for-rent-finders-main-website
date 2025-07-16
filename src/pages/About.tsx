import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverButton } from '@/components/ui/hover-button';
import { Users, Award, MapPin, Clock, Heart, Shield } from 'lucide-react';

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
      description: "We treat every client like family and understand your unique needs."
    },
    {
      icon: Shield,
      title: "100% Free",
      description: "Our service is completely free for renters - no hidden fees ever."
    },
    {
      icon: MapPin,
      title: "Local Expertise",
      description: "Born and raised in South Florida, we know every neighborhood intimately."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Over 1000 successful apartment matches with 98% satisfaction rate."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-primary/30 to-orange-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-400/30 to-primary/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              About For Rent Finders
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Your Trusted <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Apartment Experts</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              We're passionate local experts who make finding your perfect apartment in Miami and Fort Lauderdale completely stress-free and 100% free for you.
            </p>

            <HoverButton className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-8 py-4 text-lg">
              Get Started Today
            </HoverButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="luxury-card p-8 rounded-3xl mb-4 hover:scale-105 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="fade-in-left">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Our <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Story</span>
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
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
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
                    alt="Team at work"
                    className="rounded-3xl shadow-2xl w-full h-96 object-cover"
                  />
                  <div className="absolute -bottom-6 -right-6 luxury-card p-6 rounded-2xl bg-card/95 backdrop-blur-sm">
                    <div className="text-2xl font-bold text-orange-500">1000+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                What Makes Us <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Different</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence and personalized service sets us apart in the South Florida rental market.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="luxury-card p-8 rounded-3xl hover:scale-105 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center mb-6">
                    <value.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-orange-500/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="luxury-card p-12 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Find Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Perfect Home?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Join over 1,000 happy renters who found their dream apartments with our expert help.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverButton className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-8 py-4 text-lg">
                  Start Your Search
                </HoverButton>
                
                <HoverButton className="bg-white/80 text-primary border border-primary/20 font-semibold px-8 py-4 text-lg">
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