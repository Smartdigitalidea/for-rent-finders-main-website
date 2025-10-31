import { useState, useEffect } from 'react';
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
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProperties();
    setupRealtimeSubscription();
  }, []);

  const fetchProperties = async () => {
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error } = await supabase
        .from('properties')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform database properties to match the expected format
      const transformedProperties = (data || []).map(prop => ({
        id: prop.id,
        title: prop.title,
        location: prop.location,
        images: prop.images || [],
        image: prop.images?.[0] || '',
        price: prop.price,
        priceNum: prop.price_num,
        originalPrice: prop.original_price,
        beds: prop.beds,
        baths: prop.baths,
        sqft: prop.sqft,
        rating: 4.7, // Default rating
        features: prop.amenities || [],
        available: true
      }));
      
      setProperties(transformedProperties);
    } catch (error) {
      console.error('Error fetching properties:', error);
    } finally {
      setLoading(false);
    }
  };

  const setupRealtimeSubscription = async () => {
    const { supabase } = await import('@/integrations/supabase/client');
    
    const channel = supabase
      .channel('properties_public_changes')
      .on('postgres_changes', {
        event: '*',
        schema: 'public',
        table: 'properties',
        filter: 'status=eq.published'
      }, () => {
        console.log('Property updated, refreshing...');
        fetchProperties();
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };
  const locations = ['all', 'Miami', 'Fort Lauderdale', 'The Palm Beaches'];
  const bedOptions = ['all', '1', '2', '3'];
  const budgetOptions = [{
    value: 'all',
    label: 'All Budgets'
  }, {
    value: '2000-3000',
    label: '$2,000 - $3,000'
  }, {
    value: '3000-4000',
    label: '$3,000 - $4,000'
  }, {
    value: '4000-5000',
    label: '$4,000 - $5,000'
  }, {
    value: '5000-10000',
    label: '$5,000 - $10,000'
  }];
  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase());
    let matchesLocation = selectedLocation === 'all';
    if (!matchesLocation) {
      if (selectedLocation === 'The Palm Beaches') {
        matchesLocation = property.location.includes('Palm Beaches') || property.location.includes('West Palm Beach') || property.location.includes('Boca Raton') || property.location.includes('Delray Beach');
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
  const handleInquire = property => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };
  const handleImageClick = property => {
    setGalleryProperty(property);
    setGalleryOpen(true);
  };
  return <div className="min-h-screen">
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
                <input type="text" placeholder="Search properties..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent" />
              </div>

              {/* Location Filter */}
              <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent">
                {locations.map(location => <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>)}
              </select>

              {/* Bedrooms Filter */}
              <select value={selectedBeds} onChange={e => setSelectedBeds(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent">
                {bedOptions.map(beds => <option key={beds} value={beds}>
                    {beds === 'all' ? 'All Bedrooms' : `${beds} Bed${beds !== '1' ? 's' : ''}`}
                  </option>)}
              </select>

              {/* Budget Filter */}
              <select value={selectedBudget} onChange={e => setSelectedBudget(e.target.value)} className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F68036] focus:border-transparent bg-white">
                {budgetOptions.map(option => <option key={option.value} value={option.value}>
                    {option.label}
                  </option>)}
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
          {filteredProperties.map(property => <article key={property.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              {/* Property Image */}
              <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => handleImageClick(property)}>
                <img src={property.image} alt={property.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
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
                {property.available && <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Available
                  </div>}
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
                  {property.features.slice(0, 3).map((feature, idx) => <span key={idx} className="bg-[#F68036]/10 text-[#F68036] px-3 py-1 rounded-full text-xs font-medium">
                      {feature}
                    </span>)}
                </div>

                {/* CTA Button */}
                <a href="tel:8663677368">
                  <Button className="w-full bg-[#F68036] hover:bg-[#F68036]/90 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now - FREE
                  </Button>
                </a>
              </div>
            </article>)}
        </section>

        {/* No Results Message */}
        {filteredProperties.length === 0 && <div className="text-center py-16">
            <div className="text-6xl mb-4">🏠</div>
            <h3 className="text-2xl font-bold text-[#232C5C] mb-4">No Properties Found</h3>
            <p className="text-[#232C5C]/70 mb-6">
              Try adjusting your search criteria or contact us for personalized assistance.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="bg-[#F68036] hover:bg-[#F68036]/90 text-white px-8 py-3 rounded-lg font-semibold">
              Get Personalized Help
            </Button>
          </div>}

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
            <Button onClick={() => setIsModalOpen(true)} variant="outline" className="border-2 border-white hover:bg-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 text-stone-950">
              Get Personalized Help - FREE
            </Button>
          </div>
        </section>
      </main>

      <Footer />

      <SurveyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} city={selectedProperty?.location || 'Miami'} />

      {galleryProperty && <PropertyGallery isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} propertyTitle={galleryProperty.title} images={galleryProperty.images} />}
    </div>;
};
export default Properties;