"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ShieldCheck, Zap, Award, ArrowRight, Wrench, Star, ShoppingBag, Gauge, Users, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#090909]"
    >
      {/* Ambient Red Glow Background */}
      <div className="absolute top-1/4 right-0 w-full lg:w-1/2 h-full pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[radial-gradient(circle,rgba(255,45,45,0.12)_0%,transparent_70%)] filter blur-3xl" />
      </div>

      {/* Grid Pattern Texture */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Top Split Layout: Text (Left) & Image Showcase (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Top Pill Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/30 mb-5 shadow-[0_0_15px_rgba(255,45,45,0.15)]"
            >
              <Zap className="w-4 h-4 text-primary-red animate-pulse" />
              <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary-red">
                Next-Gen Automotive Electronics Lab
              </span>
            </motion.div>

            {/* Headline - Optimizing font size for perfect visual hierarchy */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.12] mb-5"
            >
              Precision Auto Electronics &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-primary-red">
                Performance Repair
              </span>{" "}
              Experts
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              variants={itemVariants}
              className="font-body text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed mb-7 font-normal"
            >
              Say goodbye to expensive dealership module replacements. We deliver engineering-grade bench diagnostics and hardware rebuilding for instrument clusters, steering column clock springs, ABS units, and ECUs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo("#booking")}
                className="w-full sm:w-auto min-w-[190px] shadow-[0_0_25px_rgba(255,45,45,0.35)] group cursor-pointer"
              >
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" />
              </Button>

              <Link href="/services" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto min-w-[190px] border-white/20 hover:border-primary-red/50 cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-primary-red" />
                  <span>Explore Services</span>
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Vehicle Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 relative w-full flex items-center justify-center"
          >
            {/* Glass Card Showcase framing the car image cleanly */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl glass bg-gradient-to-b from-[#141414]/80 to-black/90 border border-white/10 p-6 flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.6)] overflow-hidden">
              {/* Background Spot Glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,45,45,0.15)_0%,transparent_70%)] pointer-events-none" />

              {/* Vehicle Image */}
              <div className="relative w-full h-full z-10 flex items-center justify-center">
                <Image
                  src="/images/hero_car.png"
                  alt="Luxury Automotive Electronics Repair"
                  fill
                  priority={true}
                  fetchPriority="high"
                  className="object-contain drop-shadow-[0_15px_30px_rgba(255,45,45,0.3)] hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Top Trust Pill */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 glass px-3 py-2 rounded-xl flex items-center gap-2 border border-white/15 shadow-xl z-20"
              >
                <ShieldCheck className="w-4 h-4 text-primary-red shrink-0" />
                <div className="flex flex-col">
                  <span className="font-heading text-[10px] font-bold text-white uppercase leading-none">
                    OEM Diagnostics
                  </span>
                  <span className="font-body text-[8px] text-neutral-400 leading-none mt-1">
                    Bench Tested
                  </span>
                </div>
              </motion.div>

              {/* Floating Bottom Trust Pill */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute bottom-4 right-4 glass px-3 py-2 rounded-xl flex items-center gap-2 border border-white/15 shadow-xl z-20"
              >
                <Award className="w-4 h-4 text-primary-red shrink-0" />
                <div className="flex flex-col">
                  <span className="font-heading text-[10px] font-bold text-white uppercase leading-none">
                    Lifetime Warranty
                  </span>
                  <span className="font-body text-[8px] text-neutral-400 leading-none mt-1">
                    On Select Services
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* 5 Full Horizontal Width Counters Bar (Spanning across full container) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 border-t border-white/10 w-full"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Counter 1: Years Experience */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl glass bg-[#141414]/60 border border-white/10 hover:border-primary-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 mb-3 group-hover:border-primary-red/50 transition-colors">
                <Gauge className="w-5 h-5 text-primary-red" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <CountUp end={10} duration={3} suffix="+" enableScrollSpy />
              </h3>
              <h4 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                Years Experience
              </h4>
              <p className="font-body text-[10px] text-neutral-400 mt-1 leading-tight">
                Specialist Engineering
              </p>
            </div>

            {/* Counter 2: Vehicles Repaired */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl glass bg-[#141414]/60 border border-white/10 hover:border-primary-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 mb-3 group-hover:border-primary-red/50 transition-colors">
                <Users className="w-5 h-5 text-primary-red" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <CountUp end={5000} duration={3} separator="," suffix="+" enableScrollSpy />
              </h3>
              <h4 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                Vehicles Repaired
              </h4>
              <p className="font-body text-[10px] text-neutral-400 mt-1 leading-tight">
                Module Restorations
              </p>
            </div>

            {/* Counter 3: Satisfaction Rate */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl glass bg-[#141414]/60 border border-white/10 hover:border-primary-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 mb-3 group-hover:border-primary-red/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary-red" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <CountUp end={98} duration={2.5} suffix="%" enableScrollSpy />
              </h3>
              <h4 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                Satisfaction Rate
              </h4>
              <p className="font-body text-[10px] text-neutral-400 mt-1 leading-tight">
                OEM Bench Guarantee
              </p>
            </div>

            {/* Counter 4: eBay Store */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl glass bg-[#141414]/60 border border-white/10 hover:border-primary-red/40 transition-all duration-300 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 mb-3 group-hover:border-primary-red/50 transition-colors">
                <ShoppingBag className="w-5 h-5 text-primary-red" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <CountUp end={100} duration={2.5} suffix="%" enableScrollSpy />
              </h3>
              <h4 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                eBay Feedback
              </h4>
              <p className="font-body text-[10px] text-neutral-400 mt-1 leading-tight">
                513 Positive • 807 Sold • 359 Followers
              </p>
            </div>

            {/* Counter 5: Google Reviews */}
            <div className="flex flex-col items-center text-center p-4 rounded-2xl glass bg-[#141414]/60 border border-white/10 hover:border-primary-red/40 transition-all duration-300 group col-span-2 sm:col-span-1">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 mb-3 group-hover:border-primary-red/50 transition-colors">
                <Star className="w-5 h-5 text-primary-red" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-1 justify-center">
                <span>5.0</span>
                <span className="text-sm font-normal text-primary-red">★★★★★</span>
              </h3>
              <h4 className="font-heading text-[11px] font-bold text-white uppercase tracking-wider mt-1">
                Google Reviews
              </h4>
              <p className="font-body text-[10px] text-neutral-400 mt-1 leading-tight">
                155 Verified 5-Star Reviews
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
