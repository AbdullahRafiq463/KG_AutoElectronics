"use client";

import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0d0d] border-t border-white/10 py-10 overflow-hidden">
      {/* Subtle Red Ambient Glow */}
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[180px] bg-[radial-gradient(circle,rgba(255,45,45,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-8">
        {/* Main Sleek Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Brand Logo & Tagline */}
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9 overflow-hidden flex items-center justify-center rounded-xl bg-primary-red/10 border border-primary-red/30 group-hover:border-primary-red transition-colors duration-300">
                <Image
                  src="/images/logo/fav_icon.png"
                  alt="KG Auto Logo"
                  fill
                  sizes="36px"
                  className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black tracking-tight text-white uppercase text-base leading-none">
                  KG AUTO
                </span>
                <span className="font-body text-[9px] tracking-widest text-primary-red uppercase font-semibold leading-none mt-1">
                  Electronics
                </span>
              </div>
            </a>
            <span className="hidden sm:inline text-neutral-700">|</span>
            <p className="hidden sm:block font-body text-xs text-neutral-400">
              Prestige Automotive Electronics & Hardware Diagnostics
            </p>
          </div>

          {/* Quick Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300 font-body">
            <a
              href="tel:07886480622"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>07886 480622</span>
            </a>
            <a
              href="mailto:kgautoelectronicsbrum@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>kgautoelectronicsbrum@gmail.com</span>
            </a>
            <a
              href="https://maps.google.com/?q=Unit+3+Industrial+Estate,+Sycamore+Road+Handsworth+Birmingham,+B21+0QW"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>Handsworth, Birmingham</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Quality Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-body">
          <p>
            &copy; {new Date().getFullYear()} KG Auto Electronics BRUM Ltd. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-neutral-200 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-red" />
              <span>OEM Quality Guarantee</span>
            </div>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
