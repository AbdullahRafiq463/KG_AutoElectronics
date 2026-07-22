"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function AboutPreview() {
  const router = useRouter();
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Mouse hover glow coordinates for the card
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  // Magnetic button state and spring dynamics
  const buttonRef = useRef<HTMLButtonElement>(null);
  const btnX = useMotionValue(0);
  const btnY = useMotionValue(0);
  const springConfig = { damping: 15, stiffness: 150 };
  const springBtnX = useSpring(btnX, springConfig);
  const springBtnY = useSpring(btnY, springConfig);

  const handleButtonMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btnX.set(x * 0.4);
    btnY.set(y * 0.4);
  };

  const handleButtonLeave = () => {
    btnX.set(0);
    btnY.set(0);
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-[#090909] overflow-hidden border-b border-white/5"
      onMouseMove={handleMouseMove}
    >
      {/* Background ambient red glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,45,45,0.04)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Small Heading Badge */}
            <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse" />
              ABOUT KG AUTO ELECTRONICS
            </span>

            {/* Large Premium Title */}
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase mb-6 leading-none">
              Engineering Trust. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-[#FF6B6B]">
                Driven by Precision.
              </span>
            </h2>

            {/* Small Paragraph */}
            <p className="font-body text-sm md:text-base text-muted-text leading-relaxed max-w-xl mb-10">
              For years we've specialized in diagnosing and repairing complex automotive electronics for premium European vehicles. Every repair is performed with precision, advanced diagnostics, and a commitment to long-lasting reliability.
            </p>

            {/* Magnetic Button with arrow slide, hover lift, glow, ripple effects */}
            <div className="relative group">
              <motion.button
                ref={buttonRef}
                onMouseMove={handleButtonMove}
                onMouseLeave={handleButtonLeave}
                style={{ x: springBtnX, y: springBtnY }}
                onClick={() => router.push("/about")}
                whileHover="hover"
                initial="initial"
                className="relative inline-flex items-center gap-3 px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-white bg-primary-red hover:bg-[#D90429] rounded-full overflow-hidden transition-colors duration-300 shadow-[0_0_20px_rgba(255,45,45,0.2)] hover:shadow-[0_0_30px_rgba(255,45,45,0.4)] active:scale-95 cursor-pointer z-10"
              >
                {/* Glow ripple effect inside */}
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />

                {/* Text and sliding arrow */}
                <span className="relative z-10 flex items-center gap-2">
                  View More
                  <motion.span
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 6 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-block"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </span>
              </motion.button>

              {/* External glow backing */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-red to-[#D90429] rounded-full blur opacity-25 group-hover:opacity-60 transition duration-500 -z-10" />
            </div>
          </motion.div>

          {/* Right Side Media */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient background glow ring behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-red/20 to-transparent rounded-2xl blur-2xl opacity-50 -z-10" />

            {/* Garage Image Container */}
            <div
              ref={imageContainerRef}
              className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer shadow-2xl bg-neutral-900"
            >
              {/* Soft red gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute inset-0 bg-primary-red/10 mix-blend-overlay z-10" />

              {/* Main Image */}
              <Image
                src="/images/garrage.jpeg"
                alt="KG Auto Electronics Premium Workshop"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                priority
              />

              {/* Glowing card overlay highlighting mouse position */}
              <div
                className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(255, 45, 45, 0.15), transparent 80%)`,
                }}
              />
            </div>

            {/* Floating Glass Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-8 glass-card rounded-2xl p-4 flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-red/20 border border-primary-red/30 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary-red" />
              </div>
              <div>
                <p className="font-heading text-sm font-black text-white leading-none uppercase">
                  ✓ Trusted Workshop
                </p>
                <p className="font-body text-[10px] text-muted-text mt-1">
                  100% Quality & Diagnostics Guarantee
                </p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
