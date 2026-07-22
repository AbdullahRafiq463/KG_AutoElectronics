"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ShieldCheck,
  Clock,
  CheckCircle2,
  ExternalLink,
  Wrench,
  Car,
  Tag,
  AlertTriangle,
  FileCode2,
} from "lucide-react";
import { Service } from "@/src/data/services";
import { Button } from "@/components/ui/button";

interface QuickViewModalProps {
  service: Service | null;
  onClose: () => void;
  onBookRepair: (service: Service) => void;
}

export default function QuickViewModal({
  service,
  onClose,
  onBookRepair,
}: QuickViewModalProps) {
  if (!service) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl glass bg-[#141414]/95 border border-white/10 rounded-3xl p-6 sm:p-8 z-10 shadow-[0_0_50px_rgba(255,45,45,0.2)] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        >
          {/* Top Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-surface/80 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-red transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="overflow-y-auto pr-2 space-y-6">
            {/* Header Banner Image */}
            <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-[#090909]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider bg-primary-red/90 text-white px-3 py-1 rounded-full shadow-md">
                    {service.category}
                  </span>
                  <span className="text-xs font-heading font-semibold bg-white/10 backdrop-blur-md text-neutral-200 px-3 py-1 rounded-full border border-white/15">
                    {service.warranty}
                  </span>
                </div>
                <div className="text-xs font-heading font-semibold bg-black/70 backdrop-blur-md text-neutral-300 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-primary-red" />
                  {service.turnaround} Bench Repair
                </div>
              </div>
            </div>

            {/* Title & Brand compatibility */}
            <div>
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                {service.brand.map((b, i) => (
                  <span
                    key={i}
                    className="text-xs font-heading font-bold text-primary-red bg-primary-red/10 border border-primary-red/20 px-2.5 py-0.5 rounded-md flex items-center gap-1"
                  >
                    <Car className="w-3 h-3" />
                    {b}
                  </span>
                ))}
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-white">
                {service.title}
              </h2>
            </div>

            {/* Detailed Description */}
            <div className="text-sm font-body text-neutral-300 leading-relaxed bg-surface/40 p-4 rounded-2xl border border-white/5">
              {service.longDescription}
            </div>

            {/* Two Column Grid: OEM Part Numbers & Faults Fixed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Faults Fixed */}
              <div className="bg-surface/50 p-4 rounded-2xl border border-white/5">
                <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-white mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary-red" />
                  Faults & Failures Fixed
                </h4>
                <ul className="space-y-2 text-xs font-body text-neutral-300">
                  {service.faultsFixed.map((fault, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0 mt-1.5" />
                      <span>{fault}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* OEM Part Numbers */}
              <div className="bg-surface/50 p-4 rounded-2xl border border-white/5">
                <h4 className="font-heading text-xs uppercase tracking-wider font-bold text-white mb-3 flex items-center gap-1.5">
                  <FileCode2 className="w-4 h-4 text-primary-red" />
                  Matching OEM Part Numbers
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {service.partNumbers.map((pn, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono bg-black/60 border border-white/10 text-neutral-300 px-2.5 py-1 rounded-md"
                    >
                      {pn}
                    </span>
                  ))}
                </div>
                {service.symptoms && service.symptoms.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-white/5">
                    <span className="text-[11px] font-heading font-bold text-neutral-400 block mb-1">
                      Common Driver Symptoms:
                    </span>
                    {service.symptoms.map((s, idx) => (
                      <p key={idx} className="text-[11px] text-neutral-400 font-body mb-0.5">
                        • {s}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-text font-body">Estimated Price:</span>
                <span className="text-lg font-heading font-bold text-primary-red">
                  {service.priceEstimate || "Contact for Quote"}
                </span>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={service.ebayUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full border-amber-500/30 text-amber-300 hover:text-amber-200 hover:bg-amber-500/10"
                  >
                    <span>Buy on eBay</span>
                    <ExternalLink className="w-4 h-4 text-amber-400" />
                  </Button>
                </a>

                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    onBookRepair(service);
                  }}
                  className="w-1/2 sm:w-auto shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                >
                  <Wrench className="w-4 h-4" />
                  <span>Book Repair Now</span>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
