import { useState, useEffect, useRef } from "react";

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
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

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className}>
      {!isLoaded && isInView && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-3xl" />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default function AboutSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-blue-600">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-4 sm:mb-5 md:mb-6">
              Time Ex Tours & Travels
            </h3>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-semibold mb-4 sm:mb-5 md:mb-6 leading-relaxed">
              "Your Satisfaction Is Our Priority."
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6">
              Time Ex Tours & Travels is a fully accredited and professionally managed travel agency in Bangladesh, committed to delivering reliable, efficient, and strategic travel solutions.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6">
              The name <strong>"Time-Ex"</strong> stands for <strong>Time Excellence</strong> - a philosophy that defines our identity and service standard. <strong>Time</strong> represents punctuality, responsiveness, and respect for our clients' valuable schedules. <strong>Ex</strong> signifies Excellence - excellence in service delivery, operational precision, and customer experience.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5 md:mb-6">
              We are an <strong>IATA Approved Travel Agency</strong>, approved by the Civil Aviation Authority of Bangladesh and the Ministry of Civil Aviation and Tourism, Government of Bangladesh. We are also a licensed Tour Operator under the Bangladesh Tourism Board and proud members of ATAB and TOAB.
            </p>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              From international and domestic air ticketing to visa assistance, corporate travel management, holiday packages, hotel reservations, and Umrah services, we provide seamless travel solutions for our valued clients.
            </p>
          </div>

          {/* RIGHT IMAGE COLLAGE - Mobile Optimized */}
          <div className="relative order-1 lg:order-2">
            
            {/* Mobile Layout (< 640px) */}
            <div className="block sm:hidden">
              {/* First large image */}
              <div className="mb-3">
                <LazyImage
                  src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop"
                  alt="Mountain adventure and winter sports"
                  className="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
                />
              </div>
              
              {/* Two smaller images side by side */}
              <div className="grid grid-cols-2 gap-3">
                <LazyImage
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop"
                  alt="Global travel destinations"
                  className="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
                />
                <LazyImage
                  src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
                  alt="Tropical beach destinations"
                  className="w-full h-64 rounded-2xl overflow-hidden shadow-xl"
                />
              </div>
            </div>

            {/* Tablet & Desktop Layout (>= 640px) */}
            <div className="hidden sm:block relative h-[450px] md:h-[550px] lg:h-[600px]">
              
              {/* Large left image */}
              <LazyImage
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop"
                alt="Mountain adventure and winter sports"
                className="absolute top-0 left-0 w-[47%] h-[65%] md:h-[68%] rounded-3xl overflow-hidden shadow-2xl"
              />

              {/* Top right image */}
              <LazyImage
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop"
                alt="Global travel destinations"
                className="absolute top-0 right-0 w-[50%] h-[50%] md:h-[52%] rounded-3xl overflow-hidden shadow-2xl"
              />

              {/* Bottom right image */}
              <LazyImage
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
                alt="Tropical beach destinations"
                className="absolute bottom-0 right-0 w-[50%] h-[47%] rounded-3xl overflow-hidden shadow-2xl"
              />

              {/* Blue decorative dot */}
              <div className="absolute top-[44%] left-[42%] md:top-[45%] md:left-[43%] w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full shadow-lg z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}