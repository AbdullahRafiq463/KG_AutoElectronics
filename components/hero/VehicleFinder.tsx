"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, MessageSquare, Car, Wrench } from "lucide-react";
import { ALL_VEHICLE_BRANDS, HERO_SERVICE_CATEGORIES } from "@/src/data/services";

export default function VehicleFinder() {
  const router = useRouter();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedService === "Other") {
      const vehicleText = selectedBrand ? `my ${selectedBrand}` : "my vehicle";
      const message = encodeURIComponent(
        `Hi KG Auto Electronics, I need help diagnosing an auto electronics fault with ${vehicleText}.`
      );
      window.open(`https://wa.me/447305330916?text=${message}`, "_blank");
      return;
    }

    const params = new URLSearchParams();
    if (selectedBrand) {
      // Map brand to match services filter keywords (e.g. "Mercedes-Benz" -> "Mercedes", "Volkswagen" -> "VW")
      let brandQuery = selectedBrand;
      if (selectedBrand === "Mercedes-Benz") brandQuery = "Mercedes";
      if (selectedBrand === "Volkswagen") brandQuery = "VW";
      params.set("brand", brandQuery);
    }
    if (selectedService) {
      params.set("category", selectedService);
    }

    const queryString = params.toString();
    router.push(`/services${queryString ? `?${queryString}` : ""}`);
  };

  const whatsappDefaultUrl = `https://wa.me/447305330916?text=${encodeURIComponent(
    "Hi KG Auto Electronics, I need help diagnosing an electronics fault with my vehicle."
  )}`;

  return (
    <div className="w-full mt-6 sm:mt-8">
      {/* Box Container */}
      <div className="bg-[#121212]/95 border border-white/10 rounded-xl p-4 sm:p-5 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-primary-red" />
          <h3 className="font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-200">
            Find the Right Repair for Your Vehicle
          </h3>
        </div>

        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3">
          {/* Brand Dropdown */}
          <div className="relative flex-1">
            <label htmlFor="hero-brand-select" className="sr-only">
              Select Car Brand
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Car className="w-4 h-4" />
            </div>
            <select
              id="hero-brand-select"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full pl-9 pr-8 py-3 bg-[#1c1c1c] border border-white/10 rounded-lg text-xs sm:text-sm font-medium text-white appearance-none cursor-pointer focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all"
            >
              <option value="" className="bg-[#181818] text-neutral-400">
                Select Car Brand...
              </option>
              {ALL_VEHICLE_BRANDS.map((brand) => (
                <option key={brand} value={brand} className="bg-[#181818] text-white">
                  {brand}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
              ▼
            </div>
          </div>

          {/* Service / Fault Dropdown */}
          <div className="relative flex-1">
            <label htmlFor="hero-service-select" className="sr-only">
              Select Service or Fault
            </label>
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
              <Wrench className="w-4 h-4" />
            </div>
            <select
              id="hero-service-select"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              className="w-full pl-9 pr-8 py-3 bg-[#1c1c1c] border border-white/10 rounded-lg text-xs sm:text-sm font-medium text-white appearance-none cursor-pointer focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-all"
            >
              <option value="" className="bg-[#181818] text-neutral-400">
                Select Service / Fault...
              </option>
              {HERO_SERVICE_CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value} className="bg-[#181818] text-white">
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-neutral-400 text-xs">
              ▼
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-primary-red hover:bg-[#e02424] text-white font-heading text-xs sm:text-sm font-bold uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-primary-red/20 shrink-0 cursor-pointer"
          >
            <span>Find My Repair</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* WhatsApp Symptoms Link */}
        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between flex-wrap gap-2 text-[11px] sm:text-xs">
          <span className="text-neutral-400">Not sure what’s wrong?</span>
          <a
            href={whatsappDefaultUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-primary-red hover:text-white font-medium transition-colors group"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp us your symptoms →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
