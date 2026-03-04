import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Clock, Phone, ArrowRight, Compass } from "lucide-react";

const BRAND = "#1D4ED8";

const tours = [
  {
    id: 1,
    title: "Ramadan Special Umrah Package",
    duration: "11 Days 10 Nights",
    price: "৳1,85,000",
    destinations: "Saudi Arabia",
    badge: "Hot Sale!",
    badgeBg: "#EF4444",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&h=450&fit=crop",
    category: "Religious",
  },
  {
    id: 2,
    title: "Maldives Family Tour Package",
    duration: "4 Days 3 Nights",
    price: "৳95,000",
    destinations: "Maldives",
    badge: "20% Off",
    badgeBg: "#F97316",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=450&fit=crop",
    category: "Beach",
  },
  {
    id: 3,
    title: "Korea + China Combo Package",
    duration: "8 Days 7 Nights",
    price: "৳2,25,000",
    destinations: "South Korea & China",
    badge: "Popular",
    badgeBg: BRAND,
    image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=600&h=450&fit=crop",
    category: "Cultural",
  },
  {
    id: 4,
    title: "Thailand Bangkok & Phuket",
    duration: "7 Days 6 Nights",
    price: "৳1,10,000",
    destinations: "Thailand",
    badge: "15% Off",
    badgeBg: "#F97316",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=450&fit=crop",
    category: "Adventure",
  },
  {
    id: 5,
    title: "Dubai Luxury Explorer",
    duration: "5 Days 4 Nights",
    price: "৳1,65,000",
    destinations: "Dubai, UAE",
    badge: "Hot Sale!",
    badgeBg: "#EF4444",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=450&fit=crop",
    category: "Luxury",
  },
  {
    id: 6,
    title: "Swiss Alps Mountain Tour",
    duration: "9 Days 8 Nights",
    price: "৳2,40,000",
    destinations: "Switzerland",
    badge: "Popular",
    badgeBg: BRAND,
    image: "https://images.unsplash.com/photo-1531583959375-fab3cd498f08?w=600&h=450&fit=crop",
    category: "Mountain",
  },
  {
    id: 7,
    title: "Bali Cultural Escape",
    duration: "6 Days 5 Nights",
    price: "৳1,20,000",
    destinations: "Bali, Indonesia",
    badge: "20% Off",
    badgeBg: "#F97316",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=450&fit=crop",
    category: "Cultural",
  },
  {
    id: 8,
    title: "Singapore City Explorer",
    duration: "5 Days 4 Nights",
    price: "৳1,30,000",
    destinations: "Singapore",
    badge: "Popular",
    badgeBg: BRAND,
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=600&h=450&fit=crop",
    category: "City",
  },
  {
    id: 9,
    title: "Nepal Himalaya Trek",
    duration: "8 Days 7 Nights",
    price: "৳85,000",
    destinations: "Nepal",
    badge: "Adventure",
    badgeBg: "#16A34A",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=450&fit=crop",
    category: "Trekking",
  },
];

const categories = ["All", "Beach", "Cultural", "Adventure", "Luxury", "Mountain", "Religious", "City", "Trekking"];

function TourCard({ tour, delay }) {
  return (
    <div
      className="tour-card group bg-white rounded-2xl overflow-hidden shadow-md
        hover:shadow-2xl flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={tour.image}
          alt={tour.title}
          loading="lazy"
          className="tour-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-black shadow"
          style={{ background: tour.badgeBg }}>
          {tour.badge}
        </div>

        {/* Category */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90
          text-[10px] font-bold text-gray-800 flex items-center gap-1">
          <Compass size={10} />
          {tour.category}
        </div>

        {/* Price */}
        <div className="absolute bottom-3 left-4">
          <p className="text-white/70 text-[10px] leading-none mb-0.5">Starting from</p>
          <p className="text-white font-black text-xl leading-none">{tour.price}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-3 line-clamp-2"
          style={{ letterSpacing: "-0.01em" }}>
          {tour.title}
        </h3>

        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} className="text-blue-500" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-blue-500" />
            {tour.destinations}
          </span>
        </div>

        <a
          href="tel:+8801317525225"
          className="mt-auto w-full flex items-center justify-center gap-1.5 py-2.5
            rounded-xl font-bold text-xs text-white transition-all duration-250
            hover:scale-105 hover:shadow-lg active:scale-95"
          style={{ background: BRAND }}
        >
          <Phone size={13} />
          Call Now
        </a>
      </div>
    </div>
  );
}

export default function Tours() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .tours-hero {
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .tours-hero { background-attachment: scroll; } }

        .tour-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .tour-card:hover .tour-img { transform: scale(1.08); }
        .tour-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .tour-card:hover { transform: translateY(-4px); }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="tours-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Explore The World
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Our Exclusive Tours
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Tours</span>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center"
          data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
            tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
            Tour Packages
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}>
            Find Your Perfect{" "}
            <span style={{ color: BRAND }}>Package</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Handpicked tours for every traveller — beach, mountain, culture, luxury and more.
          </p>
        </div>

        {/* ── Category filter pills ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button key={cat}
                className="px-4 py-2 rounded-full text-xs font-bold border-2 transition-all
                  duration-200 hover:scale-105 active:scale-95"
                style={{
                  borderColor: cat === "All" ? BRAND : "#E5E7EB",
                  background: cat === "All" ? BRAND : "white",
                  color: cat === "All" ? "white" : "#6B7280",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Tour Cards Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {tours.map((tour, i) => (
              <TourCard key={tour.id} tour={tour} delay={`${(i % 3) * 80}`} />
            ))}
          </div>

          {/* View All CTA */}
          <div className="text-center mt-14">
            <a href="tel:+8801317525225"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-bold
                text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: BRAND }}>
              <Phone size={16} />
              Call For Custom Package
            </a>
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <section className="py-12 sm:py-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Can't Find Your Ideal Tour?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              We create fully customized packages tailored to your budget, dates, and dream destinations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> Call Us Now
              </a>
              <Link to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm border-2 border-white/40 text-white transition-all
                  hover:bg-white/10 hover:scale-105 active:scale-95">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}