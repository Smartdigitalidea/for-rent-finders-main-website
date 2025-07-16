import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverButton } from '@/components/ui/hover-button';
import { Search, Users, MapPin, Key, Clock, Phone, CheckCircle, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Tell Us What You Want",
      description: "Fill out our quick survey about your preferences, budget, and timeline. The more details, the better we can help!",
      features: ["Budget preferences", "Desired neighborhoods", "Apartment features", "Move-in timeline"],
      color: "from-primary to-blue-400"
    },
    {
      step: "02", 
      icon: Users,
      title: "We Search & Match",
      description: "Our local experts use their connections and knowledge to find apartments that match your criteria perfectly.",
      features: ["Access to exclusive listings", "Direct landlord connections", "Pre-screened properties", "Professional recommendations"],
      color: "from-orange-500 to-orange-400"
    },
    {
      step: "03",
      icon: MapPin,
      title: "Tour Your Favorites",
      description: "We coordinate tours of your top choices and provide insights about each property and neighborhood.",
      features: ["Coordinated viewing schedule", "Neighborhood insights", "Property comparisons", "Expert guidance"],
      color: "from-green-500 to-emerald-400"
    },
    {
      step: "04",
      icon: Key,
      title: "Secure Your Home",
      description: "We help with applications, lease negotiations, and ensure a smooth move-in process.",
      features: ["Application assistance", "Lease review", "Move-in coordination", "Ongoing support"],
      color: "from-purple-500 to-violet-400"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "No more endless scrolling through listings or scheduling tours yourself."
    },
    {
      icon: Heart,
      title: "100% Free",
      description: "Our service is completely free for renters - landlords pay our fees."
    },
    {
      icon: CheckCircle,
      title: "Expert Knowledge",
      description: "Benefit from our years of experience and local market expertise."
    },
    {
      icon: Phone,
      title: "Personal Support",
      description: "Get dedicated support throughout your entire apartment search."
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
              <Search className="w-4 h-4" />
              How It Works
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Finding Your Perfect Apartment <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Made Simple</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Our proven 4-step process has helped over 1,000 renters find their dream apartments in Miami and Fort Lauderdale.
            </p>

            <HoverButton className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-8 py-4 text-lg">
              Start Your Search
            </HoverButton>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center mb-32 last:mb-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`fade-in-${index % 2 === 0 ? 'left' : 'right'} ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center`}>
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-6xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">{step.title}</h3>
                  
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {step.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} fade-in-${index % 2 === 0 ? 'right' : 'left'}`}>
                  <div className="relative">
                    <div className={`w-full h-96 bg-gradient-to-br ${step.color} rounded-3xl p-8 flex items-center justify-center shadow-2xl`}>
                      <step.icon className="w-32 h-32 text-white/20" />
                    </div>
                    
                    {/* Floating step number */}
                    <div className="absolute -top-6 -right-6 luxury-card w-20 h-20 rounded-2xl flex items-center justify-center">
                      <span className={`text-2xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                        {step.step}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Our Service?</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We make apartment hunting stress-free while providing expert guidance every step of the way.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="luxury-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-orange-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="luxury-card p-12 rounded-3xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Get <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Started?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Take the first step towards finding your perfect apartment. It only takes 2 minutes to get started.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverButton className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-8 py-4 text-lg">
                  Fill Out Survey
                </HoverButton>
                
                <HoverButton className="bg-white/80 text-primary border border-primary/20 font-semibold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
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

export default HowItWorks;