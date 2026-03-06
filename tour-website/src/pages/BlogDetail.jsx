import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Phone, ArrowLeft } from "lucide-react";
import { blogs } from "./Blog";

const BRAND = "#1D4ED8";

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug) || blogs[0];
  const related = blogs.filter((b) => b.slug !== post.slug && b.category === post.category).slice(0, 3);
  const relatedPosts = related.length > 0 ? related : blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, [slug]);

  const renderContent = (text) => {
    return text.split("\n\n").map((para, i) => {
      if (para.startsWith("**") && para.includes("**\n")) {
        const parts = para.split("**");
        return (
          <div key={i} className="mb-5">
            <h3 className="text-lg font-black mb-2" style={{ color: BRAND }}>{parts[1]}</h3>
            <p className="text-gray-600 leading-relaxed text-base">{parts[2]?.trim()}</p>
          </div>
        );
      }
      return <p key={i} className="text-gray-600 leading-relaxed text-base mb-5">{para}</p>;
    });
  };

  return (
    <>
      <style>{`
        .detail-hero { background-size:cover; background-position:center; background-attachment:fixed; }
        @media (max-width:768px) { .detail-hero { background-attachment:scroll; } }
        .related-img { transition:transform 0.65s cubic-bezier(0.25,0.46,0.45,0.94); }
        .related-card:hover .related-img { transform:scale(1.08); }
        .related-card { transition:box-shadow 0.3s ease,transform 0.3s ease; }
        .related-card:hover { transform:translateY(-4px); }
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="detail-hero relative h-72 sm:h-80 lg:h-[420px] flex items-center justify-center"
          style={{ backgroundImage: `url('${post.image}')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl" data-aos="fade-up">
            <span className="inline-block px-4 py-1 rounded-full text-white text-xs font-bold mb-4"
              style={{ background: BRAND }}>
              {post.category}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/80">
              <span className="flex items-center gap-1.5"><Calendar size={13} className="text-blue-300" />{post.date}</span>
              <span className="flex items-center gap-1.5"><User size={13} className="text-blue-300" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Clock size={13} className="text-blue-300" />{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors font-medium">Home</Link>
          <ArrowRight size={13} className="text-gray-300" />
          <Link to="/blog" className="hover:text-blue-600 transition-colors font-medium">Blog</Link>
          <ArrowRight size={13} className="text-gray-300" />
          <span className="text-gray-900 font-medium line-clamp-1">{post.title}</span>
        </div>

        {/* Main */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2" data-aos="fade-up">
              <div className="rounded-2xl overflow-hidden mb-8 shadow-lg">
                <img src={post.image} alt={post.title} className="w-full h-64 sm:h-80 object-cover" />
              </div>
              <div>
                <p className="text-gray-700 text-lg leading-relaxed mb-6 font-medium border-l-4 pl-4 italic"
                  style={{ borderColor: BRAND }}>
                  {post.excerpt}
                </p>
                {renderContent(post.content)}
              </div>
              <div className="mt-10 pt-6 border-t border-gray-100">
                <Link to="/blog" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm
                    text-white transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  style={{ background: BRAND }}>
                  <ArrowLeft size={15} /> Back to Blog
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6" data-aos="fade-up" data-aos-delay="80">

              {/* CTA */}
              <div className="rounded-2xl p-6 text-white text-center"
                style={{ background: `linear-gradient(135deg, #1e3a8a 0%, ${BRAND} 60%, #3b82f6 100%)` }}>
                <h3 className="font-black text-lg mb-2">Plan Your Trip</h3>
                <p className="text-blue-200 text-sm mb-4">Call us to book a customized package tailored just for you.</p>
                <a href="tel:+8801317525225"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm
                    bg-white transition-all hover:scale-105 active:scale-95"
                  style={{ color: BRAND }}>
                  <Phone size={14} /> Call Now
                </a>
              </div>

              {/* Categories */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-black text-gray-900 text-base mb-4">Categories</h3>
                <div className="flex flex-col gap-2">
                  {["Travel Tips", "Visit Bangladesh", "Umrah Hajj", "Luxury Travel", "Adventure"].map((cat) => (
                    <Link key={cat} to="/blog"
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white shadow-sm
                        text-sm font-semibold text-gray-700 hover:text-white transition-all duration-200"
                      onMouseEnter={e => { e.currentTarget.style.background = BRAND; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#374151"; }}
                    >
                      <span>{cat}</span>
                      <ArrowRight size={13} />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="bg-gray-50 rounded-2xl p-5">
                <h3 className="font-black text-gray-900 text-base mb-4">Recent Posts</h3>
                <div className="flex flex-col gap-3">
                  {blogs.slice(0, 4).map((b) => (
                    <Link key={b.id} to={`/blog/${b.slug}`}
                      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                      className="flex items-center gap-3 group">
                      <img src={b.image} alt={b.title}
                        className="w-14 h-14 rounded-xl object-cover flex-shrink-0 group-hover:scale-105 transition-transform" />
                      <div className="min-w-0">
                        <p className="text-xs font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                          {b.title}
                        </p>
                        <p className="text-[10px] text-gray-400 mt-1">{b.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8" style={{ letterSpacing: "-0.02em" }}>
              Related <span style={{ color: BRAND }}>Posts</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((p, i) => (
                <div key={p.id} className="related-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
                  data-aos="fade-up" data-aos-delay={`${i * 80}`}>
                  <div className="relative h-44 overflow-hidden flex-shrink-0">
                    <img src={p.image} alt={p.title} className="related-img w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-white text-[10px] font-bold"
                      style={{ background: BRAND }}>{p.category}</span>
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="text-[11px] text-gray-400 mb-2 flex items-center gap-1">
                      <Calendar size={11} className="text-blue-500" />{p.date}
                    </p>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3 line-clamp-2">{p.title}</h3>
                    <div className="mt-auto pt-3 border-t border-gray-100">
                      <Link to={`/blog/${p.slug}`}
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="inline-flex items-center gap-1.5 font-bold text-sm transition-all duration-200 hover:gap-2.5"
                        style={{ color: BRAND }}>
                        Read More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </>
  );
}