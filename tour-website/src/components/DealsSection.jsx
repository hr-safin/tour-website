import { Phone } from "lucide-react";

const deals = [
  {
    id: 1,
    category: "Explore China",
    label: "Discover Great Deal",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=700&fit=crop",
    desktop: "lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3",
    tablet: "sm:col-span-1 sm:row-span-2",
  },
  {
    id: 2,
    category: "Beauty of Australia",
    label: "7 Days in Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&h=400&fit=crop",
    desktop: "lg:col-start-5 lg:col-end-9 lg:row-start-1 lg:row-end-2",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
  {
    id: 3,
    category: "Honeymoon Tour",
    label: "Maldives Getaway",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=400&fit=crop",
    desktop: "lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-2",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
  {
    id: 4,
    category: "Savings Europe",
    label: "Explore Paris",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=400&fit=crop",
    desktop: "lg:col-start-5 lg:col-end-7 lg:row-start-2 lg:row-end-3",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
  {
    id: 5,
    category: "Desert Adventure",
    label: "Dubai Safari",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop",
    desktop: "lg:col-start-7 lg:col-end-9 lg:row-start-2 lg:row-end-3",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
  {
    id: 6,
    category: "Island Escape",
    label: "Bali Paradise",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=700&fit=crop",
    desktop: "lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-4",
    tablet: "sm:col-span-1 sm:row-span-2",
  },
  {
    id: 7,
    category: "Mountain Trek",
    label: "Swiss Alps Tour",
    image: "https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg",
    desktop: "lg:col-start-1 lg:col-end-5 lg:row-start-3 lg:row-end-4",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
  {
    id: 8,
    category: "Heritage Journey",
    label: "Turkey History",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=800&h=400&fit=crop",
    desktop: "lg:col-start-5 lg:col-end-9 lg:row-start-3 lg:row-end-4",
    tablet: "sm:col-span-1 sm:row-span-1",
  },
];

function DealCard({ deal }) {
  return (
    <div className={`deal-card relative rounded-2xl overflow-hidden shadow-md
      hover:shadow-2xl group w-full h-full min-h-[200px]`}>

      <img
        src={deal.image}
        alt={deal.category}
        loading="lazy"
        className="deal-img absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

      {/* Badge */}
      {/* <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-white text-[11px] font-black shadow"
        style={{ background: "#1D4ED8" }}>
        {deal.discount}
      </div> */}

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <p className="text-blue-300 text-[10px] font-bold uppercase tracking-widest mb-0.5">
          {deal.category}
        </p>
        <h3 className="text-white font-black text-base sm:text-lg leading-tight mb-3">
          {deal.label}
        </h3>
        <a
          href="tel:+8801317525225"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-white font-bold
            text-xs transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ background: "#1D4ED8" }}
        >
          <Phone size={12} />
          Book Now
        </a>
      </div>
    </div>
  );
}

export default function DealsSection() {
  return (
    <>
      <style>{`
        @keyframes dUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .d-anim { animation: dUp 0.55s ease-out both; }
        .deal-img { transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94); }
        .deal-card:hover .deal-img { transform: scale(1.08); }
        .deal-card { transition: box-shadow 0.3s ease; }
      `}</style>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12 d-anim">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: "#1D4ED8" }}>
              Hurry Up
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
              style={{ letterSpacing: "-0.02em" }}>
              Phenomenal Deals{" "}
              <span style={{ color: "#1D4ED8" }}>Offered</span>
            </h2>
          </div>

          {/*
            Mobile  (1 col) : stacked, each 200px tall
            Tablet  (2 col) : alternating tall rows via sm:row-span
            Desktop (12 col, 3 rows × 220px) : full bento via explicit col/row-start/end
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12
            sm:auto-rows-[200px] lg:auto-rows-[220px] gap-3 sm:gap-4">
            {deals.map((deal, i) => (
              <div
                key={deal.id}
                className={`d-anim ${deal.tablet} ${deal.desktop}`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                <DealCard deal={deal} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}