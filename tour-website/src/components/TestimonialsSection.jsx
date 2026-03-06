import { Star, Quote } from "lucide-react";

const BRAND = "#1D4ED8";

const reviews = [
  {
    id: 1,
    name: "Md. Rafiqul Islam",
    location: "Dhaka, Bangladesh",
    avatar: "https://i.pravatar.cc/80?img=11",
    rating: 5,
    title: "Excellent Umrah Package!",
    review:
      "Time Ex Tours arranged our Umrah package flawlessly. From visa processing to hotel booking in Makkah and Madinah — everything was perfectly handled. The team was responsive and caring throughout. Highly recommend to anyone planning Umrah.",
  },
  {
    id: 2,
    name: "Fatema Akter",
    location: "Chittagong, Bangladesh",
    avatar: "https://i.pravatar.cc/80?img=47",
    rating: 5,
    title: "Amazing Thailand Trip!",
    review:
      "We booked the Thailand package for our family and it was an unforgettable experience. The itinerary was well-planned, airport transfers were on time, and the hotels were excellent. Time Ex Tours made our dream vacation a reality!",
  },
  {
    id: 3,
    name: "Tanvir Ahmed",
    location: "Sylhet, Bangladesh",
    avatar: "https://i.pravatar.cc/80?img=52",
    rating: 4,
    title: "Great Dubai Experience",
    review:
      "The Dubai tour was very well-organized. The team at Time Ex helped with visa, flight, and hotel all in one package. The desert safari was the highlight of the trip. I'll definitely book with them again for my next international trip.",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={14}
          fill={i <= count ? "#F59E0B" : "none"}
          className={i <= count ? "text-amber-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <>
      <style>{`
        .review-card {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .review-card:hover {
          box-shadow: 0 20px 50px rgba(29,78,216,0.10);
          transform: translateY(-4px);
        }
      `}</style>

      <section className="py-16 sm:py-20" style={{ background: "#F3F4F6" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <span
              className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold
                tracking-[0.2em] uppercase mb-4"
              style={{ background: BRAND }}
            >
              Traveler Reviews
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              Hear It from Our{" "}
              <span style={{ color: BRAND }}>Travelers</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
              We go beyond just booking trips — we create unforgettable travel experiences that match your dreams.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <div
                key={review.id}
                className="review-card bg-white rounded-2xl p-6 shadow-md flex flex-col"
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
              >
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={32} style={{ color: BRAND }} className="opacity-20" />
                </div>

                {/* Rating */}
                <StarRating count={review.rating} />

                {/* Title */}
                <h3 className="font-black text-gray-900 text-base mt-3 mb-2">
                  {review.title}
                </h3>

                {/* Review text */}
                <p className="text-gray-500 text-sm leading-relaxed flex-1">
                  {review.review}
                </p>

                {/* Divider */}
                <div className="border-t border-gray-100 my-4" />

                {/* Reviewer */}
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 border-2"
                    style={{ borderColor: BRAND }}
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full"
                        style={{ background: BRAND }}
                      />
                      {review.location}
                    </p>
                  </div>
                  <div
                    className="ml-auto px-2.5 py-1 rounded-full text-white text-[10px] font-bold"
                    style={{ background: BRAND }}
                  >
                    Verified
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}