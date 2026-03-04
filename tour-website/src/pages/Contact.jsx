import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react";

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
    label: "Head Office Email",
    lines: ["timeextours@gmail.com"],
    href: "mailto:timextours@gmail.com",
    bg: "#F0FDF4",
    accent: "#16A34A",
  },
  {
    icon: Mail,
    label: "Branch Office Email",
    lines: ["timeextours.office@gmail.com"],
    href: "mailto:timextours.office@gmail.com",
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

const offices = [
  {
    label: "Head Office",
    address: "Ahsan Tower (2nd Floor), 56 Kemal Ataturke Avenue, Banani, C/A, Dhaka-1213",
    email: "timeextours@gmail.com",
    phone: "+880 1317-525225",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.3!2d90.4025!3d23.7935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79934b79ff7%3A0x26b0d9c67a7d3c44!2sBanani%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1709500000000!5m2!1sen!2sbd",
    accent: BRAND,
    bg: "#EFF6FF",
  },
  {
    label: "Branch Office",
    address: "GA-25/5/A (2nd Floor), Pragati Sarani, Shajadpur, Gulshan, Dhaka-1212",
    email: "timeextours.office@gmail.com",
    phone: "+880 1317-525225",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.8!2d90.4142!3d23.7968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0a0a0a0a0%3A0x0!2sGulshan%2C+Dhaka!5e0!3m2!1sen!2sbd!4v1709500000000!5m2!1sen!2sbd",
    accent: "#EA580C",
    bg: "#FFF7ED",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

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
        .contact-hero {
          background-image: url('https://images.pexels.com/photos/32225798/pexels-photo-32225798.jpeg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }
        @media (max-width: 768px) { .contact-hero { background-attachment: scroll; } }

        .info-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .info-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,0,0,0.1); }

        .send-btn { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .send-btn:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(29,78,216,0.35); }
        .send-btn:active { transform: translateY(0); }

        .office-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .office-card:hover { transform: translateY(-4px); box-shadow: 0 20px 50px rgba(0,0,0,0.12); }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* ── Hero ── */}
        <div className="contact-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">
              We'd Love To Hear From You
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5"
              style={{ letterSpacing: "-0.02em" }}>
              Contact Us
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Contact</span>
            </div>
          </div>
        </div>

        {/* ── Section header ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
            tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
            style={{ letterSpacing: "-0.02em" }}>
            We're Here to{" "}
            <span style={{ color: BRAND }}>Help You</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Have a question or ready to plan your next adventure? Reach out — we'll get back to you promptly.
          </p>
        </div>

        {/* ── Info cards ── */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const card = (
                <div className="info-card rounded-2xl p-5 flex flex-col gap-3 h-full"
                  style={{ background: item.bg }}>
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
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
                ? <a key={item.label} href={item.href} className="block" data-aos="fade-up" data-aos-delay={`${i * 80}`}>{card}</a>
                : <div key={item.label} data-aos="fade-up" data-aos-delay={`${i * 80}`}>{card}</div>;
            })}
          </div>
        </div>

        {/* ── Form + Quick Call ── */}
        <section className="py-6 sm:py-8" style={{ background: "#F8FAFF" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">

              {/* Contact form */}
              <div className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden"
                data-aos="fade-right">
                <div className="px-6 sm:px-8 pt-7 pb-2">
                  <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-1"
                    style={{ letterSpacing: "-0.02em" }}>
                    Send a Message
                  </h2>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours.</p>
                </div>
                <div className="h-1 mx-6 sm:mx-8 rounded-full mt-4 mb-6"
                  style={{ background: `linear-gradient(90deg, ${BRAND}, #3b82f6)` }} />

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
                          <input type="text" name="name" value={form.name} required
                            onChange={handleChange}
                            onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
                            placeholder="Your full name" className={inputCls("name")} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Email</label>
                          <input type="email" name="email" value={form.email} required
                            onChange={handleChange}
                            onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
                            placeholder="your@email.com" className={inputCls("email")} />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Subject</label>
                        <input type="text" name="subject" value={form.subject} required
                          onChange={handleChange}
                          onFocus={() => setFocused("subject")} onBlur={() => setFocused(null)}
                          placeholder="How can we help you?" className={inputCls("subject")} />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Message</label>
                        <textarea name="message" rows={5} value={form.message} required
                          onChange={handleChange}
                          onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
                          placeholder="Tell us about your travel plans or inquiry..."
                          className={inputCls("message")} style={{ resize: "none" }} />
                      </div>
                      <button type="submit"
                        className="send-btn w-full flex items-center justify-center gap-2.5 py-3.5
                          rounded-xl font-bold text-white text-sm"
                        style={{ background: `linear-gradient(135deg, ${BRAND}, #3b82f6)` }}>
                        <Send size={16} /> Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Right — quick call + WhatsApp */}
              <div className="lg:col-span-2 flex flex-col gap-5" data-aos="fade-left">

                {/* Quick call card */}
                <div className="rounded-2xl sm:rounded-3xl p-6 text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 100%)" }}>
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10"
                    style={{ background: "white" }} />
                  <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-2">Prefer to call?</p>
                  <h3 className="text-xl font-black mb-1">Speak to Our Team</h3>
                  <p className="text-blue-200 text-xs mb-5 leading-relaxed">Available Mon–Sat, 9 AM – 6 PM</p>
                  <div className="space-y-2.5">
                    <a href="tel:+8801317525225"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white font-bold text-sm
                        transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                      style={{ color: BRAND }}>
                      <Phone size={15} /> +880 1317-525225
                    </a>
                    <a href="tel:+8801316690988"
                      className="flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm
                        border-2 border-white/30 text-white transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
                      <Phone size={15} /> +880 1316-690988
                    </a>
                  </div>
                </div>

                {/* WhatsApp card */}
                <div className="rounded-2xl sm:rounded-3xl p-6 relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #064e3b 0%, #059669 100%)" }}>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full opacity-10"
                    style={{ background: "white" }} />
                  <p className="text-green-200 text-xs font-bold uppercase tracking-wider mb-2">Chat With Us</p>
                  <h3 className="text-xl font-black text-white mb-1">WhatsApp Us</h3>
                  <p className="text-green-200 text-xs mb-5 leading-relaxed">Quick replies on WhatsApp</p>
                  <a href="https://wa.me/8801317525225"
                    target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white font-bold text-sm
                      transition-all hover:shadow-lg hover:scale-105 active:scale-95"
                    style={{ color: "#059669" }}>
                    <MessageCircle size={15} /> +880 1317-525225
                  </a>
                </div>

                {/* Services pill list */}
                <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: BRAND }}>Our Services</p>
                  <div className="flex flex-wrap gap-2">
                    {["Visa Processing", "Tour Packages", "Air Ticket", "Student Visa", "Hotel Booking", "Umrah Package"].map((s) => (
                      <span key={s} className="px-3 py-1.5 rounded-full text-xs font-bold text-white"
                        style={{ background: BRAND }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── Two office locations ── */}
        <section className="py-14 sm:py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10" data-aos="fade-up">
              <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4" style={{ background: BRAND }}>
                Our Locations
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900"
                style={{ letterSpacing: "-0.02em" }}>
                Visit Our{" "}
                <span style={{ color: BRAND }}>Offices</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {offices.map((office, i) => (
                <div key={office.label}
                  className="office-card bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg border border-gray-100"
                  data-aos="fade-up" data-aos-delay={`${i * 120}`}>

                  {/* Map */}
                  <div className="h-52 overflow-hidden">
                    <iframe
                      title={office.label}
                      src={office.mapSrc}
                      width="100%" height="100%"
                      style={{ border: 0, minHeight: 208 }}
                      allowFullScreen="" loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: office.bg }}>
                        <MapPin size={18} color={office.accent} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider" style={{ color: office.accent }}>
                          {office.label}
                        </p>
                        <p className="text-gray-500 text-xs">Time Ex Tours & Travels</p>
                      </div>
                    </div>

                    <div className="space-y-2.5 mb-5">
                      <div className="flex items-start gap-2.5 text-gray-600 text-sm">
                        <MapPin size={14} className="flex-shrink-0 mt-0.5" style={{ color: office.accent }} />
                        {office.address}
                      </div>
                      <div className="flex items-center gap-2.5 text-gray-600 text-sm">
                        <Mail size={14} style={{ color: office.accent }} />
                        <a href={`mailto:${office.email}`} className="hover:underline">{office.email}</a>
                      </div>
                      <div className="flex items-center gap-2.5 text-gray-600 text-sm">
                        <Phone size={14} style={{ color: office.accent }} />
                        <a href={`tel:${office.phone.replace(/\s|-/g, "")}`} className="hover:underline">{office.phone}</a>
                      </div>
                    </div>

                    <a href={`tel:+8801317525225`}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl
                        font-bold text-white text-sm transition-all hover:scale-105 hover:shadow-lg active:scale-95"
                      style={{ background: office.accent }}>
                      <Phone size={14} /> Call This Office
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="py-12 sm:py-14 text-white"
          style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1D4ED8 60%, #3b82f6 100%)" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-3"
              style={{ letterSpacing: "-0.02em" }}>
              Ready to Start Your Journey?
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-7 max-w-xl mx-auto">
              Call us now — our team is ready to plan your perfect trip from Dhaka to anywhere in the world.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+8801317525225"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm bg-white transition-all hover:scale-105 hover:shadow-xl active:scale-95"
                style={{ color: BRAND }}>
                <Phone size={14} /> +880 1317-525225
              </a>
              <a href="https://wa.me/8801317525225" target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold
                  text-sm border-2 border-white/40 text-white transition-all
                  hover:bg-white/10 hover:scale-105 active:scale-95">
                <MessageCircle size={14} /> WhatsApp Us
              </a>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}