"use client";

import { motion } from "framer-motion";
import { PackageCheck, ShieldAlert, Truck, MapPin, CheckCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProcessShippingGuide() {
  return (
    <section className="relative py-20 bg-[#090909] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="rounded-3xl p-8 md:p-12 border border-white/10 bg-[#141414]/90 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-red/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/20 text-primary-red font-heading text-xs font-bold uppercase tracking-widest mb-4">
                <Truck className="w-4 h-4" />
                <span>Mail-In Packaging & Postal Guidelines</span>
              </div>

              <h2 className="font-heading text-3xl md:text-4xl font-black uppercase text-white tracking-tight mb-4">
                How to Safely Pack & Ship Your Failed Module
              </h2>

              <p className="font-body text-sm text-neutral-300 leading-relaxed mb-6">
                For mail-in repairs, following secure packaging ensures your sensitive micro-circuitry arrives safely at our Oldham laboratory.
              </p>

              <div className="space-y-4 font-body text-xs md:text-sm text-neutral-300">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-red/20 text-primary-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <strong className="text-white font-heading uppercase tracking-wide">Anti-Static / Bubble Wrap:</strong> Wrap the electronic module in anti-static ESD foam or 2-3 layers of heavy bubble wrap.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-red/20 text-primary-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <strong className="text-white font-heading uppercase tracking-wide">Include Contact Note:</strong> Put your Name, Phone Number, Vehicle Reg/Model, and a brief description of the fault inside the box.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-red/20 text-primary-red font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <strong className="text-white font-heading uppercase tracking-wide">Tracked Postal Service:</strong> Send via Royal Mail Special Delivery, DPD, or DHL for full tracking and insurance.
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Address Box */}
            <div className="p-6 bg-[#090909] border border-white/10 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-primary-red font-heading text-xs font-bold uppercase tracking-wider mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>Lab Shipping Address</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white uppercase tracking-tight mb-2">
                  KG Auto Electronics Ltd
                </h4>
                <p className="font-body text-xs text-neutral-400 leading-relaxed">
                  18 Halliwell Avenue<br />
                  Oldham, Greater Manchester<br />
                  OL8 3DL<br />
                  United Kingdom
                </p>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] text-neutral-500 font-body">
                  Tel: +44 730 5330916
                </div>
              </div>

              <div className="mt-6">
                <a href="https://wa.me/447305330916?text=Hi%2C%20I%20am%20shipping%20a%20module%20for%20repair" target="_blank" rel="noreferrer">
                  <Button variant="outline" className="w-full text-xs font-heading uppercase font-bold border-white/20 text-white hover:bg-primary-red hover:border-primary-red transition-all">
                    Notify Lab via WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
