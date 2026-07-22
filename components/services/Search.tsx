"use client";

import { motion } from "framer-motion";
import { Search as SearchIcon, X, Tag, SlidersHorizontal, Sparkles } from "lucide-react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  totalResults: number;
}

const QUICK_SEARCH_CHIPS = [
  "Mercedes Clock Spring",
  "ABS Module",
  "Instrument Cluster",
  "Part No: 1K0907379AD",
  "Fault: Airbag Light",
  "BMW Coding",
];

export default function Search({ searchQuery, setSearchQuery, totalResults }: SearchProps) {
  return (
    <div id="search-services" className="w-full max-w-4xl mx-auto mb-10 px-4">
      {/* Search Input Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative group"
      >
        {/* Glow border backdrop */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary-red/30 via-neutral-700/30 to-primary-red/30 opacity-70 group-hover:opacity-100 group-focus-within:opacity-100 blur-sm transition duration-500" />

        <div className="relative flex items-center glass bg-[#141414]/90 border border-white/10 rounded-2xl p-2 sm:p-3 shadow-2xl transition-all">
          <div className="flex items-center justify-center pl-3 pr-2 text-primary-red">
            <SearchIcon className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by Vehicle Brand, Service, Part Number, Fault, or Keyword..."
            className="w-full bg-transparent border-none text-white placeholder-neutral-500 focus:outline-none focus:ring-0 text-sm sm:text-base font-body px-2 py-1.5"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-1.5 text-neutral-400 hover:text-white rounded-full hover:bg-white/10 transition-colors mr-1"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          {/* Results Badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-surface border border-white/10 text-xs font-heading font-semibold text-neutral-300 whitespace-nowrap">
            <SlidersHorizontal className="w-3.5 h-3.5 text-primary-red" />
            <span>{totalResults} {totalResults === 1 ? "Repair" : "Repairs"}</span>
          </div>
        </div>
      </motion.div>

      {/* Quick Search Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 flex items-center flex-wrap gap-2 text-xs font-body justify-center"
      >
        <span className="text-muted-text flex items-center gap-1 font-heading font-medium uppercase tracking-wider text-[11px] mr-1">
          <Sparkles className="w-3 h-3 text-primary-red" /> Quick Search:
        </span>
        {QUICK_SEARCH_CHIPS.map((chip, idx) => {
          const chipSearchText = chip.startsWith("Part No: ")
            ? chip.replace("Part No: ", "")
            : chip.startsWith("Fault: ")
            ? chip.replace("Fault: ", "")
            : chip;

          const isActive = searchQuery.toLowerCase() === chipSearchText.toLowerCase();

          return (
            <button
              key={idx}
              onClick={() => setSearchQuery(isActive ? "" : chipSearchText)}
              className={`px-3 py-1 rounded-full border text-[11px] font-medium transition-all duration-300 ${
                isActive
                  ? "bg-primary-red border-primary-red text-white shadow-[0_0_12px_rgba(255,45,45,0.4)]"
                  : "bg-surface/50 border-white/10 text-neutral-400 hover:text-white hover:border-primary-red/40 hover:bg-surface"
              }`}
            >
              {chip}
            </button>
          );
        })}
      </motion.div>
    </div>
  );
}
