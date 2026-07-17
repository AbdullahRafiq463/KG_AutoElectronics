"use client";

import { motion, useMotionValue } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const router = useRouter();
  
  // Mouse movement variables for background interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-24 bg-black overflow-hidden border-t border-white/5 group"
    >
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,45,45,0.06)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      
      {/* Interactive mouse follow glow overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(255, 45, 45, 0.08), transparent 80%)`,
        }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        
        {/* Visual Red Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="h-1 w-12 bg-primary-red rounded-full mb-8"
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-tight mb-6"
        >
          Experience Automotive <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-[#FF6B6B]">
            Expertise You Can Trust
          </span>
        </motion.h2>

        {/* Paragraph Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-sm md:text-base text-muted-text max-w-xl leading-relaxed mb-12"
        >
          Whether it's a complex electronic fault, steering column slippage, or routine diagnostics, our team is ready to help get you back on the road with confidence.
        </motion.p>

        {/* Dual Actions Button Wrapper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-auto"
        >
          <Button
            variant="primary"
            size="lg"
            className="w-full sm:w-auto py-4 px-8 text-sm font-bold uppercase tracking-wider"
            onClick={() => router.push("/#booking")}
          >
            Book Appointment
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto py-4 px-8 text-sm font-bold uppercase tracking-wider"
            onClick={() => router.push("/#contact")}
          >
            Contact Us
            <Phone className="w-4 h-4 ml-1" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
