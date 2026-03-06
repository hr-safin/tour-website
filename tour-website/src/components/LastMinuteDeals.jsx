import { useEffect } from "react";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BRAND = "#1D4ED8";

const deals = [
  {
    id: 1,
    title: "Japan Cherry Blossom",
    location: "Tokyo, Japan",
    duration: "06 Days",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=420&fit=crop",
  },
  {
    id: 2,
    title: "Abu Dhabi Luxury Escape",
    location: "UAE, Qatar",
    duration: "05 Days/04 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=420&fit=crop",
  },
  {
    id: 3,
    title: "Morocco Desert & City Adventure",
    location: "Europe",
    duration: "07 Days/06 Nights",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=600&h=420&fit=crop",
  },
  {
    id: 4,
    title: "Maldives Overwater Villa",
    location: "Maldives",
    duration: "05 Days/04 Nights",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=420&fit=crop",
  },
  {
    id: 5,
    title: "Bali Cultural Escape",
    location: "Bali, Indonesia",
    duration: "06 Days/05 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&h=420&fit=crop",
  },
  {
    id: 6,
    title: "Thailand Beach & Temple Tour",
    location: "Thailand",
    duration: "08 Days/07 Nights",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=420&fit=crop",
  },
];

function DealCard({ deal, delay }) {
  return (
    <div
      className="deal-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl
        flex flex-col group"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-52 sm:h-56 overflow-hidden">
        <img
          src={deal.image}
          alt={deal.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">

        {/* Title */}
        <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-2 line-clamp-1">
          {deal.title}
        </h3>

        {/* Location + duration */}
        <div className="flex items-center gap-3 text-gray-400 text-xs sm:text-sm mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={12} className="text-blue-500 flex-shrink-0" />
            {deal.location}
          </span>
          <span>↔</span>
          <span>{deal.duration}</span>
        </div>

        {/* Divider + Experience / Inclusion */}
        <div className="border-t border-gray-100 pt-3 flex items-center gap-4 text-gray-400 text-xs mb-4">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Experience
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Inclusion
          </span>
        </div>

        {/* Call Now — right aligned */}
        <div className="mt-auto flex justify-end">
          <a
            href="tel:+8801317525225"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-white font-semibold
              text-xs sm:text-sm whitespace-nowrap transition-all duration-300 hover:scale-105
              hover:shadow-lg active:scale-95"
            style={{ background: BRAND }}
          >
            <Phone size={13} />
            Book Now
          </a>
        </div>

      </div>
    </div>
  );
}

export default function LastMinuteDeals() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic", offset: 80 });
    }
  }, []);

  return (
    <>
      <style>{`
        .deal-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .deal-card:hover { transform: translateY(-6px); }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
              tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
              Limited Time Offers
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Last Minute{" "}
              <span style={{ color: BRAND }}>Deals!</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              A curated list of the most popular travel packages based on different destinations.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal, i) => (
              <DealCard key={deal.id} deal={deal} delay={`${(i % 3) * 80}`} />
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/tours"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-white
                text-sm sm:text-base transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: BRAND }}
            >
              View All Deals
              <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}