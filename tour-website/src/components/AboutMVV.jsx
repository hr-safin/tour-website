import { Link } from "react-router-dom";

const BRAND = "#1D4ED8";

const values = [
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We operate with honesty, transparency, and accountability in all our dealings.",
    bg: "#EFF6FF",
    accent: "#1D4ED8",
  },
  {
    icon: "💛",
    title: "Customer Commitment",
    desc: "We prioritize client satisfaction by delivering personalized and responsive services.",
    bg: "#FFFBEB",
    accent: "#D97706",
  },
  {
    icon: "⭐",
    title: "Professional Excellence",
    desc: "We maintain high operational standards and ensure compliance with global industry practices.",
    bg: "#F0FDF4",
    accent: "#16A34A",
  },
  {
    icon: "🔒",
    title: "Reliability",
    desc: "We ensure accuracy, timeliness, and seamless service execution.",
    bg: "#FFF7ED",
    accent: "#EA580C",
  },
  {
    icon: "💡",
    title: "Innovation",
    desc: "We embrace modern systems and evolving travel trends to enhance service delivery.",
    bg: "#F5F3FF",
    accent: "#7C3AED",
  },
];

const missionPoints = [
  "Provide reliable, efficient, and customized travel solutions tailored to client needs.",
  "Maintain the highest standards of professionalism and regulatory compliance.",
  "Build lasting partnerships with clients, airlines, hotels, and global travel partners.",
  "Continuously improve through innovation, technology integration, and staff development.",
];

export default function AboutMVV() {
  return (
    <>
      <style>{`
        @keyframes mvvUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes mvvLeft {
          from { opacity: 0; transform: translateX(-28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes mvvRight {
          from { opacity: 0; transform: translateX(28px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .m-up    { animation: mvvUp    0.6s ease-out both; }
        .m-left  { animation: mvvLeft  0.6s ease-out both; }
        .m-right { animation: mvvRight 0.6s ease-out both; }

        .val-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .val-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .tick { width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center;
          justify-content: center; flex-shrink: 0; margin-top: 2px; }
      `}</style>

      <div className="bg-white">

        {/* ── VISION + MISSION ── two-column split */}
        <section className="py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">

            {/* Section label */}
            <div className="text-center mb-12 sm:mb-16 m-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold
                tracking-widest uppercase mb-4" style={{ background: BRAND }}>
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Our Vision & Mission
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

              {/* VISION */}
              <div className="m-left relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl"
                style={{ animationDelay: "0.1s" }}>
                {/* Background image */}
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop"
                  alt="Vision"
                  className="w-full h-64 sm:h-80 object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 h-64 sm:h-80"
                  style={{ background: "linear-gradient(135deg, rgba(29,78,216,0.92) 0%, rgba(30,58,138,0.85) 100%)" }} />

                {/* Content over image */}
                <div className="absolute inset-0 h-64 sm:h-80 flex flex-col justify-center px-7 sm:px-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-xl">🚀</span>
                    </div>
                    <h3 className="text-white font-black text-2xl sm:text-3xl">Our Vision</h3>
                  </div>
                  <p className="text-blue-100 text-sm sm:text-base leading-relaxed max-w-md">
                    To become a leading and most trusted travel management company in Bangladesh and beyond,
                    recognized for service excellence, innovation, and long-term client relationships.
                  </p>
                </div>

                {/* Mission below image */}
                <div className="bg-white px-7 sm:px-10 py-7">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "#EFF6FF" }}>
                      <span className="text-xl">🚀</span>
                    </div>
                    <h3 className="text-gray-900 font-black text-xl sm:text-2xl">Our Mission</h3>
                  </div>
                  <ul className="space-y-3">
                    {missionPoints.map((pt, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                        <div className="tick mt-0.5 flex-shrink-0" style={{ background: "#EFF6FF" }}>
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

              {/* CEO MESSAGE */}
              <div className="m-right flex flex-col gap-6" style={{ animationDelay: "0.2s" }}>

                {/* CEO Quote card */}
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=340&fit=crop"
                    alt="CEO"
                    className="w-full h-48 sm:h-56 object-cover"
                  />
                  <div className="absolute inset-0 h-48 sm:h-56"
                    style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5">
                    <p className="text-white font-black text-lg">CEO's Message</p>
                    <p className="text-gray-300 text-xs">Moshiur Ahmmed · Founder & CEO</p>
                  </div>
                </div>

                {/* Quote text */}
                <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg px-7 sm:px-8 py-7 flex-1 relative overflow-hidden">
                  {/* decorative quote mark */}
                  <div className="absolute top-4 right-6 text-8xl font-black leading-none select-none opacity-5"
                    style={{ color: BRAND }}>"</div>

                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-2 h-10 rounded-full" style={{ background: BRAND }} />
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">From the CEO's Desk</p>
                  </div>

                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    At <strong className="text-gray-900">Time Ex Tours & Travels</strong>, trust isn't just a
                    value — it's the heartbeat of everything we do. From day one, our goal has been to provide
                    travel experiences that are professional, reliable, and truly personalized.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                    In today's fast-moving travel world, we combine strong operations, talented professionals,
                    and full regulatory compliance to make every journey seamless and memorable.
                  </p>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    We are grateful to our clients, partners, and well-wishers for their continued trust and
                    support — it inspires us to reach even higher.
                  </p>

                  {/* Signature area */}
                  <div className="flex items-center gap-4 mt-6 pt-5 border-t border-gray-100">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-black text-lg flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1D4ED8, #3b82f6)" }}>
                      M
                    </div>
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

        {/* ── CORE VALUES ── */}
        <section className="py-14 sm:py-16" style={{ background: "#F8FAFF" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="text-center mb-10 sm:mb-12 m-up">
              <span className="inline-block px-4 py-1.5 rounded-full text-white text-xs font-bold
                tracking-widest uppercase mb-4" style={{ background: BRAND }}>
                What Drives Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Our Core Values
              </h2>
            </div>

            {/* Values grid — 2 col mobile, 3 col md, 5 col lg */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="val-card rounded-2xl p-5 flex flex-col gap-3 m-up"
                  style={{ background: v.bg, animationDelay: `${i * 0.08}s` }}
                >
                  <div className="text-3xl">{v.icon}</div>
                  <div>
                    <p className="font-black text-gray-900 text-sm mb-1.5"
                      style={{ color: v.accent }}>{v.title}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                  {/* Bottom accent bar */}
                  <div className="mt-auto h-1 rounded-full w-8"
                    style={{ background: v.accent }} />
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="py-12 sm:py-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>

          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=400&fit=crop)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center m-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Let Time Ex Tours & Travels handle every detail — from flights to hotels to visa processing.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm
                  bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Us Now
              </a>
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm
                  border-2 border-white/40 text-white transition-all duration-300 hover:bg-white/10
                  hover:scale-105 active:scale-95"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}