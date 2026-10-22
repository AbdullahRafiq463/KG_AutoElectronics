"use client";

import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight, ShieldCheck, Truck, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GalleryCTA() {
  return (
    <section className="py-20 bg-[#0d0d0d] border-t border-white/10 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[radial-gradient(circle,rgba(255,45,45,0.08)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 rounded-3xl bg-[#141414]/90 border border-white/10 shadow-2xl backdrop-blur-xl relative overflow-hidden"
        >
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/30 text-primary-red text-xs font-heading font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Turnaround Available</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
            Have a Faulty Unit on Your Vehicle?
          </h2>

          <p className="font-body text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Don&apos;t pay dealership prices for complete assembly replacements. Send us a quick photo of your part number, dashboard warning light, or diagnostic code for an upfront assessment.
          </p>

          {/* Quick Perks Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-xs font-heading font-semibold uppercase tracking-wider text-neutral-300">
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface/50 border border-white/5">
              <ShieldCheck className="w-4 h-4 text-primary-red" />
              <span>Lifetime Warranty</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface/50 border border-white/5">
              <Truck className="w-4 h-4 text-primary-red" />
              <span>Nationwide Mail-In</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-3 rounded-xl bg-surface/50 border border-white/5">
              <Phone className="w-4 h-4 text-primary-red" />
              <span>Same-Day Bench Testing</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/447305330916?text=Hi%20KG%20Auto%2C%20I%20have%20an%20electronics%20fault%20on%20my%20vehicle%20and%20would%20like%20a%20repair%20quote."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary-red hover:bg-[#d90429] text-white font-heading text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_25px_rgba(255,45,45,0.4)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Diagnosis Quote</span>
            </a>

            <Link href="/#booking" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl border-white/20 text-white hover:bg-white/10 font-heading text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Lab Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
