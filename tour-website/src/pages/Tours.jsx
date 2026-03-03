export default function Tours() {
  const tours = [
    { title: "European Explorer", duration: "14 Days", price: "$2,499", destinations: 5 },
    { title: "Asian Adventure", duration: "10 Days", price: "$1,899", destinations: 4 },
    { title: "Safari Experience", duration: "7 Days", price: "$1,599", destinations: 2 },
    { title: "Beach Paradise", duration: "5 Days", price: "$999", destinations: 2 },
    { title: "Mountain Trek", duration: "8 Days", price: "$1,399", destinations: 3 },
    { title: "Cultural Journey", duration: "12 Days", price: "$2,199", destinations: 6 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12 text-center">
          Our Exclusive Tours
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient Header */}
              <div className="h-48 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 relative overflow-hidden">
                <div className="absolute inset-0 animate-pulse-slow bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>
                <span className="absolute top-4 right-4 bg-white/80 text-blue-600 font-bold px-4 py-2 rounded-2xl shadow-lg">
                  {tour.price}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{tour.title}</h3>
                <p className="text-gray-600">
                  <span className="font-semibold">Duration:</span> {tour.duration}
                </p>
                <p className="text-gray-600">
                  <span className="font-semibold">Destinations:</span> {tour.destinations}
                </p>

                <button className="mt-4 w-full py-3 rounded-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 shadow-lg transition-all duration-300">
                  Book Now
                </button>
              </div>

              {/* Decorative Floating Badge */}
              <div className="absolute bottom-4 left-4 bg-blue-600 text-white font-bold px-3 py-1 rounded-full shadow-md text-sm">
                Popular
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}