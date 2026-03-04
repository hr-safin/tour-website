import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────
const SLIDES = [
  {
    id: 1,
    country: "Thailand",
    description:
      "Discover the Land of Smiles with its stunning temples, pristine beaches, vibrant culture, and world-renowned cuisine.",
    bg: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&h=1080&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 2,
    country: "Switzerland",
    description:
      "Experience the majestic Alps, crystal-clear lakes, charming villages, and world-class ski resorts in breathtaking scenery.",
    bg: "https://images.pexels.com/photos/270756/pexels-photo-270756.jpeg",
    gallery: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549122728-f519709caa9c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 3,
    country: "Maldives",
    description:
      "Paradise on Earth with turquoise lagoons, white sandy beaches, luxury overwater villas, and spectacular marine life.",
    bg: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=1080&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/29289151/pexels-photo-29289151.jpeg?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop",
    ],
  },
  {
    id: 4,
    country: "Dubai",
    description:
      "Witness futuristic architecture, luxury shopping, desert safaris, and Arabian hospitality in the heart of the desert.",
    bg: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop",
    ],
  },
];

const SLIDE_INTERVAL   = 7000;
const GALLERY_INTERVAL = 2000;

// Preload all bg images into browser cache immediately
SLIDES.forEach(({ bg }) => { const img = new Image(); img.src = bg; });

// ─── GalleryImage ─────────────────────────────────────────────────────────────
function GalleryImage({ src, alt, active }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-xl h-full">
      {!loaded && <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className="w-full h-full object-cover"
        style={{
          opacity: loaded ? 1 : 0,
          transform: active ? "scale(1.08)" : "scale(1)",
          filter: active ? "brightness(1)" : "brightness(0.7)",
          transition: "transform 700ms ease, filter 600ms ease, opacity 400ms ease",
          willChange: "transform",
        }}
      />
      {active && (
        <div className="absolute inset-0 rounded-xl ring-2 ring-white pointer-events-none" />
      )}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl pointer-events-none"
        style={{ opacity: active ? 0.6 : 0.28, transition: "opacity 600ms ease" }}
      />
    </div>
  );
}

// ─── HeroSlider ───────────────────────────────────────────────────────────────
export default function HeroSlider() {
  const [current,    setCurrent]    = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [animKey,    setAnimKey]    = useState(0);
  const slideRef   = useRef(null);
  const galleryRef = useRef(null);

  const goTo = (idx) => {
    setCurrent(idx);
    setGalleryIdx(0);
    setAnimKey((k) => k + 1);
  };
  const next = () => goTo((current + 1) % SLIDES.length);
  const prev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length);

  useEffect(() => {
    slideRef.current = setInterval(next, SLIDE_INTERVAL);
    return () => clearInterval(slideRef.current);
  }, [current]); // eslint-disable-line

  useEffect(() => {
    galleryRef.current = setInterval(
      () => setGalleryIdx((i) => (i + 1) % 4),
      GALLERY_INTERVAL
    );
    return () => clearInterval(galleryRef.current);
  }, [current]);

  const slide = SLIDES[current];

  return (
    <>
      <style>{`
        @keyframes kenBurns {
          from { transform: scale(1);    }
          to   { transform: scale(1.09); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .anim-bg { animation: kenBurns 8s ease-out forwards; will-change: transform; }
        .anim-t1 { animation: fadeUp 0.6s 0s    ease-out both; }
        .anim-t2 { animation: fadeUp 0.6s 0.12s ease-out both; }
        .anim-t3 { animation: fadeUp 0.6s 0.24s ease-out both; }
        .anim-g  { animation: fadeUp 0.6s 0.08s ease-out both; }
      `}</style>

      {/* ── No bg color on wrapper — let the slide bg show through ── */}
      <div className="w-full">

        {/* ── Slide area ── */}
        <section className="relative w-full overflow-hidden lg:h-screen lg:min-h-[600px]">

          {/* Backgrounds — always mounted, opacity-switched */}
          {SLIDES.map((s, i) => (
            <div
              key={s.id}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ opacity: i === current ? 1 : 0, zIndex: 0 }}
              aria-hidden={i !== current}
            >
              <img
                src={s.bg}
                alt={s.country}
                className={`w-full h-full object-cover ${i === current ? "anim-bg" : ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
          ))}

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10
            py-14 sm:py-16 lg:py-0 lg:h-full lg:flex lg:items-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

              {/* Text */}
              <div key={`text-${animKey}`} className="text-white space-y-4">
                <h1
                  className="anim-t1 font-black leading-none tracking-tight
                    text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{ textShadow: "0 4px 28px rgba(0,0,0,0.75)" }}
                >
                  {slide.country}
                </h1>
                <p
                  className="anim-t2 text-sm sm:text-base lg:text-lg leading-relaxed
                    text-white/90 max-w-md"
                  style={{ textShadow: "0 2px 14px rgba(0,0,0,0.6)" }}
                >
                  {slide.description}
                </p>
                <div className="anim-t3 pt-1">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                    font-bold text-white bg-blue-600 hover:bg-blue-700
                    shadow-lg transition-all duration-200 hover:scale-105 active:scale-95">
                    Explore Now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Gallery */}
              <div
                key={`gallery-${current}`}
                className="anim-g grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3
                  h-44 sm:h-64 md:h-72 lg:h-[460px]"
              >
                {slide.gallery.map((src, i) => (
                  <GalleryImage
                    key={src}
                    src={src}
                    alt={`${slide.country} ${i + 1}`}
                    active={i === galleryIdx}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop arrows */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="hidden lg:flex absolute left-5 xl:left-8 top-1/2 -translate-y-1/2 z-30
              w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm
              border border-white/20 items-center justify-center
              transition-all duration-200 hover:scale-110 active:scale-90"
          >
            <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="hidden lg:flex absolute right-5 xl:right-8 top-1/2 -translate-y-1/2 z-30
              w-12 h-12 rounded-full bg-white/15 hover:bg-white/30 backdrop-blur-sm
              border border-white/20 items-center justify-center
              transition-all duration-200 hover:scale-110 active:scale-90"
          >
            <ChevronRight className="w-6 h-6 text-white" strokeWidth={2.5} />
          </button>

          {/* ── Mobile arrows — overlaid at bottom of slide, no separate row ── */}
          <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-30
            flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60
                border border-white/20 backdrop-blur-sm flex items-center justify-center
                transition-all duration-200 active:scale-90"
            >
              <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full bg-black/40 hover:bg-black/60
                border border-white/20 backdrop-blur-sm flex items-center justify-center
                transition-all duration-200 active:scale-90"
            >
              <ChevronRight className="w-5 h-5 text-white" strokeWidth={2.5} />
            </button>
          </div>

        </section>
      </div>
    </>
  );
}