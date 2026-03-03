import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "DESTINATIONS", path: "/destinations" },
    { label: "ABOUT", path: "/about" },
    { label: "TOURS", path: "/tours" },
    { label: "VISA SERVICE", path: "/visa-service" },
    { label: "AIR TICKETS", path: "/air-tickets" },
    { label: "BLOG", path: "/blog" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div 
        className={`transition-all duration-300 ${
          scrolled ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'
        }`}
        style={{ backgroundColor: '#122B90' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center py-2 gap-2 text-white text-sm">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                amazingtoursbd@gmail.com
              </span>
              <span className="hidden lg:block">Welcome to Amazing Tours</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              {[FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    <Icon size={14} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-xl' : 'shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                style={{ 
                  background: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)'
                }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div>
                <h1 
                  className="font-bold text-xl"
                  style={{ color: '#1D4ED8' }}
                >
                  Amazing Tours
                </h1>
                <p className="text-xs text-gray-500">Your Journey Begins</p>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="relative text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 group"
                >
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                  ></span>
                </Link>
              ))}
            </div>

            {/* Call Now Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:01898760770"
                className="relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white overflow-hidden group"
                style={{ backgroundColor: '#1D4ED8' }}
              >
                <span 
                  className="absolute inset-0 w-0 bg-blue-700 transition-all duration-300 ease-out group-hover:w-full"
                ></span>
                
                <svg 
                  className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                
                <span className="relative z-10">Call Now</span>
                
                <span className="absolute inset-0 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500"></span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="w-6 space-y-1.5">
                <span 
                  className={`block h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span 
                  className={`block h-0.5 bg-blue-600 rounded-full transition-all duration-300 ${
                    isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Sliding from Left */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-64 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center px-4 py-4 border-b">
            <h2 className="font-bold text-lg text-blue-700">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col pt-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-6 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:01898760770"
              className="flex items-center justify-center gap-2 mt-4 py-3 mx-6 rounded-lg font-semibold text-white"
              style={{ backgroundColor: '#1D4ED8' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Now: 01898760770
            </a>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsMenuOpen(false)}
          ></div>
        )}
      </nav>
    </>
  );
}