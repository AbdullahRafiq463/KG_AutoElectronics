"use client";

import { motion } from "framer-motion";
import {
  Wrench,
  Compass,
  Disc,
  Gauge,
  LayoutDashboard,
  Cpu,
  Lightbulb,
  Zap,
  Activity,
  Code2,
  ShieldAlert,
} from "lucide-react";
import { CATEGORIES_LIST } from "@/src/data/services";

interface CategoryFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categoryCounts?: Record<string, number>;
}

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  All: Wrench,
  "Clock Spring": Compass,
  "ABS Module": Disc,
  "Instrument Cluster": Gauge,
  Dashboard: LayoutDashboard,
  ECU: Cpu,
  "LED Tail Light": Lightbulb,
  Headlights: Zap,
  Diagnostics: Activity,
  Coding: Code2,
  Airbag: ShieldAlert,
};

export default function CategoryFilters({
  selectedCategory,
  setSelectedCategory,
  categoryCounts = {},
}: CategoryFiltersProps) {
  return (
    <div className="w-full max-w-7xl mx-auto mb-10 px-4">
      <div className="flex items-center gap-2 mb-3">
        <Wrench className="w-4 h-4 text-primary-red" />
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-neutral-300">
          Filter By Electronics Component Category
        </span>
      </div>

      {/* Horizontally scrollable pill container */}
      <div className="flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar scroll-smooth">
        {CATEGORIES_LIST.map((category) => {
          const isActive = selectedCategory.toLowerCase() === category.toLowerCase();
          const IconComponent = CATEGORY_ICONS[category] || Wrench;
          const count = categoryCounts[category] ?? 0;

          return (
            <motion.button
              key={category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategory(category)}
              className={`relative px-4 py-2 rounded-xl text-xs font-heading font-semibold tracking-wide whitespace-nowrap transition-all duration-300 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-primary-red to-[#D90429] text-white border-primary-red shadow-[0_0_20px_rgba(255,45,45,0.35)] z-10"
                  : "bg-[#141414] text-neutral-300 border-white/10 hover:border-primary-red/40 hover:bg-surface hover:text-white"
              }`}
            >
              <IconComponent
                className={`w-3.5 h-3.5 ${
                  isActive ? "text-white" : "text-primary-red"
                }`}
              />
              <span>{category}</span>
              {category !== "All" && count > 0 && (
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
