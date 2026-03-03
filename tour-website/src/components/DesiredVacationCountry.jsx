export default function DesiredVacationCountry() {
  const destinations = [
    {
      id: 1,
      name: "Bangladesh",
      image:
        "https://images.unsplash.com/photo-1542401886-65d27afda266?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Thailand",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Europe",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg mb-4 flex items-center justify-center gap-4">
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
            Explore Places
            <span className="inline-block w-12 h-0.5 bg-primary"></span>
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
            Desired Vacation Country
          </h2>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="relative h-96 overflow-hidden rounded-2xl group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Country Name */}
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-2xl">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
