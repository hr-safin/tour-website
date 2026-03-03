import { MapPin } from "lucide-react";

export default function TourPackages() {
  const vacation_packages = [
    {
      id: 1,
      title: "Ramadan Special Umrah Package From Bangladesh",
      duration: "11 DAYS 10 NIGHTS",
      location: "SAUDI ARABIA",
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&h=400&fit=crop",
      route: null,
    },
    {
      id: 2,
      title: "Maldives 03 Nights Family Tour Package",
      duration: "4 DAYS 3 NIGHTS",
      location: "MALDIVES",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      route: null,
    },
    {
      id: 3,
      title: "Special Korea + China Tour Package",
      duration: "8 DAYS 7 NIGHTS",
      location: "SOUTH KOREA",
      image:
        "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=500&h=400&fit=crop",
      route: "SEOUL → SHANGHAI → BEIJING",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg mb-4 flex items-center justify-center gap-4">
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
            Tour Package
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Special Vacation Package
          </h2>
        </div>

        {/* Vacation Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {vacation_packages.map((pkg) => (
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                  {pkg.title}
                </h3>

                {/* Route if available */}
                {pkg.route && (
                  <p className="text-gray-600 text-sm font-semibold">
                    {pkg.route}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* View All Packages Button */}
        <div className="text-center">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-bold transition-colors shadow-lg">
            View All Packages
          </button>
        </div>
      </div>
    </section>
  );
}
