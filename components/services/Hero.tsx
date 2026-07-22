"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, ArrowRight, PhoneCall, Sparkles, Wrench, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onBrowseClick?: () => void;
  onContactClick?: () => void;
}

export default function Hero({ onBrowseClick, onContactClick }: HeroProps) {
  const handleBrowse = () => {
    if (onBrowseClick) {
      onBrowseClick();
    } else {
      const searchElement = document.getElementById("search-services");
      if (searchElement) {
        searchElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleContact = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      const ctaElement = document.getElementById("cta-section");
      if (ctaElement) {
        ctaElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 bg-[#090909] overflow-hidden grid-pattern">
      {/* Dynamic Animated Ambient Spotlights */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[radial-gradient(ellipse_at_center,rgba(255,45,45,0.2)_0%,rgba(217,4,41,0.05)_50%,transparent_75%)] pointer-events-none filter blur-[60px] z-0"
      />

      {/* Grid Overlay Textures */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090909]/40 via-transparent to-[#090909] z-0 pointer-events-none" />

      {/* Floating Animated Accent Particles */}
      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-[10%] hidden lg:flex items-center gap-3 glass px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl z-10"
      >
        <div className="w-8 h-8 rounded-xl bg-primary-red/20 border border-primary-red/40 flex items-center justify-center">
          <ShieldCheck className="w-4 h-4 text-primary-red" />
        </div>
        <div>
          <p className="text-xs font-bold font-heading text-white">Dealership Quality</p>
          <p className="text-[10px] text-muted-text">OEM Spec Diagnostics</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-28 right-[10%] hidden lg:flex items-center gap-3 glass px-4 py-2.5 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl z-10"
      >
        <div className="w-8 h-8 rounded-xl bg-primary-red/20 border border-primary-red/40 flex items-center justify-center">
          <Cpu className="w-4 h-4 text-primary-red" />
        </div>
        <div>
          <p className="text-xs font-bold font-heading text-white">Advanced Micro-Soldering</p>
          <p className="text-[10px] text-muted-text">Component-Level Fixes</p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary-red/30 mb-8 bg-black/40 shadow-[0_0_20px_rgba(255,45,45,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-primary-red animate-ping" />
          <Sparkles className="w-3.5 h-3.5 text-primary-red" />
          <span className="text-xs font-heading font-semibold uppercase tracking-widest text-neutral-200">
            Precision Automotive Electronics Workshop
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl leading-[1.1] mb-6"
        >
          Professional Auto Electronics{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-[#FF2D2D]">
            Repair Services
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-base sm:text-lg md:text-xl text-neutral-400 max-w-3xl mb-10 leading-relaxed font-normal"
        >
          Specialists in{" "}
          <span className="text-white font-medium">Clock Springs</span>,{" "}
          <span className="text-white font-medium">Instrument Clusters</span>,{" "}
          <span className="text-white font-medium">LED Taillights</span>,{" "}
          <span className="text-white font-medium">ABS Modules</span>,{" "}
          <span className="text-white font-medium">ECUs</span> and Vehicle Electronics.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
        >
          <Button
            size="lg"
            variant="primary"
            onClick={handleBrowse}
            className="w-full sm:w-auto min-w-[200px] shadow-[0_0_30px_rgba(255,45,45,0.35)] group"
          >
            <span>Browse Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={handleContact}
            className="w-full sm:w-auto min-w-[200px] group border-white/15 hover:border-primary-red/50"
          >
            <PhoneCall className="w-4 h-4 text-primary-red" />
            <span>Contact Us</span>
          </Button>
        </motion.div>

        {/* Feature Badges Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 pt-8 border-t border-white/10 w-full max-w-4xl"
        >
          {[
            { label: "Lifetime Warranty", desc: "Selected Repairs" },
            { label: "Fast Turnaround", desc: "24-48 Hour Bench Fix" },
            { label: "Full Diagnostics", desc: "OEM Bench Testing" },
            { label: "Mail-In Service", desc: "UK & Worldwide Shipping" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="flex items-center gap-1.5 mb-1 text-primary-red">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-heading text-xs font-bold tracking-wider text-white uppercase">
                  {item.label}
                </span>
              </div>
              <span className="text-[11px] text-muted-text font-body">{item.desc}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
