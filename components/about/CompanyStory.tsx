"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  RotateCcw,
  Gauge,
  Zap,
  Sun,
  Shield,
  Cpu,
  Compass,
  Car,
  CheckCircle2,
  Award
} from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const expertise = [
  { icon: RotateCcw, label: "Clock Spring Repairs", desc: "Expert rebuilds for slip rings & squib ribbon cables." },
  { icon: Gauge, label: "Instrument Cluster Repairs", desc: "Pixel repair, backlight replacement & gauge calibration." },
  { icon: Zap, label: "LED Tail Light Repairs", desc: "Precision board micro-soldering & logic repairs." },
  { icon: Sun, label: "Intelligent Headlights", desc: "Control module restoration & LED driver coding." },
  { icon: Shield, label: "ABS Modules", desc: "Diagnostics and controller rebuilds for brake electronics." },
  { icon: Cpu, label: "ECU Diagnostics", desc: "In-depth module analysis, flashing and software repair." },
  { icon: Compass, label: "Steering Electronics", desc: "Angle sensors, modules and column lock repairs." },
  { icon: Car, label: "Premium Vehicle Electronics", desc: "End-to-end diagnostics for luxury European marques." },
];

const bulletCards = [
  { title: "Automotive Electronics Pioneer", text: "Started as a dedicated specialist resolving complex steering column slip ring and ribbon failures." },
  { title: "Advanced Diagnostics Lab", text: "Expanded into high-precision micro-soldering and module flashing equipment." },
  { title: "European Car Elite", text: "Trusted key service partner for owners of Audi, BMW, Mercedes, VW, Porsche, and Volvo." },
  { title: "Proven Track Record", text: "Thousands of successful electronic repairs completed with multi-year warranties." },
  { title: "R&D Focus", text: "Constantly investing in cutting-edge proprietary flashing tools and logic analyzers." }
];

export default function CompanyStory() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["20px", "-40px"]);

  // Staggered list animations
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,45,45,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(217,4,41,0.02)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Parallax Image Showcase */}
          <div className="lg:col-span-5 relative w-full lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl">

              {/* Backglow ring */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-primary-red/5 mix-blend-overlay z-10" />

              {/* Parallax Image */}
              <motion.div style={{ y: imageY }} className="absolute -inset-y-16 inset-x-0">
                <Image
                  src="/images/team/owner.png"
                  alt="KG Auto Electronics Workshop Diagnostics"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Behind image glow */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary-red/10 rounded-full blur-3xl -z-10 animate-pulse" />

            {/* Experience Floating Badge */}
            <motion.div
              style={{ y: badgeY }}
              className="absolute -bottom-6 right-6 md:-right-6 glass-card rounded-2xl p-5 flex items-center gap-4 shadow-[0_15px_40px_rgba(0,0,0,0.6)] border border-primary-red/20"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-red/10 border border-primary-red/30 flex items-center justify-center text-primary-red shadow-[0_0_15px_rgba(255,45,45,0.2)]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="font-heading text-xl font-black text-white leading-none uppercase">
                  10+ Years
                </p>
                <p className="font-body text-[10px] text-muted-text uppercase tracking-wider mt-1.5 font-bold">
                  Repair Experience
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Title Block */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <span className="text-primary-red font-heading text-xs font-black tracking-widest uppercase mb-3 block">
                ABOUT COMPANY
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight leading-none mb-6">
                Driven by Passion. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-[#FF6B6B]">
                  Powered by Precision.
                </span>
              </h2>
              <p className="font-body text-sm md:text-base text-muted-text leading-relaxed">
                KG Auto Electronics has built its reputation by solving complex automotive electronic faults that many workshops simply replace. We believe in repairing intelligently, extending component life, and delivering reliable solutions that save both time and cost for luxury vehicle owners.
              </p>
            </motion.div>

            {/* Custom Icon Cards Section (Expertise Grid) */}
            <div className="mb-14">
              <h4 className="font-heading text-xs font-black text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5">
                Our Electronics Domain Expertise
              </h4>
              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {expertise.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={listItem}
                      whileHover={{ y: -3, borderColor: "rgba(255, 45, 45, 0.3)" }}
                      className="p-4 bg-surface/40 border border-white/5 rounded-xl transition-all duration-300 group flex items-start gap-4"
                    >
                      <div className="p-2 rounded-lg bg-white/5 text-primary-red group-hover:bg-primary-red/10 group-hover:text-white transition-colors duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="font-heading text-xs font-black text-white uppercase tracking-wide group-hover:text-primary-red transition-colors duration-300">
                          {item.label}
                        </h5>
                        <p className="font-body text-[11px] text-muted-text mt-1 leading-normal">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>

            {/* Milestone Elegant Bullet Cards */}
            <div>
              <h4 className="font-heading text-xs font-black text-white uppercase tracking-widest mb-6 pb-2 border-b border-white/5">
                Why Workshop Owners Trust Us
              </h4>
              <motion.div
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col gap-4"
              >
                {bulletCards.map((bullet, index) => (
                  <motion.div
                    key={index}
                    variants={listItem}
                    className="p-5 bg-surface/30 border border-white/5 rounded-xl flex items-start gap-4 group hover:bg-surface/50 transition-colors duration-300"
                  >
                    <div className="mt-0.5 text-primary-red">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                    </div>
                    <div>
                      <h5 className="font-heading text-xs font-black text-white uppercase tracking-wider">
                        {bullet.title}
                      </h5>
                      <p className="font-body text-[11px] md:text-xs text-muted-text mt-1 leading-relaxed">
                        {bullet.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
