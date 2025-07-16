
import { MapPin, Building, Waves, TreePine, Car } from 'lucide-react';

const NeighborhoodsSection = () => {
  const cities = [
    {
      name: "Fort Lauderdale",
      description: "From downtown vibes to beachside escapes, we've got you covered.",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      neighborhoods: [
        { name: "Downtown", icon: Building, desc: "Urban living with restaurants & nightlife" },
        { name: "Las Olas", icon: Waves, desc: "Beachfront luxury and entertainment" },
        { name: "Victoria Park", icon: TreePine, desc: "Historic charm with tree-lined streets" },
        { name: "Flagler Village", icon: Car, desc: "Arts district with modern amenities" }
      ],
      highlights: ["Beach access", "Boating lifestyle", "Art galleries", "Fine dining"]
    },
    {
      name: "Miami",
      description: "Vibrant nightlife, luxury high-rises, or family-friendly suburbs — we'll help you find it.",
      image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?auto=format&fit=crop&w=800&q=80",
      neighborhoods: [
        { name: "Brickell", icon: Building, desc: "Financial district with luxury towers" },
        { name: "South Beach", icon: Waves, desc: "Iconic beach and Art Deco architecture" },
        { name: "Wynwood", icon: TreePine, desc: "Arts district with murals and galleries" },
        { name: "Coral Gables", icon: Car, desc: "Mediterranean-style family community" }
      ],
      highlights: ["World-class dining", "International culture", "Business hub", "Beach lifestyle"]
    }
  ];

  return (
    <section id="neighborhoods" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              <span className="text-[#3384B3]">Neighborhoods</span> We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From vibrant city centers to peaceful suburban communities, we know every corner 
              of South Florida and can help you find the perfect neighborhood for your lifestyle.
            </p>
            <div className="w-24 h-1 bg-[#3384B3] mx-auto rounded-full mt-6"></div>
          </div>

          {/* Cities */}
          <div className="space-y-16">
            {cities.map((city, cityIndex) => (
              <div key={city.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${cityIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative ${cityIndex % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={city.image}
                    alt={`${city.name} skyline`}
                    className="rounded-2xl shadow-2xl w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-3xl font-bold mb-2">{city.name}</h3>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span>South Florida</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={cityIndex % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{city.name}</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">{city.description}</p>

                  {/* Neighborhoods grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {city.neighborhoods.map((neighborhood) => (
                      <div key={neighborhood.name} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-[#3384B3] bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <neighborhood.icon className="w-4 h-4 text-[#3384B3]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-800">{neighborhood.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{neighborhood.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">What makes {city.name} special:</h4>
                    <div className="flex flex-wrap gap-2">
                      {city.highlights.map((highlight) => (
                        <span key={highlight} className="bg-[#A2CDDD] bg-opacity-30 text-[#3384B3] px-3 py-1 rounded-full text-sm font-medium">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-[#A2CDDD] border-opacity-30">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Need Help Choosing a Neighborhood?
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our local experts can help you understand commute times, school districts, amenities, 
                and the unique character of each area to find your perfect match.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#3384B3] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#2a6b91] transition-colors duration-200">
                  Schedule a Consultation
                </button>
                <button className="border-2 border-[#3384B3] text-[#3384B3] px-6 py-3 rounded-xl font-semibold hover:bg-[#3384B3] hover:text-white transition-colors duration-200">
                  Browse All Areas
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeighborhoodsSection;
