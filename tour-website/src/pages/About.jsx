import React from 'react';

export default function AboutHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop"
          alt="About Amazing Tours"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4">
          About US
        </h1>
        
        {/* Breadcrumb
        <div className="flex items-center justify-center gap-3 text-sm md:text-base">
          <a href="/" className="hover:underline">Home</a>
          <span>•</span>
          <span className="text-white/80">About Amazing Tours</span>
        </div> */}
      </div>

      {/* rest of components */}
     
    </section>
  );
}