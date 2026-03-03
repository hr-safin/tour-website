import { useEffect, useRef } from "react";

export default function ParallaxHero({
  height = "h-screen",
  children,
  speed = 0.4,
}) {
  const bgRef = useRef(null);

  useEffect(() => {
    let frameId;

    const handleScroll = () => {
      frameId = requestAnimationFrame(() => {
        const offset = window.scrollY * speed;

        if (bgRef.current) {
          bgRef.current.style.transform = `translateY(${offset}px)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frameId);
    };
  }, [speed]);

  return (
    <section className={`relative overflow-hidden ${height}`}>
      {/* Background (YOUR IMAGE) */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // smoother parallax feel
          willChange: "transform",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        {children}
      </div>
    </section>
  );
}