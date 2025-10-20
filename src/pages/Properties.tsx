import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, Bed, Bath, Square, Star, Search, Filter, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SurveyModal from '@/components/SurveyModal';
import PropertyGallery from '@/components/PropertyGallery';

const Properties = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedBeds, setSelectedBeds] = useState('all');
  const [selectedBudget, setSelectedBudget] = useState('all');
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryProperty, setGalleryProperty] = useState(null);

  const properties = [
    {
      id: 1,
      title: "Luxury Brickell High-Rise",
      location: "Brickell, Miami",
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500&h=400&fit=crop",
      price: "$2,800",
      priceNum: 2800,
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
      images: [
        "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1494526585095-c41746248156?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&h=400&fit=crop",
      price: "$2,200",
      priceNum: 2200,
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
      images: [
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=500&h=400&fit=crop",
      price: "$2,000",
      priceNum: 2000,
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
      images: [
        "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1574643156929-51fa098b0394?w=500&h=400&fit=crop",
      price: "$3,100",
      priceNum: 3100,
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
      images: [
        "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600563440091-6b7f0e8d1f1b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600563438802-8d89a5e5f1e0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600563438984-cc3f2b3e9b0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600563438960-88f8d17d9ab3?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600563438938-a9a27216b4f5?w=500&h=400&fit=crop",
      price: "$2,500",
      priceNum: 2500,
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
      images: [
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600210492507-c1b7c5d26bdc?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500&h=400&fit=crop",
      price: "$3,300",
      priceNum: 3300,
      originalPrice: "$3,700",
      beds: 3,
      baths: 2,
      sqft: 1600,
      rating: 4.8,
      features: ["Luxury Amenities", "Shopping Center", "Pool", "Gym"],
      available: true
    },
    {
      id: 7,
      title: "Penthouse Ocean View",
      location: "South Beach, Miami",
      images: [
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509782-20d39509f26d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047509952-c1dded39ce6b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047510029-3f4c5c7f24e1?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047510179-b0e06ea6959e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600047510273-f8f5d8b32f4e?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500&h=400&fit=crop",
      price: "$4,500",
      priceNum: 4500,
      originalPrice: "$5,200",
      beds: 3,
      baths: 3,
      sqft: 2000,
      rating: 4.9,
      features: ["Ocean View", "Private Terrace", "Concierge", "Spa Access"],
      available: true
    },
    {
      id: 8,
      title: "Cozy West Palm Beach Studio",
      location: "West Palm Beach",
      images: [
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600121848675-4e90e0c0e6d5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600121848747-1e6f3bda9b86?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600121848823-bbf6b4c1e1e8?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500&h=400&fit=crop",
      price: "$2,100",
      priceNum: 2100,
      originalPrice: "$2,400",
      beds: 1,
      baths: 1,
      sqft: 750,
      rating: 4.5,
      features: ["City View", "Pool", "Near Downtown", "Pet-Friendly"],
      available: true
    },
    {
      id: 9,
      title: "Boca Raton Resort Living",
      location: "Boca Raton, Palm Beaches",
      images: [
        "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600132806812-6b7ddbc7c3e9?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600132807239-6b3d8e1b6b6e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600132807442-4e3e1b7e6d5d?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&h=400&fit=crop",
      price: "$3,800",
      priceNum: 3800,
      originalPrice: "$4,300",
      beds: 2,
      baths: 2,
      sqft: 1500,
      rating: 4.8,
      features: ["Golf Course View", "Resort Pool", "Spa", "Tennis Court"],
      available: true
    },
    {
      id: 10,
      title: "Delray Beach Paradise",
      location: "Delray Beach, Palm Beaches",
      images: [
        "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688960-e37a1b4a2d2b?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=500&h=400&fit=crop",
      price: "$2,900",
      priceNum: 2900,
      originalPrice: "$3,300",
      beds: 2,
      baths: 2,
      sqft: 1300,
      rating: 4.7,
      features: ["Beach Access", "Rooftop Deck", "BBQ Area", "Parking"],
      available: true
    },
    {
      id: 11,
      title: "Wynwood Arts District Loft",
      location: "Wynwood, Miami",
      images: [
        "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688069-111ceda5c17d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688154-2c43df5e2b16?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688226-f1b08d3b5a1e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688342-8b5b5f3e9d4d?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500&h=400&fit=crop",
      price: "$2,600",
      priceNum: 2600,
      originalPrice: "$3,000",
      beds: 1,
      baths: 1,
      sqft: 950,
      rating: 4.6,
      features: ["Art Gallery", "Exposed Brick", "High Ceilings", "Trendy Area"],
      available: true
    },
    {
      id: 12,
      title: "Sunny Isles Beachfront Tower",
      location: "Sunny Isles, Miami",
      images: [
        "https://images.unsplash.com/photo-1600607688560-f7e9f19e5c6f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688656-a5e7e5f9d0f6?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688742-5c7e5f9d1e0e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600607688828-5c7e5f9d1f7e?w=800&h=600&fit=crop"
      ],
      image: "https://images.unsplash.com/photo-1600607688560-f7e9f19e5c6f?w=500&h=400&fit=crop",
      price: "$5,200",
      priceNum: 5200,
      originalPrice: "$6,000",
      beds: 3,
      baths: 3,
      sqft: 2200,
      rating: 4.9,
      features: ["Direct Beach Access", "Infinity Pool", "Valet", "Smart Home"],
      available: true
    }
  ];

  const locations = ['all', 'Miami', 'Fort Lauderdale', 'The Palm Beaches'];
  const bedOptions = ['all', '1', '2', '3'];
  const budgetOptions = [
    { value: 'all', label: 'All Budgets' },
    { value: '2000-3000', label: '$2,000 - $3,000' },
    { value: '3000-4000', label: '$3,000 - $4,000' },
    { value: '4000-5000', label: '$4,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' }
  ];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesLocation = selectedLocation === 'all';
    if (!matchesLocation) {
      if (selectedLocation === 'The Palm Beaches') {
        matchesLocation = property.location.includes('Palm Beaches') || 
                          property.location.includes('West Palm Beach') || 
                          property.location.includes('Boca Raton') || 
                          property.location.includes('Delray Beach');
      } else {
        matchesLocation = property.location.includes(selectedLocation);
      }
    }
    
    const matchesBeds = selectedBeds === 'all' || property.beds.toString() === selectedBeds;
    
    let matchesBudget = true;
    if (selectedBudget !== 'all') {
      const [min, max] = selectedBudget.split('-').map(Number);
      matchesBudget = property.priceNum >= min && property.priceNum <= max;
    }
    
    return matchesSearch && matchesLocation && matchesBeds && matchesBudget;
  });

  const handleInquire = (property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleImageClick = (property) => {
    setGalleryProperty(property);
    setGalleryOpen(true);
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
            Explore our curated selection of premium apartments across Miami, Fort Lauderdale & The Palm Beaches. 
            Find your perfect home with our 100% free service.
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
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

              {/* Budget Filter */}
              <select
                value={selectedBudget}
                onChange={(e) => setSelectedBudget(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent bg-white"
              >
                {budgetOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
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
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(property)}
              >
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gallery Indicator */}
                <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  {property.images.length} Photos
                </div>
                
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
                <a href="tel:8663677368">
                  <Button 
                    className="w-full bg-[#F68036] hover:bg-[#F68036]/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now - FREE
                  </Button>
                </a>
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

      {galleryProperty && (
        <PropertyGallery
          isOpen={galleryOpen}
          onClose={() => setGalleryOpen(false)}
          propertyTitle={galleryProperty.title}
          images={galleryProperty.images}
        />
      )}
    </div>
  );
};

export default Properties;
