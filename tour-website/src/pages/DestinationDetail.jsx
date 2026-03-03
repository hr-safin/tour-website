import { useParams } from "react-router-dom";
import { MapPin, Calendar, DollarSign, Users, Star, Clock } from "lucide-react";

export default function DestinationDetail() {
  const { slug } = useParams();

  const destinationData = {
    bangladesh: {
      id: 1,
      name: "Bangladesh",
      country: "Bangladesh",
      region: "South Asia",
      image:
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1200&h=600&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1548013146-72a6d519c5c4?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&h=400&fit=crop",
        "https://images.unsplash.com/photo-1542747353-37dff95b66d7?w=500&h=400&fit=crop",
      ],
      description:
        "Bangladesh, a vibrant South Asian nation, is home to the world's largest mangrove forest, the Sundarbans, and boasts a rich cultural heritage spanning thousands of years. From the bustling streets of Dhaka to the serene tea gardens of Sylhet, Bangladesh offers diverse experiences for travelers.",
      highlights: [
        "Sundarbans National Park - World's largest mangrove forest and home to Bengal tigers",
        "Cox's Bazar - World's longest unbroken sea beach with 120km of sandy shores",
        "Sylhet Tea Gardens - Lush green tea plantations with scenic beauty",
        "Chittagong Hill Tracts - Indigenous culture and stunning mountainous landscape",
        "Ahsan Manzil Palace - Historic 19th-century mansion in Dhaka",
        "Saint Martin's Island - Coral island in the Bay of Bengal",
      ],
      bestTime: "October to March",
      temperature: "15°C - 30°C",
      currency: "Bangladeshi Taka (৳)",
      language: "Bengali",
      visaRequirement: "Visa required for most nationalities",
      duration: "5-10 days",
      rating: 4.6,
      reviews: 324,
      tourCount: 22,
      price: "From $800",
      overview:
        "Experience the authentic charm of South Asia with Bangladesh's diverse attractions. From wildlife encounters in the Sundarbans to relaxation on the beaches of Cox's Bazar, Bangladesh offers unforgettable experiences for travelers seeking culture, nature, and adventure.",
      activities: [
        { name: "Wildlife Safari", icon: "🐯" },
        { name: "Beach Exploration", icon: "🏖️" },
        { name: "Cultural Tours", icon: "🏛️" },
        { name: "Tea Garden Visits", icon: "🫖" },
        { name: "River Cruises", icon: "🚤" },
        { name: "Mountain Trekking", icon: "⛰️" },
      ],
      accommodation: [
        { name: "Luxury Hotels", price: "$100-200/night" },
        { name: "Mid-range Hotels", price: "$50-100/night" },
        { name: "Budget Hotels", price: "$20-50/night" },
        { name: "Resorts", price: "$80-150/night" },
      ],
      tours: [
        { id: 1, name: "Sundarbans Mangrove Forest Tour", days: "3 Days", price: "$450" },
        { id: 2, name: "Cox's Bazar Beach Getaway", days: "4 Days", price: "$380" },
        { id: 3, name: "Sylhet Tea Garden & Heritage Tour", days: "5 Days", price: "$520" },
        { id: 4, name: "Chittagong Hill Tracts Adventure", days: "5 Days", price: "$580" },
      ],
    },
  };

  const destination = destinationData[slug] || destinationData.bangladesh;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden rounded-b-3xl">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transform scale-100 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="absolute z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
            {destination.description.substring(0, 120)}...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Star size={20} className="text-yellow-400" />
              <span>{destination.rating} ({destination.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Calendar size={20} />
              <span>{destination.bestTime}</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <DollarSign size={20} />
              <span>{destination.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
        <a href="/" className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full hover:scale-105 transition-transform">Home</a>
        <span>→</span>
        <a href="/destinations" className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full hover:scale-105 transition-transform">Destinations</a>
        <span>→</span>
        <span className="text-gray-600">{destination.name}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Overview */}
          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-sky-600">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{destination.overview}</p>
          </section>

          {/* Gallery */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {destination.galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-500 border-2 border-sky-100"
                />
              ))}
            </div>
          </section>

          {/* Highlights */}
          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Top Highlights</h2>
            <ul className="space-y-4">
              {destination.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <span className="text-white font-bold flex-shrink-0 w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 pt-1 group-hover:text-sky-600 transition-colors duration-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destination.activities.map((activity, idx) => (
                <div key={idx} className="bg-white/30 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-sky-200">
                  <div className="text-4xl mb-2">{activity.icon}</div>
                  <p className="text-gray-800 font-semibold">{activity.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Quick Info */}
          <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-sky-200 hover:shadow-2xl transition-shadow duration-300 sticky top-20">
            <h3 className="text-2xl font-bold mb-6 text-sky-600">Quick Info</h3>
            <div className="space-y-4">
              <InfoItem icon={<MapPin className="text-sky-500 mt-1" size={20}/>} label="Region" value={destination.region} />
              <InfoItem icon={<Calendar className="text-sky-500 mt-1" size={20}/>} label="Best Time" value={destination.bestTime} />
              <InfoItem icon={<Clock className="text-sky-500 mt-1" size={20}/>} label="Duration" value={destination.duration} />
              <InfoItem icon={<Users className="text-sky-500 mt-1" size={20}/>} label="Language" value={destination.language} />
              <InfoItem icon={<DollarSign className="text-sky-500 mt-1" size={20}/>} label="Currency" value={destination.currency} />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Visa Requirement</p>
              <p className="font-semibold text-gray-900 text-sm">{destination.visaRequirement}</p>
            </div>
            <button className="w-full mt-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all duration-500">
              Book Now
            </button>
          </div>

          {/* Accommodation */}
          <div className="bg-white rounded-3xl shadow-xl p-6 border border-sky-200 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-sky-600">Accommodation</h3>
            <div className="space-y-3">
              {destination.accommodation.map((acc, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-b-0">
                  <p className="font-semibold text-gray-900 text-sm">{acc.name}</p>
                  <p className="text-sky-600 font-bold text-sm">{acc.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tours Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-sky-600">Available Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.tours.map((tour) => (
            <div key={tour.id} className="bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-sky-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-gray-900 mb-4 text-sm line-clamp-2">{tour.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar size={16} className="text-sky-500" />
                  <span>{tour.days}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <DollarSign size={16} className="text-sky-500" />
                  <span className="font-bold text-sky-600">{tour.price}</span>
                </div>
              </div>
              <button className="w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all duration-500 text-sm">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper Component
function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}