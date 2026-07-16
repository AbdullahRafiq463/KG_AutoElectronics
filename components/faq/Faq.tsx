"use client";

import { useState } from "react";
import { Search, ChevronDown, HelpCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { Heading } from "@/components/ui/heading";

const faqItems = [
  {
    q: "Can I mail my electronic module to your lab for repair?",
    a: "Yes! Our mail-in repair service is highly popular across the UK. Simply book your repair online, wrap your module securely in bubble wrap, and ship it to our Birmingham address. We inspect, rebuild, test, and ship it back via tracked courier within 24-48 hours.",
  },
  {
    q: "Do you offer a guarantee on repairs?",
    a: "Absolutely. We stand behind our engineering work. Most repair services come with a standard 12-month or 2-year warranty. Specialist rebuilds, like our Mercedes E-Class LED taillight repairs, come with a lifetime warranty.",
  },
  {
    q: "How long does the repair process take?",
    a: "For local drive-in customers booked for a clock spring or instrument cluster repair, the process is completed within 1 to 2 hours. Mail-in items are processed, repaired, and shipped back within 1 to 2 working days.",
  },
  {
    q: "Will my steering angle sensor require calibration after a clock spring fix?",
    a: "For drive-in appointments, we handle all sensor alignment and software calibrations. When using our mail-in service, we rebuild the clock spring mechanism locked at its factory-center position, meaning it is plug-and-play for most vehicles.",
  },
  {
    q: "Why did my steering buttons and horn stop working when the airbag light came on?",
    a: "This is the classic symptom of a fractured steering clock spring (squib slip ring). The internal ribbon cable tears, severing all electronic communication between the steering wheel controls, horn, and the driver safety airbag. We replace the internal ribbon cable to solve all these issues simultaneously.",
  },
  {
    q: "What is your policy if a component is water-damaged or cannot be repaired?",
    a: "We operate on a strict 'No Fix, No Fee' policy. If a component is burnt or water-damaged beyond repair, we will notify you. We do not charge repair fees in these scenarios—only a small return shipping fee if you want the part returned.",
  },
];

export default function Faq() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faqs" className="relative py-24 bg-[#090909] overflow-hidden">
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <Heading
          badge="FAQs"
          title="Frequently Asked Questions"
          subtitle="Have questions about mailing in, warranty terms, or local repairs? Browse our quick answers below."
        />

        {/* Live Search Bar */}
        <div className="relative mb-12 max-w-xl mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FAQs (e.g. clock spring, warranty, postage)..."
            className="w-full bg-[#141414] border border-white/5 text-sm text-white pl-12 pr-6 py-4 rounded-full outline-none focus:border-primary-red/50 transition-colors font-body placeholder-neutral-500"
          />
          <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-neutral-500" />
        </div>

        {/* Accordion Component */}
        <Accordion.Root type="single" collapsible className="w-full flex flex-col gap-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => (
              <Accordion.Item
                key={idx}
                value={`item-${idx}`}
                className="bg-[#141414]/50 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors duration-300"
              >
                <Accordion.Header className="w-full">
                  <Accordion.Trigger className="w-full flex items-center justify-between px-6 py-5 font-heading text-sm sm:text-base font-bold text-left uppercase tracking-tight text-white hover:text-primary-red transition-colors duration-200 cursor-pointer group">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-4.5 h-4.5 text-primary-red shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown className="w-4.5 h-4.5 text-neutral-500 group-hover:text-primary-red transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="data-[state=open]:animate-[slideDown_300ms_cubic-bezier(0.16,1,0.3,1)] data-[state=closed]:animate-[slideUp_300ms_cubic-bezier(0.16,1,0.3,1)] overflow-hidden bg-[#090909]/40 border-t border-white/5">
                  <div className="px-6 py-5 font-body text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))
          ) : (
            <div className="text-center py-12 text-muted-text font-body text-sm">
              No matching questions found for "{searchQuery}". Try searching for "clock spring" or "postage".
            </div>
          )}
        </Accordion.Root>
      </div>
    </section>
  );
}
