
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Building2, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const menuItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'About Us', href: '/about', type: 'route' },
    { name: 'How It Works', href: '/how-it-works', type: 'route' },
    { name: 'Neighborhoods', href: '/neighborhoods', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' },
    { name: 'Contact', href: '/contact', type: 'route' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 luxury-card bg-card/95 backdrop-blur-xl border-b border-border/50">
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-primary to-orange-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-center items-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <a href="tel:8553677368" className="hover:text-orange-200 transition-colors">
              855-FOR-RENT 
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <a href="mailto:hello@forrentfinders.com" className="hover:text-orange-200 transition-colors">
              hello@forrentfinders.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/73220194-ea00-4b76-b4cd-0cd100ac9f5b.png" 
              alt="For Rent Finders Logo" 
              className="h-10 w-auto md:h-12" 
            />
          </div>

          {/* Desktop Navigation - Reduced font size for tablet */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation - Compact version */}
          <nav className="hidden md:flex lg:hidden space-x-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors text-xs px-2"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Button className="hidden md:block bg-gradient-to-r from-primary to-orange-500 hover:from-primary-deep hover:to-orange-deep text-white text-sm lg:text-base">
            Get Started Free
          </Button>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-700 hover:text-orange-500 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary-deep hover:to-orange-deep text-white mt-4">
                Get Started Free
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
