import { Link } from "react-router-dom";

export default function Footer() {

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Matched to navbar routes
  const topDestinations = [
    { label: "Maldives Tour",         path: "/destinations" },
    { label: "Bali, Indonesia Tour",  path: "/destinations" },
    { label: "Thailand Tour",         path: "/destinations" },
    { label: "Philippines Tour",      path: "/destinations" },
    { label: "Hawaii, USA Tour",      path: "/destinations" },
    { label: "Switzerland Tour",      path: "/destinations" },
    { label: "New Zealand Tour",      path: "/destinations" },
    { label: "Costa Rica Tour",       path: "/destinations" },
    { label: "Peru (Machu Picchu)",   path: "/destinations" },
    { label: "Paris, France Tour",    path: "/destinations" },
  ];

  const popularSearches = [
    { label: "Adventure",              path: "/tours" },
    { label: "Hiking & Trekking",      path: "/tours" },
    { label: "Holiday Packages",       path: "/tours" },
    { label: "Flights And Hotels",     path: "/air-tickets" },
    { label: "Honeymoon Trip",         path: "/tours" },
    { label: "Bali Vacation Package",  path: "/tours" },
    { label: "Desert Safari",          path: "/tours" },
    { label: "Last-Minute Deals",      path: "/tours" },
    { label: "Summer Vacation",        path: "/tours" },
    { label: "Wildlife Safari",        path: "/tours" },
  ];

  const resources = [
    { label: "About Time Ex Tours",    path: "/about" },
    { label: "Health & Safety",        path: "/about" },
    { label: "Visa Processing",        path: "/visa-service" },
    { label: "Customize Tour",         path: "/tours" },
    { label: "Travel Inspirations",    path: "/blog" },
    { label: "Traveler Reviews",       path: "/about" },
    { label: "Terms & Condition",      path: "/about" },
    { label: "Contact Us",             path: "/contact" },
  ];

  const socialIcons = [
    { label: "Facebook",  path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
    { label: "LinkedIn",  path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
    { label: "YouTube",   path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
    { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  ];

  // Nav menu items matching navbar exactly
  const navLinks = [
    { label: "Home",         path: "/" },
    { label: "Destinations", path: "/destinations" },
    { label: "About",        path: "/about" },
    { label: "Tours",        path: "/tours" },
    { label: "Visa Service", path: "/visa-service" },
    { label: "Air Tickets",  path: "/air-tickets" },
    { label: "Gallery",  path: "/gallery" },
    { label: "Blog",         path: "/blog" },
    { label: "Contact",      path: "/contact" },
  ];

  return (
    <>
      <style>{`
        .footer-link {
          transition: color 0.2s ease, transform 0.2s ease;
          display: inline-block;
        }
        .footer-link:hover { color: #60a5fa; transform: translateX(4px); }
      `}</style>

      <footer className="relative bg-gray-900 text-gray-300 overflow-hidden">

        {/* Subtle bg texture */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10">

          {/* ── Top contact bar ── */}
          <div className="bg-gray-800/90 backdrop-blur-sm border-b border-gray-700 py-7">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                {/* Inquiry */}
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">To More Inquiry</p>
                    <Link to="/contact" onClick={handleLinkClick}
                      className="text-gray-400 text-xs mt-0.5 hover:text-blue-400 transition-colors">
                      Don't hesitate to contact us.
                    </Link>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">WhatsApp</p>
                    <a href="https://wa.me/8801317525225"
                      className="text-white font-semibold text-sm hover:text-green-400 transition-colors">
                      +880 1317-525225
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Mail Us</p>
                    <a href="mailto:timeextours@gmail.com"
                      className="text-white font-semibold text-sm hover:text-blue-400 transition-colors break-all">
                      info@timeexbd.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-0.5">Call Us</p>
                    <a href="tel:+8801316690988"
                      className="text-white font-semibold text-sm hover:text-blue-400 transition-colors">
                      +880 1316-690988
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* ── Main footer body ── */}
          <div className="py-14 bg-gray-900/80 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

                {/* Brand column */}
                <div>
                  {/* Logo */}
                  <Link to="/" onClick={handleLinkClick} className="flex items-center gap-3 mb-5 group w-fit">
                    <img className="w-20" src="https://i.postimg.cc/FKrvQn2X/Screenshot-2026-03-06-023104-(1).png" alt="" />
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight group-hover:text-blue-400 transition-colors">
                        Time Ex Tours
                      </h3>
                      <p className="text-gray-400">& Travels</p>
                    </div>
                  </Link>

                  {/* Address */}
                  <div className="mb-5 space-y-3">
                    <div>
                      <p className="text-white font-semibold text-xs uppercase tracking-wider mb-1" style={{ color: "#60a5fa" }}>
                        🏢 Head Office
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Ahsan Tower (2nd Floor),<br />
                        56 Kemal Ataturke Avenue,<br />
                        Banani, C/A, Dhaka-1213
                      </p>
                      <a href="mailto:timextours@gmail.com"
                        className="text-gray-500 text-xs hover:text-blue-400 transition-colors mt-0.5 block">
                        timeextours@gmail.com
                      </a>
                    </div>
                    <div className="border-t border-gray-700/60 pt-3">
                      <p className="text-white font-semibold text-xs uppercase tracking-wider mb-1" style={{ color: "#60a5fa" }}>
                        🏢 Branch Office
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        GA-25/5/A (2nd Floor),<br />
                        Pragati Sarani, Shajadpur,<br />
                        Gulshan, Dhaka-1212
                      </p>
                      <a href="mailto:timextours.office@gmail.com"
                        className="text-gray-500 text-xs hover:text-blue-400 transition-colors mt-0.5 block">
                        timeextours.office@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Social icons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {socialIcons.map((s) => (
                      <a key={s.label} href="#" aria-label={s.label}
                        className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110">
                        <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d={s.path} />
                        </svg>
                      </a>
                    ))}
                  </div>

                  {/* Call buttons */}
                  <div className="space-y-2 w-[175px]">
                    <a href="tel:+8801317525225"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #1D4ED8, #3B82F6)" }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +880 1317-525225
                    </a>
                    <a href="tel:+8801316690988"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #059669, #10b981)" }}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      +880 1316-690988
                    </a>
                  </div>
                </div>

                {/* Top Destinations */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 pb-3 border-b border-gray-700">
                    Top Destination
                  </h3>
                  <ul className="space-y-2.5">
                    {topDestinations.map((d) => (
                      <li key={d.label}>
                        <Link to={d.path} onClick={handleLinkClick} className="footer-link text-gray-400 text-sm">
                          {d.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Popular Searches */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 pb-3 border-b border-gray-700">
                    Popular Search
                  </h3>
                  <ul className="space-y-2.5">
                    {popularSearches.map((s) => (
                      <li key={s.label}>
                        <Link to={s.path} onClick={handleLinkClick} className="footer-link text-gray-400 text-sm">
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h3 className="text-white font-bold text-base mb-5 pb-3 border-b border-gray-700">
                    Resources
                  </h3>
                  <ul className="space-y-2.5">
                    {resources.map((r) => (
                      <li key={r.label}>
                        <Link to={r.path} onClick={handleLinkClick} className="footer-link text-gray-400 text-sm">
                          {r.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* ── Quick nav links row ── */}
              <div className="mt-12 pt-8 border-t border-gray-800">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                  {navLinks.map((n) => (
                    <Link
                      key={n.path}
                      to={n.path}
                      onClick={handleLinkClick}
                      className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200"
                    >
                      {n.label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ── Bottom copyright bar ── */}
          <div className="border-t border-gray-800 bg-gray-900/90 py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  © {new Date().getFullYear()} Time Ex Tours & Travels. All rights reserved.
                  <span className="block sm:inline sm:ml-2">
                    Developed by{" "}
                    <a
                      href="https://ventureit.tech"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      VentureIT
                    </a>
                  </span>
                </p>
                <div className="flex flex-wrap justify-center gap-5">
                  <Link to="/about" onClick={handleLinkClick}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                    Privacy Policy
                  </Link>
                  <Link to="/about" onClick={handleLinkClick}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                    Terms of Service
                  </Link>
                  <Link to="/contact" onClick={handleLinkClick}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Floating action buttons — WhatsApp + Call */}
        <div className="fixed bottom-6 right-5 flex flex-col items-center gap-3 z-50">

          {/* WhatsApp */}
          <a
            href="https://wa.me/8801317525225"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg
              hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ background: "#25D366" }}
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Call */}
          <a
            href="tel:+8801317525225"
            aria-label="Call Now"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg
              hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            style={{ background: "#1D4ED8" }}
          >
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>

        </div>

      </footer>
    </>
  );
}