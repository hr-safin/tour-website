export default function AirTickets() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Air Tickets
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Book Your Flights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We offer competitive airfare rates to destinations worldwide. Our
            team works with major airlines to get you the best deals on flights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Best Fares Guaranteed
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Lowest prices on airfare</li>
              <li>✓ All major airlines covered</li>
              <li>✓ Flexible booking options</li>
              <li>✓ Free cancellation up to 7 days</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ 24/7 customer support</li>
              <li>✓ Quick booking process</li>
              <li>✓ Instant confirmation</li>
              <li>✓ Best price match guarantee</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Book Your Flight?
          </h3>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Search Flights Now
          </button>
        </div>
      </div>
    </div>
  );
}
