"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ShieldCheck, Zap, Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
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
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#090909]"
    >
      {/* Background Gradients and Ambient Red Glow */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-[#090909] via-[#090909]/40 to-transparent" />
        {/* Radial Red Light behind the car */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary-red/10 blur-[130px] rounded-full" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[100px] rounded-full" />
      </div>

      {/* Grid Overlay background */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 py-12">
        {/* Text Area */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Accent Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 mb-6"
          >
            <Zap className="w-4.5 h-4.5 text-primary-red animate-pulse" />
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-primary-red">
              Next-Gen Automotive Lab
            </span>
          </motion.div>

          {/* Large Hero Title */}
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.05] mb-6"
          >
            Precision Auto Electronics & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-[#FF5E5E]">
              Performance Repair
            </span>{" "}
            Experts
          </motion.h1>

          {/* Supporting Paragraph */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base sm:text-lg text-muted-text max-w-xl leading-relaxed mb-8"
          >
            Say goodbye to costly dealership replacements. We deliver engineering-grade diagnostics and repairs for complex dashboard, steering column, ABS, and lighting systems with lifetime guarantees.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo("#booking")}
              className="group"
            >
              Book Appointment
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => handleScrollTo("#services")}
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Statistics Block */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 sm:gap-12 w-full pt-8 border-t border-white/5"
          >
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={10} duration={3.5} suffix="+" enableScrollSpy />
              </h3>
              <p className="font-body text-[11px] sm:text-xs text-muted-text uppercase tracking-wider font-semibold mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={5000} duration={3} separator="," suffix="+" enableScrollSpy />
              </h3>
              <p className="font-body text-[11px] sm:text-xs text-muted-text uppercase tracking-wider font-semibold mt-1">
                Vehicles Repaired
              </p>
            </div>
            <div>
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold text-white">
                <CountUp end={98} duration={2.5} suffix="%" enableScrollSpy />
              </h3>
              <p className="font-body text-[11px] sm:text-xs text-muted-text uppercase tracking-wider font-semibold mt-1">
                Satisfaction Rate
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Graphics Area (Sports Car Visual) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="lg:col-span-5 relative w-full h-[300px] sm:h-[450px] lg:h-[550px] flex items-center justify-center"
        >
          {/* Subtle Rotating Circles */}
          <div className="absolute w-[80%] h-[80%] border border-white/[0.02] rounded-full animate-[spin_40s_linear_infinite]" />
          <div className="absolute w-[60%] h-[60%] border border-primary-red/[0.04] rounded-full animate-[spin_25s_linear_infinite_reverse]" />

          {/* Premium Sports Car Image */}
          <div className="relative w-full h-full scale-110 lg:scale-125 z-10 select-none pointer-events-none">
            <Image
              src="/images/hero_car.png"
              alt="Luxury Performance Vehicle with red neon outline reflections"
              fill
              priority={true}
              fetchPriority="high"
              className="object-contain drop-shadow-[0_15px_30px_rgba(255,45,45,0.25)]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Floating Trust Badges */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-6 left-6 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-white/5 shadow-2xl z-20"
          >
            <ShieldCheck className="w-5 h-5 text-primary-red" />
            <div className="flex flex-col">
              <span className="font-heading text-[10px] font-bold text-white uppercase leading-none">
                OEM Standards
              </span>
              <span className="font-body text-[8px] text-muted-text leading-none mt-1">
                Guaranteed Quality
              </span>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-12 right-6 glass px-4 py-2.5 rounded-2xl flex items-center gap-2 border border-white/5 shadow-2xl z-20"
          >
            <Award className="w-5 h-5 text-primary-red" />
            <div className="flex flex-col">
              <span className="font-heading text-[10px] font-bold text-white uppercase leading-none">
                Lifetime Warranty
              </span>
              <span className="font-body text-[8px] text-muted-text leading-none mt-1">
                On Select Repairs
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
