import { useState } from 'react';
import { MapPin, Compass, Users, Calendar } from 'lucide-react';

const destinationsData = {
  Europe: [
    { id: 1,  name: "Rome, Italy",             image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",  tours: 140, departures: 240, travelers: 15786 },
    { id: 2,  name: "Paris, France",            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",  tours: 140, departures: 240, travelers: 15786 },
    { id: 3,  name: "Switzerland",              image: "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?w=800&h=600&fit=crop", tours: 85,  departures: 156, travelers: 12453 },
    { id: 4,  name: "Scotland, UK",             image: "https://images.pexels.com/photos/23887010/pexels-photo-23887010.jpeg?w=800&h=600&fit=crop", tours: 110, departures: 230, travelers: 15786 },
    { id: 5,  name: "Athens, Greece",           image: "https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg?w=800&h=600&fit=crop", tours: 95,  departures: 180, travelers: 14320 },
    { id: 6,  name: "Istanbul, Turkey",         image: "https://images.pexels.com/photos/2381048/pexels-photo-2381048.jpeg?w=800&h=600&fit=crop", tours: 120, departures: 245, travelers: 18965 },
  ],
  Asia: [
    { id: 7,  name: "Bangkok, Thailand",        image: "https://images.pexels.com/photos/16786188/pexels-photo-16786188.jpeg?w=800&h=600&fit=crop", tours: 150, departures: 320, travelers: 25600 },
    { id: 8,  name: "Tokyo, Japan",             image: "https://images.pexels.com/photos/30944529/pexels-photo-30944529.jpeg?w=800&h=600&fit=crop", tours: 130, departures: 280, travelers: 22400 },
    { id: 9,  name: "Bali, Indonesia",          image: "https://images.pexels.com/photos/20775605/pexels-photo-20775605.jpeg?w=800&h=600&fit=crop", tours: 140, departures: 300, travelers: 24300 },
    { id: 10, name: "Dubai, UAE",               image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",  tours: 110, departures: 210, travelers: 19800 },
  ],
  "Middle East": [
    { id: 11, name: "Dubai, UAE",               image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",  tours: 110, departures: 210, travelers: 19800 },
    { id: 12, name: "Jerusalem, Israel",        image: "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?w=800&h=600&fit=crop",  tours: 75,  departures: 145, travelers: 12300 },
    { id: 13, name: "Petra, Jordan",            image: "https://images.pexels.com/photos/23124016/pexels-photo-23124016.jpeg?w=800&h=600&fit=crop", tours: 60,  departures: 120, travelers: 9800  },
    { id: 14, name: "Muscat, Oman",             image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop",  tours: 45,  departures: 95,  travelers: 7600  },
  ],
  Africa: [
    { id: 15, name: "Cairo, Egypt",             image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&h=600&fit=crop",  tours: 90,  departures: 175, travelers: 15400 },
    { id: 16, name: "Cape Town, S. Africa",     image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=600&fit=crop",  tours: 85,  departures: 160, travelers: 14200 },
    { id: 17, name: "Marrakech, Morocco",       image: "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&h=600&fit=crop",  tours: 70,  departures: 140, travelers: 11800 },
    { id: 18, name: "Zanzibar, Tanzania",       image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&h=600&fit=crop",  tours: 55,  departures: 110, travelers: 8900  },
  ],
  "North America": [
    { id: 19, name: "New York, USA",            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=600&fit=crop",  tours: 140, departures: 290, travelers: 23500 },
    { id: 20, name: "Los Angeles, USA",         image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&h=600&fit=crop",  tours: 125, departures: 260, travelers: 21300 },
    { id: 21, name: "Vancouver, Canada",        image: "https://images.unsplash.com/photo-1559511260-66a654ae982a?w=800&h=600&fit=crop",  tours: 95,  departures: 185, travelers: 16700 },
    { id: 22, name: "Cancun, Mexico",           image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800&h=600&fit=crop",  tours: 105, departures: 215, travelers: 18400 },
  ],
  Oceania: [
    { id: 23, name: "Sydney, Australia",        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=600&fit=crop",  tours: 100, departures: 195, travelers: 17200 },
    { id: 24, name: "Auckland, New Zealand",    image: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=800&h=600&fit=crop",  tours: 80,  departures: 155, travelers: 13800 },
    { id: 25, name: "Fiji Islands",             image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",  tours: 60,  departures: 125, travelers: 10500 },
    { id: 26, name: "Bora Bora, Fr. Polynesia", image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?w=800&h=600&fit=crop", tours: 45,  departures: 90,  travelers: 7800  },
  ],
};

// ─── Card ─────────────────────────────────────────────────────────────────────
function DestinationCard({ destination }) {
  return (
    <div className="dest-card relative rounded-2xl overflow-hidden shadow-md cursor-pointer"
      style={{ height: 300 }}>

      {/* Photo */}
      <img
        src={destination.image}
        alt={destination.name}
        loading="lazy"
        decoding="async"
        className="dest-img w-full h-full object-cover"
      />

      {/* Persistent dark-to-clear gradient so top badge is always readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60 pointer-events-none" />

      {/* ── Location badge — TOP ── */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5
        bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
        <MapPin size={13} className="text-white flex-shrink-0" strokeWidth={2.5} />
        <span className="text-white text-xs font-semibold tracking-wide leading-none">
          {destination.name}
        </span>
      </div>

      {/* ── Hover detail panel — slides up from bottom ── */}
      <div className="dest-panel absolute bottom-0 left-0 right-0
        bg-white/95 backdrop-blur-md px-5 py-4">
        <p className="text-gray-900 font-bold text-sm mb-3 truncate">{destination.name}</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {/* Tours */}
          <div className="flex flex-col items-center gap-1">
            <Compass size={15} className="text-blue-500" strokeWidth={2} />
            <span className="text-gray-900 font-bold text-sm leading-none">{destination.tours}</span>
            <span className="text-gray-400 text-[10px] leading-none">Tours</span>
          </div>
          {/* Departures */}
          <div className="flex flex-col items-center gap-1 border-x border-gray-200">
            <Calendar size={15} className="text-blue-500" strokeWidth={2} />
            <span className="text-gray-900 font-bold text-sm leading-none">{destination.departures}</span>
            <span className="text-gray-400 text-[10px] leading-none">Departures</span>
          </div>
          {/* Travelers */}
          <div className="flex flex-col items-center gap-1">
            <Users size={15} className="text-blue-500" strokeWidth={2} />
            <span className="text-gray-900 font-bold text-sm leading-none">
              {destination.travelers >= 1000
                ? `${(destination.travelers / 1000).toFixed(1)}k`
                : destination.travelers}
            </span>
            <span className="text-gray-400 text-[10px] leading-none">Guests</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function FeaturedDestinations() {
  const [activeTab, setActiveTab]   = useState('Europe');
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = Object.keys(destinationsData);
  const all  = destinationsData[activeTab];
  const PER_PAGE   = 4;
  const totalPages = Math.ceil(all.length / PER_PAGE);
  const visible    = all.slice(currentPage * PER_PAGE, (currentPage + 1) * PER_PAGE);

  const handleTab = (tab) => { setActiveTab(tab); setCurrentPage(0); };

  return (
    <>
      <style>{`
        /* Card image zoom */
        .dest-card { transition: box-shadow 0.3s ease; }
        .dest-card:hover { box-shadow: 0 24px 56px rgba(0,0,0,0.18); }
        .dest-img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .dest-card:hover .dest-img { transform: scale(1.08); }

        /* Hover panel: hidden below card, slides up on hover */
        .dest-panel {
          transform: translateY(100%);
          opacity: 0;
          transition: transform 0.38s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease;
        }
        .dest-card:hover .dest-panel {
          transform: translateY(0);
          opacity: 1;
        }

        /* Tab scroll on small screens */
        .tabs-scroll {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
        }
        .tabs-scroll::-webkit-scrollbar { display: none; }
        .tab-btn { white-space: nowrap; flex-shrink: 0; }
      `}</style>

      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6"
              style={{ letterSpacing: "-0.02em" }}>
              Featured Destinations
            </h2>

            {/* Tabs */}
            <div className="tabs-scroll justify-center sm:justify-center">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTab(tab)}
                  className={`tab-btn px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-250 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
            {visible.map((d) => (
              <DestinationCard key={d.id} destination={d} />
            ))}
          </div>

          {/* Pagination dots */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  aria-label={`Page ${i + 1}`}
                  style={{
                    height: 8,
                    width: currentPage === i ? 28 : 8,
                    borderRadius: 99,
                    background: currentPage === i ? '#2563eb' : '#d1d5db',
                    transition: 'width 0.3s ease, background 0.3s ease',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}