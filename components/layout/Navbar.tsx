"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import TopTrustBar from "./TopTrustBar";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "/why-us" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  // Lock background scroll and blur background when mobile menu is open
  useEffect(() => {
    const mainEl = document.querySelector("main");
    const footerEl = document.querySelector("footer");

    if (isOpen) {
      document.body.style.overflow = "hidden";
      mainEl?.classList.add("blur-sm", "transition-[filter]", "duration-300");
      footerEl?.classList.add("blur-sm", "transition-[filter]", "duration-300");
    } else {
      document.body.style.overflow = "";
      mainEl?.classList.remove("blur-sm");
      footerEl?.classList.remove("blur-sm");
    }
    return () => {
      document.body.style.overflow = "";
      mainEl?.classList.remove("blur-sm");
      footerEl?.classList.remove("blur-sm");
    };
  }, [isOpen]);

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/about") {
        setActiveSection("/about");
      } else if (pathname === "/services") {
        setActiveSection("/services");
      } else if (pathname === "/why-us") {
        setActiveSection("/why-us");
      } else if (pathname === "/process") {
        setActiveSection("/process");
      } else {
        setActiveSection("");
      }

      const handleScrollSub = () => {
        if (window.scrollY > 20) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      handleScrollSub();
      window.addEventListener("scroll", handleScrollSub);
      return () => window.removeEventListener("scroll", handleScrollSub);
    }

    const handleScroll = () => {
      // Scrolled state check
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll Spy Logic for homepage hash sections
      const offset = 120; // Navbar height + buffer
      let currentSection = "#home";

      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      if (window.scrollY + clientHeight >= scrollHeight - 20) {
        currentSection = "#contact";
      } else {
        for (const item of navItems) {
          if (item.href.startsWith("#")) {
            const element = document.querySelector(item.href);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= offset) {
                currentSection = item.href;
              }
            }
          }
        }
      }
      setActiveSection(currentSection);
    };

    // Run scroll spy initially to match current scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href.startsWith("/")) {
      if (pathname === href) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push(href);
      }
      return;
    }

    if (href === "#home") {
      if (pathname !== "/") {
        router.push("/");
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setActiveSection("#home");
      }
      return;
    }

    if (pathname !== "/") {
      router.push("/" + href);
      return;
    }

    setActiveSection(href);
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
    <header className="fixed top-0 left-0 w-full z-50">
      <TopTrustBar />
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#090909]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-lg shadow-black/40"
            : "bg-[#090909]/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "#home")}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden flex items-center justify-center rounded-lg bg-primary-red/10 border border-primary-red/30 group-hover:border-primary-red/60 transition-colors duration-300">
              <Image
                src="/images/logo/kg_logo2.png"
                alt="KG Auto Electronics Logo"
                fill
                sizes="40px"
                className="object-cover p-0.5 group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-black tracking-tight text-white uppercase text-base sm:text-lg leading-none">
                KG AUTO
              </span>
              <span className="font-body text-[9px] tracking-widest text-primary-red uppercase font-bold leading-none mt-1">
                Electronics
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 bg-[#141414]/70 border border-white/10 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative font-body text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-200 group ${
                    isActive ? "text-white" : "text-neutral-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive ? (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-primary-red rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-red transition-all duration-200 group-hover:w-1/2" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/447305330916"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary-red" />
              0730 5330916
            </a>
            <Button
              variant="outline"
              size="sm"
              className="border-[#FF2D2D] text-[#FF2D2D] hover:bg-[#FF2D2D] hover:text-white transition-all duration-300 cursor-pointer font-semibold text-xs px-4"
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  router.push("/#booking");
                  return;
                }
                const bookingSection = document.querySelector("#booking");
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Book Repair
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

      {/* Mobile Full-Screen Backdrop Overlay with Blur */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 top-0 left-0 w-screen h-[100dvh] bg-black/65 backdrop-blur-md -z-10 lg:hidden cursor-pointer"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="w-full max-h-[calc(100dvh-5.5rem)] bg-[#090909]/92 backdrop-blur-2xl border-b border-white/10 flex flex-col justify-between py-3 px-4 sm:px-6 overflow-y-auto shadow-2xl relative z-10"
          >
            <div className="flex flex-col gap-1">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.02, duration: 0.15 }}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`font-heading text-sm font-bold tracking-wider uppercase px-3 py-1.5 sm:py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "text-primary-red bg-primary-red/10 border border-primary-red/25"
                        : "text-neutral-300 hover:text-white hover:bg-white/[0.04] border border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-200 shrink-0 ${
                          isActive
                            ? "bg-primary-red shadow-[0_0_8px_#ff2d2d]"
                            : "bg-neutral-600 group-hover:bg-neutral-400"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight
                      className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                        isActive
                          ? "text-primary-red"
                          : "text-neutral-600 group-hover:text-neutral-300 group-hover:translate-x-0.5"
                      }`}
                    />
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.2 }}
              className="grid grid-cols-2 gap-2.5 pt-2.5 border-t border-white/10 mt-2 shrink-0"
            >
              <a
                href="https://wa.me/447305330916"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-2 rounded-xl bg-white/[0.04] border border-white/10 text-white font-heading text-xs font-bold uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/20 transition-all text-center"
              >
                <Phone className="w-3.5 h-3.5 text-primary-red shrink-0" />
                <span className="truncate">0730 5330916</span>
              </a>
              <Button
                variant="primary"
                className="w-full py-2.5 px-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider cursor-pointer shadow-[0_0_15px_rgba(255,45,45,0.25)]"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  if (pathname !== "/") {
                    router.push("/#booking");
                    return;
                  }
                  const bookingSection = document.querySelector("#booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Book Repair
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
