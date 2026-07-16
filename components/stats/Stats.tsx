"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Gauge, Users, Award, ShieldAlert, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: "+",
    label: "Vehicles Repaired",
    description: "Successful electronic restorations completed.",
  },
  {
    icon: Gauge,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    description: "Specialist micro-electronics engineering experience.",
  },
  {
    icon: BadgeCheck,
    value: 98,
    suffix: "%",
    label: "Customer Rating",
    description: "Highly rated on local trust directories.",
  },
  {
    icon: ShieldAlert,
    value: 0.1,
    decimals: 1,
    suffix: "%",
    label: "Warranty Rate",
    description: "Extremely low diagnostic or component recode call-backs.",
  },
];

export default function Stats() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section className="relative py-20 bg-[#090909] border-y border-white/5 overflow-hidden">
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center text-center p-6 bg-[#141414]/50 border border-white/5 rounded-2xl backdrop-blur-sm"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-white/5 mb-4">
                  <Icon className="w-5.5 h-5.5 text-primary-red" />
                </div>

                <h3 className="font-heading text-4xl sm:text-5xl font-black text-white uppercase tracking-tight mb-2">
                  <CountUp
                    end={stat.value}
                    duration={3}
                    decimals={stat.decimals || 0}
                    suffix={stat.suffix}
                    enableScrollSpy
                  />
                </h3>

                <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-2">
                  {stat.label}
                </h4>

                <p className="font-body text-[11px] text-muted-text max-w-[200px] leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
