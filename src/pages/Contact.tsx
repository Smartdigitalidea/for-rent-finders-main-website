import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { HoverButton } from '@/components/ui/hover-button';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, User, Building } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["855-FOR-RENT", "(855-367-7368)"],
      subtitle: "Available 7 days a week",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@forrentfinders.com"],
      subtitle: "We respond within 2 hours",
      color: "from-blue-500 to-blue-400"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: ["Miami-Dade County", "Broward County"],
      subtitle: "Covering all South Florida",
      color: "from-orange-500 to-orange-400"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Sun: 8AM-8PM"],
      subtitle: "Emergency support available",
      color: "from-purple-500 to-violet-400"
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
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              Let's Find Your <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Perfect Home</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Ready to start your apartment search? Have questions about our service? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="luxury-card p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">{info.title}</h3>
                  
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-lg font-semibold">{detail}</p>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{info.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 fade-in-up">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Send Us a <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Message</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Fill out the form below and we'll get back to you within 2 hours.
              </p>
            </div>

            <div className="luxury-card p-12 rounded-3xl fade-in-up">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone and Subject */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-3">
                      Subject *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-12 pr-4 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 appearance-none"
                      >
                        <option value="">Select a subject</option>
                        <option value="apartment-search">I'm looking for an apartment</option>
                        <option value="consultation">Schedule a consultation</option>
                        <option value="question">General question</option>
                        <option value="support">Support request</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-background border border-border rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your apartment needs, budget, preferred neighborhoods, move-in timeline, or any questions you have..."
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <HoverButton 
                    type="submit"
                    className="bg-gradient-to-r from-primary to-orange-500 text-white font-semibold px-12 py-4 text-lg"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </HoverButton>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="luxury-card p-12 rounded-3xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prefer to Talk? <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">Call Us Now</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-10">
                Speak directly with one of our apartment specialists. We're available 7 days a week to help you find your perfect home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverButton className="bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold px-8 py-4 text-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call 855-FOR-RENT
                </HoverButton>
                
                <HoverButton className="bg-white/80 text-primary border border-primary/20 font-semibold px-8 py-4 text-lg">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
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

export default Contact;