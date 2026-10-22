"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, ShieldAlert, Cpu } from "lucide-react";
import VehicleFinder from "./VehicleFinder";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[680px] lg:min-h-[740px] xl:min-h-[780px] flex items-center pt-28 sm:pt-32 pb-14 sm:pb-16 bg-[#090909] overflow-hidden"
    >
      {/* 1. Full-Width Background Automotive Asset (Positioned cleanly below the navbar) */}
      <div className="absolute inset-x-0 bottom-0 top-[80px] sm:top-[90px] lg:top-[98px] z-0 select-none pointer-events-none overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/images/hero_section.png"
            alt="KG Auto Electronics Specialist Diagnostics & Module Repair"
            fill
            priority
            fetchPriority="high"
            unoptimized={true}
            className="object-cover object-[75%_center] sm:object-[80%_center] md:object-[85%_center] lg:object-[88%_center] xl:object-[90%_center] opacity-100"
          />
        </div>
      </div>

      {/* 2. Clean Localized Gradient (Protects Left Copy Without Fogging or Blurring the Car) */}
      {/* Left text backdrop gradient */}
      <div
        className="absolute inset-y-0 left-0 w-full md:w-[60%] lg:w-[50%] pointer-events-none z-[1] bg-gradient-to-r from-[#090909] via-[#090909]/80 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle Bottom Transition into Trust Strip */}
      <div
        className="absolute bottom-0 left-0 w-full h-14 pointer-events-none z-[1] bg-gradient-to-t from-[#090909] to-transparent"
        aria-hidden="true"
      />

      {/* 3. Hero Content Container (Controlled Left Alignment) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="max-w-[620px] flex flex-col items-start text-left">

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[52px] font-extrabold tracking-tight text-white leading-[1.12] mb-4"
          >
            Specialist Auto Electronics Repair.{" "}

          </motion.h1>

          {/* Mobile Description: Concise, attractive 2-liner */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="block sm:hidden font-body text-[13px] text-neutral-300 leading-snug mb-3"
          >
            Precision component repairs for luxury vehicles. <span className="text-white font-semibold">Save up to 80%</span> over main dealer replacements.
          </motion.p>

          {/* Desktop Supporting Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden sm:block font-body text-sm sm:text-base text-neutral-300 leading-relaxed mb-4 max-w-xl"
          >
            Professional diagnostics and component-level repairs for instrument clusters, ECUs,
            ABS modules, clock springs, LED units and complex automotive electronics across leading
            European and Japanese vehicles.
          </motion.p>

          {/* Trust Subtext */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex items-center gap-2 text-xs text-neutral-400 font-medium mb-1"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Trusted by hundreds of UK vehicle owners.</span>
          </motion.div>

          {/* 4. Vehicle / Service Finder */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <VehicleFinder />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
