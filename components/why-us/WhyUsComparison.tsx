"use client";

import { motion } from "framer-motion";
import { Check, X, ShieldAlert, Sparkles } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const comparisons = [
  {
    feature: "Average Cost",
    dealer: "£800 – £2,500+ (Full Module Replace)",
    kgAuto: "£180 – £450 (Precision Component Rebuild)",
    advantage: true,
  },
  {
    feature: "Repair Turnaround Time",
    dealer: "2 to 6 Weeks (Factory Backorder Delay)",
    kgAuto: "24 to 48 Hours (Same-Day / Express Available)",
    advantage: true,
  },
  {
    feature: "Warranty Protection",
    dealer: "12 Months Limited Parts Only",
    kgAuto: "Lifetime Guarantee on Selected Repairs",
    advantage: true,
  },
  {
    feature: "Recoding / SCN Coding Fee",
    dealer: "Extra Charge (£150+ Dealer Coding Fee)",
    kgAuto: "Included & Pre-Calibrated (Plug-and-Play)",
    advantage: true,
  },
  {
    feature: "Root Cause Correction",
    dealer: "Replaces with OEM module having identical flaw",
    kgAuto: "Upgraded OEM micro-components to eliminate failure points",
    advantage: true,
  },
  {
    feature: "Mail-In Repair Option",
    dealer: "Not Offered (Must Tow Car to Main Dealer)",
    kgAuto: "Fully Supported with Tracked Courier Return",
    advantage: true,
  },
];

export default function WhyUsComparison() {
  return (
    <section className="relative py-24 bg-[#0d0d0d] overflow-hidden border-t border-b border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Direct Comparison"
          title="Main Dealer vs. KG Auto Electronics"
          subtitle="Why replace the entire assembly when our micro-electronics engineers can rebuild and upgrade the faulty components at a fraction of the cost?"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-x-auto rounded-3xl border border-white/10 bg-[#141414]/90 backdrop-blur-md shadow-2xl"
        >
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-white/10 bg-[#090909]">
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-neutral-400 font-bold w-1/3">
                  Service Aspect
                </th>
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-neutral-500 font-bold w-1/3">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-neutral-500" />
                    <span>Main Dealership</span>
                  </div>
                </th>
                <th className="py-5 px-6 font-heading text-sm uppercase tracking-wider text-primary-red font-black w-1/3 bg-primary-red/10 border-l border-primary-red/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary-red" />
                    <span>KG Auto Electronics</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 font-body text-xs md:text-sm">
              {comparisons.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/[0.02] transition-colors duration-200"
                >
                  <td className="py-4 px-6 font-heading font-bold text-white uppercase tracking-tight">
                    {item.feature}
                  </td>
                  <td className="py-4 px-6 text-neutral-400">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                      <span>{item.dealer}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-white font-medium bg-primary-red/5 border-l border-primary-red/20">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                      <span className="text-neutral-100">{item.kgAuto}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
