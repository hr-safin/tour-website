import { useState } from "react";
import { MapPin, X } from "lucide-react";

// Grid layout strategy:
// Mobile  (2 cols): simple 1x1 — all cards equal, clean and readable
// Tablet  (3 cols): some cards get col-span-2 for visual interest
// Desktop (4 cols): full masonry with col/row spans
//
// Each destination gets: mobileSpan | tabletSpan | desktopSpan

const destinations = [
  {
    id: 1,
    name: "Bangladesh",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=1200&auto=format&fit=crop",
    // desktop: tall (1 col, 2 rows) | tablet: normal | mobile: normal
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: 2,
    name: "Thailand",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 3,
    name: "Europe",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 4,
    name: "Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 5,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 6,
    name: "Turkey",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: 7,
    name: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 8,
    name: "Switzerland",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-2 row-span-2 md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    id: 9,
    name: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
  {
    id: 10,
    name: "Iceland",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-2 lg:col-span-1 lg:row-span-2",
  },
  {
    id: 11,
    name: "Australia",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-2 row-span-1 md:col-span-2 md:row-span-1 lg:col-span-2 lg:row-span-1",
  },
  {
    id: 12,
    name: "New Zealand",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
    cls: "col-span-1 row-span-1 md:col-span-1 md:row-span-1 lg:col-span-1 lg:row-span-1",
  },
];

function GalleryCard({ place, onClick }) {
  return (
    <div
      className={`relative rounded-xl sm:rounded-2xl overflow-hidden group shadow-md hover:shadow-2xl
        transition-all duration-300 cursor-pointer hover:scale-[1.02] ${place.cls}`}
      onClick={() => onClick(place)}
    >
      <img
        src={place.image}
        alt={place.name}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/20 to-transparent
        opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

      {/* Country name */}
      <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-5">
        <h3 className="text-white font-bold text-sm sm:text-base md:text-lg flex items-center gap-1.5">
          <MapPin size={15} className="flex-shrink-0" />
          {place.name}
        </h3>
      </div>

      {/* Hover zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function DesiredVacationCountry() {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-2">
            Explore Places
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Desired Vacation Country
          </h2>
        </div>

        {/* ── Grid ──
            Mobile  : 2 cols, auto rows 160px
            Tablet  : 3 cols, auto rows 180px
            Desktop : 4 cols, auto rows 200px
        */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          auto-rows-[160px] md:auto-rows-[180px] lg:auto-rows-[200px] gap-3 sm:gap-4">
          {destinations.map((place) => (
            <GalleryCard key={place.id} place={place} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* ── Lightbox modal ── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelected(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20
              flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setSelected(null)}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[88vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.image}
              alt={selected.name}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent
              p-5 rounded-b-xl">
              <h3 className="text-white text-xl sm:text-2xl font-bold flex items-center gap-2">
                <MapPin size={22} />
                {selected.name}
              </h3>
              <p className="text-gray-300 text-sm mt-1">Tap outside to close</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}