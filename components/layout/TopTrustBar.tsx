"use client";

import { Star, ShieldCheck, Phone, MapPin, ExternalLink } from "lucide-react";

export default function TopTrustBar() {
  return (
    <div className="w-full bg-black border-b border-white/[0.06] text-[10px] sm:text-[11px] text-neutral-300 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-7 sm:h-[30px] flex items-center justify-between overflow-x-auto no-scrollbar whitespace-nowrap">
        {/* Left / Center: High Trust Credentials */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
          {/* eBay Rating */}
          <a
            href="https://www.ebay.co.uk/usr/kgautoelectronics"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
            title="View 100% Positive Feedback on eBay Store"
          >
            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
            <span className="font-medium text-white tracking-tight">100% Positive eBay Feedback</span>
            <ExternalLink className="w-2.5 h-2.5 text-neutral-500 group-hover:text-neutral-300 opacity-60 hidden sm:inline" />
          </a>

          {/* Separator */}
          <span className="h-2.5 w-px bg-white/10 shrink-0" aria-hidden="true" />

          {/* Google Star Rating */}
          <div className="flex items-center gap-1.5">
            <div className="flex items-center text-amber-400">
              <Star className="w-3 h-3 fill-current" />
            </div>
            <span className="font-semibold text-white">155+</span>
            <span className="text-neutral-400">5-Star Google Reviews</span>
          </div>
        </div>

        {/* Right: Direct Location */}
        <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 ml-4">
          {/* Workshop Location */}
          <a
            href="https://maps.google.com/?q=18+Halliwell+Avenue+Oldham+OL8+3DL"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 hover:text-white transition-colors duration-200 group"
            title="18 Halliwell Avenue, Oldham OL8 3DL"
          >
            <MapPin className="w-3 h-3 text-primary-red shrink-0" />
            <span className="text-neutral-400">Oldham Lab:</span>
            <span className="font-medium text-neutral-200 group-hover:text-white transition-colors truncate max-w-[190px]">
              18 Halliwell Ave, OL8 3DL
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
