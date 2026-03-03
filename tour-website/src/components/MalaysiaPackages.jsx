import { MapPin } from "lucide-react";

export default function MalaysiaPackages() {
  const packages = [
    {
      id: 1,
      title: "MALAYSIA TRULY ASIA",
      duration: "5 DAYS 4 NIGHTS",
      location: "MALAYSIA",
      route: null,
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      title: "MALAYSIA TRULY ASIA",
      duration: "6 DAYS 5 NIGHTS",
      location: "MALAYSIA",
      route: null,
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      title: "MALAYSIA TRULY ASIA",
      duration: "8 DAYS 7 NIGHTS",
      location: "MALAYSIA",
      route: null,
      image:
        "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-lg mb-4 flex items-center justify-center gap-4">
            <span className="inline-block w-12 h-0.5 bg-blue-600 rounded"></span>
            Exciting Malaysia Tour
            <span className="inline-block w-12 h-0.5 bg-blue-600 rounded"></span>
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Malaysia Truly Asia
          </h2>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="group cursor-pointer rounded-3xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition-shadow duration-500"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent"></div>

                {/* Duration Badge */}
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {pkg.duration}
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-white text-blue-600 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 shadow">
                  <MapPin size={16} className="text-blue-600" />
                  {pkg.location}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {pkg.title}
                </h3>
                {pkg.route && (
                  <p className="text-gray-700 text-sm font-semibold">{pkg.route}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}