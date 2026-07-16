"use client";

import { ShieldCheck, Mail, Phone, MapPin, Send, Award } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#141414] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Decorative Red Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-10 w-[300px] h-[300px] bg-primary-red/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <a
              href="#home"
              onClick={(e) => handleScrollTo(e, "#home")}
              className="flex items-center gap-2 group"
            >
              <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center rounded-xl bg-primary-red/10 border border-primary-red/20 group-hover:border-primary-red/50 transition-colors duration-300">
                <Image
                  src="/images/logo/fav_icon.png"
                  alt="KG Auto Logo"
                  fill
                  sizes="40px"
                  className="object-contain p-1 group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black tracking-tight text-white uppercase text-lg leading-none">
                  KG AUTO
                </span>
                <span className="font-body text-[9px] tracking-widest text-primary-red uppercase font-semibold leading-none mt-1">
                  Electronics
                </span>
              </div>
            </a>

            <p className="font-body text-sm text-muted-text leading-relaxed">
              Engineering-grade electronic module repairs and advanced programming solutions for prestige automotive brands. We restore rather than replace.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-white/5 text-muted-text hover:text-white hover:border-primary-red hover:shadow-[0_0_10px_rgba(255,45,45,0.25)] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-white/5 text-muted-text hover:text-white hover:border-primary-red hover:shadow-[0_0_10px_rgba(255,45,45,0.25)] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-surface border border-white/5 text-muted-text hover:text-white hover:border-primary-red hover:shadow-[0_0_10px_rgba(255,45,45,0.25)] transition-all duration-300"
                aria-label="Youtube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.107C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.388.511a3.002 3.002 0 0 0-2.11 2.107C0 8.053 0 12 0 12s0 3.947.502 5.837a3.003 3.003 0 0 0 2.11 2.107C4.495 20.455 12 20.455 12 20.455s7.505 0 9.388-.511a3.002 3.002 0 0 0 2.11-2.107C24 15.947 24 12 24 12s0-3.947-.502-5.837z" />
                  <polygon points="9.545 15.568 15.818 12 9.545 8.432" className="fill-[#141414]" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-6">
              Navigation
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-3">
              {[
                { label: "Home", href: "#home" },
                { label: "Our Services", href: "#services" },
                { label: "About Our Story", href: "#about" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Repair Process", href: "#process" },
                { label: "Gallery Portfolio", href: "#gallery" },
                { label: "Frequently Asked Questions", href: "#faqs" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="font-body text-sm text-muted-text hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Electronic Repair Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-6">
              Specialist Services
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-3">
              {[
                "Clock Spring Repairs",
                "ABS Module Recoding",
                "Instrument Cluster Fixes",
                "LED Tail Light Repairs",
                "Headlight Modules",
                "ECU Component Fixes",
                "Airbag Module Refurbishment",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => handleScrollTo(e, "#services")}
                    className="font-body text-sm text-muted-text hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
            <div className="flex flex-col items-center md:items-start">
              <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white mb-4">
                Newsletter
              </h4>
              <p className="font-body text-xs text-muted-text leading-relaxed mb-4">
                Subscribe for tips on luxury car electronic maintenance and updates.
              </p>
              <div className="flex items-center gap-2 bg-surface border border-white/5 p-1.5 rounded-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-transparent border-0 outline-none text-xs text-white pl-3.5 w-full placeholder-neutral-500 font-body"
                />
                <button
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-primary-red text-white hover:bg-accent-red hover:scale-105 transition-all duration-200 cursor-pointer"
                  aria-label="Submit newsletter"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start gap-2.5 pt-2 border-t border-white/5 w-full">
              <a
                href="https://maps.google.com/?q=Unit+3+Industrial+Estate,+Sycamore+Road+Handsworth+Birmingham,+B21+0QW"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-2.5 text-xs text-muted-text hover:text-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-primary-red shrink-0 mt-0.5" />
                <span>Unit 3 Ind. Estate, Sycamore Rd, Handsworth Birmingham, B21 0QW</span>
              </a>
              <a
                href="mailto:kgautoelectronicsbrum@gmail.com"
                className="flex items-center gap-2.5 text-xs text-muted-text hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-primary-red shrink-0" />
                <span>kgautoelectronicsbrum@gmail.com</span>
              </a>
              <a
                href="tel:07886480622"
                className="flex items-center gap-2.5 text-xs text-muted-text hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-primary-red shrink-0" />
                <span>07886 480622</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-text text-center sm:text-left">
            &copy; {new Date().getFullYear()} KG Auto Electronics BRUM Ltd. All rights reserved. Registered in England & Wales.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-muted-text">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <div className="flex items-center gap-1.5 text-primary-red font-semibold">
              <Award className="w-4 h-4" />
              <span>OEM Quality Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
