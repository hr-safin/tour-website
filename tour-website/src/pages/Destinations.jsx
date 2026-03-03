import React from "react";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Bangladesh",
      image: "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=800&h=600&fit=crop",
      tourCount: 22,
      slug: "bangladesh"
    },
    {
      id: 2,
      name: "Thailand",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&h=600&fit=crop",
      tourCount: 13,
      slug: "thailand"
    },
    {
      id: 3,
      name: "Europe",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&h=600&fit=crop",
      tourCount: 12,
      slug: "europe"
    },
    {
      id: 4,
      name: "Cambodia",
      image: "https://images.unsplash.com/photo-1559557965-2e233d6e2c70?w=800&h=600&fit=crop",
      tourCount: 9,
      slug: "cambodia"
    },
    {
      id: 5,
      name: "Nepal",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      tourCount: 9,
      slug: "nepal"
    },
    {
      id: 6,
      name: "Indonesia",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=600&fit=crop",
      tourCount: 7,
      slug: "indonesia"
    },
    {
      id: 7,
      name: "Malaysia",
      image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop",
      tourCount: 7,
      slug: "malaysia"
    },
    {
      id: 8,
      name: "Bhutan",
      image: "https://images.unsplash.com/photo-1563535905-7d4b3bdbb87f?w=800&h=600&fit=crop",
      tourCount: 6,
      slug: "bhutan"
    },
    {
      id: 9,
      name: "Vietnam",
      image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&h=600&fit=crop",
      tourCount: 6,
      slug: "vietnam"
    },
    {
      id: 10,
      name: "Dubai",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop",
      tourCount: 6,
      slug: "dubai"
    },
    {
      id: 11,
      name: "Maldives",
      image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop",
      tourCount: 5,
      slug: "maldives"
    },
    {
      id: 12,
      name: "Singapore",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=600&fit=crop",
      tourCount: 5,
      slug: "singapore"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=600&fit=crop')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Top Destinations Tour Packages From Bangladesh
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm md:text-base mt-6">
            <a 
              href="/" 
              style={{ color: '#1D4ED8' }}
              className="hover:underline font-medium"
            >
              Home
            </a>
            <span>→</span>
            <span className="text-white">Top Destinations Tour Packages From Bangladesh</span>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <a
              key={destination.id}
              href={`/country/${destination.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer block"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                {/* Tour Count Badge */}
                <div 
                  className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm shadow-lg"
                  style={{ backgroundColor: '#F59E0B', color: '#FFFFFF' }}
                >
                  {destination.tourCount} Tour
                </div>
                
                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p 
                    className="text-sm font-medium mb-1"
                    style={{ color: '#9BBEFF' }}
                  >
                    Travel To
                  </p>
                  <h3 className="text-3xl font-bold text-white">
                    {destination.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}