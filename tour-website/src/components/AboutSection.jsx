export default function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            About Us
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="order-2 lg:order-1">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6">
              Why We're Best Agency
            </h3>

            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-6 leading-relaxed">
              Welcome to GoFly Travel Agency – Your Gateway to Unforgettable Journeys!
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              GoFly Travel Agency is a trusted name in the travel industry, offering seamless travel planning, personalized itineraries, and unforgettable adventures. With years of experience and a network of global partners, we ensure a hassle-free and memorable journey for every traveler.
            </p>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10">
              We believe that travel is more than just moving from one place to another—it's about discovering new cultures, creating unforgettable experiences, and making lifelong memories.
            </p>

            {/* CEO Name */}
            <div className="flex items-center gap-4">
              <div className="w-20 md:w-24">
                <svg viewBox="0 0 100 40" className="w-full h-auto">
                  <path
                    d="M 5 25 Q 10 15 20 20 Q 25 22 30 20 Q 35 18 40 22 Q 45 25 50 22 Q 55 20 60 25"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    fill="none"
                    className="text-gray-800"
                  />
                </svg>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 text-lg md:text-xl">Robert Harringson</h4>
                <p className="text-sm md:text-base text-gray-600">Founder at GoFly</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE COLLAGE */}
          <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] order-1 lg:order-2">
            
            {/* Large left image - Skiing */}
            <div className="absolute top-0 left-0 w-[47%] h-[60%] sm:h-[65%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop"
                className="w-full h-full object-cover"
                alt="Winter skiing adventure"
              />
            </div>

            {/* Top right image - Travel landmarks */}
            <div className="absolute top-0 right-0 w-[50%] h-[50%] sm:h-[52%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop"
                className="w-full h-full object-cover"
                alt="Travel destinations"
              />
            </div>

            {/* Bottom right image - Beach kayaking */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[47%] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=800&fit=crop"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Blue decorative dot */}
            <div className="absolute top-[42%] left-[40%] sm:top-[45%] sm:left-[43%] w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full shadow-lg z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}