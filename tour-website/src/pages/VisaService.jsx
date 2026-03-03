export default function VisaService() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Visa Service
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Visa Assistance Made Easy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We provide comprehensive visa assistance services to make your
            travel planning hassle-free. Our experienced visa consultants will
            guide you through every step of the visa application process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              country: "Schengen Visa",
              description: "Access to 27 European countries",
              processing: "15-20 days",
            },
            {
              country: "UK Visa",
              description: "Visit the United Kingdom",
              processing: "10-15 days",
            },
            {
              country: "USA Visa",
              description: "Travel to United States",
              processing: "20-30 days",
            },
            {
              country: "Canada Visa",
              description: "Explore beautiful Canada",
              processing: "15-25 days",
            },
            {
              country: "Australia Visa",
              description: "Visit the land down under",
              processing: "10-20 days",
            },
            {
              country: "Japan Visa",
              description: "Experience Japanese culture",
              processing: "5-10 days",
            },
          ].map((visa, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600"
            >
              <h3 className="text-xl font-bold text-gray-900">
                {visa.country}
              </h3>
              <p className="text-gray-600 mt-2">{visa.description}</p>
              <p className="text-sm text-gray-500 mt-4">
                Processing Time:{" "}
                <span className="font-semibold">{visa.processing}</span>
              </p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
