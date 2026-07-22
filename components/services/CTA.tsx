"use client";

import { motion } from "framer-motion";
import { MessageSquare, PhoneCall, Mail, Sparkles, Wrench, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTAProps {
  onOpenBooking?: () => void;
}

export default function CTA({ onOpenBooking }: CTAProps) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello KG Auto Electronics, I cannot find my specific module repair on your page. Can you assist me with diagnostics and bench repair?"
    );
    window.open(`https://wa.me/447886480622?text=${text}`, "_blank");
  };

  const handleCall = () => {
    window.location.href = "tel:+447886480622";
  };

  return (
    <section id="cta-section" className="relative py-20 bg-[#090909] overflow-hidden">
      {/* Background Red Ambient Glow & Textures */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(255,45,45,0.18)_0%,rgba(217,4,41,0.05)_50%,transparent_75%)] pointer-events-none filter blur-[60px]" />
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass bg-gradient-to-br from-[#1E1E1E]/90 via-[#141414]/95 to-black/90 p-8 sm:p-12 md:p-16 border border-white/10 shadow-[0_0_50px_rgba(255,45,45,0.15)] overflow-hidden text-center flex flex-col items-center"
        >
          {/* Top Decorative Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-red/10 border border-primary-red/30 mb-6 text-primary-red">
            <Wrench className="w-3.5 h-3.5" />
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-neutral-200">
              Custom Engineering & Hardware Diagnostics
            </span>
          </div>

          {/* Headline */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mb-4 leading-tight">
            Can&apos;t Find Your Repair?
          </h2>

          {/* Subtext */}
          <p className="font-body text-neutral-300 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
            Contact our technicians. We repair hundreds of vehicle electronic modules including custom body control modules, cluster variants, and rare steering electronics.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xl">
            {/* WhatsApp */}
            <Button
              size="lg"
              variant="primary"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto min-w-[170px] bg-emerald-600 hover:bg-emerald-500 shadow-[0_0_25px_rgba(16,185,129,0.3)] border-none"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>WhatsApp</span>
            </Button>

            {/* Call Us */}
            <Button
              size="lg"
              variant="primary"
              onClick={handleCall}
              className="w-full sm:w-auto min-w-[170px] shadow-[0_0_25px_rgba(255,45,45,0.35)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Us</span>
            </Button>

            {/* Contact Form */}
            <Button
              size="lg"
              variant="outline"
              onClick={onOpenBooking}
              className="w-full sm:w-auto min-w-[170px] border-white/20 hover:border-primary-red/50"
            >
              <Mail className="w-4 h-4 text-primary-red" />
              <span>Contact Form</span>
            </Button>
          </div>

          {/* Trust Footnote */}
          <div className="mt-10 pt-8 border-t border-white/10 flex items-center justify-center gap-6 text-xs text-neutral-400 font-body flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-primary-red" />
              100% Tested Bench Diagnostics
            </span>
            <span className="hidden sm:inline">•</span>
            <span>No Fix No Fee Policy</span>
            <span className="hidden sm:inline">•</span>
            <span>UK Workshop & International Mail-In</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
