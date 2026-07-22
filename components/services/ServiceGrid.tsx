"use client";

import { motion, AnimatePresence } from "framer-motion";
import { SearchX, RotateCcw, Sparkles, AlertCircle } from "lucide-react";
import { Service } from "@/src/data/services";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

interface ServiceGridProps {
  services: Service[];
  onLearnMore: (service: Service) => void;
  onBookRepair: (service: Service) => void;
  onResetFilters: () => void;
}

export default function ServiceGrid({
  services,
  onLearnMore,
  onBookRepair,
  onResetFilters,
}: ServiceGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  if (services.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="max-w-xl mx-auto my-16 p-8 text-center glass bg-[#141414]/90 border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center space-y-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-primary-red/10 border border-primary-red/30 flex items-center justify-center text-primary-red">
          <SearchX className="w-8 h-8" />
        </div>

        <h3 className="font-heading text-2xl font-bold text-white">
          No Repair Services Found
        </h3>
        <p className="text-sm font-body text-neutral-400 leading-relaxed max-w-md">
          We couldn&apos;t find any electronic repair matching your exact search or filter combination. Our workshop handles hundreds of custom module repairs.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3">
          <Button variant="primary" onClick={onResetFilters}>
            <RotateCcw className="w-4 h-4" />
            <span>Reset All Filters</span>
          </Button>

          <a href="#cta-section" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full border-white/15">
              <Sparkles className="w-4 h-4 text-primary-red" />
              <span>Inquire Custom Repair</span>
            </Button>
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {services.map((service) => (
            <motion.div
              key={service.id}
              layout
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <ServiceCard
                service={service}
                onLearnMore={onLearnMore}
                onBookRepair={onBookRepair}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
