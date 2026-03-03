import React from "react";

const BlogSection = () => {
  const featuredPost = {
    id: 1,
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800",
    date: "August 16, 2025",
    comments: "01 Comment",
    title: "Amazing Tours – The No.1 Travel Agency In Bangladesh",
    readTime: "3 Min Read",
  };

  const recentPosts = [
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
      date: "December 11, 2024",
      author: "Amazing Tours",
      category: "Visit Bangladesh",
      title: "Sajek Valley Resort: Top 5 Best R...",
      readTime: "2 Min Read",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600",
      date: "March 26, 2023",
      author: "Amazing Tours",
      category: "Umrah Hajj",
      title: "ওমরাহ পালন করার বিস্তারিত নিয়ম ও ...",
      readTime: "1 Min Read",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1564769610761-2b0f0beb2fc0?w=600",
      date: "February 11, 2023",
      author: "Amazing Tours",
      category: "Visit Bangladesh",
      title: "Top 9 Tourist Destinations In Ban...",
      readTime: "2 Min Read",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Fancy Decorative Background Blobs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-primary text-3xl">→</span>
            <span className="text-primary font-bold text-lg italic tracking-wide">
              Latest Blog
            </span>
            <span className="text-primary text-3xl">←</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight">
            Latest Travel <span className="text-primary">Blog</span>
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <div className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 animate-slideInLeft bg-white">
            <div className="relative h-96 overflow-hidden rounded-3xl">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
            </div>

            <div className="p-8 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {featuredPost.date}
                  </span>
                  <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                    {featuredPost.comments}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 group-hover:text-primary transition-colors duration-300">
                  {featuredPost.title}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <button className="group/btn flex items-center gap-2 text-primary font-semibold hover:text-primary transition-all duration-300">
                  View Post
                  <svg className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {featuredPost.readTime}
                </span>
              </div>
            </div>

            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-white/30 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"></div>
          </div>

          {/* Recent Posts */}
          <div className="space-y-6 animate-slideInRight">
            {recentPosts.map((post, idx) => (
              <div
                key={post.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 flex gap-4 p-4 bg-white hover:-translate-y-1"
                style={{ animation: `slideInRight 0.6s ease-out ${idx * 0.1 + 0.2}s both` }}
              >
                <div className="relative w-48 h-40 flex-shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-primary/80 text-white px-3 py-2 rounded-lg text-center text-xs font-semibold">
                    <p>{post.date.split(" ")[0]}</p>
                    <p className="text-lg font-bold">{post.date.split(" ")[1].replace(",", "")}</p>
                    <p>{post.date.split(" ")[2]}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between py-2">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <span className="font-medium">By {post.author}</span>
                      <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                      <span className="font-medium">{post.category}</span>
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="group/btn flex items-center gap-2 text-primary font-semibold hover:text-primary transition-all duration-300 text-sm">
                      View Post
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>

                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-fadeIn { animation: fadeIn 0.8s ease-out both; }
        .animate-slideInLeft { animation: slideInLeft 0.8s ease-out both; }
        .animate-slideInRight { animation: slideInRight 0.6s ease-out both; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0,0,0,0.3); }
      `}</style>
    </section>
  );
};

export default BlogSection;