"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, ArrowRight, Wrench, CheckCircle2, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomeFeatureTeaser() {
  return (
    <section className="relative py-20 bg-[#090909] overflow-hidden border-t border-b border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(255,45,45,0.06)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(217,4,41,0.06)_0%,transparent_70%)] pointer-events-none -translate-y-1/2" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Why Choose Us Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-10 bg-[#141414]/90 border border-white/10 rounded-3xl flex flex-col justify-between hover:border-primary-red/40 transition-all duration-300 shadow-2xl backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-full blur-2xl group-hover:bg-primary-red/15 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary-red px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20">
                  Engineering Excellence
                </span>
                <ShieldCheck className="w-6 h-6 text-primary-red" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-4 group-hover:text-primary-red transition-colors duration-300">
                Why Choose KG Auto Electronics?
              </h3>

              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-6">
                We bridge the gap between traditional automotive repair and high-level circuit board design. Save up to 80% over dealership replacements with dealership-level diagnostics and lifetime guarantees.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                  <span>Certified Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                  <span>Lifetime Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                  <span>Save Up to 80%</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-primary-red shrink-0" />
                  <span>24-48h Turnaround</span>
                </div>
              </div>
            </div>

            <div>
              <Link href="/why-us">
                <Button
                  variant="outline"
                  className="w-full justify-between border-white/15 text-white hover:bg-primary-red hover:border-primary-red hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="font-heading text-xs uppercase tracking-wider font-bold">
                    Explore Why Owners Choose Us
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Card 2: How It Works Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-8 md:p-10 bg-[#141414]/90 border border-white/10 rounded-3xl flex flex-col justify-between hover:border-primary-red/40 transition-all duration-300 shadow-2xl backdrop-blur-md overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 rounded-full blur-2xl group-hover:bg-primary-red/15 transition-all duration-500" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-primary-red px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20">
                  Step-By-Step Workflow
                </span>
                <Cpu className="w-6 h-6 text-primary-red" />
              </div>

              <h3 className="font-heading text-2xl md:text-3xl font-black uppercase text-white tracking-tight mb-4 group-hover:text-primary-red transition-colors duration-300">
                Our 6-Step Restoration Process
              </h3>

              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-6">
                From initial bench testing to micro-soldering component replacement and software coding, explore how drive-in and mail-in repairs are handled in our lab.
              </p>

              {/* Quick Step Bar */}
              <div className="flex items-center justify-between bg-[#090909] border border-white/5 p-3.5 rounded-2xl mb-8 text-xs font-body">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-red/20 border border-primary-red/40 text-primary-red font-bold text-[11px] flex items-center justify-center">
                    01
                  </span>
                  <span className="text-neutral-300 font-semibold hidden sm:inline">Book / Ship</span>
                </div>
                <div className="w-4 h-[1px] bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-red/20 border border-primary-red/40 text-primary-red font-bold text-[11px] flex items-center justify-center">
                    02
                  </span>
                  <span className="text-neutral-300 font-semibold hidden sm:inline">Diagnostics</span>
                </div>
                <div className="w-4 h-[1px] bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-red/20 border border-primary-red/40 text-primary-red font-bold text-[11px] flex items-center justify-center">
                    03
                  </span>
                  <span className="text-neutral-300 font-semibold hidden sm:inline">Rebuild & Code</span>
                </div>
                <div className="w-4 h-[1px] bg-white/20" />
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary-red/20 border border-primary-red/40 text-primary-red font-bold text-[11px] flex items-center justify-center">
                    04
                  </span>
                  <span className="text-neutral-300 font-semibold hidden sm:inline">Return</span>
                </div>
              </div>
            </div>

            <div>
              <Link href="/process">
                <Button
                  variant="outline"
                  className="w-full justify-between border-white/15 text-white hover:bg-primary-red hover:border-primary-red hover:text-white transition-all duration-300 group/btn"
                >
                  <span className="font-heading text-xs uppercase tracking-wider font-bold">
                    View Full Repair Workflow & Shipping Guide
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
