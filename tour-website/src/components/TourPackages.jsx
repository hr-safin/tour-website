import { MapPin, Phone } from "lucide-react";

export default function TourPackages() {
  const vacation_packages = [
    {
      id: 1,
      title: "Ramadan Special Umrah Package From Bangladesh",
      duration: "11 Days 10 Nights",
      location: "Saudi Arabia",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop",
      route: null,
      price: "৳1,85,000",
    },
    {
      id: 2,
      title: "Maldives 03 Nights Family Tour Package",
      duration: "4 Days 3 Nights",
      location: "Maldives",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      route: null,
      price: "৳95,000",
    },
    {
      id: 3,
      title: "Special Korea + China Tour Package",
      duration: "8 Days 7 Nights",
      location: "South Korea",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=400&fit=crop",
      price: "৳2,25,000",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span
              className="px-6 py-2 rounded-full text-sm font-bold text-white"
              style={{ backgroundColor: "#1D4ED8" }}
            >
              Tour Packages
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Explore Our Special Vacations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing destinations with our curated tour packages
          </p>
        </div>

        {/* CENTERED SMALL CARDS */}
        <div className="flex flex-wrap justify-center gap-8">
          {vacation_packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className="group w-[320px] bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 flex flex-col"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* IMAGE (same height for all) */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Duration */}
                <div className="absolute top-3 left-3 bg-white/95 px-3 py-1 rounded-full">
                  <p className="text-[11px] font-bold text-gray-900">
                    {pkg.duration}
                  </p>
                </div>

                {/* Location */}
                <div
                  className="absolute top-3 right-3 text-white px-3 py-1 rounded-full flex items-center gap-1"
                  style={{ backgroundColor: "#1D4ED8" }}
                >
                  <MapPin size={12} />
                  <span className="text-[11px] font-bold">{pkg.location}</span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 left-3">
                  <p className="text-white/80 text-[11px]">Starting from</p>
                  <p className="text-white font-black text-lg">{pkg.price}</p>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-base mb-3 text-gray-900 line-clamp-2 min-h-[48px]">
                  {pkg.title}
                </h3>

                {pkg.route && (
                  <p className="text-xs text-gray-500 mb-4">{pkg.route}</p>
                )}

                {/* Button stays at bottom */}
                <a
                  href="tel:01898760770"
                  className="mt-auto w-full flex items-center justify-center gap-2 py-2 rounded-lg font-semibold text-sm text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  style={{ backgroundColor: "#1D4ED8" }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="text-center mt-16">
          <button
            className="px-12 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: "#1D4ED8" }}
          >
            View All Packages →
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}