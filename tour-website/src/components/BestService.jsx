import { TbAward } from "react-icons/tb";
import { RiPercentLine } from "react-icons/ri";
import { MdOutlineWallet } from "react-icons/md";

const services = [
  {
    icon: TbAward,
    iconBg: "#F59E0B",
    title: "Local Guidance",
    description: "Travel agencies have experienced professionals guidance.",
  },
  {
    icon: RiPercentLine,
    iconBg: "#3B82F6",
    title: "Deals & Discounts",
    description: "Agencies have special discounts on flights, hotels, & packages.",
  },
  {
    icon: MdOutlineWallet,
    iconBg: "#F59E0B",
    title: "Saves Money",
    description: "Avoids hidden fees & tourist traps, Multi-destination & budget-friendly options.",
  },
];

export default function BestService() {
  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* Rounded light-blue card container — matches screenshot */}
        <div className="rounded-3xl px-8 sm:px-12 lg:px-16 py-12 sm:py-14"
          style={{ background: "#EEF2FF" }}>

          {/* Heading */}
          <div className="text-center mb-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900"
              style={{ letterSpacing: "-0.02em" }}>
              We're Providing Best Service Ever!
            </h2>
          </div>

          {/* Thin divider */}
          <div className="w-full h-px bg-gray-300 my-6" />

          {/* 3 services — icon left, text right, no card bg */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-10">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="flex flex-col gap-3">
                  {/* Icon circle */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ background: s.iconBg }}
                  >
                    <Icon size={30} color="#fff" />
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA — two-tone pill button matching screenshot */}
          <div className="flex justify-center">
            <a
              href="tel:+8801317525225"
              className="inline-flex items-center rounded-full overflow-hidden shadow-lg
                hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
            >
              {/* Left side */}
            
              {/* Right side — slightly lighter */}
              <span className="flex items-center gap-1.5 px-5 py-3.5 font-bold text-white text-sm sm:text-base whitespace-nowrap"
                style={{ background: "#1D4ED8" }}>
                Call Now ↗
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}