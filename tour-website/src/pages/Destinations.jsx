import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1590490358391-6dc946b4d6a6?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 22,
      slug: "bangladesh",
    },
    {
      id: 2,
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 13,
      slug: "thailand",
    },
    {
      id: 3,
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 12,
      slug: "europe",
    },
    {
      id: 4,
      name: "Cambodia",
      image:
        "https://images.unsplash.com/photo-1582719478250-d5fc7d8a09f3?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 9,
      slug: "cambodia",
    },
    {
      id: 5,
      name: "Nepal",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 9,
      slug: "nepal",
    },
    {
      id: 6,
      name: "Indonesia",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 7,
      slug: "indonesia",
    },
    {
      id: 7,
      name: "Malaysia",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 7,
      slug: "malaysia",
    },
    {
      id: 8,
      name: "Bhutan",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 6,
      slug: "bhutan",
    },
    {
      id: 9,
      name: "Vietnam",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 6,
      slug: "vietnam",
    },
    {
      id: 10,
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 6,
      slug: "dubai",
    },
    {
      id: 11,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 5,
      slug: "maldives",
    },
    {
      id: 12,
      name: "Singapore",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop&auto=format&fit=crop&h=600&w=800&q=80&bg=0a3cff",
      tourCount: 5,
      slug: "singapore",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="relative h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&h=600&fit=crop&auto=format&bg=0a3cff')",
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
            <Link
              to="/"
              className="text-sky-400 hover:text-sky-300 transition-colors font-medium"
            >
              Home
            </Link>
            <span className="text-white">→</span>
            <span className="text-white">Destinations</span>
          </div>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/country/${destination.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer block h-full"
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
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold text-sm shadow-lg bg-rose-500 text-white">
                  {destination.tourCount} Tours
                </div>

                {/* Destination Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm font-medium mb-1 text-sky-400">
                    Travel To
                  </p>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {destination.name}
                  </h3>

                  {/* Quick Info */}
                  <div className="space-y-2 text-xs text-gray-200">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>
                        {destination.slug.charAt(0).toUpperCase() +
                          destination.slug.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-rose-200/20 group-hover:bg-rose-300/30 transition-all duration-300 pointer-events-none"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}