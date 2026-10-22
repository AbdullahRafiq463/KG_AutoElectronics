"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MessageCircle, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  id: string;
  title: string;
  vehicle: string;
  category: "Steering & Slip Rings" | "LED Tail Lights" | "Instrument Speedos" | "Diagnostics & ECUs";
  image: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "audi-a6-szl",
    title: "Steering Angle Sensor Rebuild",
    vehicle: "Audi A6 (C7) / A7 Sportback",
    category: "Steering & Slip Rings",
    image: "/images/gallery/6.jpg",
    description: "Replaced flat flex ribbon cassette and recalibrated optical steering angle encoder to 0.0° tolerance on our simulator bench.",
  },
  {
    id: "porsche-gt3-diagnostic",
    title: "SRS Airbag & Gateway Diagnostics",
    vehicle: "Porsche 911 GT3 (991)",
    category: "Diagnostics & ECUs",
    image: "/images/gallery/1.jpg",
    description: "Cleared permanent EEPROM deployment crash locks following a low-voltage jump start while preserving original factory coding.",
  },
  {
    id: "mercedes-w212-taillight",
    title: "LED Tail Lamp Driver Rebuild",
    vehicle: "Mercedes-Benz E-Class (W212)",
    category: "LED Tail Lights",
    image: "/images/gallery/2.jpg",
    description: "Micro-soldered replacement ballast resistors and power MOSFET driver array with high-temp conformal silicone moisture seal.",
  },
  {
    id: "vito-w447-speedo",
    title: "Digital Instrument Cluster Rebuild",
    vehicle: "Mercedes-Benz Vito (W447) / V-Class",
    category: "Instrument Speedos",
    image: "/images/gallery/3.webp",
    description: "Rebuilt DC-DC display power rails, reflowed BGA graphic processor contacts, and replaced faulty speedometer stepper motor.",
  },
  {
    id: "bmw-f10-szl",
    title: "F10 Steering Column Clock Spring",
    vehicle: "BMW 5-Series (F10 / F11)",
    category: "Steering & Slip Rings",
    image: "/images/gallery/5.jpg",
    description: "Replaced fatigued dual 8-core internal ribbons with reinforced OEM-spec conductive cable, restoring horn and steering controls.",
  },
  {
    id: "diagnostics-oscilloscope-lab",
    title: "CAN & LIN Bus Waveform Analysis",
    vehicle: "Oldham Diagnostics Lab Bench",
    category: "Diagnostics & ECUs",
    image: "/images/gallery/4.jpg",
    description: "Dual-channel oscilloscope inspection of CAN-bus packet signals and peak voltages to isolate communication dropouts.",
  },
];

const categories = [
  "All",
  "Steering & Slip Rings",
  "LED Tail Lights",
  "Instrument Speedos",
  "Diagnostics & ECUs",
] as const;

export default function GalleryShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1));
  }, [selectedIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  // Lock background scroll when lightbox is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <div className="w-full bg-[#090909] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Minimalist Page Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-neutral-400 text-[11px] font-mono uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-red" />
            Workshop & Bench Portfolio
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mb-4 leading-tight">
            Our Work
          </h1>
          <p className="font-body text-sm sm:text-base text-neutral-400 leading-relaxed">
            Real repairs documented directly on our Oldham diagnostics bench. Click any project for technical notes.
          </p>
        </div>

        {/* Clean Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === "All"
                ? galleryItems.length
                : galleryItems.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setSelectedIndex(null);
                }}
                className={`px-4 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? "bg-primary-red text-white shadow-[0_0_15px_rgba(255,45,45,0.4)] border border-primary-red"
                    : "bg-[#141414] text-neutral-400 hover:text-white hover:bg-[#1a1a1a] border border-white/5"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isSelected ? "bg-black/30 text-white font-bold" : "bg-white/5 text-neutral-500"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Visual-First Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedIndex(index)}
                className="group flex flex-col bg-[#121212] border border-white/10 hover:border-white/25 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer shadow-lg"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-white">
                      View Case
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>

                  {/* Vehicle Tag Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-white bg-black/75 backdrop-blur-md border border-white/15 px-2.5 py-1 rounded-md">
                      {item.vehicle}
                    </span>
                  </div>
                </div>

                {/* Clean Caption */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-primary-red mb-1.5 block">
                      {item.category}
                    </span>
                    <h2 className="font-heading text-base sm:text-lg font-bold text-white uppercase tracking-tight group-hover:text-primary-red transition-colors">
                      {item.title}
                    </h2>
                  </div>
                  <p className="font-body text-xs text-neutral-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Minimal Bottom Prompt */}
        <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
              Have an electronic fault on your car?
            </h2>
            <p className="font-body text-xs sm:text-sm text-neutral-400 mt-1">
              Send your part number or diagnostic fault code for a direct quote.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://wa.me/447305330916?text=Hi%20KG%20Auto%2C%20I%20have%20an%20electronics%20fault%20on%20my%20vehicle%20and%20would%20like%20a%20repair%20quote."
              target="_blank"
              rel="noreferrer"
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-red hover:bg-[#d90429] text-white font-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/#booking"
              className="flex-1 sm:flex-none flex items-center justify-center px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-heading text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Book Repair
            </Link>
          </div>
        </div>
      </div>

      {/* Senior UX Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close image preview"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Counter */}
            <div className="absolute top-6 left-6 z-20 text-xs font-mono text-neutral-400">
              {selectedIndex! + 1} / {filteredItems.length}
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Container */}
            <motion.div
              key={activeItem.id}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-4xl w-full flex flex-col bg-[#121212] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative"
            >
              {/* Main Photo */}
              <div className="relative aspect-[16/10] sm:aspect-video w-full bg-black">
                <Image
                  src={activeItem.image}
                  alt={activeItem.title}
                  fill
                  priority
                  sizes="(max-width: 1200px) 100vw, 1000px"
                  className="object-contain p-2 sm:p-4"
                />
              </div>

              {/* Minimal Caption Bar */}
              <div className="p-6 bg-[#121212] flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/10">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[11px] font-heading font-bold uppercase tracking-wider text-primary-red">
                      {activeItem.category}
                    </span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-xs font-heading font-semibold text-neutral-300 uppercase">
                      {activeItem.vehicle}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold uppercase text-white tracking-tight">
                    {activeItem.title}
                  </h3>
                  <p className="font-body text-xs text-neutral-400 mt-1 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/447305330916?text=${encodeURIComponent(
                    `Hi KG Auto, I'm inquiring about your ${activeItem.title} (${activeItem.vehicle}) repair.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary-red hover:bg-[#d90429] text-white font-heading text-xs font-bold uppercase tracking-wider transition-colors shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
