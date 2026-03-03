import React from "react";

const WhyChooseSection = () => {
  const features = [
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M32 12C20.954 12 12 20.954 12 32s8.954 20 20 20 20-8.954 20-20S43.046 12 32 12zm0 36c-8.822 0-16-7.178-16-16s7.178-16 16-16 16 7.178 16 16-7.178 16-16 16z"
            fill="currentColor"
            fillOpacity="0.2"
          />
          <path
            d="M42 26l-14 14-6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="32"
            cy="28"
            rx="18"
            ry="12"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M14 32c0 4 3 8 6 10m24 0c3-2 6-6 6-10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Worldwide Coverage",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600",
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M32 18v-6m0 40v-6M46 32h6M12 32h6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <circle
            cx="32"
            cy="32"
            r="12"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M32 24v8l4 4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 38c-2 1-4 2-4 4 0 3 7 4 16 4s16-1 16-4c0-2-2-3-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Competitive Pricing",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <rect
            x="18"
            y="22"
            width="28"
            height="24"
            rx="2"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M18 28h28M24 22v-4M40 22v-4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text
            x="32"
            y="38"
            textAnchor="middle"
            fill="currentColor"
            className="text-xs font-bold"
          >
            999
          </text>
          <path
            d="M26 34h4M34 34h4M26 40h4M34 40h4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Fast Booking",
      bgColor: "bg-lime-50",
      iconColor: "text-lime-600",
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <circle
            cx="32"
            cy="26"
            r="6"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M20 46c0-6.627 5.373-12 12-12s12 5.373 12 12"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M44 28c0-1.5 1-3 2.5-3S49 26.5 49 28v6c0 1.5-1 3-2.5 3S44 35.5 44 34v-6z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="46.5" cy="24" r="1.5" fill="currentColor" />
        </svg>
      ),
      title: "Guided Tours",
      bgColor: "bg-primary-50",
      iconColor: "text-primary-600",
    },
    {
      id: 5,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <circle
            cx="32"
            cy="28"
            r="10"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M28 28l3 3 5-5"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 42c0-2 2-4 4-4h16c2 0 4 2 4 4 0 2-10 4-12 4s-12-2-12-4z"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M32 38v-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Best Support 24/7",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      id: 6,
      icon: (
        <svg viewBox="0 0 64 64" fill="none" className="w-12 h-12">
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="currentColor"
            fillOpacity="0.1"
          />
          <path
            d="M20 28l12-8 12 8v16c0 2-1 4-3 4H23c-2 0-3-2-3-4V28z"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="32"
            cy="34"
            r="4"
            stroke="currentColor"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M32 38v6M28 44h8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M38 24l4-4M26 24l-4-4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Ultimate Flexibility",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-stone-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-100/30 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
            <span className="text-primary font-medium tracking-wider text-sm uppercase">
              Our Success
            </span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
            Why Choose <span className="text-primary">Amazing Tours</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className="group relative"
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Card */}
              <div
                className={`
                ${feature.bgColor} 
                rounded-2xl p-8 
                transition-all duration-500 ease-out
                hover:scale-105 hover:shadow-2xl hover:-translate-y-2
                cursor-pointer
                border border-transparent hover:border-white
                relative overflow-hidden
              `}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div
                    className={`
                    inline-flex items-center justify-center
                    w-20 h-20 rounded-2xl
                    ${feature.iconColor}
                    mb-6
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-6
                  `}
                  >
                    {feature.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                    {feature.title}
                  </h3>
                </div>

                {/* Decorative corner accent */}
                <div
                  className={`
                  absolute -bottom-6 -right-6 w-24 h-24 
                  ${feature.iconColor} opacity-5
                  rounded-full
                  transition-all duration-500
                  group-hover:scale-150 group-hover:opacity-10
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
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
      `}</style>
    </section>
  );
};

export default WhyChooseSection;
