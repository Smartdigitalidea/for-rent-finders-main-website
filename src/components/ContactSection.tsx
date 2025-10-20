
import { Phone, Mail, Instagram, Facebook, MessageCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-[#A2CDDD] bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="text-[#3384B3]">Contact</span> Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? Want to get started? Reach out anytime. 
              Our team is ready to help you find your perfect apartment.
            </p>
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              {/* Phone CTA */}
              <div className="bg-gradient-to-r from-[#3384B3] to-[#A2CDDD] p-8 rounded-2xl shadow-xl mb-8">
                <div className="text-center text-white">
                  <Phone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Call Us Anytime</h3>
                  <div className="text-3xl font-bold mb-2">866-FOR-RENT</div>
                  <div className="text-lg opacity-90 mb-4">(That's +1 866-367-7368)</div>
                  <p className="opacity-90">Our team is ready to help 7 days a week.</p>
                </div>
              </div>

              {/* Contact methods */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#3384B3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email Us</h4>
                    <a href="mailto:hello@forrentfinders.com" className="text-[#3384B3] hover:underline">
                      hello@forrentfinders.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-[#3384B3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 8:00 PM EST</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#3384B3]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Service Areas</h4>
                    <p className="text-gray-600">Miami, Fort Lauderdale & The Palm Beaches</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                    <Instagram className="w-6 h-6" />
                  </div>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform duration-200">
                    <Facebook className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Real apartment tours, client success stories & tips for renters.</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="w-8 h-8 text-[#3384B3]" />
                <h3 className="text-2xl font-bold text-gray-800">Send us a message</h3>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" required />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="e.g., Looking for a 2BR in Miami" />
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    rows={4}
                    placeholder="Tell us about what you're looking for, your timeline, budget, or any specific questions..."
                  />
                </div>

                <Button className="w-full bg-[#3384B3] hover:bg-[#2a6b91] text-white py-3 text-lg font-semibold">
                  Send Message
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We typically respond within 2 hours during business hours.
                </p>
              </form>
            </div>
          </div>

          {/* Instagram Feed Placeholder */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Follow Us On Instagram</h3>
              <p className="text-gray-600">Real apartment tours, client success stories & tips for renters.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-400 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <Instagram className="w-5 h-5" />
                        <span className="text-sm font-medium">@forrentfinders</span>
                      </div>
                      <p className="text-sm">Latest apartment tour in {i === 1 ? 'Brickell' : i === 2 ? 'Las Olas' : 'South Beach'}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">📍 Beautiful {i === 1 ? '2BR with city views' : i === 2 ? '1BR near the beach' : 'studio in heart of SoBe'}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <Button variant="outline" className="border-[#3384B3] text-[#3384B3] hover:bg-[#3384B3] hover:text-white">
                View More on Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
