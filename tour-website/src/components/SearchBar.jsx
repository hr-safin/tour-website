import { useState } from "react";
import { MapPin, Plane, Building2, FileText } from "lucide-react";

export default function SearchBar() {
  const [activeTab, setActiveTab] = useState("tour");

  const tabs = [
    { id: "tour", label: "Tour", icon: MapPin },
    { id: "flight", label: "Flight", icon: Plane },
    { id: "hotel", label: "Hotel", icon: Building2 },
    { id: "visa", label: "Visa", icon: FileText },
  ];

  return (
    <div className="relative -mt-24 flex justify-center px-4 z-20">
      <div className="w-full max-w-5xl bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-6">
        {/* Tabs centered */}
        <div className="flex justify-center gap-3 mb-6 flex-wrap">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Form */}
        {activeTab === "tour" && (
          <div className="grid md:grid-cols-3 gap-4">
            <select className="input-style">
              <option>Destination</option>
              <option>Switzerland</option>
              <option>Paris</option>
              <option>Dubai</option>
            </select>

            <select className="input-style">
              <option>Tour Type</option>
              <option>Adventure</option>
              <option>Family</option>
              <option>Luxury</option>
            </select>

            <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition">
              Search
            </button>
          </div>
        )}

        {activeTab !== "tour" && (
          <p className="text-center text-gray-500 py-6">
            {activeTab.toUpperCase()} booking coming soon
          </p>
        )}
      </div>

      <style>{`
        .input-style {
          @apply px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none;
        }
      `}</style>
    </div>
  );
}