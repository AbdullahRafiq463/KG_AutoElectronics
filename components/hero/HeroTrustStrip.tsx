"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Gauge, Users, ShieldCheck, Star, Clock, CheckCircle2 } from "lucide-react";

const stats = [
  {
    icon: Gauge,
    value: 10,
    suffix: "+",
    label: "Years Experience",
    subtext: "Micro-soldering & diagnostics",
  },
  {
    icon: Users,
    value: 5000,
    separator: ",",
    suffix: "+",
    label: "Modules Restored",
    subtext: "Bench tested to OEM specs",
  },
  {
    icon: ShieldCheck,
    value: 100,
    suffix: "%",
    label: "eBay Positive Rating",
    subtext: "513+ reviews • 800+ units sold",
    link: "https://www.ebay.co.uk/usr/kgautoelectronics",
  },
  {
    icon: Star,
    value: 155,
    suffix: "+",
    label: "5-Star Google Reviews",
    subtext: "Verified UK customer ratings",
  },
  {
    icon: Clock,
    customValue: "24 – 48h",
    label: "Fast Bench Turnaround",
    subtext: "Lifetime warranty on select units",
  },
];

export default function HeroTrustStrip() {
  return (
    <section className="w-full bg-[#0d0d0d] border-y border-white/[0.08] relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-7">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 divide-y sm:divide-y-0 divide-white/5 sm:divide-x sm:divide-white/10">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${idx > 0 ? "pt-4 sm:pt-0 sm:pl-4 lg:pl-6" : ""
                  } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded bg-primary-red/10 border border-primary-red/20 flex items-center justify-center shrink-0">
                    <Icon className="w-3.5 h-3.5 text-primary-red" />
                  </div>
                  <span className="font-heading text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                    {item.customValue ? (
                      item.customValue
                    ) : (
                      <CountUp
                        end={item.value || 0}
                        duration={2.5}
                        separator={item.separator || ""}
                        suffix={item.suffix || ""}
                        enableScrollSpy
                        scrollSpyOnce
                      />
                    )}
                  </span>
                </div>
                <h4 className="font-heading text-[11px] sm:text-xs font-bold text-neutral-200 uppercase tracking-wider leading-snug">
                  {item.label}
                </h4>
                <p className="font-body text-[10px] text-neutral-400 mt-0.5 leading-normal">
                  {item.subtext}
                </p>
              </motion.div>
            );

            if (item.link) {
              return (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90 transition-opacity block group"
                >
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>
      </div>
    </section>
  );
}
