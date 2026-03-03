import { useState } from "react";
import { MapPin, X } from "lucide-react";

export default function DesiredVacationCountry() {
  const [selectedImage, setSelectedImage] = useState(null);

  const destinations = [
    {
      id: 1,
      name: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-2", // Tall
    },
    {
      id: 2,
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 3,
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1", // Regular
    },
    {
      id: 4,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1", // Regular
    },
    {
      id: 5,
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 6,
      name: "Turkey",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-2", // Tall
    },
    {
      id: 7,
      name: "Japan",
      image:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1", // Regular
    },
    {
      id: 8,
      name: "Switzerland",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-2", // Large square
    },
    {
      id: 9,
      name: "Greece",
      image:
        "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1", // Regular
    },
    {
      id: 10,
      name: "Iceland",
      image:
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-2", // Tall
    },
    {
      id: 11,
      name: "Australia",
      image:
        "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-1", // Wide
    },
    {
      id: 12,
      name: "New Zealand",
      image:
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 row-span-1", // Regular
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">
            Explore Places
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Desired Vacation Country
          </h2>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4">
          {destinations.map((place) => (
            <div
              key={place.id}
              className={`
                relative
                ${place.span}
                rounded-2xl
                overflow-hidden
                group
                shadow-lg
                hover:shadow-2xl
                transition-all
                duration-300
                cursor-pointer
                hover:scale-[1.02]
              `}
              onClick={() => setSelectedImage(place)}
            >
              {/* Image */}
              <img
                src={place.image}
                alt={place.name}
                className="
                  w-full h-full object-cover
                  group-hover:scale-110
                  transition duration-700
                "
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-800/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Country Name */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="text-white font-bold text-lg md:text-xl flex items-center gap-2">
                  <MapPin size={20} className="flex-shrink-0" />
                  <span>{place.name}</span>
                </h3>
              </div>

              {/* Hover effect - View icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for viewing full image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.name}
              className="w-full h-full object-contain rounded-lg"
            />
            
            {/* Image info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl md:text-3xl font-bold flex items-center gap-3">
                <MapPin size={28} />
                {selectedImage.name}
              </h3>
              <p className="text-gray-200 mt-2">
                Click anywhere outside to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}