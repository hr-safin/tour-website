import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, X, ChevronLeft, ChevronRight, ZoomIn, Phone } from "lucide-react";

const BRAND = "#1D4ED8";

const categories = ["All", "Beaches", "Mountains", "Cultural", "Cities", "Wildlife", "Umrah"];

const images = [
  // Beaches
  { id: 1, src: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=300&fit=crop", title: "Maldives Overwater Villa", location: "Maldives", cat: "Beaches", span: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop", thumb: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=250&fit=crop", title: "Turquoise Waters", location: "Maldives", cat: "Beaches", span: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop", title: "Tropical Shoreline", location: "Thailand", cat: "Beaches", span: "normal" },
  { id: 4, src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop", title: "Coastal Cliffs", location: "Phuket, Thailand", cat: "Beaches", span: "tall" },
  // Mountains
  { id: 5, src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=400&h=300&fit=crop", title: "Himalayan Trail", location: "Nepal", cat: "Mountains", span: "wide" },
  { id: 6, src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop", title: "Winter Peaks", location: "Switzerland", cat: "Mountains", span: "tall" },
  { id: 7, src: "https://images.pexels.com/photos/685766/pexels-photo-685766.jpeg?w=800&h=600&fit=crop", thumb: "https://images.pexels.com/photos/685766/pexels-photo-685766.jpeg?w=400&h=300&fit=crop", title: "Alpine Village", location: "Switzerland", cat: "Mountains", span: "normal" },
  { id: 8, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop", thumb: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=250&fit=crop", title: "Mountain Road", location: "Nepal", cat: "Mountains", span: "wide" },
  // Cultural
  { id: 9, src: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=500&fit=crop", title: "Angkor Wat Sunrise", location: "Cambodia", cat: "Cultural", span: "tall" },
  { id: 10, src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop", title: "Cherry Blossom Festival", location: "Japan", cat: "Cultural", span: "wide" },
  { id: 11, src: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?w=400&h=300&fit=crop", title: "Desert Kasbah", location: "Morocco", cat: "Cultural", span: "normal" },
  { id: 12, src: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&h=500&fit=crop", thumb: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=400&h=250&fit=crop", title: "Hoi An Lanterns", location: "Vietnam", cat: "Cultural", span: "wide" },
  // Cities
  { id: 13, src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=300&fit=crop", title: "Dubai Skyline", location: "UAE", cat: "Cities", span: "wide" },
  { id: 14, src: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=500&fit=crop", title: "Singapore Marina", location: "Singapore", cat: "Cities", span: "tall" },
  { id: 15, src: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop", title: "Petronas Towers", location: "Malaysia", cat: "Cities", span: "normal" },
  { id: 16, src: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=500&fit=crop", thumb: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=400&h=250&fit=crop", title: "European Streets", location: "Europe", cat: "Cities", span: "wide" },
  // Wildlife
  { id: 17, src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=500&fit=crop", title: "Bali Rice Terraces", location: "Indonesia", cat: "Wildlife", span: "tall" },
  { id: 18, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop", thumb: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400&h=300&fit=crop", title: "Jungle Trek", location: "Bhutan", cat: "Wildlife", span: "wide" },
  // Umrah
  { id: 19, src: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&h=1000&fit=crop", thumb: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=500&fit=crop", title: "Masjid al-Haram", location: "Makkah, Saudi Arabia", cat: "Umrah", span: "tall" },
  { id: 20, src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop", thumb: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop", title: "Madinah al-Munawwarah", location: "Madinah, Saudi Arabia", cat: "Umrah", span: "wide" },
];

// Lazy image with intersection observer
function LazyImg({ src, alt, className }) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { rootMargin: "120px" }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`${className} bg-gray-200`}>
      {!loaded && inView && <div className="absolute inset-0 animate-pulse bg-gray-300 rounded-2xl" />}
      {inView && (
        <img src={src} alt={alt} loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}
    </div>
  );
}

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index in filtered
  const [filtered, setFiltered] = useState(images);

  useEffect(() => {
    if (window.AOS) window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic", offset: 80 });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setFiltered(active === "All" ? images : images.filter(i => i.cat === active));
  }, [active]);

  const openLightbox = (idx) => {
    setLightbox(idx);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => setLightbox(i => (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setLightbox(i => (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    const onKey = (e) => {
      if (lightbox === null) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, prev, next, closeLightbox]);

  return (
    <>
      <style>{`
        .gallery-hero {
          background-image: url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .gallery-hero { background-attachment: scroll; } }

        .g-card { transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease; }
        .g-card:hover { transform: translateY(-5px); box-shadow: 0 24px 60px rgba(0,0,0,0.18); }
        .g-card:hover .g-overlay { opacity: 1; }
        .g-card:hover .g-img { transform: scale(1.07); }

        .g-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .g-overlay { transition: opacity 0.3s ease; opacity: 0; }

        .cat-pill { transition: all 0.2s ease; }
        .cat-pill:hover { transform: translateY(-2px); }

        /* Masonry columns */
        .masonry { columns: 4; column-gap: 1rem; }
        @media (max-width: 1024px) { .masonry { columns: 3; } }
        @media (max-width: 640px)  { .masonry { columns: 2; } }
        @media (max-width: 400px)  { .masonry { columns: 1; } }
        .masonry-item { break-inside: avoid; margin-bottom: 1rem; }

        /* Lightbox */
        .lb-backdrop { animation: lbIn 0.25s ease both; }
        @keyframes lbIn { from { opacity: 0; } to { opacity: 1; } }
        .lb-img { animation: lbScale 0.3s cubic-bezier(0.34,1.56,0.64,1) both; }
        @keyframes lbScale { from { opacity: 0; transform: scale(0.92); } to { opacity: 1; transform: scale(1); } }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="gallery-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Moments & Memories
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Photo Gallery
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Gallery</span>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
            tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
            Our Gallery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}>
            Explore Our{" "}
            <span style={{ color: BRAND }}>Travel World</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            A visual journey through the destinations we've explored — beaches, mountains, cities, culture and more.
          </p>
        </div>

        {/* ── Category filter pills ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                className="cat-pill px-5 py-2 rounded-full text-xs font-bold border-2 active:scale-95"
                style={{
                  borderColor: active === cat ? BRAND : "#E5E7EB",
                  background: active === cat ? BRAND : "white",
                  color: active === cat ? "white" : "#6B7280",
                }}>
                {cat}
                <span className="ml-1.5 text-[10px] opacity-70">
                  ({cat === "All" ? images.length : images.filter(i => i.cat === cat).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Masonry Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="masonry">
            {filtered.map((img, idx) => (
              <div key={img.id}
                className="masonry-item g-card rounded-2xl overflow-hidden cursor-zoom-in relative shadow-md"
                data-aos="fade-up"
                onClick={() => openLightbox(idx)}
              >
                {/* Dynamic height based on span */}
                <div className={`relative overflow-hidden ${
                  img.span === "tall" ? "h-80 sm:h-96" :
                  img.span === "wide" ? "h-44 sm:h-52" : "h-56 sm:h-64"
                }`}>
                  <LazyImg src={img.thumb} alt={img.title} className="absolute inset-0" />

                  {/* Hover overlay */}
                  <div className="g-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-between p-4">
                    <div className="flex justify-end">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn size={14} color="white" />
                      </div>
                    </div>
                    <div>
                      <p className="text-white font-black text-sm leading-tight">{img.title}</p>
                      <p className="text-blue-300 text-[11px] mt-0.5 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {img.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No photos in this category yet.</p>
            </div>
          )}
        </div>

        {/* ── CTA Strip ── */}
        <section className="py-12 sm:py-14 text-white"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Ready to Create Your Own Memories?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Call us now and let's plan your dream trip to any of these stunning destinations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> Book Your Consultation
              </a>
             
            </div>
          </div>
        </section>

      </div>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div className="lb-backdrop fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}>

          {/* Close */}
          <button onClick={closeLightbox}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
              flex items-center justify-center text-white transition-all z-10">
            <X size={18} />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-4 text-white/60 text-sm font-bold z-10">
            {lightbox + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 sm:left-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
              flex items-center justify-center text-white transition-all z-10">
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div className="lb-img relative max-w-4xl max-h-[85vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}>
            <img
              key={filtered[lightbox].id}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />
            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
              rounded-b-xl px-5 py-4">
              <p className="text-white font-black text-base">{filtered[lightbox].title}</p>
              <p className="text-blue-300 text-xs flex items-center gap-1 mt-0.5">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                {filtered[lightbox].location}
              </p>
            </div>
          </div>

          {/* Next */}
          <button onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 sm:right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
              flex items-center justify-center text-white transition-all z-10">
            <ChevronRight size={20} />
          </button>

        </div>
      )}
    </>
  );
}