export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          About Amazing Tours
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Amazing Tours BD is a leading travel company dedicated to providing
            unforgettable travel experiences to our customers. With over a
            decade of experience in the tourism industry, we've helped thousands
            of travelers discover the world's most breathtaking destinations.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our team of expert travel consultants works tirelessly to curate
            unique experiences, manage every detail of your journey, and ensure
            your vacation is nothing short of extraordinary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">5000+</div>
            <h3 className="text-lg font-bold text-gray-900">Happy Clients</h3>
            <p className="text-gray-600 mt-2">
              Satisfied travelers who've explored the world with us
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <h3 className="text-lg font-bold text-gray-900">Destinations</h3>
            <p className="text-gray-600 mt-2">
              Countries and regions we offer tours to
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
            <h3 className="text-lg font-bold text-gray-900">Support</h3>
            <p className="text-gray-600 mt-2">
              Round-the-clock customer support for your peace of mind
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
