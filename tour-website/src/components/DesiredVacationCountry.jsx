import { MapPin } from "lucide-react";

export default function DesiredVacationCountry() {
  const destinations = [
    {
      id: 1,
      name: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Maldives",
      image:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Dubai",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Turkey",
      image:
        "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-semibold tracking-widest uppercase">
            Explore Places
          </p>
          <h2 className="text-5xl font-bold text-gray-900 mt-2">
            Desired Vacation Country
          </h2>
        </div>

        {/* Gallery Grid */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {destinations.map((place) => (
            <div
              key={place.id}
              className="
                relative
                h-64
                rounded-2xl
                overflow-hidden
                group
                shadow-md
                hover:shadow-2xl
                transition
                cursor-pointer
              "
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

              {/* Blue gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-blue-800/20 to-transparent"></div>

              {/* Bottom content */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <h3 className="text-white font-semibold text-lg flex items-center gap-2">
                  <MapPin size={16} />
                  {place.name}
                </h3>

                <button className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-md font-medium">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}