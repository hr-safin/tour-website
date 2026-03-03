import { useState } from "react";
import { MapPin, Plane, Building2, FileText } from "lucide-react";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("tour");

  return (
    <div className="relative -mt-20 z-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex gap-2 mb-0 flex-wrap">
          <button
            onClick={() => setActiveTab("tour")}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-t-2xl ${
              activeTab === "tour"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <MapPin size={20} />
            <span className="text-sm md:text-base">Tour</span>
          </button>
          <button
            onClick={() => setActiveTab("flight")}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-t-2xl ${
              activeTab === "flight"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <Plane size={20} />
            <span className="text-sm md:text-base">Flight</span>
          </button>
          <button
            onClick={() => setActiveTab("hotel")}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-t-2xl ${
              activeTab === "hotel"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <Building2 size={20} />
            <span className="text-sm md:text-base">Hotel</span>
          </button>
          <button
            onClick={() => setActiveTab("visa")}
            className={`flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold transition-all rounded-t-2xl ${
              activeTab === "visa"
                ? "bg-primary text-white shadow-lg"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <FileText size={20} />
            <span className="text-sm md:text-base">Visa</span>
          </button>
        </div>

        {/* Search Form */}
        {activeTab === "tour" && (
          <div className="bg-gradient-to-br from-primary/10 to-yellow-50 rounded-b-3xl rounded-tr-3xl shadow-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-end">
              {/* Destination Select */}
              <div className="md:col-span-5 flex flex-col">
                <label className="text-gray-700 text-xs md:text-sm font-semibold mb-2 md:mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Destination
                </label>
                <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-0 focus:ring-2 focus:ring-primary focus:outline-none text-gray-700 bg-white shadow-md font-medium text-sm md:text-base">
                  <option value="">Select Destination</option>
                  <option value="switzerland">Switzerland</option>
                  <option value="paris">Paris, France</option>
                  <option value="tokyo">Tokyo, Japan</option>
                  <option value="bali">Bali, Indonesia</option>
                  <option value="dubai">Dubai, UAE</option>
                  <option value="maldives">Maldives</option>
                </select>
              </div>

              {/* Tour Type Select */}
              <div className="md:col-span-5 flex flex-col">
                <label className="text-gray-700 text-xs md:text-sm font-semibold mb-2 md:mb-3 flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                  Tour Type
                </label>
                <select className="w-full px-4 md:px-5 py-3 md:py-4 rounded-xl border-0 focus:ring-2 focus:ring-primary focus:outline-none text-gray-700 bg-white shadow-md font-medium text-sm md:text-base">
                  <option value="">Select Tour Type</option>
                  <option value="adventure">Adventure Tour</option>
                  <option value="cultural">Cultural Tour</option>
                  <option value="honeymoon">Honeymoon Package</option>
                  <option value="family">Family Tour</option>
                  <option value="luxury">Luxury Tour</option>
                  <option value="budget">Budget Tour</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="md:col-span-2">
                <button className="w-full bg-primary hover:bg-primary text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Search
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Other Tab Placeholders */}
        {activeTab !== "tour" && (
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-b-3xl rounded-tr-3xl shadow-2xl p-6 md:p-8 text-center">
            <p className="text-gray-700 font-semibold text-sm md:text-base">
              Coming Soon -{" "}
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Booking
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
