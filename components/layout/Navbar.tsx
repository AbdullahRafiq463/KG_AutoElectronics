"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
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
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#090909]/80 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-primary-red/10 border border-primary-red/20 group-hover:border-primary-red/50 transition-colors duration-300">
              <ShieldCheck className="w-6 h-6 text-primary-red group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-tight text-white uppercase text-lg leading-none">
                KG AUTOS
              </span>
              <span className="font-body text-[9px] tracking-widest text-primary-red uppercase font-semibold leading-none mt-1">
                Electronics
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-[#141414]/40 border border-white/5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="relative font-body text-xs font-semibold text-muted-text hover:text-white px-3.5 py-1.5 rounded-full transition-colors group"
              >
                {item.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-1/2" />
              </a>
            ))}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/447886480622"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-muted-text hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-red animate-pulse" />
              07886 480622
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.preventDefault();
                const bookingSection = document.querySelector("#booking");
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Service
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary-red transition-colors p-1.5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[73px] left-0 w-full h-[calc(100vh-73px)] bg-[#090909]/95 backdrop-blur-lg z-40 lg:hidden border-t border-white/5 flex flex-col justify-between py-10 px-6 overflow-y-auto"
          >
            <div className="flex flex-col gap-5">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="font-heading text-2xl font-bold tracking-tight text-white uppercase hover:text-primary-red transition-colors py-2"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 border-t border-white/5 pt-8"
            >
              <a
                href="https://wa.me/447886480622"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 font-heading text-lg font-bold text-white uppercase hover:text-primary-red transition-colors"
              >
                <Phone className="w-5 h-5 text-primary-red" />
                Call: 07886 480622
              </a>
              <Button
                variant="primary"
                className="w-full text-center py-4 text-base"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  const bookingSection = document.querySelector("#booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Schedule Appointment
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
