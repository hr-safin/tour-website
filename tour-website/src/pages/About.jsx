import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, MapPin, Mail, Award, Users, Globe, Shield } from "lucide-react";

const BRAND = "#1D4ED8";

const stats = [
  { value: "26K+", label: "Tours Completed", icon: Globe },
  { value: "12+", label: "Years Experience", icon: Award },
  { value: "20K+", label: "Happy Travelers", icon: Users },
  { value: "98%", label: "Retention Rate", icon: Shield },
];

const values = [
  { icon: "🤝", title: "Integrity", desc: "We operate with honesty, transparency, and accountability in all our dealings.", bg: "#EFF6FF", accent: "#1D4ED8" },
  { icon: "💛", title: "Customer Commitment", desc: "We prioritize client satisfaction by delivering personalized and responsive services.", bg: "#FFFBEB", accent: "#D97706" },
  { icon: "⭐", title: "Professional Excellence", desc: "We maintain high operational standards and ensure compliance with global industry practices.", bg: "#F0FDF4", accent: "#16A34A" },
  { icon: "🔒", title: "Reliability", desc: "We ensure accuracy, timeliness, and seamless service execution.", bg: "#FFF7ED", accent: "#EA580C" },
  { icon: "💡", title: "Innovation", desc: "We embrace modern systems and evolving travel trends to enhance service delivery.", bg: "#F5F3FF", accent: "#7C3AED" },
];

const missionPoints = [
  "Provide reliable, efficient, and customized travel solutions tailored to client needs.",
  "Maintain the highest standards of professionalism and regulatory compliance.",
  "Build lasting partnerships with clients, airlines, hotels, and global travel partners.",
  "Continuously improve through innovation, technology integration, and staff development.",
];

const gallery = [
  "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&h=450&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=450&fit=crop",
];

export default function About() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .about-hero {
          background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .about-hero { background-attachment: scroll; } }

        .val-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .val-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .gal-img { transition: transform 0.6s ease; }
        .gal-card:hover .gal-img { transform: scale(1.07); }

        .stat-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .stat-card:hover { transform: translateY(-3px); box-shadow: 0 12px 32px rgba(29,78,216,0.15); }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="about-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Know Our Story
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              About Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">About Us</span>
            </div>
          </div>
        </div>

        {/* ── Who We Are ── */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

              {/* Text */}
              <div data-aos="fade-right">
                <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                  tracking-[0.2em] uppercase mb-5" style={{ background: BRAND }}>
                  Who We Are
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight"
                  style={{ letterSpacing: "-0.02em" }}>
                  Time Ex Tours &{" "}
                  <span style={{ color: BRAND }}>Travels</span>
                </h2>
                <p className="text-lg text-gray-500 italic mb-5 font-medium">
                  "Your Satisfaction Is Our Priority."
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  Time Ex Tours & Travels is a fully accredited and professionally managed travel agency in Bangladesh, committed to delivering reliable, efficient, and strategic travel solutions.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  The name <strong className="text-gray-900">"Time-Ex"</strong> stands for <strong className="text-gray-900">Time Excellence</strong> — a philosophy that defines our identity and service standard. <strong className="text-gray-900">Time</strong> represents punctuality, responsiveness, and respect for our clients' valuable schedules. <strong className="text-gray-900">Ex</strong> signifies Excellence — excellence in service delivery, operational precision, and customer experience.
                </p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  We are an <strong className="text-gray-900">IATA Approved Travel Agency</strong>, approved by the Civil Aviation Authority of Bangladesh and the Ministry of Civil Aviation and Tourism.
                </p>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a href="tel:+8801317525225"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                      text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                    style={{ background: BRAND }}>
                    <Phone size={14} /> Call Us Now
                  </a>
                  <Link to="/contact"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                      text-sm border-2 transition-all hover:scale-105 active:scale-95"
                    style={{ borderColor: BRAND, color: BRAND }}>
                    Get In Touch <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

              {/* Gallery mosaic */}
              <div className="grid grid-cols-2 gap-3" data-aos="fade-left">
                {gallery.map((src, i) => (
                  <div key={i}
                    className={`gal-card relative overflow-hidden rounded-2xl shadow-md
                      ${i === 2 ? "row-span-2" : ""}`}
                    style={{ height: i === 2 ? "auto" : 200 }}>
                    <img src={src} alt={`About ${i + 1}`} loading="lazy"
                      className="gal-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="py-10 sm:py-12" style={{ background: "#F8FAFF" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.label}
                    className="stat-card bg-white rounded-2xl p-5 flex items-center gap-4 shadow-sm"
                    data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "#EFF6FF" }}>
                      <Icon size={20} color={BRAND} />
                    </div>
                    <div>
                      <p className="font-black text-2xl text-gray-900 leading-none">{s.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{s.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Vision + Mission ── */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-12" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Our Vision & Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {/* Vision card */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl" data-aos="fade-right">
                <div className="relative h-56 sm:h-64">
                  <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
                    alt="Vision" className="w-full h-full object-cover" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(135deg, rgba(29,78,216,0.92) 0%, rgba(30,58,138,0.85) 100%)" }} />
                  <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="text-xl">🔭</span>
                      </div>
                      <h3 className="text-white font-black text-2xl sm:text-3xl">Our Vision</h3>
                    </div>
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">
                      To become a leading and most trusted travel management company in Bangladesh and beyond, recognized for service excellence, innovation, and long-term client relationships.
                    </p>
                  </div>
                </div>
                <div className="bg-white px-7 sm:px-10 py-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "#EFF6FF" }}>
                      <span className="text-xl">🚀</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-xl sm:text-2xl">Our Mission</h3>
                  </div>
                  <ul className="space-y-3">
                    {missionPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                        <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                          style={{ background: "#EFF6FF" }}>
                          <svg className="w-3 h-3" fill="none" stroke={BRAND} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CEO card */}
              <div className="flex flex-col gap-5" data-aos="fade-left">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=340&fit=crop"
                    alt="CEO" className="w-full h-48 sm:h-56 object-cover" />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <p className="text-white font-black text-lg">CEO's Message</p>
                    <p className="text-gray-300 text-xs">Moshiur Ahmmed · Founder & CEO</p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg px-7 sm:px-8 py-7 flex-1 relative overflow-hidden">
                  <div className="absolute top-4 right-6 text-8xl font-black leading-none select-none opacity-5"
                    style={{ color: BRAND }}>"</div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-10 rounded-full" style={{ background: BRAND }} />
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">From the CEO's Desk</p>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    At <strong className="text-gray-900">Time Ex Tours & Travels</strong>, trust isn't just a value — it's the heartbeat of everything we do. Our goal has been to provide travel experiences that are professional, reliable, and truly personalized.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    We combine strong operations, talented professionals, and full regulatory compliance to make every journey seamless and memorable.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We are grateful to our clients, partners, and well-wishers for their continued trust — it inspires us to reach even higher.
                  </p>
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1D4ED8, #3b82f6)" }}>M</div>
                    <div>
                      <p className="text-gray-900 font-black text-sm">Moshiur Ahmmed</p>
                      <p className="text-gray-400 text-xs">Founder & CEO, Time Ex Tours & Travels</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Core Values ── */}
        <section className="py-14 sm:py-16" style={{ background: "#F8FAFF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                What Drives Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>Our Core Values</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v, i) => (
                <div key={v.title}
                  className="val-card rounded-2xl p-5 flex flex-col gap-3"
                  style={{ background: v.bg }}
                  data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <div className="text-3xl">{v.icon}</div>
                  <div>
                    <p className="font-black text-sm mb-1.5" style={{ color: v.accent }}>{v.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                  <div className="mt-auto h-1 rounded-full w-8" style={{ background: v.accent }} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact info strip ── */}
        <section className="py-12 sm:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: Phone, label: "Call Us", lines: ["+880 1317-525225", "+880 1316-690988"], href: "tel:+8801317525225", bg: "#EFF6FF", accent: BRAND },
                { icon: Mail, label: "Email Us", lines: ["timextours@gmail.com"], href: "mailto:timextours@gmail.com", bg: "#F0FDF4", accent: "#16A34A" },
                { icon: MapPin, label: "Our Office", lines: ["Dhaka, Bangladesh"], href: "#", bg: "#FFF7ED", accent: "#EA580C" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <a key={item.label} href={item.href}
                    className="flex items-center gap-4 p-5 rounded-2xl transition-all duration-250 hover:-translate-y-1 hover:shadow-lg"
                    style={{ background: item.bg }}
                    data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: item.accent }}>
                      <Icon size={18} color="#fff" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: item.accent }}>{item.label}</p>
                      {item.lines.map((l, j) => (
                        <p key={j} className="text-gray-700 text-sm leading-snug">{l}</p>
                      ))}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-12 sm:py-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3" style={{ letterSpacing: "-0.02em" }}>
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Let Time Ex Tours & Travels handle every detail — from flights to hotels to visa processing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm
                  bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> Call Us Now
              </a>
              <Link to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm
                  border-2 border-white/40 text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}