import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const BRAND = "#1D4ED8";

export const blogs = [
  {
    id: 1,
    slug: "no1-travel-agency-bangladesh",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900&h=600&fit=crop",
    date: "August 16, 2025",
    author: "Time Ex Tours",
    category: "Travel Tips",
    title: "Amazing Tours – The No.1 Travel Agency In Bangladesh",
    excerpt: "Discover why Time Ex Tours & Travels is Bangladesh's most trusted travel partner, offering world-class packages at unbeatable prices for every type of traveller.",
    readTime: "3 Min Read",
    content: `Time Ex Tours & Travels has established itself as Bangladesh's premier travel agency, serving thousands of happy travellers since its founding. With a dedicated team of travel experts and a passion for creating unforgettable experiences, we have earned the trust of our clients through transparent pricing, exceptional service, and meticulously crafted tour packages.

Our services span domestic and international travel, Umrah and Hajj packages, air ticketing, visa assistance, and fully customized group tours. Whether you're dreaming of the beaches of the Maldives, the mountains of Nepal, or the spiritual journey of Umrah, Time Ex Tours has a package tailored for you.

What sets us apart is our commitment to quality without compromise. We work directly with top hotels, airlines, and local guides to ensure you receive the best experience at the most competitive price. Our customer support team is available around the clock to assist you at every step of your journey.

From the moment you contact us to the day you return home, our goal is to make your travel experience seamless, memorable, and truly special. That's why thousands of Bangladeshi travellers choose Time Ex Tours & Travels — time and time again.`,
  },
  {
    id: 2,
    slug: "sajek-valley-best-places-stay",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=900&h=600&fit=crop",
    date: "December 11, 2024",
    author: "Time Ex Tours",
    category: "Visit Bangladesh",
    title: "Sajek Valley Resort: Top 5 Best Places to Stay",
    excerpt: "Sajek Valley, nestled in the hills of Rangamati, is one of Bangladesh's most breathtaking destinations. Here are the top 5 resorts that offer stunning views and unforgettable stays.",
    readTime: "2 Min Read",
    content: `Sajek Valley, often called the "Queen of Hills", is a breathtaking hill station located in the Rangamati district of Bangladesh's Chittagong Hill Tracts. At an elevation of around 1,800 feet, Sajek offers misty mornings, panoramic views of rolling green hills, and a peaceful escape from city life.

**1. Sajek Resort**
The most popular choice among tourists, Sajek Resort offers comfortable cottages with panoramic mountain views. Wake up to clouds literally drifting past your window — a magical experience you won't forget.

**2. Runmoy Resort**
Known for its warm hospitality and authentic local cuisine, Runmoy Resort is a favourite for families. The wooden bungalows blend perfectly with the natural surroundings.

**3. Meghla Resort**
Perched on a hilltop with 360-degree views, Meghla Resort is perfect for couples seeking a romantic getaway. The sunset views from the terrace are simply spectacular.

**4. Sajek Hill Resort**
Offering a range of accommodation from budget rooms to premium cottages, Sajek Hill Resort caters to all types of travellers. The in-house restaurant serves excellent local and Bengali dishes.

**5. Cloud 9 Cottage**
True to its name, Cloud 9 Cottage feels like staying among the clouds. Small and intimate, it's ideal for solo travellers or couples who want a quiet, private escape.

Getting to Sajek requires a 4WD vehicle and a military permit, but Time Ex Tours handles all arrangements for a completely hassle-free experience.`,
  },
  {
    id: 3,
    slug: "umrah-step-by-step-guide",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=900&h=600&fit=crop",
    date: "March 26, 2023",
    author: "Time Ex Tours",
    category: "Umrah Hajj",
    title: "Umrah: Complete Step-by-Step Guide for First-Time Pilgrims",
    excerpt: "Planning your first Umrah? This comprehensive guide walks you through every step — from visa application and packing tips to the rituals of Tawaf, Sa'i, and beyond.",
    readTime: "5 Min Read",
    content: `Performing Umrah for the first time is a deeply spiritual and life-changing experience. Proper preparation ensures your journey is focused on worship rather than logistical concerns. This guide walks you through every stage of the process.

**Step 1: Apply for Your Umrah Visa**
The Umrah visa is obtained through licensed travel agencies like Time Ex Tours. You'll need a valid passport, passport-sized photos, a vaccination certificate (including meningitis), and booking confirmation for flights and hotels in Saudi Arabia.

**Step 2: Book Your Travel Package**
Choose a package that suits your budget and timeline. Packages typically include return flights, hotel accommodation near the Masjid al-Haram in Makkah, accommodation in Madinah, and ground transportation.

**Step 3: Enter the State of Ihram**
Before crossing the Miqat (the designated boundary for pilgrims), you must enter Ihram — a sacred state of purity. Men wear two white unstitched cloths; women wear modest clothing that covers everything except the face and hands. Make the intention (Niyyah) for Umrah.

**Step 4: Perform Tawaf**
Upon arriving at the Masjid al-Haram, proceed to the Kaaba and perform Tawaf — seven counter-clockwise circuits around the Kaaba, starting and ending at the Black Stone (Hajar al-Aswad).

**Step 5: Perform Sa'i**
After Tawaf, walk seven times between the hills of Safa and Marwa, commemorating Hajar's search for water for her son Ismail (AS).

**Step 6: Cut or Shave Hair**
Men shave or trim their hair; women cut a small amount from the end of their hair. This marks the completion of Umrah and the exit from the state of Ihram.

**Step 7: Visit Madinah**
Although not part of Umrah rituals, most pilgrims also visit Madinah to offer prayers at Masjid al-Nabawi and send blessings upon the Prophet Muhammad (PBUH).

Time Ex Tours offers complete Umrah packages with experienced group leaders who guide pilgrims through every step of the journey.`,
  },
  {
    id: 4,
    slug: "top-tourist-destinations-bangladesh",
    image: "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?w=900&h=600&fit=crop",
    date: "February 11, 2023",
    author: "Time Ex Tours",
    category: "Visit Bangladesh",
    title: "Top 9 Tourist Destinations In Bangladesh You Must Visit",
    excerpt: "From the mangrove forests of the Sundarbans to the golden sands of Cox's Bazar, Bangladesh is full of hidden gems waiting to be explored. Here are our top 9 picks.",
    readTime: "4 Min Read",
    content: `Bangladesh is a country of extraordinary natural beauty and cultural richness, often overlooked by international tourists. But for those who venture here, the rewards are immense. Here are the top 9 destinations every traveller should experience.

**1. Cox's Bazar**
The world's longest unbroken sea beach stretches 120km along the Bay of Bengal. Cox's Bazar is the undisputed crown jewel of Bangladeshi tourism, offering golden sands, fresh seafood, and stunning sunsets.

**2. Sundarbans**
The Sundarbans is the world's largest mangrove forest, shared between Bangladesh and India. Home to the Royal Bengal Tiger, spotted deer, crocodiles, and hundreds of bird species, it's a UNESCO World Heritage Site and a naturalist's paradise.

**3. Sajek Valley**
The "Queen of Hills" offers misty mountain scenery, cloud-covered hilltops, and a glimpse into the lives of indigenous hill communities in the Chittagong Hill Tracts.

**4. Saint Martin's Island**
Bangladesh's only coral island sits in the Bay of Bengal, just 9km south of Teknaf. Crystal-clear waters, colourful coral reefs, and abundant marine life make it a diver's dream.

**5. Sylhet Tea Gardens**
The rolling green hills of Sylhet are blanketed in tea gardens, creating some of the most picturesque landscapes in the country. The region is also home to Ratargul Swamp Forest and numerous haors (wetlands).

**6. Paharpur**
Home to the ancient Buddhist Vihara of Paharpur, a UNESCO World Heritage Site dating back to the 8th century. It's one of the most significant archaeological sites in South Asia.

**7. Sonargaon**
The ancient capital of Bengal, Sonargaon is a living museum of Mughal-era architecture, narrow winding lanes, and traditional craft workshops producing the famous Jamdani muslin.

**8. Bandarban**
The southernmost district of the Chittagong Hill Tracts offers the highest peaks in Bangladesh, including Keokradong and Tajingdong, as well as beautiful waterfalls and tribal cultures.

**9. Lawachara National Park**
A tropical rainforest in Moulvibazar, Lawachara is home to the endangered hoolock gibbon, slow loris, and hundreds of bird species. Guided treks through the forest canopy are an unforgettable experience.`,
  },
  {
    id: 5,
    slug: "thailand-travel-tips",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&h=600&fit=crop",
    date: "January 20, 2023",
    author: "Time Ex Tours",
    category: "Travel Tips",
    title: "Thailand Travel Tips: Everything You Need to Know Before You Go",
    excerpt: "Thailand is one of Southeast Asia's most beloved destinations. Before you pack your bags, here are essential tips on visas, culture, food, and getting around.",
    readTime: "4 Min Read",
    content: `Thailand consistently ranks among the world's top travel destinations, and for good reason. With its perfect blend of ancient temples, tropical beaches, vibrant street food, and warm hospitality, it's a destination that never disappoints. Here's everything you need to know before you go.

**Visa & Entry**
Bangladeshi passport holders require a tourist visa to enter Thailand. Time Ex Tours handles the complete visa process, including documentation and submission. The tourist visa is typically valid for 60 days with a possible extension.

**Best Time to Visit**
November to April is the dry season and the best time to visit most of Thailand. May to October is the rainy season, though it can still be a good time to visit if you want fewer crowds and lower prices.

**Getting Around**
Bangkok has an excellent BTS Skytrain and MRT metro system. For longer distances, domestic flights are affordable and widely available. Tuk-tuks and taxis are convenient for short trips, but always agree on the fare beforehand or insist on the meter.

**What to Eat**
Thai cuisine is world-renowned for good reason. Must-try dishes include Pad Thai, Tom Yum Goong, Som Tum (green papaya salad), Massaman Curry, and Mango Sticky Rice. Street food is generally safe and incredibly delicious.

**Cultural Etiquette**
Thailand is a deeply Buddhist country. Remove your shoes before entering temples and homes. Dress modestly when visiting religious sites — cover shoulders and knees. Never touch someone's head or point your feet at people or religious objects. The monarchy is highly revered — treat all references with respect.

**Currency & Budget**
The Thai Baht (THB) is the local currency. Credit cards are accepted at most hotels and malls, but cash is preferred at markets and street stalls. ATMs are widely available.

**Safety Tips**
Thailand is generally safe for tourists. Be cautious of common tourist scams, particularly around popular sites like the Grand Palace. Always book transportation through reputable providers.`,
  },
  {
    id: 6,
    slug: "dubai-luxury-guide",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&h=600&fit=crop",
    date: "November 5, 2022",
    author: "Time Ex Tours",
    category: "Luxury Travel",
    title: "Dubai Luxury Travel Guide: Making the Most of Your Trip",
    excerpt: "Dubai is the epitome of luxury travel. From sky-high dining at Burj Khalifa to desert safaris under the stars, here's how to experience Dubai at its finest.",
    readTime: "3 Min Read",
    content: `Dubai has transformed itself in just a few decades from a fishing village into one of the world's most glamorous destinations. Whether you're drawn by its futuristic skyline, gold-laden souks, or world-record attractions, Dubai delivers an experience unlike anywhere else on earth.

**Stay in Style**
Dubai is home to some of the world's most iconic hotels. The Burj Al Arab, with its sail-shaped silhouette, is widely considered the world's most luxurious hotel. The Atlantis Palm offers a marine-themed resort experience on the famous Palm Jumeirah. For something more contemporary, the Address Downtown offers stunning views of the Burj Khalifa and Dubai Fountain.

**Must-See Attractions**
No visit to Dubai is complete without a trip to the top of the Burj Khalifa (the world's tallest building at 828m), a stroll through the Dubai Mall, and a sunset dhow cruise along Dubai Creek. The Dubai Frame and Museum of the Future are newer must-visit attractions.

**Desert Safari**
An evening desert safari is one of Dubai's most iconic experiences. Ride over golden dunes in a 4x4, try sandboarding, watch a traditional belly dance performance, and dine under the stars at a Bedouin camp.

**Shopping**
Dubai is a shopping paradise. The Dubai Mall is one of the world's largest, while the Gold Souk in Deira offers an extraordinary selection of gold jewellery at competitive prices. The Spice Souk nearby is a sensory delight.

**Food Scene**
Dubai's restaurant scene is as diverse as its population. From Michelin-starred restaurants to incredible international street food, there is something for every palate and every budget.

**Practical Tips**
Dubai follows Islamic customs. Dress modestly in public areas and malls. Alcohol is available in licensed restaurants and hotels. The best time to visit is November to April when temperatures are pleasant.`,
  },
  {
    id: 7,
    slug: "maldives-honeymoon-guide",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900&h=600&fit=crop",
    date: "October 14, 2022",
    author: "Time Ex Tours",
    category: "Luxury Travel",
    title: "Maldives Honeymoon Guide: The Perfect Romantic Getaway",
    excerpt: "The Maldives is the ultimate honeymoon destination. Overwater bungalows, crystal-clear lagoons, and breathtaking sunsets — here's how to plan your perfect romantic escape.",
    readTime: "3 Min Read",
    content: `The Maldives is one of those rare destinations that exceeds all expectations. A constellation of 1,200 coral islands scattered across the Indian Ocean, it offers the kind of natural beauty that seems almost too perfect to be real. For honeymooners, it's paradise.

**Choosing the Right Resort**
The Maldives operates on a "one island, one resort" model, meaning each resort occupies its own private island. For honeymooners, look for resorts that offer overwater villas — there's nothing quite like waking up above a turquoise lagoon and stepping directly into the warm ocean from your private deck.

Top romantic resorts include Soneva Fushi, Conrad Maldives Rangali Island, and Gili Lankanfushi. For those on a more moderate budget, Cinnamon Dhonveli and Adaaran Select Meedhupparu offer excellent value.

**What to Do**
Snorkelling and diving are the main activities, with the Maldives boasting some of the world's most spectacular coral reefs. Whale shark encounters are available at certain atolls. Sunset dolphin cruises are a must for any couple. Private beach dinners and in-villa spa treatments add the perfect romantic touches.

**Getting There**
Most international flights arrive at Velana International Airport in Malé. From there, your resort will arrange a speedboat transfer or a seaplane flight to your island — the seaplane ride itself is an unforgettable experience.

**Best Time to Visit**
November to April is the dry season with calm seas and excellent visibility for water activities — ideal for a honeymoon. The wet season (May to October) brings lower prices and is still beautiful, though with occasional rain.

**Packing Tips**
Pack light, breathable clothing, reef-safe sunscreen, a waterproof camera, and any prescription medications (pharmacies are limited on resort islands). Most resorts provide snorkelling equipment.`,
  },
  {
    id: 8,
    slug: "nepal-trekking-beginners",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&h=600&fit=crop",
    date: "September 3, 2022",
    author: "Time Ex Tours",
    category: "Adventure",
    title: "Nepal Trekking for Beginners: Your First Himalayan Adventure",
    excerpt: "Ready to trek the Himalayas but don't know where to start? This beginner's guide covers the best routes, gear, fitness tips, and everything you need for a safe trek.",
    readTime: "5 Min Read",
    content: `Nepal is the world's premier trekking destination, home to eight of the ten highest peaks on earth. But you don't need to be an experienced mountaineer to enjoy a Himalayan trek — there are routes suitable for all fitness levels. Here's everything you need to know as a first-time trekker.

**Choose the Right Route**
For beginners, the Ghorepani Poon Hill trek (4-5 days) is an excellent starting point, offering stunning Annapurna and Dhaulagiri views with relatively moderate difficulty. The Langtang Valley trek (7-10 days) is another great option with beautiful forests and mountain villages.

The classic Annapurna Base Camp trek (10-12 days) and Everest Base Camp trek (12-14 days) are more demanding but achievable for fit beginners with proper preparation.

**Getting the Required Permits**
All trekkers in Nepal require at least two permits: the TIMS (Trekkers' Information Management System) card and a National Park / Conservation Area permit. Time Ex Tours handles all permit arrangements as part of our Nepal trekking packages.

**Fitness Preparation**
Start training at least 2-3 months before your trek. Focus on cardiovascular fitness (walking, hiking, cycling) and strengthen your legs and core. Practice hiking with a loaded backpack on varied terrain.

**Acclimatisation**
Altitude sickness is a real risk above 3,000 metres. Follow the golden rule: climb high, sleep low. Never ascend more than 300-500 metres per day above 3,000m. If you experience severe headache, vomiting, or difficulty breathing, descend immediately.

**What to Pack**
Essentials include: moisture-wicking base layers, a warm fleece and down jacket, waterproof outer shell, trekking boots (broken in before the trip), trekking poles, a sleeping bag rated to -10°C, a headlamp, water purification tablets, and a basic first aid kit.

**Hiring a Guide and Porter**
We strongly recommend hiring a local guide, especially for first-time trekkers. A guide ensures safety, provides cultural insight, and handles logistics. Porters carry your heavy bag, allowing you to focus on enjoying the trek.`,
  },
  {
    id: 9,
    slug: "bali-hidden-gems",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=900&h=600&fit=crop",
    date: "July 22, 2022",
    author: "Time Ex Tours",
    category: "Adventure",
    title: "Bali's Hidden Gems: Beyond the Tourist Trail",
    excerpt: "Everyone knows Kuta and Seminyak, but Bali has so much more to offer. Discover secret waterfalls, quiet temples, and off-the-beaten-path villages that most tourists never see.",
    readTime: "3 Min Read",
    content: `Bali is one of the world's most visited islands, but venture beyond the crowded beaches of Kuta and Seminyak and you'll discover a quieter, more authentic side of the Island of the Gods.

**Sekumpul Waterfall**
Hidden in the north of Bali near Singaraja, Sekumpul is arguably Bali's most beautiful waterfall — a cluster of seven cascades plunging through a lush jungle gorge. Getting there requires a guided jungle trek, but the reward is a truly breathtaking sight with few other tourists around.

**Sidemen Valley**
While the Tegalalang rice terraces near Ubud are famous (and crowded), the Sidemen Valley in east Bali offers equally stunning rice terrace landscapes with a fraction of the visitors. Cycle through the valley in the early morning and you'll feel like you have Bali to yourself.

**Pura Lempuyang**
The "Gateway to Heaven" temple at Pura Lempuyang offers one of Bali's most iconic photographs — the split gate framing a perfect reflection of Mount Agung in a pool of water. Get there before 7am to avoid the queues.

**Amed**
While Kuta's beaches are packed, the fishing village of Amed on Bali's east coast offers black sand beaches, outstanding snorkelling over the USAT Liberty shipwreck in nearby Tulamben, and a genuinely local atmosphere.

**Munduk**
This cool highland village surrounded by coffee plantations, clove trees, and jungle waterfalls is perfect for those seeking Bali's natural beauty without the crowds. Morning mist rolls through the valley below, creating a magical atmosphere.

**Tanah Lot at Sunrise**
Most tourists visit Tanah Lot temple at sunset, but arriving at sunrise means you'll have this spectacular sea temple almost entirely to yourself — a completely different and far more peaceful experience.`,
  },
];

const categories = ["All", "Travel Tips", "Visit Bangladesh", "Umrah Hajj", "Luxury Travel", "Adventure"];

function BlogCard({ post, delay }) {
  return (
    <div
      className="blog-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl flex flex-col"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="blog-img w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-[10px] font-bold shadow"
          style={{ background: BRAND }}
        >
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar size={11} className="text-blue-500 flex-shrink-0" />
            {post.date}
          </span>
          <span className="flex items-center gap-1">
            <User size={11} className="text-blue-500 flex-shrink-0" />
            {post.author}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} className="text-blue-500 flex-shrink-0" />
            {post.readTime}
          </span>
        </div>

        <h3
          className="font-bold text-gray-900 text-sm sm:text-base leading-snug mb-3 line-clamp-2"
          style={{ letterSpacing: "-0.01em" }}
        >
          {post.title}
        </h3>

        <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <Link
            to={`/blog/${post.slug}`}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 font-bold text-sm transition-all duration-200 hover:gap-2.5"
            style={{ color: BRAND }}
          >
            Read More
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogs
    : blogs.filter((b) => b.category === activeCategory);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (window.AOS) {
      window.AOS.init({ duration: 600, once: true, easing: "ease-out-cubic" });
    }
  }, []);

  useEffect(() => {
    if (window.AOS) setTimeout(() => window.AOS.refresh(), 50);
  }, [activeCategory]);

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
        .line-clamp-2 { display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
        .line-clamp-3 { display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; overflow:hidden; }
      `}</style>

      <div className="min-h-screen bg-white">

        {/* Hero */}
        <div className="blog-hero relative h-72 sm:h-80 lg:h-96 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
          <div className="relative z-10 text-center text-white px-4" data-aos="fade-up">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-blue-300">Our Stories</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5" style={{ letterSpacing: "-0.02em" }}>
              Travel Blog
            </h1>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Link to="/" className="text-blue-300 hover:text-white transition-colors font-medium">Home</Link>
              <ArrowRight size={14} className="text-white/50" />
              <span className="text-white/80">Blog</span>
            </div>
          </div>
        </div>

        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 text-center" data-aos="fade-up">
          <span className="inline-block px-5 py-1.5 rounded-full text-white text-xs font-bold tracking-[0.2em] uppercase mb-4"
            style={{ background: BRAND }}>
            Latest Articles
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3" style={{ letterSpacing: "-0.02em" }}>
            Travel Tips &{" "}<span style={{ color: BRAND }}>Stories</span>
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Explore our guides, destination highlights, and travel inspiration for your next adventure.
          </p>
        </div>

        {/* Category tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10" data-aos="fade-up">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-bold border-2 transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  borderColor: activeCategory === cat ? BRAND : "#E5E7EB",
                  background: activeCategory === cat ? BRAND : "white",
                  color: activeCategory === cat ? "white" : "#6B7280",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((post, i) => (
                <BlogCard key={post.id} post={post} delay={`${(i % 3) * 80}`} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-semibold">No posts in this category yet.</p>
            </div>
          )}
        </div>

      </div>
    </>
  );
}