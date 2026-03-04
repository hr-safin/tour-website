import { MapPin, Phone, ArrowRight } from "lucide-react";

const vacation_packages = [
  {
    id: 1,
    title: "Ramadan Special Umrah Package From Bangladesh",
    duration: "11 Days 10 Nights",
    location: "Saudi Arabia",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=450&fit=crop",
    price: "৳1,85,000",
  },
  {
    id: 2,
    title: "Maldives 03 Nights Family Tour Package",
    duration: "4 Days 3 Nights",
    location: "Maldives",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=450&fit=crop",
    price: "৳95,000",
  },
  {
    id: 3,
    title: "Special Korea + China Tour Package",
    duration: "8 Days 7 Nights",
    location: "South Korea",
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=450&fit=crop",
    price: "৳2,25,000",
  },
  {
    id: 4,
    title: "Thailand Bangkok & Phuket Explorer",
    duration: "7 Days 6 Nights",
    location: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=450&fit=crop",
    price: "৳1,10,000",
  },
];

function PackageCard({ pkg, delay }) {
  return (
    <div
      className="tp-card group bg-white rounded-2xl overflow-hidden shadow-md
        hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 flex flex-col"
      style={{ animation: `tpFadeUp 0.55s ease-out ${delay}s both` }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={pkg.image}
          alt={pkg.title}
          loading="lazy"
          className="tp-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Duration badge */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full">
          <p className="text-[11px] font-bold text-gray-900">{pkg.duration}</p>
        </div>

        {/* Location badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1 rounded-full text-white text-[11px] font-bold"
          style={{ background: "#1D4ED8" }}>
          <MapPin size={11} />
          {pkg.location}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-3">
          <p className="text-white/70 text-[10px] leading-none mb-0.5">Starting from</p>
          <p className="text-white font-black text-lg leading-none">{pkg.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-sm text-gray-900 mb-4 line-clamp-2 flex-1">
          {pkg.title}
        </h3>
        <a
          href="tel:+8801317525225"
          className="mt-auto w-full flex items-center justify-center gap-1.5 py-2.5
            rounded-xl font-bold text-xs text-white transition-all duration-250
            hover:scale-105 hover:shadow-lg active:scale-95"
          style={{ background: "#1D4ED8" }}
        >
          <Phone size={13} />
          Call Now
        </a>
      </div>
    </div>
  );
}

export default function TourPackages() {
  return (
    <>
      <style>{`
        @keyframes tpFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .tp-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .tp-card:hover .tp-img { transform: scale(1.08); }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <section className="py-16 sm:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-14">
            <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
              tracking-widest uppercase mb-4" style={{ background: "#1D4ED8" }}>
              Tour Packages
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Explore Our Special Vacations
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              Discover amazing destinations with our curated tour packages
            </p>
          </div>

          {/* 4-card grid: 1 col → 2 col → 4 col */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {vacation_packages.map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} delay={i * 0.1} />
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white
                text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: "#1D4ED8" }}
            >
              View All Packages
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>
    </>
  );
}