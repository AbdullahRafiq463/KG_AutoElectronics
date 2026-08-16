"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const contactCards = [
  {
    icon: Phone,
    title: "Direct WhatsApp Line",
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
    title: "Oldham Lab Location",
    value: "KG Auto Electronics, 18 Halliwell Avenue Oldham, OL8 3DL",
    href: "https://maps.google.com/?q=18+Halliwell+Avenue+Oldham+OL8+3DL",
    actionText: "Get Directions",
  },
];

const socialCards = [
  {
    name: "TikTok",
    handle: "@autosrepairs",
    href: "https://www.tiktok.com/@autosrepairs",
    actionText: "Follow Channel",
    icon: (
      <svg className="w-5 h-5 fill-current text-primary-red" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.29 0 .56.04.82.12V9.38a6.37 6.37 0 00-4.63 1.07A6.33 6.33 0 003.35 15a6.34 6.34 0 0010.86 4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-.61-.01z" />
      </svg>
    ),
  },
  {
    name: "eBay Store",
    handle: "kgautoelectronics",
    href: "https://www.ebay.co.uk/usr/kgautoelectronics",
    actionText: "Browse Store",
    icon: (
      <span className="font-heading font-extrabold text-sm text-primary-red tracking-tight">
        eBay
      </span>
    ),
  },
  {
    name: "Facebook",
    handle: "KG Auto Electronics Ltd",
    href: "https://www.facebook.com/p/KG-Auto-Electronics-Ltd-100083765344316/",
    actionText: "Visit Page",
    icon: (
      <svg className="w-5 h-5 fill-current text-primary-red" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
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
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

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

            {/* Official Social Media Channels */}
            <motion.div variants={itemVariants} className="mt-4">
              <h4 className="font-heading text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                Official Media & Stores
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialCards.map((sc, idx) => (
                  <a
                    key={idx}
                    href={sc.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group bg-[#141414]/90 border border-white/5 p-4 rounded-xl flex flex-col justify-between hover:border-primary-red/40 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-15 h-8 flex items-center justify-center rounded-lg bg-surface border border-white/5 group-hover:border-primary-red/30 transition-colors">
                        {sc.icon}
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <div>
                      <h5 className="font-heading text-xs font-bold text-white uppercase">{sc.name}</h5>
                      <p className="font-body text-[11px] text-neutral-400 truncate mt-0.5">{sc.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-6 h-[400px] lg:h-auto min-h-[450px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative bg-[#141414]"
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
