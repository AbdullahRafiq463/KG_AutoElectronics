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
              href="tel:07305330916"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Phone className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>0730 5330916</span>
            </a>
            <a
              href="mailto:kgautoelectronics@gmail.com"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <Mail className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>kgautoelectronics@gmail.com</span>
            </a>
            <a
              href="https://maps.google.com/?q=18+Halliwell+Avenue+Oldham+OL8+3DL"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors group"
            >
              <MapPin className="w-3.5 h-3.5 text-primary-red group-hover:scale-110 transition-transform" />
              <span>18 Halliwell Avenue, Oldham, OL8 3DL</span>
            </a>
          </div>
        </div>

        {/* Social Media & Official Channels */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-b border-white/5 text-xs">
          <span className="text-neutral-400 font-heading uppercase text-[11px] font-bold tracking-wider">
            Official Media & Stores:
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://www.tiktok.com/@autosrepairs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-neutral-300 hover:text-white hover:border-primary-red/50 transition-all duration-300"
              aria-label="TikTok Account"
            >
              <svg className="w-4 h-4 fill-current text-primary-red" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.12V9.38a6.37 6.37 0 00-4.63 1.07A6.33 6.33 0 003.35 15a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.61-.01z" />
              </svg>
              <span className="font-semibold text-xs">TikTok</span>
            </a>

            <a
              href="https://www.ebay.co.uk/usr/kgautoelectronics"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-neutral-300 hover:text-white hover:border-primary-red/50 transition-all duration-300"
              aria-label="eBay Shop"
            >
              <span className="font-heading font-extrabold text-xs text-primary-red tracking-tight">
                eBay
              </span>
              <span className="font-semibold text-xs">Store</span>
            </a>

            <a
              href="https://www.facebook.com/p/KG-Auto-Electronics-Ltd-100083765344316/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface border border-white/10 text-neutral-300 hover:text-white hover:border-primary-red/50 transition-all duration-300"
              aria-label="Facebook Page"
            >
              <svg className="w-4 h-4 fill-current text-primary-red" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="font-semibold text-xs">Facebook</span>
            </a>
          </div>
        </div>

        {/* Bottom Legal & Quality Guarantee */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-body">
          <p>
            &copy; {new Date().getFullYear()} KG Auto Electronics Ltd. All rights reserved.
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
