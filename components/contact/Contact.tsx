"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const contactCards = [
  {
    icon: Phone,
    title: "Direct WhatsApp Line",
    value: "07886 480622",
    href: "https://wa.me/447886480622",
    actionText: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Assistance",
    value: "kgautoelectronicsbrum@gmail.com",
    href: "mailto:kgautoelectronicsbrum@gmail.com",
    actionText: "Write Us",
  },
  {
    icon: MapPin,
    title: "Birmingham Lab Location",
    value: "Unit 3 Industrial Estate, Sycamore Road Handsworth, B21 0QW",
    href: "https://maps.google.com/?q=Unit+3+Industrial+Estate,+Sycamore+Road+Handsworth+Birmingham,+B21+0QW",
    actionText: "Get Directions",
  },
];

const hours = [
  { day: "Monday", time: "09:00 - 18:00" },
  { day: "Tuesday", time: "09:00 - 18:00" },
  { day: "Wednesday", time: "09:00 - 18:00" },
  { day: "Thursday", time: "09:00 - 18:00" },
  { day: "Friday", time: "09:00 - 18:00" },
  { day: "Saturday", time: "09:00 - 14:00" },
  { day: "Sunday", time: "Closed" },
];

export default function Contact() {
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

  return (
    <section id="contact" className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spot glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Contact Info"
          title="Connect with Our Lab"
          subtitle="Ready to fix your automotive electronic failures? Visit our workshop, chat on WhatsApp, or send an email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Left Column: Contact Cards & Hours */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6 flex flex-col gap-8"
          >
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141414]/80 border border-white/5 p-6 rounded-2xl flex flex-col justify-between hover:border-primary-red/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <div>
                      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/5 mb-4 group-hover:border-primary-red/40 transition-colors">
                        <Icon className="w-5 h-5 text-primary-red" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-2">
                        {card.title}
                      </h4>
                      <p className="font-body text-xs text-neutral-400 leading-relaxed max-w-[200px]">
                        {card.value}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] font-heading font-bold uppercase tracking-wider text-white group-hover:text-primary-red transition-colors pt-6 mt-auto">
                      {card.actionText}
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}

              {/* Working Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-[#141414]/80 border border-white/5 p-6 rounded-2xl flex flex-col"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface border border-white/5 mb-4">
                  <Clock className="w-5 h-5 text-primary-red" />
                </div>
                
                <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider mb-4">
                  Opening Hours
                </h4>

                <div className="flex flex-col gap-2 w-full">
                  {hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-body">
                      <span className="text-neutral-400">{h.day}</span>
                      <span className={h.time === "Closed" ? "text-primary-red font-bold" : "text-white"}>
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 h-[400px] lg:h-auto rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative bg-[#141414]"
          >
            <iframe
              title="KG Auto Electronics Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.7057507616837!2d-1.9427139!3d52.5025658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bd003aefa28b%3A0xa3aa99b985d9c3b5!2sKG%20Auto%20Electronics%20BRUM%20Ltd!5e0!3m2!1sen!2sng!4v1764202326728!5m2!1sen!2sng"
              className="absolute inset-0 w-full h-full border-0 filter invert grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
