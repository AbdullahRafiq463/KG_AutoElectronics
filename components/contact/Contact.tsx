"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const contactCards = [
  {
    icon: Phone,
    title: "WhatsApp Line",
    value: "0730 5330916",
    href: "https://wa.me/447305330916",
    actionText: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email Assistance",
    value: "kgautoelectronics@gmail.com",
    href: "mailto:kgautoelectronics@gmail.com",
    actionText: "Write Us",
  },
  {
    icon: MapPin,
    title: "Lab Location",
    value: "KG Auto Electronics, 18 Halliwell Avenue Oldham, OL8 3DL",
    href: "https://maps.google.com/?q=18+Halliwell+Avenue+Oldham+OL8+3DL",
    actionText: "Get Directions",
  },
];


const hours = [
  { day: "Mon - Sat", time: "09:00 - 18:00" },
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
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Contact Info"
          title="Connect with Our Lab"
          subtitle="Ready to fix your automotive electronic failures? Visit our workshop, chat on WhatsApp, or send an email."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Hours */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-6"
          >
            {/* Direct Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.a
                    key={idx}
                    variants={itemVariants}
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141414]/90 border border-white/5 hover:border-primary-red/30 p-4 rounded-xl flex flex-col justify-between gap-3 transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Title in front of the icon in a row */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-surface border border-white/5 group-hover:border-primary-red/40 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary-red" />
                      </div>
                      <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                        {card.title}
                      </h4>
                    </div>

                    <p className="font-body text-xs text-neutral-400 leading-relaxed">
                      {card.value}
                    </p>

                    <div className="flex items-center gap-1 text-[11px] font-heading font-bold uppercase tracking-wider text-white group-hover:text-primary-red transition-colors">
                      <span>{card.actionText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}

              {/* Working Hours */}
              <motion.div
                variants={itemVariants}
                className="bg-[#141414]/90 border border-white/5 p-4 rounded-xl flex flex-col justify-between gap-3"
              >
                {/* Title in front of the icon in a row */}
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-lg bg-surface border border-white/5">
                    <Clock className="w-4.5 h-4.5 text-primary-red" />
                  </div>
                  <h4 className="font-heading text-xs font-bold text-white uppercase tracking-wider">
                    Opening Hours
                  </h4>
                </div>

                <div className="flex flex-col gap-1.5 w-full">
                  {hours.map((h, idx) => (
                    <div key={idx} className="flex justify-between items-center text-xs font-body">
                      <span className="text-neutral-400">{h.day}</span>
                      <span className="text-white">
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
            className="lg:col-span-6 h-[300px] lg:h-auto min-h-[290px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative bg-[#141414]"
          >
            <iframe
              title="KG Auto Electronics Google Maps Location"
              src="https://maps.google.com/maps?q=18%20Halliwell%20Avenue%20Oldham%20OL8%203DL&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
