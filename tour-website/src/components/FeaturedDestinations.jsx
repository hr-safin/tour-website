import { useState } from 'react';
import { MapPin } from 'lucide-react';

const destinationsData = {
  Europe: [
    {
      id: 1,
      name: "Rome, Italy",
      image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
      tours: 140,
      departures: 240,
      travelers: 15786
    },
    {
      id: 2,
      name: "Paris, France",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
      tours: 140,
      departures: 240,
      travelers: 15786
    },
    {
      id: 3,
      name: "Switzerland",
      image: "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg",
      tours: 85,
      departures: 156,
      travelers: 12453
    },
    {
      id: 4,
      name: "Scotland, UK",
      image: "https://images.pexels.com/photos/23887010/pexels-photo-23887010.jpeg",
      tours: 110,
      departures: 230,
      travelers: 15786
    },
    {
      id: 5,
      name: "Athens, Greece",
      image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg",
      tours: 95,
      departures: 180,
      travelers: 14320
    },
    {
      id: 6,
      name: "Istanbul, Turkey",
      image: "https://images.pexels.com/photos/2381048/pexels-photo-2381048.jpeg",
      tours: 120,
      departures: 245,
      travelers: 18965
    }
  ],
  Asia: [
    {
      id: 7,
      name: "Bangkok, Thailand",
      image: "https://images.pexels.com/photos/16786188/pexels-photo-16786188.jpeg",
      tours: 150,
      departures: 320,
      travelers: 25600
    },
    {
      id: 8,
      name: "Tokyo, Japan",
      image: "https://images.pexels.com/photos/30944529/pexels-photo-30944529.jpeg",
      tours: 130,
      departures: 280,
      travelers: 22400
    },
    {
      id: 9,
      name: "Bali, Indonesia",
      image: "https://images.pexels.com/photos/20775605/pexels-photo-20775605.jpeg",
      tours: 140,
      departures: 300,
      travelers: 24300
    },
    {
      id: 10,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      tours: 110,
      departures: 210,
      travelers: 19800
    }
  ],
  "Middle East": [
    {
      id: 11,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      tours: 110,
      departures: 210,
      travelers: 19800
    },
    {
      id: 12,
      name: "Jerusalem, Israel",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&h=600&fit=crop",
      tours: 75,
      departures: 145,
      travelers: 12300
    },
    {
      id: 13,
      name: "Petra, Jordan",
      image: "https://images.pexels.com/photos/23124016/pexels-photo-23124016.jpeg",
      tours: 60,
      departures: 120,
      travelers: 9800
    },
    {
      id: 14,
      name: "Muscat, Oman",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
      tours: 45,
      departures: 95,
      travelers: 7600
    }
  ],
  Africa: [
    {
      id: 15,
      name: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",
      tours: 90,
      departures: 175,
      travelers: 15400
    },
    {
      id: 16,
      name: "Cape Town, South Africa",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop",
      tours: 85,
      departures: 160,
      travelers: 14200
    },
    {
      id: 17,
      name: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop",
      tours: 70,
      departures: 140,
      travelers: 11800
    },
    {
      id: 18,
      name: "Zanzibar, Tanzania",
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop",
      tours: 55,
      departures: 110,
      travelers: 8900
    }
  ],
  "North America": [
    {
      id: 19,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
      tours: 140,
      departures: 290,
      travelers: 23500
    },
    {
      id: 20,
      name: "Los Angeles, USA",
      image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop",
      tours: 125,
      departures: 260,
      travelers: 21300
    },
    {
      id: 21,
      name: "Vancouver, Canada",
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&h=600&fit=crop",
      tours: 95,
      departures: 185,
      travelers: 16700
    },
    {
      id: 22,
      name: "Cancun, Mexico",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop",
      tours: 105,
      departures: 215,
      travelers: 18400
    }
  ],
  Oceania: [
    {
      id: 23,
      name: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
      tours: 100,
      departures: 195,
      travelers: 17200
    },
    {
      id: 24,
      name: "Auckland, New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop",
      tours: 80,
      departures: 155,
      travelers: 13800
    },
    {
      id: 25,
      name: "Fiji Islands",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      tours: 60,
      departures: 125,
      travelers: 10500
    },
    {
      id: 26,
      name: "Bora Bora, French Polynesia",
      image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg",
      tours: 45,
      departures: 90,
      travelers: 7800
    }
  ]
};

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState('Europe');
  const [currentPage, setCurrentPage] = useState(0);
  
  const tabs = Object.keys(destinationsData);
  const currentDestinations = destinationsData[activeTab];
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(currentDestinations.length / itemsPerPage);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0); // Reset to first page when changing tabs
  };

  const visibleDestinations = currentDestinations.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Featured Destinations
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentPage === index ? 'w-8 bg-blue-600' : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DestinationCard({ destination }) {
  return (
    <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group h-80">
      
      {/* Image */}
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

      {/* Title */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 z-10 pointer-events-none">
        <MapPin size={18} className="text-white flex-shrink-0" />
        <h3 className="text-white font-bold text-lg">
          {destination.name}
        </h3>
      </div>

      {/* Hover Info Panel */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          bg-white/95 backdrop-blur-md px-6 py-4 text-sm text-gray-700
          translate-y-full opacity-0
          group-hover:translate-y-0 group-hover:opacity-100
          transition-all duration-500
        "
      >
        <p>
          <span className="font-semibold text-gray-900">{destination.tours}</span> tours |{" "}
          <span className="font-semibold text-gray-900">{destination.departures}</span> departures
        </p>
        <p>
          <span className="font-semibold text-gray-900">
            {destination.travelers.toLocaleString()}
          </span>{" "}
          guests travelled
        </p>
      </div>
    </div>
  );
}