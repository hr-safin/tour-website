import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const sliderData = [
  {
    id: 1,
    country: "Thailand",
    description: "Discover the Land of Smiles with its stunning temples, pristine beaches, vibrant culture, and world-renowned cuisine. Experience the perfect blend of ancient traditions and modern luxury.",
    backgroundImage: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1920&h=1080&fit=crop",
    sideImages: [
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/2797526/pexels-photo-2797526.jpeg",
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 2,
    country: "Switzerland",
    description: "Experience the majestic Alps, crystal-clear lakes, charming villages, and world-class ski resorts. Immerse yourself in Swiss precision, chocolate, and breathtaking mountain scenery.",
    backgroundImage: "https://images.unsplash.com/photo-1531583959375-fab3cd498f08?w=1920&h=1080&fit=crop",
    sideImages: [
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1549122728-f519709caa9c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/789380/pexels-photo-789380.jpeg"
    ]
  },
  {
    id: 3,
    country: "Maldives",
    description: "Paradise on Earth with turquoise lagoons, white sandy beaches, luxury overwater villas, and spectacular marine life. The ultimate tropical getaway for romance and relaxation.",
    backgroundImage: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&h=1080&fit=crop",
    sideImages: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&h=400&fit=crop",
      "https://images.pexels.com/photos/29289151/pexels-photo-29289151.jpeg",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=400&fit=crop"
    ]
  },
  {
    id: 4,
    country: "Dubai",
    description: "Witness futuristic architecture, luxury shopping, desert safaris, and Arabian hospitality. A dazzling blend of modern innovation and rich cultural heritage in the heart of the desert.",
    backgroundImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&h=1080&fit=crop",
    sideImages: [
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=600&h=400&fit=crop"
    ]
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderData.length);
      setImageIndex(0);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(imageTimer);
  }, [current]);

  const next = () => {
    setCurrent((current + 1) % sliderData.length);
    setImageIndex(0);
  };

  const prev = () => {
    setCurrent((current - 1 + sliderData.length) % sliderData.length);
    setImageIndex(0);
  };

  const currentSlide = sliderData[current];

  return (
    <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-screen overflow-hidden">
      
      {/* Background Image with Animation */}
      {sliderData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : ''
          }`}
        >
          <img
            src={slide.backgroundImage}
            alt={slide.country}
            className="w-full h-full object-cover"
            style={{
              animation: index === current ? 'kenBurns 8s ease-out' : 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Main Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center pb-20 md:pb-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-white space-y-4 sm:space-y-6">
            <div className="overflow-hidden">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none"
                style={{
                  textShadow: '4px 4px 20px rgba(0,0,0,0.8)',
                  animation: 'slideInLeft 1s ease-out'
                }}
              >
                {currentSlide.country}
              </h1>
            </div>

            <div className="overflow-hidden">
              <p 
                className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/95 max-w-2xl"
                style={{
                  textShadow: '2px 2px 10px rgba(0,0,0,0.8)',
                  animation: 'slideInLeft 1.2s ease-out'
                }}
              >
                {currentSlide.description}
              </p>
            </div>

            <div 
              className="overflow-hidden pt-2"
              style={{ animation: 'slideInLeft 1.4s ease-out' }}
            >
              <button 
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl group text-sm sm:text-base"
                style={{ backgroundColor: '#1D4ED8' }}
              >
                Explore Now
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side - Image Slider Grid - Fully Responsive */}
          <div 
            className="grid grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:gap-4 h-48 sm:h-64 md:h-80 lg:h-[500px]"
            style={{ animation: 'fadeIn 1s ease-out' }}
          >
            {currentSlide.sideImages.map((image, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl sm:shadow-2xl group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`${currentSlide.country} ${index + 1}`}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    index === imageIndex 
                      ? 'scale-110 brightness-100' 
                      : 'scale-100 brightness-75'
                  }`}
                />
                
                <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-500 ${
                  index === imageIndex ? 'opacity-100' : 'opacity-40'
                }`}></div>

                {index === imageIndex && (
                  <div className="absolute inset-0 border-2 sm:border-4 border-white rounded-lg sm:rounded-xl md:rounded-2xl animate-pulse"></div>
                )}

                <div 
                  className={`absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-white text-xs sm:text-sm md:text-base transition-all duration-300 ${
                    index === imageIndex 
                      ? 'bg-white/30 backdrop-blur-md scale-110' 
                      : 'bg-black/40'
                  }`}
                >
                  {index + 1}
                </div>

                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Desktop: Sides, Mobile: Bottom Center */}
      <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4">
        <button
          onClick={prev}
          className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
        </button>

        {/* Counter - Mobile */}
        <div className="text-white font-bold px-4">
          <span className="text-xl">{String(current + 1).padStart(2, '0')}</span>
          <span className="text-white/60 text-base"> / {String(sliderData.length).padStart(2, '0')}</span>
        </div>

        <button
          onClick={next}
          className="w-12 h-12 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
        </button>
      </div>

      {/* Navigation Arrows - Desktop Only (Sides) */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-6 lg:right-8 top-1/2 -translate-y-1/2 z-40 w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 rounded-full items-center justify-center transition-all duration-300 hover:scale-110 group"
      >
        <ChevronRight className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:scale-110 transition-transform" strokeWidth={3} />
      </button>

      {/* Counter - Desktop Only (Bottom Right) */}
      <div className="hidden md:block absolute right-6 md:right-8 lg:right-12 bottom-6 md:bottom-8 lg:bottom-12 z-40 text-white font-bold">
        <span className="text-2xl md:text-3xl">{String(current + 1).padStart(2, '0')}</span>
        <span className="text-white/60 text-lg md:text-xl"> / {String(sliderData.length).padStart(2, '0')}</span>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
}