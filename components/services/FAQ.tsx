"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck, Clock, PackageCheck, Car, CalendarCheck } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Heading } from "@/components/ui/heading";

const FAQ_ITEMS = [
  {
    icon: Clock,
    q: "How long does a repair take?",
    a: "Our standard bench turnaround time is 24 to 48 hours from receipt of the module at our workshop. Drive-in appointment repairs (such as clock spring or instrument cluster fixes) are typically completed within 1 to 2 hours while you wait in our customer lounge.",
  },
  {
    icon: ShieldCheck,
    q: "Do repairs include warranty?",
    a: "Yes, every repair includes an engineering warranty. Most of our electronic control module and cluster repairs come with a 2-Year or Lifetime Warranty. If the same fault recurs within the warranty period, we will re-inspect and repair it free of charge.",
  },
  {
    icon: PackageCheck,
    q: "Can I ship my module?",
    a: "Absolutely! We offer nationwide UK and international mail-in repair services. Simply book your repair online, carefully pack your module with bubble wrap, and ship it to our workshop address in Birmingham. We repair, bench-test, and dispatch it back via tracked, insured courier.",
  },
  {
    icon: Car,
    q: "Which brands do you repair?",
    a: "We specialize primarily in European luxury vehicle electronics including Mercedes-Benz, BMW, Audi, VW, Porsche, Volvo, Land Rover, Jaguar, Seat, Skoda, and Ford. Our test benches support both OEM CAN bus and MOST fiber optic network communication protocols.",
  },
  {
    icon: CalendarCheck,
    q: "How do I book?",
    a: "You can book directly by clicking the 'Book Repair' button on any service card, by filling out our online booking form, or by contacting our team via WhatsApp / Phone at +44 7886 480622. If buying a mail-in repair service, you can also purchase directly through our official eBay store.",
  },
];

export default function FAQ() {
  return (
    <section id="faq-section" className="relative py-20 bg-[#090909] overflow-hidden border-t border-white/5">
      {/* Background spot glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Heading
          badge="Frequently Asked Questions"
          title="Everything You Need To Know"
          subtitle="Clear, honest answers about repair timelines, warranty terms, mail-in shipping, and supported vehicles."
        />

        <Accordion.Root type="single" collapsible className="w-full flex flex-col gap-4 mt-8">
          {FAQ_ITEMS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <Accordion.Item
                key={idx}
                value={`faq-item-${idx}`}
                className="bg-[#141414]/70 border border-white/10 rounded-2xl overflow-hidden hover:border-primary-red/30 transition-all duration-300 shadow-lg"
              >
                <Accordion.Header className="w-full">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 font-heading text-sm sm:text-base font-bold text-left tracking-tight text-white hover:text-primary-red transition-colors duration-200 cursor-pointer group">
                    <span className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-white/10 flex items-center justify-center text-primary-red shrink-0 group-hover:border-primary-red/40 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown className="w-5 h-5 text-neutral-400 group-hover:text-primary-red transition-transform duration-300 group-data-[state=open]:rotate-180 shrink-0 ml-2" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=open]:animate-[slideDown_300ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[slideUp_300ms_cubic-bezier(0.16,1,0.3,1)] overflow-hidden bg-[#090909]/60 border-t border-white/5">
                  <div className="px-6 py-5 font-body text-xs sm:text-sm text-neutral-300 leading-relaxed pl-16">
                    {item.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            );
          })}
        </Accordion.Root>
      </div>
    </section>
  );
}
