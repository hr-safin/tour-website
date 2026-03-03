import { MapPin } from "lucide-react";

export default function PhilippinePackages() {
  const packages = [
    {
      id: 1,
      title: "PHILIPPINE - MANILA & CEBU TOUR",
      duration: "5 DAYS 4 NIGHTS",
      location: "PHILIPPINES",
      route: "MANILA → CEBU",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      title: "MANILA & PUERTO PRINCESA, PALAWAN TOUR",
      duration: "5 DAYS 4 NIGHTS",
      location: "PHILIPPINES",
      route: "MANILA → PALAWAN",
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      title: "PHILIPPINE - MANILA & BORACAY TOUR",
      duration: "5 DAYS 4 NIGHTS",
      location: "PHILIPPINES",
      route: "MANILA → BORACAY",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg mb-4 flex items-center justify-center gap-4">
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
            WOW Philippines
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Love the Philippines
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden rounded-2xl mb-6">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-black text-white px-4 py-2 rounded font-bold text-sm">
                  {pkg.duration}
                </div>

                {/* Location Badge */}
                <div className="absolute top-16 left-4 bg-white text-gray-900 px-4 py-2 rounded font-semibold text-sm flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  {pkg.location}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm font-semibold">
                  {pkg.route}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
