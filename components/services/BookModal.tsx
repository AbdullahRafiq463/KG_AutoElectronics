"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Wrench, Send, Phone, CheckCircle, MessageSquare } from "lucide-react";
import { Service, SERVICES_DATA } from "@/src/data/services";
import { Button } from "@/components/ui/button";

interface BookModalProps {
  service: Service | null;
  onClose: () => void;
}

export default function BookModal({ service, onClose }: BookModalProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    service ? service.id : SERVICES_DATA[0].id
  );
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicleReg, setVehicleReg] = useState("");
  const [faultNotes, setFaultNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!service && !selectedServiceId) return null;

  const currentService =
    SERVICES_DATA.find((s) => s.id === selectedServiceId) || service || SERVICES_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello KG Auto Electronics, I would like to book a repair for:\n\n*Service:* ${currentService.title}\n*Name:* ${customerName || "N/A"}\n*Phone:* ${phone || "N/A"}\n*Vehicle / Reg:* ${vehicleReg || "N/A"}\n*Notes:* ${faultNotes || "No extra notes"}`
    );
    window.open(`https://wa.me/447886480622?text=${text}`, "_blank");
  };

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
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-lg glass bg-[#141414]/95 border border-white/10 rounded-3xl p-6 sm:p-8 z-10 shadow-[0_0_50px_rgba(255,45,45,0.25)] overflow-hidden my-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-surface/80 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-primary-red transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">
                Booking Request Received!
              </h3>
              <p className="text-sm font-body text-neutral-300 max-w-md mx-auto">
                Thank you, <span className="text-white font-bold">{customerName || "Customer"}</span>.
                Our technician will contact you shortly regarding your{" "}
                <span className="text-primary-red font-semibold">{currentService.title}</span>.
              </p>
              <div className="pt-6 flex items-center justify-center gap-3">
                <Button variant="primary" onClick={handleWhatsAppDirect}>
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Fast Track</span>
                </Button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Wrench className="w-5 h-5 text-primary-red" />
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-primary-red">
                  Workshop Repair Reservation
                </span>
              </div>

              <h3 className="font-heading text-2xl font-extrabold text-white mb-1">
                Book Your Electronics Repair
              </h3>
              <p className="text-xs text-neutral-400 font-body mb-6">
                Fast 24-48 hour bench testing and repair service with full warranty guarantee.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                {/* Select Service */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Repair Service
                  </label>
                  <select
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full bg-[#090909] border border-white/15 rounded-xl px-3 py-2.5 text-xs font-body text-white focus:outline-none focus:border-primary-red"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title} ({s.warranty})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. John Smith"
                      className="w-full bg-[#090909] border border-white/15 rounded-xl px-3 py-2 text-xs font-body text-white placeholder-neutral-500 focus:outline-none focus:border-primary-red"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 07886 480622"
                      className="w-full bg-[#090909] border border-white/15 rounded-xl px-3 py-2 text-xs font-body text-white placeholder-neutral-500 focus:outline-none focus:border-primary-red"
                    />
                  </div>
                </div>

                {/* Vehicle Make/Model / Reg */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Vehicle Reg or Model Year
                  </label>
                  <input
                    type="text"
                    value={vehicleReg}
                    onChange={(e) => setVehicleReg(e.target.value)}
                    placeholder="e.g. Mercedes E-Class 2017 (BD67 XYZ)"
                    className="w-full bg-[#090909] border border-white/15 rounded-xl px-3 py-2 text-xs font-body text-white placeholder-neutral-500 focus:outline-none focus:border-primary-red"
                  />
                </div>

                {/* Fault Description */}
                <div>
                  <label className="block text-xs font-heading font-bold uppercase tracking-wider text-neutral-300 mb-1.5">
                    Describe Fault or Symptoms
                  </label>
                  <textarea
                    rows={3}
                    value={faultNotes}
                    onChange={(e) => setFaultNotes(e.target.value)}
                    placeholder="Describe dashboard lights, error codes, flickering, or horn issues..."
                    className="w-full bg-[#090909] border border-white/15 rounded-xl px-3 py-2 text-xs font-body text-white placeholder-neutral-500 focus:outline-none focus:border-primary-red resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    className="w-full shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Repair Booking</span>
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    size="md"
                    onClick={handleWhatsAppDirect}
                    className="w-full border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span>WhatsApp Booking</span>
                  </Button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
