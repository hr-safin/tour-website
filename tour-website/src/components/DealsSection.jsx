import React from "react";

const DealsSection = () => {
  const deals = [
    {
      id: 1,
      category: "Explore China",
      discount: "3% Off",
      subtitle: "Discover Great Deal",
      image:
        "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800",
      bgColor: "from-primary to-primary",
      buttonColor: "bg-primary hover:bg-primary",
      size: "large",
    },
    {
      id: 2,
      category: "Beauty of Australia",
      title: "7 Days in Australia",
      discount: "5% Off",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800",
      bgColor: "from-orange-700 to-orange-800",
      badgeColor: "bg-primary",
      size: "medium",
    },
    {
      id: 3,
      category: "Honeymoon Tour",
      title: "Enjoy 3% Off",
      subtitle: "For Your First Book",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800",
      bgColor: "from-teal-700 to-teal-800",
      buttonColor: "bg-amber-500 hover:bg-amber-600",
      size: "medium",
    },
    {
      id: 4,
      category: "Savings Europe",
      discount: "2% Off",
      subtitle: "For Your First Book",
      image:
        "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800",
      bgColor: "from-amber-500 to-amber-600",
      buttonColor: "bg-primary hover:bg-primary",
      size: "large",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-primary text-3xl">→</span>
            <span className="text-primary font-bold text-lg italic tracking-wide">
              Hurry Up
            </span>
            <span className="text-primary text-3xl">←</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Phenomenal Deals <span className="text-primary">Offered</span>
          </h2>
        </div>

        {/* Deals Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Deal 1 - Large Left Card */}
          <div className="lg:col-span-4 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-[500px] animate-slideInLeft">
            <div className="absolute inset-0">
              <img
                src={deals[0].image}
                alt={deals[0].category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${deals[0].bgColor} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}
              ></div>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
              <p className="text-2xl font-serif italic mb-3 transform group-hover:translate-x-2 transition-transform duration-500">
                {deals[0].category}
              </p>
              <h3 className="text-5xl md:text-6xl font-black mb-4 transform group-hover:scale-105 transition-transform duration-500">
                {deals[0].discount}
              </h3>
              <p className="text-xl font-semibold mb-6">{deals[0].subtitle}</p>

              {/* Decorative line */}
              <div className="w-20 h-1 bg-white/50 rounded-full mb-4 group-hover:w-32 transition-all duration-500"></div>
            </div>

            {/* Corner decoration */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
          </div>

          {/* Middle Column - Two Stacked Cards */}
          <div className="lg:col-span-4 space-y-6 lg:space-y-8">
            {/* Deal 2 - Australia */}
            <div
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-[238px] animate-slideInUp"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="absolute inset-0">
                <img
                  src={deals[1].image}
                  alt={deals[1].category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${deals[1].bgColor} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Discount Badge */}
              <div className="absolute top-6 right-6 bg-primary text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                {deals[1].discount}
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                <p className="text-lg font-serif italic mb-2">
                  {deals[1].category}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {deals[1].title}
                </h3>
              </div>
            </div>

            {/* Deal 3 - Honeymoon */}
            <div
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-[238px] animate-slideInUp"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="absolute inset-0">
                <img
                  src={deals[2].image}
                  alt={deals[2].category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${deals[2].bgColor} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}
                ></div>
              </div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <p className="text-lg font-serif italic">{deals[2].category}</p>

                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    {deals[2].title}
                  </h3>
                  <p className="text-sm mb-4 opacity-90">{deals[2].subtitle}</p>

                  <button
                    className={`${deals[2].buttonColor} text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2`}
                  >
                    Book Now
                    <svg
                      className="w-5 h-5"
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
                </div>
              </div>
            </div>
          </div>

          {/* Deal 4 - Large Right Card */}
          <div
            className="lg:col-span-4 group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 h-[500px] animate-slideInRight"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="absolute inset-0">
              <img
                src={deals[3].image}
                alt={deals[3].category}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-br ${deals[3].bgColor} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}
              ></div>
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                  <p className="text-lg font-serif italic">
                    {deals[3].category}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-5xl md:text-6xl font-black mb-4 transform group-hover:scale-105 transition-transform duration-500">
                  {deals[3].discount}
                </h3>
                <p className="text-xl font-semibold mb-6">
                  {deals[3].subtitle}
                </p>

                <button
                  className={`${deals[3].buttonColor} text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 flex items-center gap-2`}
                >
                  Book Now
                  <svg
                    className="w-5 h-5"
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
              </div>
            </div>

            {/* Decorative pattern overlay */}
            <div
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
              }}
            ></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out both;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out both;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out both;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out both;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </section>
  );
};

export default DealsSection;
