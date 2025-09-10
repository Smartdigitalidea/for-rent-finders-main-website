import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Star, Search, Filter, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SurveyModal from '@/components/SurveyModal';

const Properties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBeds, setSelectedBeds] = useState('all');

  const properties = [
    {
      id: 1,
      title: "Luxury Brickell High-Rise",
      location: "Brickell, Miami",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
      price: "$2,800",
      originalPrice: "$3,200",
      beds: 2,
      baths: 2,
      sqft: 1200,
      rating: 4.8,
      features: ["Pool", "Gym", "Concierge", "Bay Views"],
      available: true
    },
    {
      id: 2,
      title: "Beachfront Paradise",
      location: "Las Olas, Fort Lauderdale",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=400&fit=crop",
      price: "$2,200",
      originalPrice: "$2,600",
      beds: 1,
      baths: 1,
      sqft: 900,
      rating: 4.9,
      features: ["Beach Access", "Pool", "Parking", "Balcony"],
      available: true
    },
    {
      id: 3,
      title: "Modern Downtown Loft",
      location: "Downtown, Fort Lauderdale",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      price: "$1,900",
      originalPrice: "$2,300",
      beds: 1,
      baths: 1,
      sqft: 800,
      rating: 4.7,
      features: ["Rooftop", "Gym", "Pet-Friendly", "Workspace"],
      available: true
    },
    {
      id: 4,
      title: "Waterfront Marina View",
      location: "Marina Bay, Fort Lauderdale",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&h=400&fit=crop",
      price: "$3,100",
      originalPrice: "$3,500",
      beds: 2,
      baths: 2,
      sqft: 1400,
      rating: 4.9,
      features: ["Marina View", "Pool", "Fitness Center", "Boat Dock"],
      available: true
    },
    {
      id: 5,
      title: "Historic Coral Gables Charm",
      location: "Coral Gables, Miami",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=500&h=400&fit=crop",
      price: "$2,500",
      originalPrice: "$2,800",
      beds: 2,
      baths: 1,
      sqft: 1100,
      rating: 4.6,
      features: ["Historic Building", "Garden", "Walkable Area", "Charm"],
      available: true
    },
    {
      id: 6,
      title: "Modern Aventura Luxury",
      location: "Aventura, Miami",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=400&fit=crop",
      price: "$3,300",
      originalPrice: "$3,700",
      beds: 3,
      baths: 2,
      sqft: 1600,
      rating: 4.8,
      features: ["Luxury Amenities", "Shopping Center", "Pool", "Gym"],
      available: true
    }
  ];

  const locations = ['all', 'Miami', 'Fort Lauderdale', 'Brickell', 'Las Olas', 'Downtown', 'Coral Gables', 'Aventura'];
  const bedOptions = ['all', '1', '2', '3'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation === 'all' || property.location.includes(selectedLocation);
    const matchesBeds = selectedBeds === 'all' || property.beds.toString() === selectedBeds;
    
    return matchesSearch && matchesLocation && matchesBeds;
  });

  const handleInquire = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-32 pb-20 container mx-auto px-4">
        {/* Page Header */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#232C5C] mb-6">
            Available <span className="text-[#F68036]">Properties</span>
          </h1>
          <p className="text-xl text-[#232C5C] max-w-3xl mx-auto leading-relaxed">
            Explore our curated selection of premium apartments across Miami and Fort Lauderdale. 
            Find your perfect home with our 100% free service.
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search Input */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent"
                />
              </div>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>

              {/* Bedrooms Filter */}
              <select
                value={selectedBeds}
                onChange={(e) => setSelectedBeds(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent"
              >
                {bedOptions.map(beds => (
                  <option key={beds} value={beds}>
                    {beds === 'all' ? 'All Bedrooms' : `${beds} Bed${beds !== '1' ? 's' : ''}`}
                  </option>
                ))}
              </select>

              {/* Results Count */}
              <div className="flex items-center justify-center px-4 py-3 bg-gray-50 rounded-lg">
                <span className="text-[#232C5C] font-medium">
                  {filteredProperties.length} Properties
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <article key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              {/* Property Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#F68036] fill-current" />
                  <span className="text-sm font-semibold text-[#232C5C]">{property.rating}</span>
                </div>

                {/* Available Badge */}
                {property.available && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Available
                  </div>
                )}
              </div>

              {/* Property Content */}
              <div className="p-6">
                {/* Title and Location */}
                <div className="mb-4">
                  <h2 className="text-xl font-bold text-[#232C5C] mb-2 group-hover:text-[#F68036] transition-colors">
                    {property.title}
                  </h2>
                  <div className="flex items-center text-[#232C5C]/70">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-[#F68036]">{property.price}</span>
                  <span className="text-lg text-gray-500 line-through">{property.originalPrice}</span>
                  <span className="text-sm text-white bg-green-500 px-2 py-1 rounded-full font-semibold">
                    Save ${parseInt(property.originalPrice.replace('$', '').replace(',', '')) - parseInt(property.price.replace('$', '').replace(',', ''))}
                  </span>
                </div>

                {/* Property Details */}
                <div className="flex items-center gap-4 mb-4 text-sm text-[#232C5C]/70">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Bed</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Bath</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-[#F68036]/10 text-[#F68036] px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => handleInquire(property)}
                  className="w-full bg-[#F68036] hover:bg-[#F68036]/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Inquire Now - FREE
                </Button>
              </div>
            </article>
          ))}
        </section>

        {/* No Results Message */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-[#232C5C] mb-4">No Properties Found</h3>
            <p className="text-[#232C5C]/70 mb-6">
              Try adjusting your search criteria or contact us for personalized assistance.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="bg-[#F68036] hover:bg-[#F68036]/90 text-white px-8 py-3 rounded-lg font-semibold"
            >
              Get Personalized Help
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#F68036] to-[#F68036]/90 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Our local experts can find you the perfect apartment that matches your exact needs. 
              Get personalized recommendations in 24 hours!
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#F68036] px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
            >
              Get Personalized Help - FREE
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <SurveyModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        city={selectedProperty?.location || 'Miami'}
      />
    </div>
  );
};

export default Properties;
