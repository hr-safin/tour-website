import React, { useState, useEffect } from "react";

const StatsNewsletterFooter = () => {
  const [email, setEmail] = useState("");
  const [counters, setCounters] = useState({
    travelers: 0,
    packages: 0,
    reviews: 0,
    experience: 0,
  });

  const stats = [
    {
      id: 1,
      number: 220000,
      label: "Happy Travelers",
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
      key: "travelers",
    },
    {
      id: 2,
      number: 200,
      label: "Special Packages",
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
      key: "packages",
    },
    {
      id: 3,
      number: 9950,
      label: "Positive Reviews",
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
      key: "reviews",
    },
    {
      id: 4,
      number: 16,
      label: "Years of Experience",
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
      key: "experience",
    },
  ];

  // Animate counters
  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        travelers:
          prev.travelers < stats[0].number
            ? prev.travelers + Math.ceil(stats[0].number / 120)
            : stats[0].number,
        packages:
          prev.packages < stats[1].number
            ? prev.packages + Math.ceil(stats[1].number / 100)
            : stats[1].number,
        reviews:
          prev.reviews < stats[2].number
            ? prev.reviews + Math.ceil(stats[2].number / 100)
            : stats[2].number,
        experience:
          prev.experience < stats[3].number
            ? prev.experience + 1
            : stats[3].number,
      }));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      {/* Stats */}
      <section className="py-16 px-4 bg-gradient-to-r from-sky-50 to-indigo-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, idx) => (
            <div
              key={stat.id}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center gap-4"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-500">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500">
                {counters[stat.key].toLocaleString()}
                {stat.key === "reviews" ? "%" : stat.key === "travelers" ? " K+" : ""}
              </h3>
              <p className="text-slate-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-indigo-900 to-sky-900 text-white overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-center bg-white text-slate-900 rounded-3xl p-12 shadow-2xl animate-scaleIn">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Join Our Newsletter
          </h2>
          <p className="text-lg mb-8">
            Get exclusive monthly deals and travel inspiration
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-6 py-4 rounded-lg border-2 border-slate-300 focus:border-indigo-500 focus:outline-none transition-colors duration-300"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-sky-500 hover:from-sky-500 hover:to-indigo-500 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
            >
              Subscribe
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
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Amazing Tours BD</h3>
            <p className="text-slate-400">
              Your ultimate travel solution partner in Bangladesh. Domestic and
              international packages, visa support, and holiday planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Destinations", "Tours", "Visa Service", "About", "Blog", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-primary transition-colors duration-300"
                    >
                      › {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-slate-400 mb-2">📞 01898760770, 01898760772</p>
            <p className="text-slate-400 mb-2">
              ✉️ amazingtoursbd@gmail.com
            </p>
            <p className="text-slate-400">
              📍 66/67 Elephant Road, 6th Floor, Dhaka, Bangladesh
            </p>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Amazing Tours</h3>
            <p className="text-slate-400 leading-relaxed">
              Amazing Tours is the leading travel agency in Bangladesh offering
              domestic & international packages, air tickets, and Umrah
              services.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
          &copy; 2026 Amazing Tours. All Rights Reserved.
        </div>
      </footer>

      <style jsx>{`
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

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out both;
        }

        .text-gradient {
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      `}</style>
    </>
  );
};

export default StatsNewsletterFooter;