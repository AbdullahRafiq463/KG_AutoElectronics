"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, Wrench, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyUsGuarantees() {
  return (
    <section className="relative py-20 bg-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-3xl p-8 md:p-12 border border-primary-red/30 bg-gradient-to-r from-[#141414] via-[#1a0f0f] to-[#141414] overflow-hidden shadow-2xl">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative z-10">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/30 text-primary-red font-heading text-xs font-bold uppercase tracking-widest mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Our Engineering Commitment</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-white tracking-tight mb-4">
                No Fix, No Fee & Lifetime Component Guarantees
              </h2>

              <p className="font-body text-sm md:text-base text-neutral-300 leading-relaxed mb-6">
                Every repair processed in our workshop undergoes stringent multi-stage power load testing. If we cannot resolve your module fault, you do not pay for the repair. Select repairs come with our comprehensive lifetime guarantee.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-primary-red shrink-0" />
                  <span className="font-body text-xs font-semibold text-neutral-200">
                    100% Plug-and-Play Installation
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary-red shrink-0" />
                  <span className="font-body text-xs font-semibold text-neutral-200">
                    OEM Micro-switches & Chips
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Wrench className="w-5 h-5 text-primary-red shrink-0" />
                  <span className="font-body text-xs font-semibold text-neutral-200">
                    Direct Technician Support
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <Link href="/services">
                <Button variant="primary" className="w-full text-center py-4 cursor-pointer">
                  Explore Repair Services
                </Button>
              </Link>
              <a href="https://wa.me/447305330916" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="w-full border-white/20 text-white hover:bg-white/10 transition-colors"
                >
                  Speak With an Engineer
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
