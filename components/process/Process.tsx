"use client";

import { motion } from "framer-motion";
import { CalendarRange, SearchCheck, Cpu, TestTube, CheckCircle, Truck } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const steps = [
  {
    icon: CalendarRange,
    title: "Book Appointment",
    description: "Submit our booking form online, schedule via WhatsApp, or ship your failed module directly to our lab.",
  },
  {
    icon: SearchCheck,
    title: "Vehicle Inspection",
    description: "For drive-ins, we inspect vehicle communication cables. For shipped parts, we run initial load trials.",
  },
  {
    icon: Cpu,
    title: "Diagnostics & Repair",
    description: "Our engineers identify the component faults, replace damaged chips, and micro-solder weak ribbons.",
  },
  {
    icon: TestTube,
    title: "Quality Testing",
    description: "We bench-test the repaired module under full electronic load profiles to guarantee absolute performance.",
  },
  {
    icon: CheckCircle,
    title: "Calibration & Code",
    description: "We re-calibrate and code steering angles, indicators, and software settings back to original specs.",
  },
  {
    icon: Truck,
    title: "Vehicle Delivery",
    description: "Drive away with a clean dashboard and fully operational controls. Mail-in items are shipped back with tracked courier.",
  },
];

export default function Process() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section id="process" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="How We Work"
          title="The Restoration Process"
          subtitle="Our engineering-grade workflow ensures clear diagnostics, precise micro-soldering, and thorough diagnostic load tests."
        />

        {/* Process Cards Stepper */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative group p-6 bg-[#090909] border border-white/5 rounded-2xl flex flex-col justify-between hover:border-primary-red/30 transition-colors duration-300"
              >
                {/* Connector line for desktop layout */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 w-8 h-[1px] bg-gradient-to-r from-primary-red/30 to-transparent z-0 pointer-events-none" />
                )}

                <div>
                  {/* Step counter badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface border border-white/5 group-hover:border-primary-red/50 transition-colors duration-300">
                      <Icon className="w-5.5 h-5.5 text-primary-red group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="font-heading text-4xl font-black text-neutral-800 group-hover:text-primary-red/20 transition-colors duration-300">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-3">
                    {step.title}
                  </h4>
                  
                  <p className="font-body text-xs text-neutral-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="h-1 bg-gradient-to-r from-transparent via-[#FF2D2D]/20 to-transparent w-full mt-6 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
