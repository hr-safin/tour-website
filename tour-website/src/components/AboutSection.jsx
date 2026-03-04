import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle } from "lucide-react";

const BRAND = "#1D4ED8";

const highlights = [
  "IATA Approved Travel Agency",
  "Civil Aviation Authority Approved",
  "Licensed Tour Operator — Bangladesh Tourism Board",
  "Members of ATAB & TOAB",
];

// Lazy Image Component
const LazyImage = ({ src, alt, className, style }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" }
    );
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} style={style}>
      {isInView && !isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
      )}
      {isInView && (
        <img
          src={src} alt={alt} loading="lazy"
          className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  );
};

export default function AboutSection() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  return (
    <>
      <style>{`
        .about-img-card {
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.35s ease;
        }
        .about-img-card:hover { transform: scale(1.03); box-shadow: 0 24px 60px rgba(0,0,0,0.18); }

        .about-badge {
          animation: badgePop 0.5s 1.1s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        @keyframes badgePop {
          from { opacity: 0; transform: scale(0.6) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <section className="py-14 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* ── RIGHT: Image collage ── */}
            <div className="relative order-1 lg:order-2" data-aos="fade-left">

              {/* Mobile layout */}
              <div className="block sm:hidden space-y-3">
                <LazyImage
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=500&fit=crop"
                  alt="Adventure travel"
                  className="relative w-full h-56 rounded-2xl overflow-hidden shadow-xl about-img-card"
                />
                <div className="grid grid-cols-2 gap-3">
                  <LazyImage
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=600&fit=crop"
                    alt="Global destinations"
                    className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl about-img-card"
                  />
                  <LazyImage
                    src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=600&fit=crop"
                    alt="Beach destinations"
                    className="relative w-full h-48 rounded-2xl overflow-hidden shadow-xl about-img-card"
                  />
                </div>
              </div>

              {/* Tablet + Desktop layout */}
              <div className="hidden sm:block relative h-[460px] md:h-[540px] lg:h-[580px]">

                {/* Large left */}
                <LazyImage
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop"
                  alt="Adventure travel"
                  className="about-img-card absolute top-0 left-0 w-[47%] h-[67%] rounded-2xl overflow-hidden shadow-2xl"
                />

                {/* Top right */}
                <LazyImage
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=700&fit=crop"
                  alt="Global destinations"
                  className="about-img-card absolute top-0 right-0 w-[50%] h-[52%] rounded-2xl overflow-hidden shadow-2xl"
                />

                {/* Bottom right */}
                <LazyImage
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=700&fit=crop"
                  alt="Maldives beach"
                  className="about-img-card absolute bottom-0 right-0 w-[50%] h-[45%] rounded-2xl overflow-hidden shadow-2xl"
                />

                {/* Connector dot */}
                <div className="absolute top-[44%] left-[42%] z-10 w-5 h-5 rounded-full shadow-lg border-4 border-white"
                  style={{ background: BRAND }} />

                {/* Floating badge — years of experience */}
                <div className="about-badge absolute bottom-6 left-0 z-20 bg-white rounded-2xl shadow-xl px-5 py-4 flex items-center gap-3 border border-gray-100">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#EFF6FF" }}>
                    <span className="text-2xl font-black" style={{ color: BRAND }}>12</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-sm leading-none">Years of</p>
                    <p className="font-black text-sm leading-none mt-0.5" style={{ color: BRAND }}>Excellence</p>
                  </div>
                </div>

                {/* Floating badge — happy clients */}
                <div className="about-badge absolute top-4 right-[-12px] z-20 bg-white rounded-2xl shadow-xl px-4 py-3 flex items-center gap-2 border border-gray-100">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#F0FDF4" }}>
                    <span className="text-lg">😊</span>
                  </div>
                  <div>
                    <p className="font-black text-gray-900 text-xs leading-none">20K+</p>
                    <p className="text-gray-500 text-[10px] mt-0.5">Happy Travelers</p>
                  </div>
                </div>

              </div>
            </div>

            {/* ── LEFT: Text content ── */}
            <div className="order-2 lg:order-1" data-aos="fade-right">

              {/* Pill label */}
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-5" style={{ background: BRAND }}>
                Who We Are
              </span>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4"
                style={{ letterSpacing: "-0.02em" }}>
                Time Ex Tours &{" "}
                <span style={{ color: BRAND }}>Travels</span>
              </h2>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-semibold text-gray-500 italic mb-5 leading-relaxed">
                "Your Satisfaction Is Our Priority."
              </p>

              {/* Body paragraphs */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                Time Ex Tours & Travels is a fully accredited and professionally managed travel agency in Bangladesh, committed to delivering reliable, efficient, and strategic travel solutions.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                The name <strong className="text-gray-900">"Time-Ex"</strong> stands for <strong className="text-gray-900">Time Excellence</strong> — <strong className="text-gray-900">Time</strong> represents punctuality and responsiveness, while <strong className="text-gray-900">Ex</strong> signifies excellence in service delivery, operational precision, and customer experience.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                From international air ticketing to visa assistance, corporate travel, holiday packages, hotel reservations, and Umrah services — we provide seamless travel solutions for our valued clients.
              </p>

              {/* Highlights list */}
              <ul className="space-y-2.5 mb-7">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "#EFF6FF" }}>
                      <svg className="w-3 h-3" fill="none" stroke={BRAND} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {h}
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="h-px bg-gray-100 mb-7" />

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+8801317525225"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                    text-white text-sm transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ background: BRAND }}
                >
                  <Phone size={14} /> Call Us Now
                </a>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                    text-sm border-2 transition-all hover:scale-105 active:scale-95"
                  style={{ borderColor: BRAND, color: BRAND }}
                >
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
}