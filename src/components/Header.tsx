
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SurveyModal from './SurveyModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const menuItems = [
    { name: 'Home', href: '/', type: 'route' },
    { name: 'Properties', href: 'https://framed.smartapartmentdata.com/searchbasic.aspx?siteid=d32889aa-07d5-42d6-9649-4ade91e33f78&market=miami', type: 'external' },
    { name: 'About', href: '/about', type: 'route' },
    { name: 'Blog', href: '/blog', type: 'route' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 luxury-card bg-card/95 backdrop-blur-xl border-b border-border/50">
        {/* Top contact bar */}
        <div className="bg-foreground text-primary-foreground py-2">
          <div className="container mx-auto px-4 flex justify-center items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <a href="tel:8663677368" className="hover:text-orange-glow transition-colors">
                866-FOR-RENT 
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:hello@forrentfinders.com" className="hover:text-orange-glow transition-colors">
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

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {menuItems.map((item) => (
                item.type === 'external' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-orange font-medium transition-colors text-base"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-orange font-medium transition-colors text-base"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* Tablet Navigation */}
            <nav className="hidden md:flex lg:hidden space-x-3">
              {menuItems.map((item) => (
                item.type === 'external' ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-orange font-medium transition-colors text-sm px-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-foreground/80 hover:text-orange font-medium transition-colors text-sm px-2"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>

            {/* CTA Button */}
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="futuristic"
              className="hidden md:block"
            >
              Inquire Here
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
                  item.type === 'external' ? (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-orange font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-foreground/80 hover:text-orange font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
                <Button 
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  variant="futuristic"
                  className="w-full mt-4"
                >
                  Inquire Here
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
      
      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city="" />
    </>
  );
};

export default Header;
