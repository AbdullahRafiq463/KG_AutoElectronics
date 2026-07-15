"use client";

import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, Zap, HeartHandshake, HelpCircle, Laptop, Settings2, Coins } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const features = [
  {
    icon: UserCheck,
    title: "Certified Engineers",
    description: "Repairs are handled by industry-certified specialists with deep micro-electronics training.",
  },
  {
    icon: Laptop,
    title: "Advanced Diagnostics",
    description: "We use dealership-level logic controllers to access hidden faults and run calibration profiles.",
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Warranty",
    description: "Enjoy peace of mind. Select repairs (like LED tail lights) come with standard lifetime guarantees.",
  },
  {
    icon: Coins,
    title: "Cost Efficiency",
    description: "Save up to 80% compared to complete steering column or dashboard dealership replacements.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "We minimize vehicle downtime. Mail-in and drive-in repairs are completed inside 24 to 48 hours.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    description: "Direct access to our technicians for status updates, wiring advice, and post-installation support.",
  },
  {
    icon: Settings2,
    title: "OEM Quality Components",
    description: "We source premium micro-switches, chipsets, and optical sensors to ensure lasting durability.",
  },
  {
    icon: HelpCircle,
    title: "Latest Diagnostic Gear",
    description: "Continuous reinvestment in oscilloscope analyzers, thermal cameras, and flash programmers.",
  },
];

export default function WhyChooseUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
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

  return (
    <section id="why-us" className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spot glows */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Why Choose Us"
          title="Engineered for Precision & Longevity"
          subtitle="We bridge the gap between traditional automotive repair and high-level circuit board design. Explore our operational standards."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  tiltEffect={false}
                  glowEffect={true}
                  className="h-full flex flex-col justify-start border border-white/5 bg-[#141414]/80 backdrop-blur-sm p-6 group cursor-pointer hover:border-primary-red/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-white/5 mb-6 group-hover:border-primary-red/40 transition-colors duration-300">
                    <Icon className="w-5.5 h-5.5 text-primary-red group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  
                  <CardTitle className="text-base uppercase font-bold tracking-tight mb-2 group-hover:text-primary-red transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  
                  <CardDescription className="text-xs text-neutral-400 leading-relaxed font-body">
                    {feature.description}
                  </CardDescription>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
