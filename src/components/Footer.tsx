
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/73220194-ea00-4b76-b4cd-0cd100ac9f5b.png" 
                alt="For Rent Finders Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">For Rent Finders</h3>
                <p className="text-gray-400 text-sm">Miami | Broward Apartments</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Your trusted local experts for finding apartments in Fort Lauderdale and Miami. 
              We make apartment hunting stress-free and completely free for renters.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/for_rent_finders/?locale=fr&hl=af"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-200">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-200">How It Works</a></li>
              <li><a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-200">Blog</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <a href="tel:8553677368" className="font-medium hover:text-orange-300 transition-colors">855-FOR-RENT</a>
                  <p className="text-sm text-gray-400">(855-367-7368)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:hello@forrentfinders.com" className="text-gray-300 hover:text-orange-300 transition-colors">hello@forrentfinders.com</a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                <div>
                  <p className="text-gray-300">Serving Miami-Dade &</p>
                  <p className="text-gray-300">Broward Counties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} For Rent Finders. All rights reserved.
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Terms & Conditions</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
