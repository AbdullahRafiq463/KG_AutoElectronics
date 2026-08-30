"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, Package, CheckCircle2, Clock, ShieldCheck, MapPin, Send } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const driveInSteps = [
  {
    step: "01",
    title: "Appointment Booking",
    time: "5 Mins",
    description: "Schedule your visit via our online booking system or direct phone/WhatsApp confirmation.",
  },
  {
    step: "02",
    title: "On-Site Diagnostic Scan",
    time: "15 Mins",
    description: "We connect dealership logic scanners to read live fault codes (e.g. ESP, airbag, steering angle sensors).",
  },
  {
    step: "03",
    title: "Module Extraction & Micro-Repair",
    time: "45-60 Mins",
    description: "Steering column or cluster is safely uninstalled. Micro-electronics engineer replaces failed components in lab.",
  },
  {
    step: "04",
    title: "Calibration & Test Drive",
    time: "20 Mins",
    description: "Steering angle offset & CAN-bus communication calibrated back to OEM factory specifications.",
  },
];

const mailInSteps = [
  {
    step: "01",
    title: "Quote & Package Module",
    time: "Day 1",
    description: "Contact us for a fixed repair quote and safely wrap your module using anti-static bubble packaging.",
  },
  {
    step: "02",
    title: "Dispatch via Tracked Shipping",
    time: "Day 1-2",
    description: "Ship your module directly to our Oldham lab using Royal Mail Special Delivery or DHL.",
  },
  {
    step: "03",
    title: "Lab Bench Testing & Rebuild",
    time: "Day 2",
    description: "Our lab intake runs thermal imaging & oscilloscope load trials, replaces damaged ICs, and micro-solders ribbon traces.",
  },
  {
    step: "04",
    title: "Tracked Return Delivery",
    time: "Day 2-3",
    description: "Your fully tested module is shipped back via insured courier, pre-coded for plug-and-play installation.",
  },
];

export default function ProcessWorkflow() {
  const [activeTab, setActiveTab] = useState<"drive-in" | "mail-in">("drive-in");

  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Service Options"
          title="Drive-In Workshop vs. Mail-In Postal Repair"
          subtitle="Choose the service method that best suits your location and schedule. Both options receive identical precision micro-soldering standards."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mt-10 mb-14">
          <div className="inline-flex p-1.5 bg-[#141414] border border-white/10 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab("drive-in")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "drive-in"
                  ? "bg-primary-red text-white shadow-lg shadow-primary-red/25"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Car className="w-4 h-4" />
              <span>Drive-In Workshop (Oldham)</span>
            </button>

            <button
              onClick={() => setActiveTab("mail-in")}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "mail-in"
                  ? "bg-primary-red text-white shadow-lg shadow-primary-red/25"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Mail-In Postal Repair (Nationwide)</span>
            </button>
          </div>
        </div>

        {/* Step Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {(activeTab === "drive-in" ? driveInSteps : mailInSteps).map((stepItem, idx) => (
              <div
                key={idx}
                className="relative p-6 bg-[#141414]/80 border border-white/10 rounded-2xl flex flex-col justify-between hover:border-primary-red/40 transition-colors duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-heading text-3xl font-black text-neutral-700 group-hover:text-primary-red transition-colors duration-300">
                      {stepItem.step}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-body font-semibold text-primary-red bg-primary-red/10 px-2.5 py-1 rounded-full border border-primary-red/20">
                      <Clock className="w-3 h-3" />
                      {stepItem.time}
                    </span>
                  </div>

                  <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-2">
                    {stepItem.title}
                  </h4>

                  <p className="font-body text-xs text-neutral-400 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-heading font-bold text-neutral-500 uppercase tracking-widest">
                    Step {idx + 1} of 4
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-neutral-600 group-hover:text-primary-red transition-colors" />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
