"use client";

import { motion } from "framer-motion";
import { Users, Clock, Award } from "lucide-react";
import Image from "next/image";
import { Heading } from "@/components/ui/heading";

const achievements = [
  {
    icon: Award,
    title: "OEM Compliance",
    description: "All electronic rebuilds conform strictly to original equipment manufacturer specifications.",
  },
  {
    icon: Users,
    title: "Precision Engineering",
    description: "Led by certified specialists Umer Shahid (Electronics Engineer) and Director Ahmad Raza.",
  },
  {
    icon: Clock,
    title: "Rapid Turnaround",
    description: "Most modules inspected, repaired, and re-flashed within 24 to 48 hours.",
  },
];

const timelineEvents = [
  {
    year: "2023",
    title: "Founding & Squib Specialist Lab",
    description: "KG Auto Electronics established in Birmingham, focusing exclusively on solving complex steering column slip ring / squib malfunctions.",
  },
  {
    year: "2024",
    title: "Service Portfolio Expansion",
    description: "Invested in diagnostic logic controllers to offer micro-soldering solutions for LED taillights and digital speedometers.",
  },
  {
    year: "2025",
    title: "UK-Wide Diagnostic Network",
    description: "Launched dedicated mail-in services accommodating garages, dealerships, and car clubs across the UK.",
  },
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Red ambient glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-0 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Our Story"
          title="Engineering-Led Electronics Rebuilding"
          subtitle="Redefining vehicle maintenance. We diagnose the component failure that dealerships ignore, providing a cost-effective, premium alternative to complete part replacements."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Story & Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <motion.h3
              variants={itemVariants}
              className="font-heading text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white mb-6"
            >
              The Smart Way to Resolve Complex Failures
            </motion.h3>

            <motion.p
              variants={itemVariants}
              className="font-body text-sm md:text-base text-muted-text leading-relaxed mb-6 mx-auto lg:mx-0"
            >
              For years, automobile dealerships have relied on a wasteful protocol: replacing complete, expensive assemblies when only a single internal sensor or contact has failed. At KG Auto Electronics, we take a different approach. We pinpoint the exact micro-controller, slip ring ribbon, or capacitor causing the malfunction, repairing the original unit at a fraction of the cost.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="font-body text-sm md:text-base text-muted-text leading-relaxed mb-8 mx-auto lg:mx-0"
            >
              What started as a specialist squib slip ring workshop has evolved into Birmingham's premier electronic diagnostics lab. Today, under the direction of <strong>Ahmad Raza</strong> and engineering lead <strong>Umer Shahid</strong>, we successfully rebuild intelligent steering modules, ABS processors, and custom LED lighting circuits for Mercedes, BMW, Audi, VW, and Porsche.
            </motion.p>

            {/* Achievements row */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-8">
              {achievements.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-2 p-4 bg-[#090909]/60 border border-white/5 rounded-xl">
                    <Icon className="w-5 h-5 text-primary-red" />
                    <h5 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                      {item.title}
                    </h5>
                    <p className="font-body text-[10px] text-muted-text leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-white/5 pt-8 w-full"
            >
              <div>
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  Our Mission
                </h4>
                <p className="font-body text-xs text-muted-text leading-relaxed">
                  To eliminate mechanical waste by providing cost-effective, high-integrity electronic restoration services that outlast OEM parts.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-2">
                  Quality Guarantee
                </h4>
                <p className="font-body text-xs text-muted-text leading-relaxed">
                  We stand behind our micro-soldering and chip re-flashing. Every rebuild leaves our lab backed by a lifetime or multi-year guarantee.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Timeline & Interactive collage */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8 bg-[#090909] border border-white/5 rounded-2xl p-6 relative"
          >
            <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white mb-4 border-b border-white/5 pb-4">
              Milestones & Timeline
            </h4>

            <div className="relative border-l border-white/10 pl-6 flex flex-col gap-8">
              {timelineEvents.map((event, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-700 group-hover:bg-primary-red transition-colors border-4 border-[#090909] scale-110" />

                  <span className="font-heading text-xs font-bold text-primary-red bg-primary-red/10 border border-primary-red/20 px-2 py-0.5 rounded-full">
                    {event.year}
                  </span>
                  
                  <h5 className="font-heading text-sm font-bold text-white uppercase mt-2">
                    {event.title}
                  </h5>
                  
                  <p className="font-body text-xs text-muted-text leading-relaxed mt-1">
                    {event.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Glowing background accent inside timeline panel */}
            <div className="absolute bottom-4 right-4 w-32 h-32 bg-primary-red/10 blur-xl rounded-full pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
