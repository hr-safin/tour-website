import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    destination: "Saudi Arabia",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&h=1080&fit=crop",
    title: "Ramadan Special Umrah Package 2026 from Bangladesh",
    description:
      "Perform Umrah In The Blessed Month Of Ramadan 2026 With Comfort, Guided Support, And Complete Arrangements From Bangladesh.",
  },
  {
    id: 2,
    destination: "Switzerland",
    image:
      "https://images.unsplash.com/photo-1531583959375-fab3cd498f08?w=1920&h=1080&fit=crop",
    title: "Let's go with Amazing Tours and discover a place",
    description:
      "Explore Breathtaking Destinations, Curated Experiences, And Unforgettable Journeys Tailored Just For You. Showcasing Iconic Landmarks, Scenic Landscapes, And Travelers Enjoying Their Experiences.",
  },
  {
    id: 3,
    destination: "Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1920&h=1080&fit=crop",
    title: "Experience the Magic of Paris",
    description:
      "Discover romantic streets, iconic monuments, and world-class cuisine in the City of Light. Create unforgettable memories with our curated Paris tours.",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderData.length) % sliderData.length,
    );
    setIsAutoPlay(false);
  };

  return (
    <div className="relative w-full h-screen bg-primary overflow-hidden rounded-b-[50px] md:rounded-b-[80px]">
      {/* Slide Container */}
      <div className="relative w-full h-full">
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <img
              src={slide.image}
              alt={slide.destination}
              className="w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"></div>
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-8 pb-20">
          {/* Destination Tag with Brush Stroke Effect */}
          <div className="mb-6 md:mb-8 relative animate-fadeIn">
            <div className="absolute inset-0 bg-primary rounded-lg blur-sm"></div>
            <div className="absolute inset-0 bg-primary rounded-lg"></div>
            <span className="relative px-8 py-3 text-white font-bold text-lg md:text-xl tracking-wide">
              {sliderData[currentSlide].destination}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-center mb-6 md:mb-8 leading-tight max-w-6xl text-white drop-shadow-2xl animate-slideUp px-4">
            {sliderData[currentSlide].title}
          </h1>

          {/* Description */}
          <p
            className="text-sm md:text-base lg:text-lg text-center max-w-4xl mb-8 md:mb-12 text-white drop-shadow-lg leading-relaxed animate-slideUp px-6"
            style={{ animationDelay: "0.2s" }}
          >
            {sliderData[currentSlide].description}
          </p>

          {/* CTA Button */}
          <button
            className="bg-primary hover:bg-primary text-white px-10 md:px-14 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg transition-all duration-300 shadow-2xl hover:shadow-lg hover:scale-105 animate-slideUp"
            style={{ animationDelay: "0.4s" }}
          >
            Book Your Trip
          </button>
        </div>
      </div>

      {/* Left Arrow - Small and Lower */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute left-4 md:left-8 bottom-20 md:bottom-28 z-20 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white p-2.5 md:p-3 rounded-full transition-all duration-300 border border-white/40 hover:border-white/60 hover:scale-110"
      >
        <ChevronLeft size={20} strokeWidth={2.5} />
      </button>

      {/* Right Arrow - Small and Lower */}
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlay(false)}
        onMouseLeave={() => setIsAutoPlay(true)}
        className="absolute right-4 md:right-8 bottom-20 md:bottom-28 z-20 bg-white/15 hover:bg-white/30 backdrop-blur-md text-white p-2.5 md:p-3 rounded-full transition-all duration-300 border border-white/40 hover:border-white/60 hover:scale-110"
      >
        <ChevronRight size={20} strokeWidth={2.5} />
      </button>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }

        .animate-slideUp {
          animation: slideUp 0.8s ease-out both;
        }
      `}</style>
    </div>
  );
}
