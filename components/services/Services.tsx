"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Compass, ShieldAlert, Cpu, Lightbulb, Activity, RotateCcw, AlertTriangle, Disc, Gauge, HelpCircle } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";

const services = [
  {
    icon: Compass,
    title: "Clock Spring Repairs",
    description: "Expert restoration of steering wheel clock springs / squib slip rings. Fixes non-functional steering buttons, horn failure, and SRS airbag dashboard warnings.",
    image: "/images/clock_spring.png",
    tag: "Steering Column",
    compatibility: "Audi, VW, Seat, Skoda, BMW, Mercedes-Benz",
  },
  {
    icon: Gauge,
    title: "Instrument Cluster Repairs",
    description: "Complete repair for speedometer clusters, dashboard clocks, LCD display fades, and flickering warning LEDs. Stop buying replacement dashboards.",
    image: "/images/instrument_cluster.png",
    tag: "Dashboards",
    compatibility: "Mercedes Vito W447, Ford Focus / C-Max / Kuga / S-Max",
  },
  {
    icon: Lightbulb,
    title: "LED Tail Light Repairs",
    description: "Engineering-grade circuit board rebuilds for failing LED tail lights. Saves hundreds over buying full assembly modules.",
    image: "/images/led_taillight.png",
    tag: "Illumination",
    compatibility: "Mercedes-Benz E Class W207 / W212, E220, E300",
  },
  {
    icon: Disc,
    title: "ABS Module Programming",
    description: "Diagnostics, rebuilding, and recoding of ABS pumps and electronic modules. Fixes brake communication errors and stability warning lights.",
    image: "/images/clock_spring.png", // Reusable or CSS pattern
    tag: "Braking Systems",
    compatibility: "Volvo ABS Pumps, Audi, BMW, VW, Ford",
  },
  {
    icon: Cpu,
    title: "ECU / Engine Management",
    description: "Hardware repairs and software recoding for engine control units (ECU). Rectifies engine misfires, component code dropouts, and diagnostic connection failures.",
    image: "/images/hero_car.png",
    tag: "Power Train Control",
    compatibility: "All Major European & German Brands",
  },
  {
    icon: ShieldAlert,
    title: "Airbag Module Resetting",
    description: "Clearing hard crash logs and reprogramming SRS control units after collision events. Restores systems to factory safety specs.",
    image: "/images/instrument_cluster.png",
    tag: "Cabin Safety",
    compatibility: "Mercedes, BMW, Audi, VW, Ford, Porsche",
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const handleScrollToBooking = (e: React.MouseEvent, serviceName: string) => {
    e.preventDefault();
    const bookingSection = document.querySelector("#booking");
    if (bookingSection) {
      // Set service in form if possible, then scroll
      const selectEl = document.getElementById("service-select") as HTMLSelectElement;
      if (selectEl) {
        selectEl.value = serviceName.toLowerCase().replace(/\s+/g, "-");
        // Dispatch change event to react-hook-form
        selectEl.dispatchEvent(new Event("change", { bubbles: true }));
      }
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spotlights using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Engineered Solutions"
          title="Specialist Electronics Services"
          subtitle="Dealership-grade component-level rebuilding. We bypass the massive markup of replacement units by diagnosing and fixing the core electronic failure."
        />

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card className="h-full flex flex-col justify-between group">
                  <CardHeader className="p-0 mb-4 rounded-xl overflow-hidden relative aspect-video border border-white/5 bg-[#141414]">
                    {/* Hover zoom image */}
                    <div className="absolute inset-0 z-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-[#1E1E1E]/50 to-transparent" />
                    </div>

                    <div className="relative z-10 p-5 flex flex-col justify-between h-full">
                      <span className="self-start text-[10px] font-heading font-bold uppercase tracking-wider bg-primary-red/10 border border-primary-red/25 text-primary-red px-2.5 py-1 rounded-full">
                        {service.tag}
                      </span>
                      
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/10 group-hover:border-primary-red/50 transition-colors duration-300">
                        <IconComponent className="w-5 h-5 text-primary-red" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="px-0 py-2">
                    <CardTitle className="mb-2 group-hover:text-primary-red transition-colors duration-300 flex items-center gap-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="mb-4 text-neutral-400 line-clamp-3">
                      {service.description}
                    </CardDescription>

                    <div className="text-[11px] font-body text-muted-text border-t border-white/5 pt-4 mt-auto">
                      <span className="text-white font-bold">Compatible: </span>
                      {service.compatibility}
                    </div>
                  </CardContent>

                  {/* CTA link */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <a
                      href="#booking"
                      onClick={(e) => handleScrollToBooking(e, service.title)}
                      className="font-heading text-xs font-bold uppercase tracking-wider text-white hover:text-primary-red flex items-center gap-1.5 transition-colors duration-300"
                    >
                      Book Repair
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-[10px] text-muted-text uppercase font-semibold">
                      Guaranteed Fix
                    </span>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
