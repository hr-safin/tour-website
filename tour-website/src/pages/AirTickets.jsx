import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Phone, CheckCircle, Plane, Clock,
  Shield, Star, HeadphonesIcon, Zap,
} from "lucide-react";

const BRAND = "#1D4ED8";

const airlines = [
  { name: "Biman Bangladesh", logo: "🇧🇩", route: "Dhaka → International", tag: "National Carrier" },
  { name: "Emirates", logo: "🇦🇪", route: "Dubai Hub", tag: "5-Star Airline" },
  { name: "Qatar Airways", logo: "🇶🇦", route: "Doha Hub", tag: "World's Best" },
  { name: "Turkish Airlines", logo: "🇹🇷", route: "Istanbul Hub", tag: "Most Destinations" },
  { name: "Singapore Airlines", logo: "🇸🇬", route: "Singapore Hub", tag: "Top Rated" },
  { name: "Malaysia Airlines", logo: "🇲🇾", route: "Kuala Lumpur", tag: "Asia's Best" },
  { name: "Air Arabia", logo: "🇦🇪", route: "Sharjah Hub", tag: "Budget Friendly" },
  { name: "flydubai", logo: "✈️", route: "Dubai Hub", tag: "Low Cost" },
];

const popularRoutes = [
  { from: "Dhaka", to: "Dubai", duration: "4h 30m", price: "৳25,000", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=350&fit=crop", badge: "Most Popular", badgeBg: BRAND },
  { from: "Dhaka", to: "Bangkok", duration: "2h 45m", price: "৳18,000", image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&h=350&fit=crop", badge: "Best Deal", badgeBg: "#16A34A" },
  { from: "Dhaka", to: "Kuala Lumpur", duration: "3h 20m", price: "৳20,000", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=350&fit=crop", badge: "Hot", badgeBg: "#EF4444" },
  { from: "Dhaka", to: "Singapore", duration: "3h 50m", price: "৳22,000", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=350&fit=crop", badge: "Popular", badgeBg: "#F97316" },
  { from: "Dhaka", to: "London", duration: "11h 15m", price: "৳85,000", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=500&h=350&fit=crop", badge: "International", badgeBg: "#7C3AED" },
  { from: "Dhaka", to: "Jeddah", duration: "5h 10m", price: "৳35,000", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=350&fit=crop", badge: "Umrah Special", badgeBg: BRAND },
];

const features = [
  { icon: Star, title: "Best Fares Guaranteed", desc: "We compare fares across all major airlines to get you the lowest price.", bg: "#EFF6FF", accent: BRAND },
  { icon: Shield, title: "IATA Accredited", desc: "We are a fully accredited IATA travel agency — your booking is safe with us.", bg: "#F0FDF4", accent: "#16A34A" },
  { icon: Zap, title: "Instant Confirmation", desc: "Get your e-ticket instantly after booking with full itinerary details.", bg: "#FFFBEB", accent: "#D97706" },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Our team is available round the clock for changes, queries or emergencies.", bg: "#F5F3FF", accent: "#7C3AED" },
  { icon: Clock, title: "Quick Processing", desc: "Tickets issued within hours — no delays, no waiting around.", bg: "#FFF7ED", accent: "#EA580C" },
  { icon: CheckCircle, title: "Flexible Options", desc: "One-way, round-trip, multi-city — we handle all kinds of bookings.", bg: "#F0FDF4", accent: "#16A34A" },
];

function RouteCard({ route, delay }) {
  return (
    <div
      className="route-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img src={route.image} alt={`${route.from} to ${route.to}`} loading="lazy"
          className="route-img w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-black shadow"
          style={{ background: route.badgeBg }}>{route.badge}</div>

        <div className="absolute bottom-3 left-4">
          <p className="text-white/70 text-[10px] mb-0.5">Starting from</p>
          <p className="text-white font-black text-xl leading-none">{route.price}</p>
        </div>
      </div>

      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-black text-gray-900 text-base">{route.from}</span>
          <Plane size={14} color={BRAND} className="flex-shrink-0" />
          <span className="font-black text-gray-900 text-base">{route.to}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <Clock size={12} className="text-blue-500" />
          Flight Duration: <span className="font-bold text-gray-700 ml-1">{route.duration}</span>
        </div>
        <a href="tel:+8801317525225"
          className="mt-auto w-full flex items-center justify-center gap-1.5 py-2.5
            rounded-xl font-bold text-xs text-white transition-all hover:scale-105
            hover:shadow-lg active:scale-95"
          style={{ background: BRAND }}>
          <Phone size={13} /> Call for Booking
        </a>
      </div>
    </div>
  );
}

export default function AirTickets() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .air-hero {
          background-image: url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .air-hero { background-attachment: scroll; } }

        .route-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .route-card:hover .route-img { transform: scale(1.08); }
        .route-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .route-card:hover { transform: translateY(-4px); }

        .feat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .airline-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .airline-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(0,0,0,0.1); }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="air-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Fly Anywhere In The World
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Air Tickets
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Air Tickets</span>
            </div>
          </div>
        </div>

        {/* ── Intro ── */}
        <section className="py-12 sm:py-14" style={{ background: "#F8FAFF" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
              tracking-[0.2em] uppercase mb-5" style={{ background: BRAND }}>
              Air Tickets
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Book Your Flights{" "}
              <span style={{ color: BRAND }}>With Confidence</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              We offer competitive airfare rates to destinations worldwide. Our team works with all major
              airlines to get you the best deals — just call us and we'll handle everything from booking
              to ticketing.
            </p>
            <a href="tel:+8801317525225"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: BRAND }}>
              <Phone size={15} /> Call to Book Now
            </a>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                The Time Ex{" "}
                <span style={{ color: BRAND }}>Advantage</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.title}
                    className="feat-card rounded-2xl p-5 flex items-start gap-4"
                    style={{ background: f.bg }}
                    data-aos="fade-up" data-aos-delay={`${(i % 3) * 80}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: f.accent }}>
                      <Icon size={18} color="#fff" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-sm mb-1.5"
                        style={{ color: f.accent }}>{f.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Popular Routes ── */}
        <section className="py-14 sm:py-16" style={{ background: "#F8FAFF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Top Routes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Popular Flight{" "}
                <span style={{ color: BRAND }}>Routes</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                Call us to get the latest fares and availability for any of these routes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {popularRoutes.map((route, i) => (
                <RouteCard key={i} route={route} delay={`${(i % 3) * 80}`} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Airlines ── */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Our Partners
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Airlines We{" "}
                <span style={{ color: BRAND }}>Work With</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {airlines.map((a, i) => (
                <div key={a.name}
                  className="airline-card bg-white rounded-2xl p-4 shadow-sm border border-gray-100
                    flex flex-col items-center text-center gap-2"
                  data-aos="fade-up" data-aos-delay={`${(i % 4) * 60}`}>
                  <span className="text-3xl">{a.logo}</span>
                  <p className="font-black text-gray-900 text-sm leading-tight">{a.name}</p>
                  <p className="text-gray-400 text-[11px]">{a.route}</p>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white"
                    style={{ background: BRAND }}>{a.tag}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="py-12 sm:py-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Ready to Book Your Flight?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Call us now and our team will find the best available fare for your destination and travel dates.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> +880 1317-525225
              </a>
              <a href="tel:+8801316690988"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm border-2 border-white/40 text-white transition-all
                  hover:bg-white/10 hover:scale-105 active:scale-95">
                <Phone size={14} /> +880 1316-690988
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}