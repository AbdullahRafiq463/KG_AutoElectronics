"use client";

import { motion } from "framer-motion";
import { Car } from "lucide-react";
import { BRANDS_LIST } from "@/src/data/services";

interface BrandFiltersProps {
  selectedBrand: string;
  setSelectedBrand: (brand: string) => void;
  brandCounts?: Record<string, number>;
}

export default function BrandFilters({
  selectedBrand,
  setSelectedBrand,
  brandCounts = {},
}: BrandFiltersProps) {
  return (
    <div className="w-full max-w-7xl mx-auto mb-6 px-4">
      <div className="flex items-center gap-2 mb-3">
        <Car className="w-4 h-4 text-primary-red" />
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-300">
          Filter By Vehicle Manufacturer
        </span>
      </div>

      {/* Horizontally scrollable pill container with hidden scrollbar */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
        {BRANDS_LIST.map((brand) => {
          const isActive = selectedBrand.toLowerCase() === brand.toLowerCase();
          const count = brandCounts[brand] ?? 0;

          return (
            <motion.button
              key={brand}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedBrand(brand)}
              className={`relative px-4 py-2 rounded-full text-xs font-heading font-semibold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? "bg-[#FF2D2D] text-white border-[#FF2D2D] shadow-[0_0_20px_rgba(255,45,45,0.4)] z-10"
                  : "bg-surface/80 text-neutral-300 border-white/10 hover:border-primary-red/40 hover:bg-surface hover:text-white"
              }`}
            >
              <span>{brand}</span>
              {brand !== "All" && count > 0 && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-body ${
                    isActive
                      ? "bg-black/30 text-white"
                      : "bg-white/10 text-neutral-400"
                  }`}
                >
                  {count}
                </span>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
