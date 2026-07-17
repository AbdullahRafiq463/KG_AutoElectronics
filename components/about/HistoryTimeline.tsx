"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Wrench, Disc, Award, Cpu, ShieldCheck, Milestone } from "lucide-react";
import { useRef } from "react";

const timelineEvents = [
  {
    icon: Milestone,
    title: "Workshop Founded",
    description: "KG Auto Electronics begins operations in Birmingham, focusing on fundamental auto electrical diagnostics.",
  },
  {
    icon: Disc,
    title: "Specialized in Clock Spring Repairs",
    description: "Developed proprietary testing benches to diagnose and rebuild complex steering column squib systems.",
  },
  {
    icon: Award,
    title: "Expanded into Premium European Brands",
    description: "Configured logical repair sequences tailored specifically for luxury Porsche, Mercedes-Benz, BMW, and Audi chassis.",
  },
  {
    icon: Cpu,
    title: "Added Instrument Cluster Repairs",
    description: "Acquired specialist soldering stations to solve digital speedometer fading, board traces, and LED backlight failures.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Diagnostic Equipment",
    description: "Upgraded our lab with OEM-grade ECU diagnostics, logic analyzers, and module firmware flashing capabilities.",
  },
  {
    icon: Wrench,
    title: "Today",
    subtitle: "Trusted Automotive Electronics Specialists",
    description: "Recognized as Birmingham's premier electronic diagnostic lab, servicing garages and retail clients across the UK.",
  },
];

export default function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll position to animate the vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Smooth out scroll progress values
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spotlights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,45,45,0.03)_0%,transparent_80%)] pointer-events-none blur-3xl" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.02)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <span className="text-primary-red font-heading text-xs font-black tracking-widest uppercase mb-3 block">
            OUR TIMELINE
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight">
            Workshop History
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-red to-[#D90429] mt-4 rounded-full mx-auto" />
        </div>

        {/* Timeline wrapper */}
        <div className="relative mt-12">
          {/* Vertical Track Line (Background) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-white/10" />

          {/* Vertical Track Line (Filled progress) */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-red via-[#D90429] to-[#FF6B6B] shadow-[0_0_10px_rgba(255,45,45,0.5)]"
          />

          {/* Timeline Events */}
          <div className="space-y-16 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row relative items-start md:items-center justify-between"
                >
                  {/* Timeline Node Point */}
                  <div className="absolute left-4 md:left-1/2 top-3 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="w-8 h-8 rounded-full bg-[#141414] border-2 border-primary-red/50 hover:border-primary-red flex items-center justify-center text-primary-red shadow-lg hover:shadow-[0_0_15px_rgba(255,45,45,0.4)] transition-all duration-300"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Left Column (Desktop) */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:text-right" : "md:order-last md:text-left"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="p-6 bg-surface/30 border border-white/5 rounded-2xl relative hover:border-primary-red/20 hover:bg-surface/50 transition-all duration-300 group"
                    >
                      {/* Node Connection Pointer Line */}
                      <div
                        className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-0.5 bg-white/5 group-hover:bg-primary-red/20 transition-colors duration-300 ${
                          isEven ? "left-full" : "right-full"
                        }`}
                      />

                      {/* Header details */}
                      {event.subtitle && (
                        <span className="text-[10px] md:text-xs font-heading font-black text-primary-red uppercase tracking-wider block mb-1">
                          {event.subtitle}
                        </span>
                      )}
                      
                      <h3 className="font-heading text-lg md:text-xl font-black text-white uppercase tracking-wide group-hover:text-primary-red transition-colors duration-300">
                        {event.title}
                      </h3>

                      <p className="font-body text-xs md:text-sm text-muted-text mt-3 leading-relaxed">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
