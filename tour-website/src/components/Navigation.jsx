import React, { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "DESTINATIONS", path: "/destinations" },
    { label: "ABOUT", path: "/about" },
    { label: "TOURS", path: "/tours" },
    { label: "VISA SERVICE", path: "/visa-service" },
    { label: "AIR TICKETS +", path: "/air-tickets" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div style={{ backgroundColor: '#122B90' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-2 gap-2">
            {/* Left side - Email and Welcome message */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span style={{ color: '#9BBEFF' }}>✉</span>
                <span style={{ color: '#F0F5FF' }}>Email:</span>
                <a
                  href="mailto:amazingtoursbd@gmail.com"
                  style={{ color: '#9BBEFF' }}
                  className="hover:opacity-80 transition-opacity"
                >
                  amazingtoursbd@gmail.com
                </a>
              </div>
              <div className="hidden lg:block" style={{ color: '#DFE8FF' }}>
                Welcome to Amazing Tours. Call us 01898760770, 01898760772
              </div>
            </div>

            {/* Right side - Language and Social icons */}
            <div className="flex items-center gap-4">
              {/* Language Selector */}
              <div className="flex items-center gap-2 text-sm cursor-pointer hover:opacity-80 transition-opacity">
                <span>🇺🇸</span>
                <span>EN</span>
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  style={{ borderColor: '#1A42C0' }}
                  className="w-7 h-7 rounded-full border hover:opacity-80 flex items-center justify-center transition-all text-xs"
                >
                  f
                </a>
                <a
                  href="#"
                  style={{ borderColor: '#1A42C0' }}
                  className="w-7 h-7 rounded-full border hover:opacity-80 flex items-center justify-center transition-all text-xs"
                >
                  𝕏
                </a>
                <a
                  href="#"
                  style={{ borderColor: '#1A42C0' }}
                  className="w-7 h-7 rounded-full border hover:opacity-80 flex items-center justify-center transition-all text-xs"
                >
                  in
                </a>
                <a
                  href="#"
                  style={{ borderColor: '#1A42C0' }}
                  className="w-7 h-7 rounded-full border hover:opacity-80 flex items-center justify-center transition-all text-xs"
                >
                  ▶
                </a>
                <a
                  href="#"
                  style={{ borderColor: '#1A42C0' }}
                  className="w-7 h-7 rounded-full border hover:opacity-80 flex items-center justify-center transition-all text-xs"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="/" className="flex-shrink-0">
              <div 
                className="relative w-20 h-20 rounded-2xl border-4 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
                style={{ 
                  background: 'linear-gradient(to bottom right, #1D4ED8, #1637A8)',
                  borderColor: '#79A8FF'
                }}
              >
                {/* Sun decoration */}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="w-6 h-6 rounded-full relative"
                    style={{ backgroundColor: '#79A8FF' }}
                  >
                    {/* Sun rays */}
                    <div className="absolute inset-0">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute w-px h-2 left-1/2 top-0 origin-bottom"
                          style={{ 
                            backgroundColor: '#79A8FF',
                            transform: `rotate(${i * 45}deg) translateX(-50%)`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Plane icon */}
                <div className="absolute top-2 right-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L3 7l7 3 7-3-7-5zM3 13l7 3 7-3M3 10l7 3 7-3" />
                  </svg>
                </div>

                {/* Text */}
                <div className="text-center text-white font-bold leading-tight mt-3">
                  <div className="text-sm tracking-wider">AMAZING</div>
                  <div className="text-sm tracking-wider">TOURS BD</div>
                  <div 
                    className="text-[8px] tracking-wide mt-0.5"
                    style={{ color: '#BDD3FF' }}
                  >
                    YOUR TOUR SOLUTION PARTNER
                  </div>
                </div>
              </div>
            </a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="font-semibold transition-colors duration-200 text-sm tracking-wide text-black"
                  style={{ color: '#000000' }}
                  onMouseEnter={(e) => e.target.style.color = '#1D4ED8'}
                  onMouseLeave={(e) => e.target.style.color = '#000000'}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-black hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div 
              className="lg:hidden pb-4 border-t"
              style={{ borderColor: '#F0F5FF' }}
            >
              <div className="py-4 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={handleLinkClick}
                    className="block py-3 px-4 font-semibold transition-all duration-200 rounded-lg text-black"
                    style={{ color: '#000000' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#1D4ED8';
                      e.target.style.backgroundColor = '#F0F5FF';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#000000';
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Mobile Contact Info */}
              <div 
                className="pt-4 border-t px-4 space-y-3 text-sm"
                style={{ borderColor: '#F0F5FF' }}
              >
                <div 
                  className="flex items-center gap-2 text-black"
                >
                  <span>📞</span>
                  <span>01898760770, 01898760772</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-black">✉️</span>
                  <a
                    href="mailto:amazingtoursbd@gmail.com"
                    style={{ color: '#1D4ED8' }}
                    className="hover:opacity-80 transition-opacity"
                  >
                    amazingtoursbd@gmail.com
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}