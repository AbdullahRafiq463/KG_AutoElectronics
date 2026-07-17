"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function AboutHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

  // Framer Motion text reveal animation variants
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

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { delay: 0.5, duration: 1, ease: "easeInOut" as const },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Parallax Background Workshop Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-105"
      >
        <Image
          src="/images/cover_img.png"
          alt="Premium Garage Workshop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090909] via-[#090909]/60 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090909] via-transparent to-[#090909]" />
      </motion.div>

      {/* Red Glowing Spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,45,45,0.15)_0%,transparent_80%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-[radial-gradient(circle,rgba(217,4,41,0.08)_0%,transparent_80%)] pointer-events-none blur-3xl" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center pt-16 md:pt-24"
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
          <span className="text-white">About</span>
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
            About
          </motion.span>{" "}
          <motion.span
            custom={1}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-[#FF6B6B]"
          >
            KG Auto
          </motion.span>{" "}
          <motion.span
            custom={2}
            initial="hidden"
            animate="visible"
            variants={wordVariants}
            className="inline-block"
          >
            Electronics
          </motion.span>
        </h1>

        {/* Decorative Animated Line */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="h-1 w-24 bg-gradient-to-r from-primary-red to-[#D90429] rounded-full mb-8 origin-center"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-base md:text-xl text-muted-text max-w-2xl leading-relaxed"
        >
          Specialists in Automotive Electronics, Diagnostics and Precision Repairs.
        </motion.p>
      </motion.div>
    </section>
  );
}
