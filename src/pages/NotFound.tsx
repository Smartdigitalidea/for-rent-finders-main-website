
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft, Search, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <img 
            src="/lovable-uploads/73220194-ea00-4b76-b4cd-0cd100ac9f5b.png" 
            alt="For Rent Finders Logo" 
            className="h-16 w-auto mx-auto mb-4" 
          />
        </div>

        {/* 404 Display */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-[#3384B3] mb-4 tracking-tight">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#3384B3] to-orange-500 mx-auto rounded-full mb-6"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-2">
            The page you're looking for seems to have moved or doesn't exist.
          </p>
          <p className="text-gray-500">
            Don't worry, we'll help you find your way back to finding your perfect apartment!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button asChild className="bg-gradient-to-r from-[#3384B3] to-[#2563EB] hover:from-[#2563EB] hover:to-[#3384B3] text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/">
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </Button>
          
          <Button asChild variant="outline" className="border-[#3384B3] text-[#3384B3] hover:bg-[#3384B3] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
            <Link to="/blog">
              <Search className="w-5 h-5 mr-2" />
              Browse Blog
            </Link>
          </Button>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <Link to="/neighborhoods" className="flex items-center space-x-2 text-gray-600 hover:text-[#3384B3] transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Neighborhoods</span>
            </Link>
            <Link to="/how-it-works" className="flex items-center space-x-2 text-gray-600 hover:text-[#3384B3] transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm">How It Works</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-2 text-gray-600 hover:text-[#3384B3] transition-colors">
              <Home className="w-4 h-4" />
              <span className="text-sm">About Us</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-2 text-gray-600 hover:text-[#3384B3] transition-colors">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Contact</span>
            </Link>
            <Link to="/blog" className="flex items-center space-x-2 text-gray-600 hover:text-[#3384B3] transition-colors">
              <Search className="w-4 h-4" />
              <span className="text-sm">Blog</span>
            </Link>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <p className="text-gray-600 mb-2">Need help finding an apartment?</p>
          <p className="text-[#3384B3] font-semibold">
            Call us at <a href="tel:8553677368" className="hover:underline">855-FOR-RENT</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
