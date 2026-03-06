import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Clock, CheckCircle, FileText } from "lucide-react";

const BRAND = "#1D4ED8";

const visas = [
  {
    id: 1,
    country: "Schengen Visa",
    flag: "🇪🇺",
    description: "Access to 27 European countries with a single visa",
    processing: "15–20 Days",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=600&h=400&fit=crop",
    category: "Europe",
    badge: "Most Popular",
    badgeBg: BRAND,
  },
  {
    id: 2,
    country: "UK Visa",
    flag: "🇬🇧",
    description: "Visit the United Kingdom for tourism, business or study",
    processing: "10–15 Days",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=400&fit=crop",
    category: "Europe",
    badge: "High Demand",
    badgeBg: "#7C3AED",
  },
  {
    id: 3,
    country: "USA Visa",
    flag: "🇺🇸",
    description: "Travel to the United States for tourism or business",
    processing: "20–30 Days",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&h=400&fit=crop",
    category: "America",
    badge: "Hot",
    badgeBg: "#EF4444",
  },
  {
    id: 4,
    country: "Canada Visa",
    flag: "🇨🇦",
    description: "Explore the beautiful landscapes of Canada",
    processing: "15–25 Days",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&h=400&fit=crop",
    category: "America",
    badge: "Popular",
    badgeBg: "#F97316",
  },
  {
    id: 5,
    country: "Australia Visa",
    flag: "🇦🇺",
    description: "Visit the land down under — nature, cities & beaches",
    processing: "10–20 Days",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=600&h=400&fit=crop",
    category: "Oceania",
    badge: "Popular",
    badgeBg: "#F97316",
  },
  {
    id: 6,
    country: "Japan Visa",
    flag: "🇯🇵",
    description: "Experience Japanese culture, temples & technology",
    processing: "5–10 Days",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=400&fit=crop",
    category: "Asia",
    badge: "Fast Process",
    badgeBg: "#16A34A",
  },
  {
    id: 7,
    country: "Dubai / UAE Visa",
    flag: "🇦🇪",
    description: "Visit the UAE for luxury travel, shopping & business",
    processing: "3–7 Days",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
    category: "Middle East",
    badge: "Fast Process",
    badgeBg: "#16A34A",
  },
  {
    id: 8,
    country: "Thailand Visa",
    flag: "🇹🇭",
    description: "Travel to Thailand's beaches, temples and street markets",
    processing: "3–5 Days",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop",
    category: "Asia",
    badge: "Easy Visa",
    badgeBg: BRAND,
  },
  {
    id: 9,
    country: "Malaysia Visa",
    flag: "🇲🇾",
    description: "Explore Kuala Lumpur, Penang and Langkawi",
    processing: "3–5 Days",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&h=400&fit=crop",
    category: "Asia",
    badge: "Easy Visa",
    badgeBg: BRAND,
  },
];

const steps = [
  { step: "01", title: "Contact Us", desc: "Call or message our visa team to discuss your requirements.", icon: Phone },
  { step: "02", title: "Submit Documents", desc: "We'll guide you on what documents to prepare and submit.", icon: FileText },
  { step: "03", title: "Application Filed", desc: "We file your visa application with full accuracy and compliance.", icon: CheckCircle },
  { step: "04", title: "Visa Approved", desc: "Receive your visa and get ready for your journey!", icon: ArrowRight },
];

function VisaCard({ visa, delay }) {
  return (
    <div
      className="visa-card group bg-white rounded-2xl overflow-hidden shadow-md
        hover:shadow-2xl flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={visa.image}
          alt={visa.country}
          loading="lazy"
          className="visa-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-black shadow"
          style={{ background: visa.badgeBg }}>
          {visa.badge}
        </div>

        {/* Category */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold text-gray-800">
          {visa.category}
        </div>

        {/* Country name on image */}
        <div className="absolute bottom-3 left-4">
          <p className="text-white font-black text-xl leading-none">
            {visa.flag} {visa.country}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 flex-1">
          {visa.description}
        </p>

        {/* Processing time */}
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <Clock size={12} className="text-blue-500 flex-shrink-0" />
          Processing Time:{" "}
          <span className="font-bold text-gray-700">{visa.processing}</span>
        </div>

        {/* Call for details */}
        <a
          href="tel:+8801317525225"
          className="w-full flex items-center justify-center gap-1.5 py-2.5
            rounded-xl font-bold text-xs text-white transition-all duration-250
            hover:scale-105 hover:shadow-lg active:scale-95"
          style={{ background: BRAND }}
        >
          <Phone size={13} />
          Call for Details
        </a>
      </div>
    </div>
  );
}

export default function VisaService() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .visa-hero {
          background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .visa-hero { background-attachment: scroll; } }

        .visa-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .visa-card:hover .visa-img { transform: scale(1.08); }
        .visa-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .visa-card:hover { transform: translateY(-4px); }

        .step-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .step-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="visa-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Hassle-Free Processing
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Visa Services
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">
                Home
              </Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Visa Service</span>
            </div>
          </div>
        </div>

        {/* ── Intro banner ── */}
        <section className="py-12 sm:py-14" style={{ background: "#F8FAFF" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
              tracking-[0.2em] uppercase mb-5" style={{ background: BRAND }}>
              Visa Assistance
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Visa Assistance{" "}
              <span style={{ color: BRAND }}>Made Easy</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              We provide comprehensive visa assistance services to make your travel planning hassle-free.
              Our experienced visa consultants will guide you through every step of the application process —
              just call us and we handle the rest.
            </p>
            <a
              href="tel:+8801317525225"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: BRAND }}
            >
              <Phone size={15} />
              Call for Free Consultation
            </a>
          </div>
        </section>

        {/* ── How it works ── */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Simple Process
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                How It{" "}
                <span style={{ color: BRAND }}>Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.step}
                    className="step-card bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative"
                    data-aos="fade-up"
                    data-aos-delay={`${i * 80}`}
                  >
                    {/* Step number */}
                    <div className="absolute -top-3 -left-1 text-5xl font-black leading-none select-none opacity-[0.06] text-gray-900">
                      {s.step}
                    </div>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                      style={{ background: "#EFF6FF" }}>
                      <Icon size={20} color={BRAND} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: BRAND }}>
                      Step {s.step}
                    </p>
                    <h3 className="font-black text-gray-900 text-base mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Visa Cards ── */}
        <section className="py-14 sm:py-16" style={{ background: "#F8FAFF" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                We Cover
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Available Visa{" "}
                <span style={{ color: BRAND }}>Destinations</span>
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-3 max-w-xl mx-auto">
                Call us for details on requirements, fees, and processing times for each destination.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {visas.map((visa, i) => (
                <VisaCard key={visa.id} visa={visa} delay={`${(i % 3) * 80}`} />
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
              Need Visa Help? Call Us Now
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Our visa specialists are available Monday to Saturday, 9 AM – 6 PM. We make the process smooth and stress-free.
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