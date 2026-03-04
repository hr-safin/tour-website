import { MapPin, Phone, ArrowRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "Maldives Beach Paradise",
    location: "Maldives",
    days: "05 Days",
    price: "৳95,000",
    hot: true,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    title: "Bali Paradise Tour",
    location: "Indonesia",
    days: "07 Days",
    price: "৳1,20,000",
    hot: true,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Phuket & Krabi Island",
    location: "Thailand",
    days: "08 Days",
    price: "৳1,10,000",
    hot: false,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Dubai Luxury Experience",
    location: "UAE",
    days: "06 Days",
    price: "৳1,65,000",
    hot: true,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Switzerland Alpine Tour",
    location: "Switzerland",
    days: "09 Days",
    price: "৳2,40,000",
    hot: false,
    image: "https://images.pexels.com/photos/685766/pexels-photo-685766.jpeg",
  },
  {
    id: 6,
    title: "Ramadan Umrah Package",
    location: "Saudi Arabia",
    days: "11 Days",
    price: "৳1,85,000",
    hot: true,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=400&fit=crop",
  },
];

function PackageCard({ pkg }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl
      transition-all duration-400 hover:-translate-y-2 flex flex-col group">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Hot badge */}
        {pkg.hot && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold
            px-3 py-1 rounded-full shadow-md">
            Hot Sale!
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 line-clamp-1">
          {pkg.title}
        </h3>

        {/* Location + duration */}
        <div className="flex items-center gap-3 text-gray-500 text-xs sm:text-sm mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={13} className="text-blue-500" />
            {pkg.location}
          </span>
          <span className="text-gray-300">|</span>
          <span className="flex items-center gap-1">
            <span className="text-gray-400">↔</span>
            {pkg.days}
          </span>
        </div>

        {/* Price + Book button */}
        <div className="mt-auto flex items-end justify-between gap-3">
          <div>
            <p className="text-gray-400 text-[11px]">Per Person</p>
            <p className="text-gray-900 font-black text-xl">{pkg.price}</p>
          </div>
          <a
            href="tel:+8801317525225"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold
              text-xs sm:text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{ background: "#1D4ED8" }}
          >
            <Phone size={14} />
            Call Now
          </a>
        </div>

      </div>
    </div>
  );
}

export default function PopularTravelPackages() {
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .pkg-card { animation: fadeInUp 0.5s ease-out both; }
      `}</style>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Popular Travel Package
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A curated list of the most popular travel packages based on different destinations.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {packages.map((pkg, i) => (
              <div key={pkg.id} className="pkg-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <PackageCard pkg={pkg} />
              </div>
            ))}
          </div>

          {/* View All button */}
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white
                text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: "#1D4ED8" }}
            >
              View All Packages
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}