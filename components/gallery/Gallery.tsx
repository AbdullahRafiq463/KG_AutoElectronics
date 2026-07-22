"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, X, ZoomIn, Eye } from "lucide-react";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";

const categories = ["All", "Workshop", "Electronics", "Diagnostics", "Repairs", "Completed Vehicles"];

const galleryItems = [
  {
    title: "Steering Angle Sensor Calibration",
    category: "Diagnostics",
    image: "/images/gallery/6.jpg",
    description: "Re-programming steering angle offsets on an Audi A6 slip ring slip-ring SZL module.",
  },
  {
    title: "Porsche 911 GT3 Electronics Diagnostic",
    category: "Completed Vehicles",
    image: "/images/gallery/1.jpg",
    description: "Successful complete diagnostic sweep and SRS module crash code clearance.",
  },
  {
    title: "Mercedes W212 Taillight Repair",
    category: "Repairs",
    image: "/images/gallery/2.jpg",
    description: "Micro-soldering failed capacitor arrays on an E300 LED rear taillight module.",
  },
  {
    title: "Vito W447 Instrument Speedo Rebuild",
    category: "Electronics",
    image: "/images/gallery/3.webp",
    description: "Rebuilding power supply rails for LCD speedo panel backlight illumination.",
  },
  {
    title: "Prestige Sports Car Service Bay",
    category: "Workshop",
    image: "/images/gallery/4.jpg",
    description: "Clean modern engineering lab setup with high-end logic analyzers.",
  },
  {
    title: "BMW F10 SZL Clock Spring Repair",
    category: "Repairs",
    image: "/images/gallery/5.jpg",
    description: "Restoring ribbon cable connections inside a BMW 5-Series steering slip ring.",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeImage, setActiveImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Gallery"
          title="Inside Our Lab"
          subtitle="Explore visual summaries of our micro-electronics repair runs, diagnostic sweeps, and premium completed vehicles."
        />

        {/* Categories filters */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4.5 py-2 text-xs font-semibold rounded-full uppercase tracking-wider transition-all duration-300 border cursor-pointer ${selectedCategory === category
                ? "bg-[#FF2D2D] border-primary-red text-white shadow-[0_0_15px_rgba(255,45,45,0.3)]"
                : "bg-surface border-white/5 text-muted-text hover:text-white hover:border-neutral-700"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                key={item.title}
                className="group relative rounded-2xl overflow-hidden aspect-square border border-white/5 bg-[#141414] cursor-pointer"
                onClick={() => setActiveImage(item)}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover opacity-70 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Gradient Mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Card Details Overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end items-start z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 px-2 py-0.5 rounded-full mb-3">
                    {item.category}
                  </span>
                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-2">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Zoom Icon indicator */}
                <div className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-xl bg-surface/80 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          >
            {/* Close Button overlay */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/10 hover:border-primary-red hover:text-primary-red text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Wrapper Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#141414] border border-white/5 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full">
                <Image
                  src={activeImage.image}
                  alt={activeImage.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 px-2 py-0.5 rounded-full">
                  {activeImage.category}
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold uppercase tracking-tight text-white mt-3">
                  {activeImage.title}
                </h3>
                <p className="font-body text-sm text-neutral-400 mt-2 leading-relaxed">
                  {activeImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
