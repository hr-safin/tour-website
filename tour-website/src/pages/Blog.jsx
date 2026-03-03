export default function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Travel Blog
        </h1>

        <div className="space-y-8">
          {[
            {
              title: "10 Hidden Gems in Europe You Must Visit",
              date: "March 1, 2024",
              excerpt:
                "Discover lesser-known destinations in Europe that offer authentic experiences away from the crowds.",
            },
            {
              title: "A Guide to Budget Travel in Asia",
              date: "February 28, 2024",
              excerpt:
                "Learn how to explore Asia on a budget without compromising on experience and comfort.",
            },
            {
              title: "Best Time to Visit Different Destinations",
              date: "February 25, 2024",
              excerpt:
                "Plan your trip with our comprehensive guide on the best seasons to visit popular destinations.",
            },
            {
              title: "Travel Photography Tips for Beginners",
              date: "February 20, 2024",
              excerpt:
                "Capture stunning memories with these essential photography tips for travelers.",
            },
            {
              title: "Sustainable Travel: How to Travel Responsibly",
              date: "February 15, 2024",
              excerpt:
                "Explore the world while minimizing your environmental impact with sustainable travel practices.",
            },
            {
              title: "Food Adventures: Street Food Around the World",
              date: "February 10, 2024",
              excerpt:
                "Indulge in the most authentic culinary experiences from street vendors around the globe.",
            },
          ].map((post, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 flex-1">
                  {post.title}
                </h3>
              </div>
              <p className="text-gray-500 text-sm mb-4">{post.date}</p>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
