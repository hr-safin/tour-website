import { FaPlaneDeparture, FaUserTie, FaSmile, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: FaPlaneDeparture,
    value: "26K+",
    label: "Tour Completed",
  },
  {
    icon: FaUserTie,
    value: "12+",
    label: "Travel Experience",
  },
  {
    icon: FaSmile,
    value: "20K+",
    label: "Happy Traveler",
  },
  {
    icon: FaStar,
    value: "98%",
    label: "Retention Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-10 sm:py-12" style={{ background: "#F3F4F6" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`flex items-center gap-4 px-6 sm:px-8 py-6
                  ${i < stats.length - 1 ? "border-r border-gray-300" : ""}
                  ${i < 2 ? "border-b lg:border-b-0 border-gray-300" : ""}
                `}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <Icon size={40} color="#1D4ED8" />
                </div>
                {/* Text */}
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-gray-900 leading-none">
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm sm:text-base mt-1">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}