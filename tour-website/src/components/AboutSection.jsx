import { useEffect } from "react";
import AOS from "aos";

export default function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
            Why We’re <span className="text-blue-700">Best Agency</span>
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Welcome to our travel agency — your gateway to unforgettable journeys!
            We provide seamless planning, personalized itineraries, and memorable
            adventures around the world.
          </p>

          <p className="text-gray-600 mb-10">
            We believe travel is more than just moving from one place to another —
            it’s about discovering cultures, creating experiences, and making
            lifelong memories.
          </p>

          {/* Signature */}
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Signature.png"
              alt="signature"
              className="h-12 opacity-70"
            />

            <div>
              <h4 className="font-bold text-gray-900">Robert Harringson</h4>
              <p className="text-sm text-gray-500">Founder</p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE COLLAGE */}
        <div className="relative h-[520px]" data-aos="fade-left">
          
          {/* Main big image */}
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600"
            className="absolute top-0 left-0 w-72 h-96 object-cover rounded-3xl shadow-2xl"
            alt=""
          />

          {/* Top right image */}
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600"
            className="absolute top-0 right-0 w-64 h-64 object-cover rounded-3xl shadow-2xl"
            alt=""
          />

          {/* Middle overlapping image */}
          <img
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=600"
            className="absolute top-40 right-10 w-60 h-60 object-cover rounded-3xl shadow-2xl"
            alt=""
          />

          {/* Bottom image */}
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600"
            className="absolute bottom-0 left-24 w-72 h-48 object-cover rounded-3xl shadow-2xl"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}