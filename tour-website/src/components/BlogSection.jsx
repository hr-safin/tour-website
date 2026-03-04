import { Link } from "react-router-dom";

const BRAND = "#1D4ED8";
const BRAND_DARK = "#1e40af";

const featuredPost = {
  id: 1,
  image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=600&fit=crop",
  date: "August 16, 2025",
  comments: "01 Comment",
  title: "Amazing Tours – The No.1 Travel Agency In Bangladesh",
  excerpt: "Discover why Time Ex Tours & Travels is Bangladesh's most trusted travel partner, offering world-class packages at unbeatable prices.",
  readTime: "3 Min Read",
  category: "Travel Tips",
};

const recentPosts = [
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
    date: "December 11, 2024",
    author: "Time Ex Tours",
    category: "Visit Bangladesh",
    title: "Sajek Valley Resort: Top 5 Best Places to Stay",
    readTime: "2 Min Read",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=400&h=300&fit=crop",
    date: "March 26, 2023",
    author: "Time Ex Tours",
    category: "Umrah Hajj",
    title: "Umrah: Complete Step-by-Step Guide for First-Time Pilgrims",
    readTime: "1 Min Read",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=400&h=300&fit=crop",
    date: "February 11, 2023",
    author: "Time Ex Tours",
    category: "Visit Bangladesh",
    title: "Top 9 Tourist Destinations In Bangladesh You Must Visit",
    readTime: "2 Min Read",
  },
];

function CalendarIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
    </svg>
  );
}

function EyeIcon({ size = "sm" }) {
  const cls = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  return (
    <svg className={cls} fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
    </svg>
  );
}

function ArrowIcon({ cls = "w-4 h-4" }) {
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
        d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function parseDateParts(dateStr) {
  const [month, dayRaw, year] = dateStr.split(" ");
  return { month: month.slice(0, 3), day: dayRaw.replace(",", ""), year };
}

function ViewPostLink({ to }) {
  return (
    <Link
      to={to}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="view-link group/link inline-flex items-center gap-1.5 font-bold text-sm transition-colors duration-200"
      style={{ color: BRAND }}
    >
      View Post
      <span className="view-arrow transition-transform duration-250 group-hover/link:translate-x-1.5">
        <ArrowIcon cls="w-3.5 h-3.5" />
      </span>
    </Link>
  );
}

export default function BlogSection() {
  return (
    <>
      <style>{`
        @keyframes blogFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blogFadeLeft {
          from { opacity: 0; transform: translateX(-36px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes blogFadeRight {
          from { opacity: 0; transform: translateX(36px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .b-anim-up     { animation: blogFadeUp    0.65s ease-out both; }
        .b-anim-left   { animation: blogFadeLeft  0.65s ease-out both; }
        .b-anim-right  { animation: blogFadeRight 0.65s ease-out both; }

        .b-img         { transition: transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .b-card:hover .b-img { transform: scale(1.07); }

        .view-arrow { display: inline-flex; }
      `}</style>

      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Header ── */}
          <div className="text-center mb-12 sm:mb-16 b-anim-up">
            <p className="inline-block text-xs sm:text-sm font-bold tracking-[0.2em] uppercase mb-3 px-4 py-1.5
              rounded-full text-white" style={{ background: BRAND }}>
              Latest Blog
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900"
              style={{ letterSpacing: "-0.02em" }}>
              Latest Travel{" "}
              <span style={{ color: BRAND }}>Blog</span>
            </h2>
          </div>

          {/* ── Two-column layout ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* ── Featured post (left) ── */}
            <div className="b-card b-anim-left rounded-2xl sm:rounded-3xl overflow-hidden bg-white
              shadow-lg hover:shadow-2xl transition-shadow duration-400 flex flex-col">

              {/* Image */}
              <div className="relative h-52 sm:h-64 lg:h-72 overflow-hidden flex-shrink-0">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="b-img w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Category pill over image */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md"
                  style={{ background: BRAND }}>
                  {featuredPost.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 lg:p-7 flex flex-col flex-1">

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <CalendarIcon />{featuredPost.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span className="flex items-center gap-1.5">
                    <ChatIcon />{featuredPost.comments}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 leading-snug mb-3"
                  style={{ letterSpacing: "-0.015em" }}>
                  {featuredPost.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-2">
                  {featuredPost.excerpt}
                </p>

                {/* Footer */}
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
                  <ViewPostLink to="/blog" />
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <EyeIcon size="md" />{featuredPost.readTime}
                  </span>
                </div>
              </div>
            </div>

            {/* ── Recent posts stack (right) ── */}
            <div className="b-anim-right flex flex-col gap-4 sm:gap-5">

              {recentPosts.map((post, idx) => {
                const d = parseDateParts(post.date);
                return (
                  <div
                    key={post.id}
                    className="b-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl
                      transition-all duration-300 hover:-translate-y-1 flex"
                    style={{ animationDelay: `${idx * 0.08 + 0.15}s` }}
                  >
                    {/* Thumbnail */}
                    <div className="relative w-28 sm:w-36 md:w-40 flex-shrink-0 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="b-img w-full h-full object-cover"
                      />
                      {/* Date badge */}
                      <div className="absolute top-2 left-2 px-1.5 py-1 rounded-lg text-center text-white
                        text-[9px] font-bold leading-tight shadow-md"
                        style={{ background: BRAND }}>
                        <p className="uppercase">{d.month}</p>
                        <p className="text-base font-black leading-none">{d.day}</p>
                        <p>{d.year}</p>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between p-3.5 sm:p-4 lg:p-5 min-w-0">

                      {/* Meta */}
                      <div className="flex flex-wrap items-center gap-1.5 mb-2">
                        <span className="text-[11px] text-gray-400">
                          By <span className="font-semibold text-gray-600">{post.author}</span>
                        </span>
                        <span className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                        <span className="px-2 py-0.5 rounded-full text-white text-[10px] font-semibold"
                          style={{ background: BRAND }}>
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-3
                        line-clamp-2" style={{ letterSpacing: "-0.01em" }}>
                        {post.title}
                      </h3>

                      {/* Footer */}
                      <div className="flex items-center justify-between">
                        <ViewPostLink to="/blog" />
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <EyeIcon />{post.readTime}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* View All button */}
              <Link
                to="/blog"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="self-start inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold
                  text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ background: BRAND }}
              >
                View All Posts
                <ArrowIcon />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}