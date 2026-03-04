import { MdLuggage } from "react-icons/md";
import { RiPriceTag3Line } from "react-icons/ri";
import { MdHeadsetMic } from "react-icons/md";
import { TbAward } from "react-icons/tb";

const features = [
  {
    bg: "#EFF7C8",
    icon: MdLuggage,
    title: "Expertly Curated Tours.",
  },
  {
    bg: "#F0F0F0",
    icon: RiPriceTag3Line,
    title: "Affordable & Flexible Packages.",
  },
  {
    bg: "#EAE8F7",
    icon: MdHeadsetMic,
    title: "24/7 Customer Support.",
  },
  {
    bg: "#D6F5E3",
    icon: TbAward,
    title: "Certified & Experienced Guides.",
  },
];

export default function WhyTravelWithUs() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap');
        .why-section { font-family: 'Manrope', sans-serif; }
        .why-card {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.10);
        }
      `}</style>

      <section className="why-section w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-14">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Why Travel with Us?
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              We specialize in crafting personalized journeys that suit every traveler's dream.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={i}
                  className="why-card rounded-2xl p-7 sm:p-8 flex flex-col gap-8"
                  style={{ backgroundColor: f.bg, minHeight: 220 }}
                >
                  <Icon size={48} color="#111111" />
                  <p
                    className="text-gray-900 font-bold text-lg sm:text-xl leading-snug"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {f.title}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}