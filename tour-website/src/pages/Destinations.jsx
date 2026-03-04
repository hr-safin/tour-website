import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";

// AOS loaded via CDN in index.html — if not present, add:
// <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
// <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

const destinations = [
  {
    id: 1,
    name: "Bangladesh",
    image: "https://images.pexels.com/photos/32766712/pexels-photo-32766712.jpeg",
    tourCount: 22,
    slug: "bangladesh",
    tag: "Local Gem",
  },
  {
    id: 2,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=700&h=500&fit=crop",
    tourCount: 13,
    slug: "thailand",
    tag: "Most Popular",
  },
  {
    id: 3,
    name: "Europe",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=700&h=500&fit=crop",
    tourCount: 12,
    slug: "europe",
    tag: "Top Rated",
  },
  {
    id: 4,
    name: "Cambodia",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=700&h=500&fit=crop",
    tourCount: 9,
    slug: "cambodia",
    tag: "Cultural",
  },
  {
    id: 5,
    name: "Nepal",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&h=500&fit=crop",
    tourCount: 9,
    slug: "nepal",
    tag: "Adventure",
  },
  {
    id: 6,
    name: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&h=500&fit=crop",
    tourCount: 7,
    slug: "indonesia",
    tag: "Island Life",
  },
  {
    id: 7,
    name: "Malaysia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=700&h=500&fit=crop",
    tourCount: 7,
    slug: "malaysia",
    tag: "City & Nature",
  },
  {
    id: 8,
    name: "Bhutan",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop",
    tourCount: 6,
    slug: "bhutan",
    tag: "Hidden Gem",
  },
  {
    id: 9,
    name: "Vietnam",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=700&h=500&fit=crop",
    tourCount: 6,
    slug: "vietnam",
    tag: "Heritage",
  },
  {
    id: 10,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&h=500&fit=crop",
    tourCount: 6,
    slug: "dubai",
    tag: "Luxury",
  },
  {
    id: 11,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&h=500&fit=crop",
    tourCount: 5,
    slug: "maldives",
    tag: "Paradise",
  },
  {
    id: 12,
    name: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=700&h=500&fit=crop",
    tourCount: 5,
    slug: "singapore",
    tag: "Modern City",
  },
];

export default function Destinations() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .dest-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .dest-card:hover .dest-img { transform: scale(1.08); }
        .dest-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .dest-card:hover { box-shadow: 0 24px 60px rgba(0,0,0,0.15); transform: translateY(-4px); }

        .dest-hero {
          background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) {
          .dest-hero { background-attachment: scroll; }
        }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero Banner ── */}
        <div className="dest-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Explore The World
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5 leading-tight"
              style={{ letterSpacing: "-0.02em" }}>
              Top Destinations
            </h1>
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Destinations</span>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10 text-center"
          data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
            tracking-[0.2em] uppercase mb-4" style={{ background: "#1D4ED8" }}>
            All Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
            style={{ letterSpacing: "-0.02em" }}>
            Choose Your Next{" "}
            <span style={{ color: "#1D4ED8" }}>Adventure</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Discover amazing destinations with our curated tour packages — tailored for every traveller.
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {destinations.map((dest, i) => (
              <Link
                key={dest.id}
                to={`/country/${dest.slug}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="dest-card block rounded-2xl overflow-hidden shadow-md bg-white"
                data-aos="fade-up"
                data-aos-delay={`${(i % 4) * 80}`}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="dest-img w-full h-full object-cover"
                  />
                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Tour count badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white
                    text-[11px] font-black shadow" style={{ background: "#1D4ED8" }}>
                    {dest.tourCount} Tours
                  </div>

                  {/* Tag badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90
                    text-[10px] font-bold text-gray-800 shadow">
                    {dest.tag}
                  </div>

                  {/* Bottom info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-1">
                      Travel To
                    </p>
                    <h3 className="text-white font-black text-2xl leading-none mb-2"
                      style={{ letterSpacing: "-0.01em" }}>
                      {dest.name}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-300 text-xs">
                      <MapPin size={11} className="text-blue-400 flex-shrink-0" />
                      {dest.name}
                    </div>
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-4 py-3 flex items-center justify-between">
                  <span className="text-gray-500 text-xs">{dest.tourCount} packages available</span>
                  <span className="inline-flex items-center gap-1 text-xs font-bold"
                    style={{ color: "#1D4ED8" }}>
                    View Tours
                    <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}