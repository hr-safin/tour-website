import React, { useState } from "react";

const StatsNewsletterFooter = () => {
  const [email, setEmail] = useState("");

  const stats = [
    {
      id: 1,
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
        >
          <rect x="16" y="20" width="32" height="36" rx="2" strokeWidth="2.5" />
          <path
            d="M24 14v8M40 14v8M20 32h24M20 40h16"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle cx="32" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      number: "220 K+",
      label: "Happy Traveler",
      color: "text-primary",
    },
    {
      id: 2,
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M32 14l6 12 12 2-9 8 2 12-11-6-11 6 2-12-9-8 12-2z"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M20 48c-3 2-6 3-6 6 0 3 10 4 18 4s18-1 18-4c0-3-3-4-6-6"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      number: "200+",
      label: "Special Packages",
      color: "text-primary",
    },
    {
      id: 3,
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
        >
          <rect x="16" y="22" width="32" height="28" rx="2" strokeWidth="2.5" />
          <path
            d="M24 18v8M40 18v8M22 32h20M22 40h14"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M28 46l4 4 8-8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      number: "99.5%",
      label: "Positives Review",
      color: "text-primary",
    },
    {
      id: 4,
      icon: (
        <svg
          className="w-12 h-12"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="32" cy="28" r="8" strokeWidth="2.5" />
          <path
            d="M20 48c0-6.627 5.373-12 12-12s12 5.373 12 12"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M46 26c1-1 2-2 3-2s2 1 2 3v8c0 2-1 3-2 3s-2-1-3-2"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      number: "16+",
      label: "Years of experience",
      color: "text-primary",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className="group text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div
                    className={`${stat.color} transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                      {stat.number}
                    </h3>
                    <p className="text-slate-600 font-medium">{stat.label}</p>
                  </div>
                </div>
                {/* Divider line - hidden on last item on large screens */}
                {index < stats.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-px h-16 bg-slate-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900 overflow-hidden">
        {/* Decorative Palm Leaves */}
        <div className="absolute top-0 left-0 w-72 h-72 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M10,100 Q30,50 50,40 T90,50 Q100,70 95,90 L70,100 Z"
              fill="#10b981"
              opacity="0.6"
            />
            <path
              d="M10,100 Q20,110 30,130 T50,160 Q60,150 55,130 L40,110 Z"
              fill="#10b981"
              opacity="0.8"
            />
            <ellipse
              cx="70"
              cy="140"
              rx="40"
              ry="60"
              fill="#10b981"
              opacity="0.4"
              transform="rotate(-30 70 140)"
            />
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-72 h-72 opacity-20 transform scale-x-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <path
              d="M10,100 Q30,50 50,40 T90,50 Q100,70 95,90 L70,100 Z"
              fill="#10b981"
              opacity="0.6"
            />
            <path
              d="M10,100 Q20,110 30,130 T50,160 Q60,150 55,130 L40,110 Z"
              fill="#10b981"
              opacity="0.8"
            />
            <ellipse
              cx="70"
              cy="140"
              rx="40"
              ry="60"
              fill="#10b981"
              opacity="0.4"
              transform="rotate(-30 70 140)"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 left-0 w-96 h-96 opacity-10">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse
              cx="50"
              cy="100"
              rx="60"
              ry="80"
              fill="#10b981"
              opacity="0.6"
            />
            <path
              d="M20,80 Q40,50 60,45 Q70,60 65,80 Z"
              fill="#10b981"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 transform scale-x-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <ellipse
              cx="50"
              cy="100"
              rx="60"
              ry="80"
              fill="#10b981"
              opacity="0.6"
            />
            <path
              d="M20,80 Q40,50 60,45 Q70,60 65,80 Z"
              fill="#10b981"
              opacity="0.8"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white rounded-3xl p-12 shadow-2xl animate-scaleIn">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Join The Newsletter
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            To receive our best monthly deals
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter Your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg border-2 border-slate-200 focus:border-primary focus:outline-none transition-colors duration-300 text-slate-700"
            />
            <button
              type="submit"
              className="group bg-primary hover:bg-primary text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <span>Subscribe</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <div className="space-y-6 animate-fadeInUp">
              <div className="w-48">
                <svg viewBox="0 0 200 100" className="w-full h-auto">
                  <path
                    d="M100,20 L130,50 L100,80 L70,50 Z"
                    fill="#3b82f6"
                    stroke="#fff"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="30" r="15" fill="#fbbf24" />
                  <path
                    d="M85,30 L90,25 L95,30 L100,20 L105,30 L110,25 L115,30"
                    stroke="#fbbf24"
                    strokeWidth="2"
                    fill="none"
                  />
                  <text
                    x="100"
                    y="55"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    AMAZING
                  </text>
                  <text
                    x="100"
                    y="68"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="14"
                    fontWeight="bold"
                  >
                    TOURS BD
                  </text>
                  <text
                    x="100"
                    y="78"
                    textAnchor="middle"
                    fill="#94a3b8"
                    fontSize="6"
                  >
                    YOUR TOUR SOLUTION PARTNER
                  </text>
                </svg>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">
                  Want To Take Tour Packages?
                </h3>
                <button className="bg-primary hover:bg-primary text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-lg">
                  Explore Tours
                </button>
              </div>

              {/* Social Icons */}
              <div className="flex gap-3">
                {[
                  "facebook",
                  "twitter",
                  "linkedin",
                  "youtube",
                  "instagram",
                ].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-full border border-slate-700 hover:border-primary flex items-center justify-center transition-all duration-300 hover:bg-primary group"
                  >
                    <svg
                      className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2 - Quick Links */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="text-xl font-bold mb-6">Quick link</h3>
              <ul className="space-y-3">
                {[
                  "Destinations",
                  "Tours",
                  "Visa Service",
                  "About",
                  "Blog",
                  "Contact",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-primary transition-colors duration-300 flex items-center gap-2"
                    >
                      <span className="text-primary">›</span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - More Inquiry */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="text-amber-500">📞</span>
                More Inquiry
              </h3>
              <div className="space-y-4 text-slate-400">
                <p>01898760770, 01898760772</p>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-amber-500">✉️</span>
                  Send Mail
                </h4>
                <a
                  href="mailto:amazingtoursbd@gmail.com"
                  className="text-slate-400 hover:text-primary transition-colors duration-300"
                >
                  amazingtoursbd@gmail.com
                </a>
              </div>

              <div className="mt-6">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span className="text-amber-500">📍</span>
                  Address
                </h4>
                <p className="text-slate-400">
                  66/67 Elephant Road, 6th Floor, Star Kabab Building, Dhaka,
                  Bangladesh
                </p>
              </div>
            </div>

            {/* Column 4 - About Amazing Tours */}
            <div
              className="animate-fadeInUp"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-xl font-bold mb-6">About Amazing Tours</h3>
              <p className="text-slate-400 leading-relaxed">
                Amazing Tours is the best travel agency in Bangladesh offering
                domestic and international travel packages, air ticketing (IATA
                certified), visa support, and holiday planning. Popular
                destinations include best Asia, Europe, the USA, Australia tour
                packages and Umrah agency. We are proud members of IATA, TOAB,
                ATAB, BOTOA, and PATA.
              </p>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-slate-800 pt-8 text-center">
            <p className="text-slate-500">
              Copyright 2026, Amazing Tours. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out both;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out both;
        }
      `}</style>
    </>
  );
};

export default StatsNewsletterFooter;
