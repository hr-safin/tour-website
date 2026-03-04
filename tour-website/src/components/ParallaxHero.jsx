import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

const BG_IMAGE =
  "https://images.pexels.com/photos/3714247/pexels-photo-3714247.jpeg";

export default function ParallaxHero() {
  return (
    <>
      <style>{`
        .ph-section {
          position: relative;
          min-height: 88vh;
          width: 100%;
          overflow: hidden;
          background-image: url('${BG_IMAGE}');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
        }

        /* iOS / mobile fallback — fixed attachment doesn't work on mobile */
        @media (max-width: 768px) {
          .ph-section {
            background-attachment: scroll;
          }
        }

        @keyframes phUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes phFade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes phBounce {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }

        .ph-tag   { animation: phUp   0.7s 0.15s ease-out both; }
        .ph-h1    { animation: phUp   0.75s 0.3s  ease-out both; }
        .ph-sub   { animation: phUp   0.7s 0.5s   ease-out both; }
        .ph-btns  { animation: phUp   0.7s 0.65s  ease-out both; }
        .ph-ceo   { animation: phFade 0.8s 0.8s   ease-out both; }
        .ph-scroll{ animation: phFade 1s   1.2s   ease-out both; }

        .ph-bounce { animation: phBounce 1.8s ease-in-out infinite; }

        .ph-callbtn {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .ph-callbtn:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 36px rgba(29,78,216,0.5);
        }
        .ph-callbtn:active { transform: scale(0.97); }

        .ph-ghost {
          transition: background 0.2s ease;
        }
        .ph-ghost:hover {
          background: rgba(255,255,255,0.15) !important;
        }
      `}</style>

      <section className="ph-section">

        {/* Dark overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }} />

        {/* Vignette */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)",
          zIndex: 1, pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          minHeight: "88vh",
          padding: "80px 16px",
          textAlign: "center", color: "white",
        }}>

          {/* Pill label */}
          <div className="ph-tag" style={{ marginBottom: 20 }}>
            <span style={{
              display: "inline-block",
              padding: "6px 20px",
              borderRadius: 999,
              background: "#1D4ED8",
              color: "white",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}>
              Time Ex Tours & Travels
            </span>
          </div>

          {/* Heading */}
          <h2 className="ph-h1" style={{
            fontWeight: 900,
            fontSize: "clamp(2rem, 6vw, 4.5rem)",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            textShadow: "0 4px 24px rgba(0,0,0,0.8)",
            maxWidth: 780,
            marginBottom: 20,
          }}>
            Travel isn't a luxury,{" "}
            <span style={{ color: "#60a5fa" }}>it's a way of life!</span>
          </h2>

          {/* Subtext */}
          <p className="ph-sub" style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "clamp(0.875rem, 2vw, 1rem)",
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: 32,
          }}>
            Make every journey matter — professionally managed travel solutions tailored just for you.
          </p>

          {/* Buttons */}
          <div className="ph-btns" style={{
            display: "flex", flexWrap: "wrap",
            gap: 12, justifyContent: "center",
            marginBottom: 36,
          }}>
            <a
              href="tel:+8801317525225"
              className="ph-callbtn"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 999,
                background: "#1D4ED8", color: "white",
                fontWeight: 700, fontSize: 14, textDecoration: "none",
              }}
            >
              <Phone size={15} />
              Call Now
            </a>
            <Link
              to="/tours"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ph-ghost"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", borderRadius: 999,
                border: "2px solid rgba(255,255,255,0.4)",
                color: "white", fontWeight: 700, fontSize: 14,
                textDecoration: "none", background: "transparent",
              }}
            >
              Explore Tours
            </Link>
          </div>

          {/* CEO card */}
          <div className="ph-ceo" style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "12px 20px", borderRadius: 16,
            background: "rgba(0,0,0,0.4)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "#1D4ED8", border: "1.5px solid rgba(96,165,250,0.5)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 900, color: "white", flexShrink: 0,
            }}>
              MA
            </div>
            <div style={{ textAlign: "left" }}>
              <p style={{ color: "white", fontWeight: 700, fontSize: 13, lineHeight: 1.2 }}>
                Moshiur Ahmmed
              </p>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 10, marginTop: 3, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Founder & CEO · Time Ex Tours & Travels
              </p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="ph-scroll" style={{
            position: "absolute", bottom: 28,
            left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center",
            gap: 6, opacity: 0.5, pointerEvents: "none",
          }}>
            <span style={{ fontSize: 10, color: "white", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Scroll
            </span>
            <div className="ph-bounce">
              <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}