"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Cpu, Wrench, ShieldCheck, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ProcessHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  const wordVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[65vh] md:min-h-[72vh] flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        <Image
          src="/images/cover_img.png"
          alt="KG Auto Electronics Diagnostic Bench"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-35 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/70 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-transparent to-[#090909]" />
      </motion.div>

      {/* Red Glowing Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,rgba(255,45,45,0.18)_0%,transparent_80%)] pointer-events-none blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="max-w-5xl mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-16 md:pt-24 pb-12"
      >
        {/* Breadcrumb Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2 text-xs md:text-sm font-body font-semibold tracking-wider text-muted-text uppercase mb-6 bg-[#141414]/50 border border-white/5 px-4 py-1.5 rounded-full backdrop-blur-sm"
        >
          <Link href="/" className="hover:text-primary-red transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/20" />
          <span className="text-white">Our Process</span>
        </motion.div>

        {/* Title */}
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase mb-6 leading-none">
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block"
          >
            Our Precision
          </motion.span>{" "}
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-red via-[#FF5555] to-[#FF2D2D]"
          >
            Restoration
          </motion.span>{" "}
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block"
          >
            Process
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-base md:text-xl text-neutral-300 max-w-3xl leading-relaxed mb-10"
        >
          From initial oscilloscope signal diagnostics to micro-soldering component replacement, bench load testing, and steering angle recalibration — see how we restore automotive electronics to OEM standard.
        </motion.p>

        {/* Step Overview Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
        >
          <div className="p-4 rounded-2xl bg-[#141414]/80 border border-white/10 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-primary-red mb-1">
              <Clock className="w-4 h-4" />
              <span className="font-heading font-black text-xl text-white">1-2 Hours</span>
            </div>
            <span className="font-body text-xs text-neutral-400 font-medium uppercase tracking-wider">
              Drive-In Speed
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414]/80 border border-white/10 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-primary-red mb-1">
              <Wrench className="w-4 h-4" />
              <span className="font-heading font-black text-xl text-white">24-48 Hours</span>
            </div>
            <span className="font-body text-xs text-neutral-400 font-medium uppercase tracking-wider">
              Mail-In Turnaround
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414]/80 border border-white/10 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-primary-red mb-1">
              <Cpu className="w-4 h-4" />
              <span className="font-heading font-black text-xl text-white">100% Bench Tested</span>
            </div>
            <span className="font-body text-xs text-neutral-400 font-medium uppercase tracking-wider">
              Load Verified
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-[#141414]/80 border border-white/10 backdrop-blur-md flex flex-col items-center">
            <div className="flex items-center gap-1.5 text-primary-red mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-heading font-black text-xl text-white">Plug & Play</span>
            </div>
            <span className="font-body text-xs text-neutral-400 font-medium uppercase tracking-wider">
              Zero Coding Needed
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
