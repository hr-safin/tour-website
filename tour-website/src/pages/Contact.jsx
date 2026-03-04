import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const BRAND = "#1D4ED8";

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    lines: ["+880 1317-525225", "+880 1316-690988"],
    href: "tel:+8801317525225",
    bg: "#EFF6FF",
    accent: "#1D4ED8",
  },
  {
    icon: Mail,
    label: "Email Us",
    lines: ["timextours@gmail.com"],
    href: "mailto:timextours@gmail.com",
    bg: "#F0FDF4",
    accent: "#16A34A",
  },
  {
    icon: MapPin,
    label: "Our Office",
    lines: ["Dhaka, Bangladesh"],
    href: "#map",
    bg: "#FFF7ED",
    accent: "#EA580C",
  },
  {
    icon: Clock,
    label: "Business Hours",
    lines: ["Mon–Fri: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM", "Sunday: Closed"],
    href: null,
    bg: "#F5F3FF",
    accent: "#7C3AED",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const inputCls = (field) =>
    `w-full px-4 py-3 rounded-xl border-2 text-sm outline-none transition-all duration-200 bg-white
     ${focused === field
       ? "border-blue-500 shadow-[0_0_0_4px_rgba(29,78,216,0.1)]"
       : "border-gray-200 hover:border-gray-300"}`;

  return (
    <>
      <style>{`
        @keyframes cFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .c-anim { animation: cFadeUp 0.55s ease-out both; }

        .info-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .info-card:hover { transform: translateY(-3px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .send-btn { transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease; }
        .send-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(29,78,216,0.35); }
        .send-btn:active { transform: translateY(0); }
      `}</style>

      <div className="min-h-screen bg-gray-50">

        {/* ── Hero banner ── */}
        <div className="relative overflow-hidden pt-24 pb-16 px-4 text-center"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>

          {/* Decorative blobs */}
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full opacity-10 blur-3xl"
            style={{ background: "white", transform: "translate(-40%, -40%)" }} />
          <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full opacity-10 blur-3xl"
            style={{ background: "white", transform: "translate(40%, 40%)" }} />

          <div className="relative z-10 c-anim">
            <p className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Contact Us
            </h1>
            <p className="text-blue-200 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              Have a question or ready to plan your next adventure? We're here to help.
            </p>
          </div>

          {/* Wave bottom */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 40L720 0L1440 40H0Z" fill="#F9FAFB" />
            </svg>
          </div>
        </div>

        {/* ── Contact info cards ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div
                  className="info-card rounded-2xl p-5 flex flex-col gap-3 cursor-pointer"
                  style={{ background: item.bg, animationDelay: `${i * 0.08}s` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.accent }}>
                    <Icon size={18} color="#fff" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider mb-1.5"
                      style={{ color: item.accent }}>
                      {item.label}
                    </p>
                    {item.lines.map((l, j) => (
                      <p key={j} className="text-gray-700 text-sm leading-snug">{l}</p>
                    ))}
                  </div>
                </div>
              );
              return item.href
                ? <a key={item.label} href={item.href} className="block c-anim" style={{ animationDelay: `${i * 0.08}s` }}>{content}</a>
                : <div key={item.label} className="c-anim" style={{ animationDelay: `${i * 0.08}s` }}>{content}</div>;
            })}
          </div>
        </div>

        {/* ── Form + map ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

            {/* ── Contact form ── */}
            <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden c-anim"
              style={{ animationDelay: "0.2s" }}>

              <div className="px-6 sm:px-8 pt-7 pb-2">
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1"
                  style={{ letterSpacing: "-0.02em" }}>
                  Send a Message
                </h2>
                <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
              </div>

              {/* Progress bar accent */}
              <div className="h-1 mx-6 sm:mx-8 rounded-full mt-4 mb-6"
                style={{ background: "linear-gradient(90deg, #1D4ED8, #3b82f6)" }} />

              <div className="px-6 sm:px-8 pb-8">
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ background: "#EFF6FF" }}>
                      <CheckCircle size={32} color={BRAND} />
                    </div>
                    <h3 className="text-xl font-black text-gray-900">Message Sent!</h3>
                    <p className="text-gray-500 text-sm max-w-xs">
                      Thank you for reaching out. Our team will contact you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Name</label>
                        <input
                          type="text" name="name" value={form.name} required
                          onChange={handleChange}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          placeholder="Your full name"
                          className={inputCls("name")}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Email</label>
                        <input
                          type="email" name="email" value={form.email} required
                          onChange={handleChange}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused(null)}
                          placeholder="your@email.com"
                          className={inputCls("email")}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Subject</label>
                      <input
                        type="text" name="subject" value={form.subject} required
                        onChange={handleChange}
                        onFocus={() => setFocused("subject")}
                        onBlur={() => setFocused(null)}
                        placeholder="How can we help you?"
                        className={inputCls("subject")}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Message</label>
                      <textarea
                        name="message" rows={5} value={form.message} required
                        onChange={handleChange}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused(null)}
                        placeholder="Tell us about your travel plans or inquiry..."
                        className={inputCls("message")}
                        style={{ resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="send-btn w-full flex items-center justify-center gap-2.5 py-3.5
                        rounded-xl font-bold text-white text-sm"
                      style={{ background: "linear-gradient(135deg, #1D4ED8, #3b82f6)" }}
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── Right side: map + quick call ── */}
            <div className="lg:col-span-2 flex flex-col gap-5 c-anim" style={{ animationDelay: "0.3s" }}>

              {/* Google Map embed */}
              <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg flex-1 min-h-[260px]">
                <iframe
                  title="Time Ex Tours Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.3773804693!2d90.27923766015626!3d23.780573000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1709500000000!5m2!1sen!2sbd"
                  width="100%" height="100%"
                  style={{ border: 0, minHeight: 260 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick call card */}
              <div className="rounded-2xl sm:rounded-3xl p-6 text-white relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 100%)" }}>

                {/* Decorative circle */}
                <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10"
                  style={{ background: "white" }} />

                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Prefer to call?</p>
                <h3 className="text-xl font-black mb-1">Speak to Our Team</h3>
                <p className="text-blue-200 text-xs mb-5 leading-relaxed">
                  Available Mon–Sat, 9 AM – 6 PM
                </p>
                <a
                  href="tel:+8801317525225"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white font-bold text-sm
                    transition-all duration-200 hover:shadow-lg hover:scale-105 active:scale-95"
                  style={{ color: BRAND }}
                >
                  <Phone size={16} />
                  +880 1317-525225
                </a>
                <a
                  href="tel:+8801316690988"
                  className="mt-2.5 flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm
                    border-2 border-white/30 text-white transition-all duration-200
                    hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  <Phone size={16} />
                  +880 1316-690988
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}