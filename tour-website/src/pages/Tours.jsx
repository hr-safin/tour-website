export default function Tours() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Our Tours
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "European Explorer",
              duration: "14 Days",
              price: "$2,499",
              destinations: 5,
            },
            {
              title: "Asian Adventure",
              duration: "10 Days",
              price: "$1,899",
              destinations: 4,
            },
            {
              title: "Safari Experience",
              duration: "7 Days",
              price: "$1,599",
              destinations: 2,
            },
            {
              title: "Beach Paradise",
              duration: "5 Days",
              price: "$999",
              destinations: 2,
            },
            {
              title: "Mountain Trek",
              duration: "8 Days",
              price: "$1,399",
              destinations: 3,
            },
            {
              title: "Cultural Journey",
              duration: "12 Days",
              price: "$2,199",
              destinations: 6,
            },
          ].map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {tour.title}
                </h3>
                <div className="mt-4 space-y-2">
                  <p className="text-gray-600">
                    <span className="font-semibold">Duration:</span>{" "}
                    {tour.duration}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Destinations:</span>{" "}
                    {tour.destinations}
                  </p>
                  <p className="text-2xl font-bold text-blue-600 mt-4">
                    {tour.price}
                  </p>
                </div>
                <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
