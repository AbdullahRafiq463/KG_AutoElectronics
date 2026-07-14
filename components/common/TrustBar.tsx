"use client";

import { motion } from "framer-motion";

const brands = [
  "Audi",
  "BMW",
  "Mercedes-Benz",
  "Porsche",
  "Volkswagen",
  "Land Rover",
  "Jaguar",
  "Volvo",
  "Ford",
  "Mini",
  "Skoda",
  "Seat",
];

export default function TrustBar() {
  return (
    <section className="bg-[#141414] py-8 border-y border-white/5 overflow-hidden relative w-full select-none">
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#141414] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#141414] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <span className="font-heading text-[10px] font-bold text-muted-text uppercase tracking-widest">
          Prestige Brands We Engineer & Recode
        </span>
      </div>

      <div className="flex overflow-hidden">
        {/* Infinite Scrolling Track */}
        <div className="animate-marquee flex gap-12 sm:gap-20 items-center">
          {/* First iteration */}
          {brands.map((brand, idx) => (
            <span
              key={`b1-${idx}`}
              className="font-heading text-lg sm:text-2xl font-black uppercase text-neutral-600 hover:text-white transition-colors duration-300 tracking-tight shrink-0"
            >
              {brand}
            </span>
          ))}
          {/* Second iteration (for seamless looping) */}
          {brands.map((brand, idx) => (
            <span
              key={`b2-${idx}`}
              className="font-heading text-lg sm:text-2xl font-black uppercase text-neutral-600 hover:text-white transition-colors duration-300 tracking-tight shrink-0"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
