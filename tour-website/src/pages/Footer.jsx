export default function Footer() {
  const topDestinations = [
    "Maldives Tour",
    "Bali, Indonesia Tour",
    "Thailand Tour",
    "Philippines Tour",
    "Hawaii, USA Tour",
    "Switzerland Tour",
    "New Zealand Tour",
    "Costa Rica Tour",
    "Peru (Machu Picchu)",
    "Paris, France Tour"
  ];

  const popularSearches = [
    "Adventure",
    "Hiking & Stiking",
    "Holiday Packages",
    "Flights And Hotels",
    "Honeymoon Trip",
    "Bali Vacation Package",
    "Desert Safari",
    "Last-Minute Deals",
    "Summer Vacation",
    "Wildlife Safari"
  ];

  const resources = [
    "About GoFly",
    "Health & Safety Measure",
    "Visa Processing",
    "Customize Tour",
    "Travel Inspirations",
    "Traveler Reviews",
    "Terms & Condition",
    "Sitemap"
  ];

  return (
    <footer className="relative bg-gray-900 text-gray-300">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/32261647/pexels-photo-32261647.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Top Contact Bar */}
        <div className="bg-gray-800/90 backdrop-blur-sm py-8 border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Inquiry */}
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">To More Inquiry</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Don't hesitate Call to GoFly.</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-xs md:text-sm mb-1">WhatsApp</h3>
                  <a href="tel:+913455338655" className="text-white font-semibold text-base md:text-lg hover:text-blue-400 transition-colors">
                    +91 345 533 865
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-xs md:text-sm mb-1">Mail Us</h3>
                  <a href="mailto:info@example.com" className="text-white font-semibold text-base md:text-lg hover:text-blue-400 transition-colors break-all">
                    info@example.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-700/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-gray-400 text-xs md:text-sm mb-1">Call Us</h3>
                  <a href="tel:+914564533455" className="text-white font-semibold text-base md:text-lg hover:text-blue-400 transition-colors">
                    +91 456 453 345
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ background: 'linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%)' }}
                  >
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">GoFLY</h3>
                    <p className="text-gray-400 text-sm">Travel.co</p>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="text-white font-semibold">GoFly Travel Agency</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Skyline Plaza, 5th Floor, 123 Main Street<br />
                    Los Angeles, CA 90001, USA
                  </p>
                </div>

                {/* Social Icons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {[
                    { icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                    { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
                    { icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                    { icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                  ].map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </a>
                  ))}
                </div>

                {/* Google Play Button */}
                <a
                  href="#"
                  className="inline-flex items-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-105"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D9FF"/>
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                    <path d="M3.84 2.15C4.03 2.06 4.24 2 4.46 2C4.82 2 5.18 2.14 5.46 2.39L14.54 11.15L6.05 2.66L3.84 2.15Z" fill="#00F076"/>
                    <path d="M16.81 8.88L5.46 21.61C5.18 21.86 4.82 22 4.46 22C4.24 22 4.03 21.94 3.84 21.85L6.05 2.66L16.81 8.88Z" fill="#FF3A44"/>
                  </svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-400">GET IN</p>
                    <p className="text-white font-semibold">Google Play</p>
                  </div>
                </a>
              </div>

              {/* Top Destination */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-3">Top Destination</h3>
                <ul className="space-y-3">
                  {topDestinations.map((dest, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm">
                        {dest}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Popular Search */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-3">Popular Search</h3>
                <ul className="space-y-3">
                  {popularSearches.map((search, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm">
                        {search}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-3">Resources</h3>
                <ul className="space-y-3">
                  {resources.map((resource, index) => (
                    <li key={index}>
                      <a href="#" className="text-gray-400 hover:text-blue-400 hover:translate-x-1 inline-block transition-all duration-300 text-sm">
                        {resource}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 bg-gray-900/90 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © 2024 GoFly Travel Agency. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
}