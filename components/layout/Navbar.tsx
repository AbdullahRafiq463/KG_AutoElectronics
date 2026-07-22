"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Process", href: "#process" },
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

  useEffect(() => {
    if (pathname !== "/") {
      if (pathname === "/about") {
        setActiveSection("/about");
      } else if (pathname === "/services") {
        setActiveSection("/services");
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

    if (href === "/services") {
      if (pathname === "/services") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/services");
      }
      return;
    }

    if (href === "/about") {
      if (pathname === "/about") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/about");
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
            <div className="relative w-10 h-10 overflow-hidden flex items-center justify-center rounded-full bg-primary-red/10 border border-primary-red/20 group-hover:border-primary-red/50 transition-colors duration-300">
              <Image
                src="/images/logo/kg_logo2.png"
                alt="KG Auto Logo"
                fill
                sizes="40px"
                className="object-cover rounded-full p-0.5 group-hover:scale-110 transition-transform duration-300"
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-[#141414]/40 border border-white/5 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative font-body text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors duration-300 group ${
                    isActive ? "text-white" : "text-muted-text hover:text-white"
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
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-1/2" />
                  )}
                </a>
              );
            })}
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
              className="border-[#FF2D2D] text-[#FF2D2D] hover:bg-[#FF2D2D] hover:text-white transition-all duration-300 cursor-pointer"
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
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className={`font-heading text-2xl font-bold tracking-tight uppercase py-2 transition-colors relative flex items-center gap-3 ${
                      isActive ? "text-primary-red" : "text-white hover:text-primary-red"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeMobileDot"
                        className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </motion.a>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-4 border-t border-white/5 pt-8"
            >
              <div className="flex items-center justify-start gap-4 py-1">
                <a
                  href="https://wa.me/447886480622"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 font-heading text-lg font-bold text-white uppercase hover:text-primary-red transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary-red" />
                  Call: 07886 480622
                </a>
              </div>
              <Button
                variant="primary"
                className="w-full text-center py-4 text-base cursor-pointer"
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
                Schedule Appointment
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
