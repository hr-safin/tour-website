import React, { useState } from 'react';

const destinationsData = {
  Europe: [
    {
      id: 1,
      name: "Switzerland",
      image: "https://images.unsplash.com/photo-1531583959375-fab3cd498f08?w=800&h=600&fit=crop",
      tours: 85,
      departures: 156,
      travelers: 12453
    },
    {
      id: 2,
      name: "Scotland, UK",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=800&h=600&fit=crop",
      tours: 110,
      departures: 230,
      travelers: 15786
    },
    {
      id: 3,
      name: "Athens, Greece",
      image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&h=600&fit=crop",
      tours: 95,
      departures: 180,
      travelers: 14320
    },
    {
      id: 4,
      name: "Istanbul, Turkey",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&h=600&fit=crop",
      tours: 120,
      departures: 245,
      travelers: 18965
    }
  ],
  Asia: [
    {
      id: 5,
      name: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=800&h=600&fit=crop",
      tours: 150,
      departures: 320,
      travelers: 25600
    },
    {
      id: 6,
      name: "Tokyo, Japan",
      image: "https://images.unsplash.com/photo-1540959375944-7049f642e9a0?w=800&h=600&fit=crop",
      tours: 130,
      departures: 280,
      travelers: 22400
    },
    {
      id: 7,
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop",
      tours: 140,
      departures: 300,
      travelers: 24300
    },
    {
      id: 8,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      tours: 110,
      departures: 210,
      travelers: 19800
    }
  ],
  "Middle East": [
    {
      id: 9,
      name: "Dubai, UAE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      tours: 110,
      departures: 210,
      travelers: 19800
    },
    {
      id: 10,
      name: "Jerusalem, Israel",
      image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&h=600&fit=crop",
      tours: 75,
      departures: 145,
      travelers: 12300
    },
    {
      id: 11,
      name: "Petra, Jordan",
      image: "https://images.unsplash.com/photo-1585873691162-5c7d2bb09e8b?w=800&h=600&fit=crop",
      tours: 60,
      departures: 120,
      travelers: 9800
    },
    {
      id: 12,
      name: "Muscat, Oman",
      image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",
      tours: 45,
      departures: 95,
      travelers: 7600
    }
  ],
  Africa: [
    {
      id: 13,
      name: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",
      tours: 90,
      departures: 175,
      travelers: 15400
    },
    {
      id: 14,
      name: "Cape Town, South Africa",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop",
      tours: 85,
      departures: 160,
      travelers: 14200
    },
    {
      id: 15,
      name: "Marrakech, Morocco",
      image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop",
      tours: 70,
      departures: 140,
      travelers: 11800
    },
    {
      id: 16,
      name: "Zanzibar, Tanzania",
      image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop",
      tours: 55,
      departures: 110,
      travelers: 8900
    }
  ],
  "North America": [
    {
      id: 17,
      name: "New York, USA",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",
      tours: 140,
      departures: 290,
      travelers: 23500
    },
    {
      id: 18,
      name: "Los Angeles, USA",
      image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop",
      tours: 125,
      departures: 260,
      travelers: 21300
    },
    {
      id: 19,
      name: "Vancouver, Canada",
      image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&h=600&fit=crop",
      tours: 95,
      departures: 185,
      travelers: 16700
    },
    {
      id: 20,
      name: "Cancun, Mexico",
      image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop",
      tours: 105,
      departures: 215,
      travelers: 18400
    }
  ],
  Oceania: [
    {
      id: 21,
      name: "Sydney, Australia",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",
      tours: 100,
      departures: 195,
      travelers: 17200
    },
    {
      id: 22,
      name: "Auckland, New Zealand",
      image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop",
      tours: 80,
      departures: 155,
      travelers: 13800
    },
    {
      id: 23,
      name: "Fiji Islands",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
      tours: 60,
      departures: 125,
      travelers: 10500
    },
    {
      id: 24,
      name: "Bora Bora, French Polynesia",
      image: "https://images.unsplash.com/photo-1589197331516-6c0f5e24478a?w=800&h=600&fit=crop",
      tours: 45,
      departures: 90,
      travelers: 7800
    }
  ]
};

export default function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState('Europe');
  
  const tabs = Object.keys(destinationsData);
  const currentDestinations = destinationsData[activeTab];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
            Featured Destinations
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                  activeTab === tab
                    ? 'text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
                style={{
                  backgroundColor: activeTab === tab ? '#1D4ED8' : undefined
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeTab === tab ? 'w-8' : 'w-2 bg-gray-300'
                }`}
                style={{
                  backgroundColor: activeTab === tab ? '#1D4ED8' : undefined
                }}
              />
            ))}
          </div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6 relative -mt-12">
                {/* Location Name with Icon */}
                <div className="flex items-center gap-2 mb-3">
                  <svg 
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: '#1D4ED8' }}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-xl font-bold text-gray-900">
                    {destination.name}
                  </h3>
                </div>

                {/* Stats */}
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold text-gray-900">{destination.tours}</span> tours | <span className="font-semibold text-gray-900">{destination.departures}</span> departure
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">{destination.travelers.toLocaleString()}</span> guest travelled.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Progress Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTab === tab ? 'w-8' : 'w-2 bg-gray-300'
              }`}
              style={{
                backgroundColor: activeTab === tab ? '#1D4ED8' : undefined
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}