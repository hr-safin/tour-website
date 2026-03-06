import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Calendar, Clock, User, Tag } from "lucide-react";

const BRAND = "#1D4ED8";

const posts = [
  {
    id: 1,
    title: "10 Hidden Gems in Europe You Must Visit",
    date: "March 1, 2024",
    author: "Time Ex Tours",
    category: "Europe",
    readTime: "5 Min Read",
    excerpt: "Discover lesser-known destinations in Europe that offer authentic experiences away from the crowds. From tiny alpine villages to coastal hideaways, these spots will leave you breathless.",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=700&h=450&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "A Complete Guide to Budget Travel in Asia",
    date: "February 28, 2024",
    author: "Time Ex Tours",
    category: "Asia",
    readTime: "4 Min Read",
    excerpt: "Learn how to explore Asia on a budget without compromising on experience and comfort. From Thailand to Vietnam, we share our top money-saving tips.",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 3,
    title: "Best Time to Visit Popular Travel Destinations",
    date: "February 25, 2024",
    author: "Time Ex Tours",
    category: "Travel Tips",
    readTime: "6 Min Read",
    excerpt: "Plan your trip with our comprehensive guide on the best seasons to visit popular destinations. Avoid crowds, save money and enjoy perfect weather.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 4,
    title: "Travel Photography Tips for Beginners",
    date: "February 20, 2024",
    author: "Time Ex Tours",
    category: "Photography",
    readTime: "3 Min Read",
    excerpt: "Capture stunning memories with these essential photography tips for travellers. From golden hour shots to street photography techniques.",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 5,
    title: "Sustainable Travel: How to Travel Responsibly",
    date: "February 15, 2024",
    author: "Time Ex Tours",
    category: "Eco Travel",
    readTime: "4 Min Read",
    excerpt: "Explore the world while minimizing your environmental impact with sustainable travel practices. Small changes make a big difference.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 6,
    title: "Street Food Adventures Around the World",
    date: "February 10, 2024",
    author: "Time Ex Tours",
    category: "Food & Culture",
    readTime: "5 Min Read",
    excerpt: "Indulge in the most authentic culinary experiences from street vendors around the globe. Food is culture — and the best bites are always roadside.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 7,
    title: "Top 5 Umrah Tips for First-Time Pilgrims",
    date: "January 30, 2024",
    author: "Time Ex Tours",
    category: "Umrah Hajj",
    readTime: "7 Min Read",
    excerpt: "Planning your first Umrah? Here are the essential tips to make your pilgrimage smooth, spiritual, and stress-free from Dhaka.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=700&h=450&fit=crop",
    featured: false,
  },
  {
    id: 8,
    title: "Maldives on a Budget: Is It Possible?",
    date: "January 22, 2024",
    author: "Time Ex Tours",
    category: "Maldives",
    readTime: "4 Min Read",
    excerpt: "Yes, you can visit the Maldives without breaking the bank. We break down affordable guesthouses, local islands, and cheap transfers.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=700&h=450&fit=crop",
    featured: false,
  },
];

const categories = ["All", "Europe", "Asia", "Travel Tips", "Photography", "Eco Travel", "Food & Culture", "Umrah Hajj", "Maldives"];

function BlogCard({ post, delay }) {
  return (
    <div
      className="blog-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img src={post.image} alt={post.title} loading="lazy"
          className="blog-img w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-[11px] font-black shadow"
          style={{ background: BRAND }}>
          {post.category}
        </div>

        {/* Read time */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 text-[10px] font-bold text-gray-800 flex items-center gap-1">
          <Clock size={10} />
          {post.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} className="text-blue-500" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={11} className="text-blue-500" />
            {post.author}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-black text-gray-900 text-sm sm:text-base leading-snug mb-3 line-clamp-2 flex-1"
          style={{ letterSpacing: "-0.01em" }}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
          <button className="inline-flex items-center gap-1.5 text-xs font-bold transition-colors duration-200"
            style={{ color: BRAND }}>
            Read More
            <ArrowRight size={12} />
          </button>
          <a href="tel:+8801317525225"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-white
              text-xs font-bold transition-all hover:scale-105 active:scale-95"
            style={{ background: BRAND }}>
            <Phone size={11} />
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <style>{`
        .blog-hero {
          background-image: url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&h=600&fit=crop');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .blog-hero { background-attachment: scroll; } }

        .blog-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .blog-card:hover .blog-img { transform: scale(1.08); }
        .blog-card { transition: box-shadow 0.3s ease, transform 0.3s ease; }
        .blog-card:hover { transform: translateY(-4px); }

        .feat-img { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .feat-wrap:hover .feat-img { transform: scale(1.05); }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="blog-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              Stories & Insights
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Travel Blog
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Blog</span>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
            tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
            Latest Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}>
            Travel Tips &{" "}
            <span style={{ color: BRAND }}>Inspiration</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Stories, guides, and insights from the world of travel — curated by our team.
          </p>
        </div>

        {/* ── Category pills ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button key={cat}
                className="px-4 py-2 rounded-full text-xs font-bold border-2 transition-all hover:scale-105 active:scale-95"
                style={{
                  borderColor: cat === "All" ? BRAND : "#E5E7EB",
                  background: cat === "All" ? BRAND : "white",
                  color: cat === "All" ? "white" : "#6B7280",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Featured Post ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <div
            className="feat-wrap group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg
              hover:shadow-2xl transition-shadow duration-400 grid grid-cols-1 lg:grid-cols-2"
            data-aos="fade-up"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img src={featured.image} alt={featured.title} loading="lazy"
                className="feat-img w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/50 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-black"
                style={{ background: BRAND }}>
                ⭐ Featured Post
              </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-4">
                <span className="flex items-center gap-1.5">
                  <Tag size={11} className="text-blue-500" />
                  {featured.category}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={11} className="text-blue-500" />
                  {featured.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={11} className="text-blue-500" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-black text-gray-900 text-xl sm:text-2xl lg:text-3xl leading-snug mb-4"
                style={{ letterSpacing: "-0.015em" }}>
                {featured.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-3">
                <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold
                  text-white text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                  style={{ background: BRAND }}>
                  Read More <ArrowRight size={14} />
                </button>
                <a href="tel:+8801317525225"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm
                    border-2 transition-all hover:scale-105 active:scale-95"
                  style={{ borderColor: BRAND, color: BRAND }}>
                  <Phone size={13} /> Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── All Posts Grid ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {rest.map((post, i) => (
              <BlogCard key={post.id} post={post} delay={`${(i % 3) * 80}`} />
            ))}
          </div>
        </div>

        {/* ── CTA Strip ── */}
        <section className="py-12 sm:py-14 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Plan Your Next Adventure
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Inspired by what you read? Call us to turn your dream destination into a real trip.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> Call Us Now
              </a>
              {/* <Link to="/contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm border-2 border-white/40 text-white transition-all
                  hover:bg-white/10 hover:scale-105 active:scale-95">
                Get In Touch
              </Link> */}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}