import { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What Services Does Your Travel Agency Provide?",
    answer:
      "Time Ex Tours & Travels offers a wide range of services including customized tour packages, international and domestic air tickets, hotel bookings, visa processing assistance, umrah packages, honeymoon packages, group tours, and 24/7 customer support to ensure a seamless travel experience.",
  },
  {
    id: 2,
    question: "Do You Offer Customized Travel Packages?",
    answer:
      "Yes! We specialize in crafting fully personalized travel packages tailored to your budget, duration, and destination preferences. Whether it's a family vacation, honeymoon, adventure trip, or corporate travel, our experts design the perfect itinerary just for you.",
  },
  {
    id: 3,
    question: "Can I Book Flights, Hotels, and Tours Separately?",
    answer:
      "Absolutely. You can book any service individually — flights, hotels, or tours — or bundle them together for a better deal. Our team will guide you through the best available options to match your travel needs and budget.",
  },
  {
    id: 4,
    question: "Do You Provide Visa Assistance?",
    answer:
      "Yes, we provide comprehensive visa assistance for multiple destinations including Thailand, Maldives, Dubai, Europe, USA, and more. Our experienced team helps with documentation, application submission, and follow-up to maximize your chances of approval.",
  },
  {
    id: 5,
    question: "What Payment Methods Do You Accept?",
    answer:
      "We accept a variety of payment methods including bank transfers, bKash, Nagad, Rocket, cash payments at our office, and installment options for select packages. Contact us for details on flexible payment plans.",
  },
  {
    id: 6,
    question: "How Far in Advance Should I Book My Tour?",
    answer:
      "We recommend booking at least 2–4 weeks in advance for domestic tours and 4–8 weeks for international packages to ensure availability and better pricing. For peak seasons like Eid and holidays, early booking is strongly advised.",
  },
  {
    id: 7,
    question: "What Is Your Cancellation and Refund Policy?",
    answer:
      "Our cancellation policy varies by package and destination. Generally, cancellations made 14+ days before departure are eligible for a partial refund. We recommend travel insurance for full coverage. Please contact our team for specific terms.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId(openId === id ? null : id);

  return (
    <>
      <style>{`
        .faq-answer {
          display: grid;
          grid-template-rows: 0fr;
          transition: grid-template-rows 0.35s ease;
        }
        .faq-answer.open {
          grid-template-rows: 1fr;
        }
        .faq-answer > div { overflow: hidden; }

        .faq-chevron {
          transition: transform 0.3s ease;
        }
        .faq-chevron.open {
          transform: rotate(180deg);
        }
      `}</style>

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              style={{ letterSpacing: "-0.02em" }}>
              Questions & Answer
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
              We're committed to offering more than just products — we provide exceptional experiences.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl border border-gray-200 overflow-hidden transition-shadow duration-300"
                  style={{ background: "#F9FAFB" }}
                >
                  {/* Question row */}
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5
                      text-left gap-4 focus:outline-none group"
                  >
                    <span className={`font-semibold text-sm sm:text-base transition-colors duration-200 ${
                      isOpen ? "text-blue-700" : "text-gray-800 group-hover:text-blue-700"
                    }`}>
                      {faq.question}
                    </span>
                    {/* Chevron */}
                    <span
                      className={`faq-chevron flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                        transition-all duration-300 ${isOpen
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                        } ${isOpen ? "open" : ""}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div className={`faq-answer ${isOpen ? "open" : ""}`}>
                    <div>
                      <p className="px-5 sm:px-6 pb-5 text-gray-500 text-sm sm:text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="text-center mt-10">
            <p className="text-gray-400 text-sm mb-3">Still have questions?</p>
            <a
              href="tel:+8801317525225"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-bold text-white
                text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
              style={{ background: "#1D4ED8" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call Us Now
            </a>
          </div>

        </div>
      </section>
    </>
  );
}