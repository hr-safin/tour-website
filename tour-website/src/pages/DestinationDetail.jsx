import { useParams, Link } from "react-router-dom";
import { MapPin, Calendar, DollarSign, Users, Star, Clock, Phone } from "lucide-react";

const BRAND = "#1D4ED8";

const allDestinations = {
  bangladesh: {
    name: "Bangladesh",
    region: "South Asia",
    image: "https://images.pexels.com/photos/32766712/pexels-photo-32766712.jpeg",
    galleryImages: [
      "https://images.unsplash.com/photo-1564769625905-50e93615e769?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1548013146-72a6d519c5c4?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1542747353-37dff95b66d7?w=500&h=400&fit=crop",
    ],
    description: "Bangladesh, a vibrant South Asian nation, is home to the world's largest mangrove forest, the Sundarbans, and boasts a rich cultural heritage spanning thousands of years.",
    overview: "Experience the authentic charm of South Asia with Bangladesh's diverse attractions. From wildlife encounters in the Sundarbans to relaxation on the beaches of Cox's Bazar, Bangladesh offers unforgettable experiences.",
    highlights: [
      "Sundarbans National Park - World's largest mangrove forest and home to Bengal tigers",
      "Cox's Bazar - World's longest unbroken sea beach with 120km of sandy shores",
      "Sylhet Tea Gardens - Lush green tea plantations with scenic beauty",
      "Chittagong Hill Tracts - Indigenous culture and stunning mountainous landscape",
      "Ahsan Manzil Palace - Historic 19th-century mansion in Dhaka",
      "Saint Martin's Island - Coral island in the Bay of Bengal",
    ],
    bestTime: "October to March",
    temperature: "15°C - 30°C",
    currency: "Bangladeshi Taka (৳)",
    language: "Bengali",
    visaRequirement: "Visa on arrival for many nationalities",
    duration: "5-10 days",
    rating: 4.6,
    reviews: 324,
    price: "From ৳15,000",
    activities: [
      { name: "Wildlife Safari", icon: "🐯" },
      { name: "Beach Exploration", icon: "🏖️" },
      { name: "Cultural Tours", icon: "🏛️" },
      { name: "Tea Garden Visits", icon: "🫖" },
      { name: "River Cruises", icon: "🚤" },
      { name: "Mountain Trekking", icon: "⛰️" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳8,000-15,000/night" },
      { name: "Mid-range Hotels", price: "৳3,000-8,000/night" },
      { name: "Budget Hotels", price: "৳1,000-3,000/night" },
    ],
    tours: [
      { id: 1, name: "Sundarbans Mangrove Forest Tour", days: "3 Days", price: "৳18,000" },
      { id: 2, name: "Cox's Bazar Beach Getaway", days: "4 Days", price: "৳15,000" },
      { id: 3, name: "Sylhet Tea Garden & Heritage Tour", days: "5 Days", price: "৳22,000" },
      { id: 4, name: "Chittagong Hill Tracts Adventure", days: "5 Days", price: "৳25,000" },
    ],
  },
  thailand: {
    name: "Thailand",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1528181304800-259b08848526?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1528181304800-259b08848526?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&h=400&fit=crop",
    ],
    description: "Thailand, the Land of Smiles, enchants visitors with its ornate temples, tropical beaches, vibrant street food culture, and warm hospitality.",
    overview: "Thailand offers an incredible mix of cultural heritage, natural beauty, and modern attractions. From the bustling streets of Bangkok to the serene islands of the south, every corner of Thailand has something unique to offer.",
    highlights: [
      "Grand Palace & Wat Phra Kaew - Iconic royal complex in Bangkok",
      "Phuket & Krabi - World-class beaches and limestone cliffs",
      "Chiang Mai - Northern cultural capital with ancient temples",
      "Floating Markets - Unique riverside markets with local produce",
      "Elephant Sanctuaries - Ethical wildlife experiences",
      "Street Food Culture - World-renowned culinary scene",
    ],
    bestTime: "November to April",
    temperature: "25°C - 35°C",
    currency: "Thai Baht (฿)",
    language: "Thai",
    visaRequirement: "Visa on arrival / e-Visa available",
    duration: "7-14 days",
    rating: 4.8,
    reviews: 892,
    price: "From ৳85,000",
    activities: [
      { name: "Temple Tours", icon: "🛕" },
      { name: "Island Hopping", icon: "🏝️" },
      { name: "Street Food Tour", icon: "🍜" },
      { name: "Elephant Sanctuary", icon: "🐘" },
      { name: "Muay Thai", icon: "🥊" },
      { name: "Scuba Diving", icon: "🤿" },
    ],
    accommodation: [
      { name: "Luxury Resorts", price: "৳12,000-25,000/night" },
      { name: "Mid-range Hotels", price: "৳5,000-12,000/night" },
      { name: "Budget Guesthouses", price: "৳1,500-5,000/night" },
    ],
    tours: [
      { id: 1, name: "Bangkok City Explorer", days: "4 Days", price: "৳45,000" },
      { id: 2, name: "Phuket & Krabi Beach Escape", days: "6 Days", price: "৳75,000" },
      { id: 3, name: "Chiang Mai Cultural Tour", days: "5 Days", price: "৳55,000" },
      { id: 4, name: "Full Thailand Experience", days: "10 Days", price: "৳1,10,000" },
    ],
  },
  europe: {
    name: "Europe",
    region: "Europe",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1520986606214-8b456906c813?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=500&h=400&fit=crop",
    ],
    description: "Europe dazzles with its incredible diversity — from the romantic streets of Paris to the ancient ruins of Rome, the alpine peaks of Switzerland to the medieval charm of Prague.",
    overview: "A European adventure takes you through thousands of years of history, art, and culture. Explore world-class museums, taste exquisite cuisines, and witness breathtaking landscapes across this iconic continent.",
    highlights: [
      "Eiffel Tower, Paris - The iconic symbol of France and romance",
      "Colosseum, Rome - Ancient Roman gladiatorial arena",
      "Swiss Alps - Breathtaking mountain scenery and ski resorts",
      "Prague Old Town - Medieval architecture and cobblestone streets",
      "Amsterdam Canals - Unique waterway city with cycling culture",
      "Santorini, Greece - Iconic white-washed cliffs over the Aegean Sea",
    ],
    bestTime: "April to October",
    temperature: "10°C - 28°C",
    currency: "Euro (€)",
    language: "Multiple languages",
    visaRequirement: "Schengen visa required",
    duration: "10-21 days",
    rating: 4.9,
    reviews: 1240,
    price: "From ৳1,80,000",
    activities: [
      { name: "Museum Visits", icon: "🏛️" },
      { name: "City Walking Tours", icon: "🚶" },
      { name: "Wine Tasting", icon: "🍷" },
      { name: "Skiing", icon: "⛷️" },
      { name: "Canal Cruises", icon: "⛵" },
      { name: "Photography", icon: "📸" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳20,000-50,000/night" },
      { name: "Mid-range Hotels", price: "৳8,000-20,000/night" },
      { name: "Hostels & B&Bs", price: "৳2,000-8,000/night" },
    ],
    tours: [
      { id: 1, name: "Paris & Rome Combo", days: "8 Days", price: "৳1,80,000" },
      { id: 2, name: "Switzerland Alpine Tour", days: "7 Days", price: "৳2,20,000" },
      { id: 3, name: "Eastern Europe Discovery", days: "10 Days", price: "৳1,60,000" },
      { id: 4, name: "Grand Europe Tour", days: "15 Days", price: "৳3,50,000" },
    ],
  },
  cambodia: {
    name: "Cambodia",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569914175399-77ff5f04eab4?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1580914090712-6e5c81f3ff2b?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1587135836645-b5a3c5d41a26?w=500&h=400&fit=crop",
    ],
    description: "Cambodia, home to the magnificent Angkor Wat temple complex, offers a fascinating journey through the history of the Khmer Empire alongside vibrant culture and warm people.",
    overview: "Discover the mystical temples of Angkor, cruise the Tonle Sap Lake, and explore the vibrant capital Phnom Penh. Cambodia's resilient culture and stunning archaeological wonders make it a must-visit destination.",
    highlights: [
      "Angkor Wat - World's largest religious monument",
      "Angkor Thom - Ancient Khmer capital with Bayon Temple",
      "Tonle Sap Lake - Largest freshwater lake in Southeast Asia",
      "Phnom Penh - Vibrant capital with royal palace",
      "Sihanoukville Beaches - Tropical coastline",
      "Kampot - Colonial rivertown with pepper farms",
    ],
    bestTime: "November to April",
    temperature: "25°C - 35°C",
    currency: "Cambodian Riel / USD",
    language: "Khmer",
    visaRequirement: "e-Visa available online",
    duration: "5-10 days",
    rating: 4.7,
    reviews: 456,
    price: "From ৳65,000",
    activities: [
      { name: "Temple Exploration", icon: "🛕" },
      { name: "Sunrise at Angkor", icon: "🌅" },
      { name: "Cooking Classes", icon: "🍽️" },
      { name: "Boat Tours", icon: "🚤" },
      { name: "Cycling", icon: "🚴" },
      { name: "Cultural Shows", icon: "💃" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳8,000-18,000/night" },
      { name: "Mid-range Hotels", price: "৳3,000-8,000/night" },
      { name: "Guesthouses", price: "৳800-3,000/night" },
    ],
    tours: [
      { id: 1, name: "Angkor Wat Sunrise Tour", days: "3 Days", price: "৳35,000" },
      { id: 2, name: "Siem Reap Temple Circuit", days: "5 Days", price: "৳55,000" },
      { id: 3, name: "Phnom Penh City Tour", days: "2 Days", price: "৳20,000" },
      { id: 4, name: "Full Cambodia Experience", days: "8 Days", price: "৳85,000" },
    ],
  },
  nepal: {
    name: "Nepal",
    region: "South Asia",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1585016495481-91136dd6c8f3?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569143990613-78ad45cef3e5?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=500&h=400&fit=crop",
    ],
    description: "Nepal, the land of the Himalayas, is home to eight of the world's ten highest peaks including Mount Everest, offering unmatched trekking, culture, and spiritual experiences.",
    overview: "Trek through some of the world's most spectacular mountain scenery, explore ancient Hindu and Buddhist temples, and experience the warm hospitality of the Nepali people. Nepal is the ultimate adventure destination.",
    highlights: [
      "Mount Everest Base Camp Trek - World's highest mountain base camp",
      "Annapurna Circuit - Iconic trekking route with diverse landscapes",
      "Kathmandu Valley - UNESCO World Heritage temples and palaces",
      "Pokhara - Lakeside city with stunning Annapurna views",
      "Chitwan National Park - Wildlife safari with rhinos and tigers",
      "Lumbini - Birthplace of Lord Buddha",
    ],
    bestTime: "October to November, March to May",
    temperature: "-10°C to 25°C",
    currency: "Nepalese Rupee (NPR)",
    language: "Nepali",
    visaRequirement: "Visa on arrival available",
    duration: "7-21 days",
    rating: 4.8,
    reviews: 678,
    price: "From ৳75,000",
    activities: [
      { name: "Trekking", icon: "🥾" },
      { name: "Mountaineering", icon: "⛰️" },
      { name: "White Water Rafting", icon: "🚣" },
      { name: "Paragliding", icon: "🪂" },
      { name: "Temple Tours", icon: "🛕" },
      { name: "Wildlife Safari", icon: "🦏" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳6,000-15,000/night" },
      { name: "Tea Houses (Trek)", price: "৳500-2,000/night" },
      { name: "Budget Guesthouses", price: "৳800-3,000/night" },
    ],
    tours: [
      { id: 1, name: "Everest Base Camp Trek", days: "14 Days", price: "৳1,20,000" },
      { id: 2, name: "Annapurna Panorama Trek", days: "7 Days", price: "৳75,000" },
      { id: 3, name: "Kathmandu Valley Tour", days: "4 Days", price: "৳35,000" },
      { id: 4, name: "Nepal Adventure Package", days: "10 Days", price: "৳95,000" },
    ],
  },
  indonesia: {
    name: "Indonesia",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=500&h=400&fit=crop",
    ],
    description: "Indonesia, the world's largest archipelago with over 17,000 islands, offers a breathtaking diversity of cultures, landscapes, and experiences from Bali's rice terraces to Komodo dragons.",
    overview: "Explore the spiritual heart of Bali, discover ancient temples, surf world-class waves, trek active volcanoes, and encounter unique wildlife. Indonesia's incredible diversity makes every visit a new adventure.",
    highlights: [
      "Bali Rice Terraces - UNESCO-listed Tegalalang terraced paddies",
      "Borobudur Temple - World's largest Buddhist monument in Java",
      "Komodo National Park - Home of the legendary Komodo dragon",
      "Mount Bromo - Dramatic active volcano landscape",
      "Raja Ampat - World's top scuba diving destination",
      "Ubud Monkey Forest - Sacred forest sanctuary in Bali",
    ],
    bestTime: "April to October",
    temperature: "25°C - 33°C",
    currency: "Indonesian Rupiah (IDR)",
    language: "Bahasa Indonesia",
    visaRequirement: "Visa on arrival available",
    duration: "7-14 days",
    rating: 4.7,
    reviews: 789,
    price: "From ৳90,000",
    activities: [
      { name: "Surfing", icon: "🏄" },
      { name: "Volcano Trekking", icon: "🌋" },
      { name: "Scuba Diving", icon: "🤿" },
      { name: "Temple Tours", icon: "🛕" },
      { name: "Rice Terrace Walks", icon: "🌾" },
      { name: "Cooking Classes", icon: "🍽️" },
    ],
    accommodation: [
      { name: "Luxury Villas", price: "৳15,000-40,000/night" },
      { name: "Mid-range Hotels", price: "৳5,000-15,000/night" },
      { name: "Budget Guesthouses", price: "৳1,000-5,000/night" },
    ],
    tours: [
      { id: 1, name: "Bali Cultural Escape", days: "6 Days", price: "৳90,000" },
      { id: 2, name: "Java & Bali Combo", days: "9 Days", price: "৳1,20,000" },
      { id: 3, name: "Komodo Island Adventure", days: "5 Days", price: "৳85,000" },
      { id: 4, name: "Full Indonesia Experience", days: "14 Days", price: "৳1,80,000" },
    ],
  },
  malaysia: {
    name: "Malaysia",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=500&h=400&fit=crop",
    ],
    description: "Malaysia blends modern city life with ancient rainforests and pristine beaches. From the iconic Petronas Towers of Kuala Lumpur to the wildlife-rich Borneo, it's a country of contrasts.",
    overview: "Experience Malaysia's incredible diversity — multicultural cities, UNESCO rainforests, stunning islands, and world-class street food. Malaysia truly has something for every traveller.",
    highlights: [
      "Petronas Twin Towers - Iconic skyline landmark in Kuala Lumpur",
      "Batu Caves - Hindu temple complex in limestone caves",
      "Langkawi Island - Duty-free island with stunning beaches",
      "Borneo Rainforest - Home to orangutans and proboscis monkeys",
      "George Town - UNESCO Heritage city in Penang",
      "Cameron Highlands - Cool hill station with tea plantations",
    ],
    bestTime: "May to September",
    temperature: "24°C - 35°C",
    currency: "Malaysian Ringgit (RM)",
    language: "Bahasa Malaysia",
    visaRequirement: "Visa-free for many nationalities",
    duration: "5-10 days",
    rating: 4.6,
    reviews: 534,
    price: "From ৳75,000",
    activities: [
      { name: "City Tours", icon: "🏙️" },
      { name: "Island Hopping", icon: "🏝️" },
      { name: "Rainforest Trek", icon: "🌿" },
      { name: "Street Food Tour", icon: "🍜" },
      { name: "Wildlife Watching", icon: "🦧" },
      { name: "Scuba Diving", icon: "🤿" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳10,000-25,000/night" },
      { name: "Mid-range Hotels", price: "৳4,000-10,000/night" },
      { name: "Budget Hotels", price: "৳1,200-4,000/night" },
    ],
    tours: [
      { id: 1, name: "Kuala Lumpur City Tour", days: "3 Days", price: "৳35,000" },
      { id: 2, name: "Langkawi Beach Escape", days: "5 Days", price: "৳65,000" },
      { id: 3, name: "Borneo Wildlife Adventure", days: "6 Days", price: "৳85,000" },
      { id: 4, name: "Malaysia Explorer", days: "9 Days", price: "৳1,10,000" },
    ],
  },
  bhutan: {
    name: "Bhutan",
    region: "South Asia",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1598193958175-e7b7e014c4e5?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1562602834-b676e7a7571c?w=500&h=400&fit=crop",
    ],
    description: "Bhutan, the Land of the Thunder Dragon, measures its success by Gross National Happiness. This pristine Himalayan kingdom offers untouched monasteries, dramatic landscapes, and a unique Buddhist culture.",
    overview: "Bhutan offers an extraordinary travel experience unlike anywhere else on earth. With strict sustainable tourism policies, limited visitor numbers, and a culture deeply rooted in Buddhism, it remains one of the world's most unique destinations.",
    highlights: [
      "Tiger's Nest Monastery - Iconic cliffside monastery at 3,120m",
      "Thimphu - Capital city with dzongs and traditional markets",
      "Punakha Dzong - Most beautiful fortress monastery in Bhutan",
      "Dochula Pass - Mountain pass with 108 chortens",
      "Haa Valley - Remote valley with pristine forests",
      "Archery Festivals - Traditional national sport events",
    ],
    bestTime: "March to May, September to November",
    temperature: "5°C - 25°C",
    currency: "Bhutanese Ngultrum (BTN)",
    language: "Dzongkha",
    visaRequirement: "Visa required, must book through licensed tour operator",
    duration: "5-10 days",
    rating: 4.9,
    reviews: 212,
    price: "From ৳1,10,000",
    activities: [
      { name: "Monastery Visits", icon: "🛕" },
      { name: "Trekking", icon: "🥾" },
      { name: "Cultural Festivals", icon: "🎭" },
      { name: "Meditation", icon: "🧘" },
      { name: "Archery", icon: "🏹" },
      { name: "Bird Watching", icon: "🦅" },
    ],
    accommodation: [
      { name: "Luxury Lodges", price: "৳25,000-50,000/night" },
      { name: "Mid-range Hotels", price: "৳10,000-25,000/night" },
      { name: "Guesthouses", price: "৳4,000-10,000/night" },
    ],
    tours: [
      { id: 1, name: "Tiger's Nest & Thimphu Tour", days: "5 Days", price: "৳1,10,000" },
      { id: 2, name: "Bhutan Cultural Discovery", days: "7 Days", price: "৳1,40,000" },
      { id: 3, name: "Bhutan Trek & Culture", days: "10 Days", price: "৳1,80,000" },
      { id: 4, name: "Bhutan Festival Tour", days: "8 Days", price: "৳1,60,000" },
    ],
  },
  vietnam: {
    name: "Vietnam",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1570366583862-f91883984fde?w=500&h=400&fit=crop",
    ],
    description: "Vietnam stretches along the eastern coast of Southeast Asia, offering a dazzling range of landscapes — from the limestone karsts of Ha Long Bay to the ancient town of Hoi An.",
    overview: "Vietnam captivates with its centuries of history, stunning natural landscapes, and incredible cuisine. Travel from the bustling streets of Hanoi through ancient imperial cities to the tropical beaches of the south.",
    highlights: [
      "Ha Long Bay - UNESCO-listed emerald waters and limestone karsts",
      "Hoi An Ancient Town - Lantern-lit UNESCO Heritage town",
      "Hue Imperial City - Ancient capital of Vietnam",
      "Ho Chi Minh City - Dynamic southern metropolis",
      "Sapa Rice Terraces - Spectacular hillside terraced fields",
      "Mekong Delta - Life on the river with floating markets",
    ],
    bestTime: "March to April, August to October",
    temperature: "20°C - 35°C",
    currency: "Vietnamese Dong (₫)",
    language: "Vietnamese",
    visaRequirement: "e-Visa available online",
    duration: "7-14 days",
    rating: 4.7,
    reviews: 643,
    price: "From ৳70,000",
    activities: [
      { name: "Ha Long Bay Cruise", icon: "⛵" },
      { name: "Street Food Tour", icon: "🍜" },
      { name: "Cycling", icon: "🚴" },
      { name: "Cooking Classes", icon: "🍽️" },
      { name: "Motorbike Tours", icon: "🏍️" },
      { name: "Kayaking", icon: "🛶" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳8,000-20,000/night" },
      { name: "Mid-range Hotels", price: "৳3,000-8,000/night" },
      { name: "Budget Guesthouses", price: "৳800-3,000/night" },
    ],
    tours: [
      { id: 1, name: "Ha Long Bay Cruise", days: "3 Days", price: "৳40,000" },
      { id: 2, name: "Hoi An & Hue Heritage", days: "5 Days", price: "৳60,000" },
      { id: 3, name: "North to South Vietnam", days: "12 Days", price: "৳1,20,000" },
      { id: 4, name: "Vietnam Highlights Tour", days: "8 Days", price: "৳85,000" },
    ],
  },
  dubai: {
    name: "Dubai",
    region: "Middle East",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1546412414-e1885259563a?w=500&h=400&fit=crop",
    ],
    description: "Dubai, the City of Gold, is a dazzling metropolis of futuristic architecture, world-record attractions, luxury shopping, and golden desert landscapes.",
    overview: "Dubai offers an extraordinary blend of modern marvels and traditional culture. From the world's tallest building to ancient souks, from desert safaris to indoor ski slopes, Dubai redefines the limits of what a city can be.",
    highlights: [
      "Burj Khalifa - World's tallest building at 828 meters",
      "Palm Jumeirah - Iconic man-made island visible from space",
      "Dubai Mall - One of the world's largest shopping centres",
      "Desert Safari - Dune bashing and traditional Bedouin camp",
      "Dubai Creek - Old trading heart with gold and spice souks",
      "Burj Al Arab - World's most luxurious hotel",
    ],
    bestTime: "November to April",
    temperature: "15°C - 35°C",
    currency: "UAE Dirham (AED)",
    language: "Arabic / English",
    visaRequirement: "Visa on arrival for many nationalities",
    duration: "4-7 days",
    rating: 4.8,
    reviews: 987,
    price: "From ৳1,20,000",
    activities: [
      { name: "Desert Safari", icon: "🏜️" },
      { name: "Sky Diving", icon: "🪂" },
      { name: "Luxury Shopping", icon: "🛍️" },
      { name: "Dhow Cruise", icon: "⛵" },
      { name: "Indoor Skiing", icon: "⛷️" },
      { name: "Theme Parks", icon: "🎢" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳25,000-80,000/night" },
      { name: "Mid-range Hotels", price: "৳10,000-25,000/night" },
      { name: "Budget Hotels", price: "৳4,000-10,000/night" },
    ],
    tours: [
      { id: 1, name: "Dubai City Explorer", days: "4 Days", price: "৳1,20,000" },
      { id: 2, name: "Dubai Luxury Package", days: "5 Days", price: "৳1,65,000" },
      { id: 3, name: "Desert & City Adventure", days: "6 Days", price: "৳1,80,000" },
      { id: 4, name: "Dubai & Abu Dhabi Combo", days: "7 Days", price: "৳2,10,000" },
    ],
  },
  maldives: {
    name: "Maldives",
    region: "South Asia",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1540202404-d0c7fe46a087?w=500&h=400&fit=crop",
    ],
    description: "The Maldives, a tropical paradise of 1,200 coral islands, is renowned for its overwater bungalows, crystal-clear lagoons, vibrant coral reefs, and unparalleled luxury.",
    overview: "The Maldives is the ultimate island escape — a destination synonymous with luxury, romance, and natural beauty. Dive into world-class reefs, relax in overwater villas, and watch breathtaking sunsets over the Indian Ocean.",
    highlights: [
      "Overwater Bungalows - Stay above the turquoise lagoon",
      "Coral Reefs - Some of the world's finest diving and snorkelling",
      "Whale Shark Encounters - Snorkel with the world's largest fish",
      "Maldivian Cuisine - Fresh seafood and local delicacies",
      "Bioluminescent Beaches - Magical glowing plankton at night",
      "Sunset Dolphin Cruises - Watch spinner dolphins at dusk",
    ],
    bestTime: "November to April",
    temperature: "25°C - 32°C",
    currency: "Maldivian Rufiyaa (MVR) / USD",
    language: "Dhivehi / English",
    visaRequirement: "Free visa on arrival for all nationalities",
    duration: "4-7 days",
    rating: 4.9,
    reviews: 1102,
    price: "From ৳90,000",
    activities: [
      { name: "Snorkelling", icon: "🤿" },
      { name: "Scuba Diving", icon: "🐠" },
      { name: "Sunset Cruises", icon: "🌅" },
      { name: "Water Sports", icon: "🏄" },
      { name: "Spa & Wellness", icon: "💆" },
      { name: "Island Hopping", icon: "🏝️" },
    ],
    accommodation: [
      { name: "Luxury Resorts", price: "৳30,000-1,00,000/night" },
      { name: "Mid-range Resorts", price: "৳15,000-30,000/night" },
      { name: "Local Guesthouses", price: "৳5,000-15,000/night" },
    ],
    tours: [
      { id: 1, name: "Maldives Honeymoon Package", days: "5 Days", price: "৳1,40,000" },
      { id: 2, name: "Family Beach Escape", days: "4 Days", price: "৳95,000" },
      { id: 3, name: "Dive & Snorkel Package", days: "6 Days", price: "৳1,20,000" },
      { id: 4, name: "Luxury Overwater Villa", days: "5 Days", price: "৳2,00,000" },
    ],
  },
  singapore: {
    name: "Singapore",
    region: "Southeast Asia",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&h=600&fit=crop",
    galleryImages: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=500&h=400&fit=crop",
      "https://images.unsplash.com/photo-1513697351572-c38a8d3e3c77?w=500&h=400&fit=crop",
    ],
    description: "Singapore, the Lion City, is a gleaming city-state that effortlessly blends futuristic architecture, multicultural heritage, world-class food, and lush green spaces.",
    overview: "Singapore packs an enormous amount into a small space — iconic skylines, hawker food culture, colonial heritage, cutting-edge attractions, and some of the world's best shopping. It's a destination that surprises and delights at every turn.",
    highlights: [
      "Marina Bay Sands - Iconic rooftop infinity pool skyline",
      "Gardens by the Bay - Futuristic Supertrees and Cloud Forest",
      "Sentosa Island - Theme parks and beach resort",
      "Hawker Centres - UNESCO-listed street food culture",
      "Chinatown & Little India - Vibrant cultural enclaves",
      "Universal Studios - World-class theme park experience",
    ],
    bestTime: "February to April",
    temperature: "25°C - 32°C",
    currency: "Singapore Dollar (SGD)",
    language: "English / Mandarin / Malay / Tamil",
    visaRequirement: "Visa-free for many nationalities",
    duration: "4-7 days",
    rating: 4.8,
    reviews: 876,
    price: "From ৳1,00,000",
    activities: [
      { name: "Theme Parks", icon: "🎢" },
      { name: "Street Food", icon: "🍜" },
      { name: "Night Safari", icon: "🦁" },
      { name: "Shopping", icon: "🛍️" },
      { name: "Cultural Tours", icon: "🏛️" },
      { name: "Gardens Walks", icon: "🌿" },
    ],
    accommodation: [
      { name: "Luxury Hotels", price: "৳18,000-50,000/night" },
      { name: "Mid-range Hotels", price: "৳8,000-18,000/night" },
      { name: "Budget Hotels", price: "৳3,000-8,000/night" },
    ],
    tours: [
      { id: 1, name: "Singapore City Highlights", days: "4 Days", price: "৳1,00,000" },
      { id: 2, name: "Singapore Family Fun", days: "5 Days", price: "৳1,20,000" },
      { id: 3, name: "Singapore & Malaysia Combo", days: "7 Days", price: "৳1,50,000" },
      { id: 4, name: "Singapore Luxury Experience", days: "5 Days", price: "৳1,80,000" },
    ],
  },
};

function InfoItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      {icon}
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-semibold text-gray-900">{value}</p>
      </div>
    </div>
  );
}

export default function DestinationDetail() {
  const { slug } = useParams();
  const destination = allDestinations[slug] || allDestinations.bangladesh;

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <div className="relative h-[500px] flex items-center justify-center overflow-hidden rounded-b-3xl">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transform scale-100 hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent backdrop-blur-sm" />
        <div className="absolute z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
            {destination.name}
          </h1>
          <p className="text-xl md:text-2xl mb-6 drop-shadow-lg">
            {destination.description.substring(0, 120)}...
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Star size={20} className="text-yellow-400" />
              <span>{destination.rating} ({destination.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <Calendar size={20} />
              <span>{destination.bestTime}</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-sky-500/60 to-blue-600/60 rounded-full shadow-lg backdrop-blur-sm hover:scale-105 transition-transform duration-300">
              <DollarSign size={20} />
              <span>{destination.price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
        <Link to="/" className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full hover:scale-105 transition-transform">Home</Link>
        <span>→</span>
        <Link to="/destinations" className="px-3 py-1 bg-sky-100 text-sky-600 rounded-full hover:scale-105 transition-transform">Destinations</Link>
        <span>→</span>
        <span className="text-gray-600">{destination.name}</span>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">

        {/* Left */}
        <div className="lg:col-span-2 space-y-8">

          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-4 text-sky-600">Overview</h2>
            <p className="text-gray-700 leading-relaxed text-lg">{destination.overview}</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
              {destination.galleryImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-2xl shadow-lg hover:scale-105 hover:rotate-1 transition-transform duration-500 border-2 border-sky-100"
                />
              ))}
            </div>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Top Highlights</h2>
            <ul className="space-y-4">
              {destination.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-4 group">
                  <span className="text-white font-bold flex-shrink-0 w-10 h-10 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 pt-1 group-hover:text-sky-600 transition-colors duration-300">{highlight}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold mb-6 text-sky-600">Activities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {destination.activities.map((activity, idx) => (
                <div key={idx} className="bg-white/30 backdrop-blur-md rounded-xl p-4 text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-sky-200">
                  <div className="text-4xl mb-2">{activity.icon}</div>
                  <p className="text-gray-800 font-semibold">{activity.name}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <div className="bg-white/30 backdrop-blur-md rounded-3xl shadow-lg p-6 border border-sky-200 hover:shadow-2xl transition-shadow duration-300 sticky top-20">
            <h3 className="text-2xl font-bold mb-6 text-sky-600">Quick Info</h3>
            <div className="space-y-4">
              <InfoItem icon={<MapPin className="text-sky-500 mt-1" size={20} />} label="Region" value={destination.region} />
              <InfoItem icon={<Calendar className="text-sky-500 mt-1" size={20} />} label="Best Time" value={destination.bestTime} />
              <InfoItem icon={<Clock className="text-sky-500 mt-1" size={20} />} label="Duration" value={destination.duration} />
              <InfoItem icon={<Users className="text-sky-500 mt-1" size={20} />} label="Language" value={destination.language} />
              <InfoItem icon={<DollarSign className="text-sky-500 mt-1" size={20} />} label="Currency" value={destination.currency} />
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-2">Visa Requirement</p>
              <p className="font-semibold text-gray-900 text-sm">{destination.visaRequirement}</p>
            </div>
            <a
              href="tel:+8801317525225"
              className="w-full mt-6 py-3 rounded-xl font-bold text-white flex items-center justify-center gap-2
                bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all duration-500"
            >
              <Phone size={16} /> Call to Book
            </a>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-sky-200 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-bold mb-4 text-sky-600">Accommodation</h3>
            <div className="space-y-3">
              {destination.accommodation.map((acc, idx) => (
                <div key={idx} className="flex justify-between items-center pb-3 border-b border-gray-200 last:border-b-0">
                  <p className="font-semibold text-gray-900 text-sm">{acc.name}</p>
                  <p className="text-sky-600 font-bold text-sm">{acc.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tours */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-sky-600">Available Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destination.tours.map((tour) => (
            <div key={tour.id} className="bg-white/30 backdrop-blur-md p-6 rounded-3xl border border-sky-200 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
              <h3 className="font-bold text-gray-900 mb-4 text-sm line-clamp-2">{tour.name}</h3>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Calendar size={16} className="text-sky-500" />
                  <span>{tour.days}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <DollarSign size={16} className="text-sky-500" />
                  <span className="font-bold text-sky-600">{tour.price}</span>
                </div>
              </div>
              <a
                href="tel:+8801317525225"
                className="w-full py-2 rounded-lg font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 transition-all duration-500 text-sm flex items-center justify-center gap-1.5"
              >
                <Phone size={13} /> Call Now
              </a>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}