"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const testimonials = [
  {
    name: "Mark Thompson",
    role: "BMW M4 Owner",
    rating: 5,
    quote: "My steering wheel buttons and paddle shifters completely stopped working, and the dealership wanted £1,800 for a new column. KG Autos rebuilt the clock spring and recoded the SZL module inside 2 hours for a fraction of that cost. Unbelievable service!",
  },
  {
    name: "Sarah Jenkins",
    role: "Mercedes E220 Owner",
    rating: 5,
    quote: "Highly recommend their mail-in service. My Mercedes tail lights were failing. I posted the circuit board on Tuesday, they repaired the micro-controllers, tested them, and returned them by Thursday. Reinstalled them and they work perfectly.",
  },
  {
    name: "David Vance",
    role: "Vito Fleet Manager",
    rating: 5,
    quote: "Managing a fleet of Vito vans, cluster screen failure is a common headache. KG Auto Electronics is our go-to partner. They rebuilt multiple speedo displays, solving illumination issues with speed and a lifetime guarantee.",
  },
  {
    name: "James McGregor",
    role: "Audi S5 Owner",
    rating: 5,
    quote: "Excellent ABS pump repair. The dashboard looked like a Christmas tree with stability and brake errors. KG Autos ran logic diagnostic routines, solved the electronic unit crash, and re-flashed the module perfectly. Professional engineers.",
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center", skipSnaps: false });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary-red/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-red/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <Heading
            badge="Testimonials"
            title="What Our Clients Say"
            subtitle="Read real responses from vehicle owners and fleet managers who bypassed dealership rates with our engineering-grade repairs."
            align="left"
            className="mb-0 md:mb-0"
          />

          {/* Carousel Buttons */}
          <div className="flex items-center justify-center md:justify-start gap-3 mt-6 md:mt-0">
            <button
              onClick={scrollPrev}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/5 hover:border-primary-red hover:text-primary-red text-white transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-surface border border-white/5 hover:border-primary-red hover:text-primary-red text-white transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel viewport */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
              >
                <div className="glass-card h-full p-8 rounded-2xl flex flex-col justify-between border border-white/5 relative bg-[#090909]/60">
                  {/* Decorative Quote Icon */}
                  <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800/40 pointer-events-none" />

                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary-red text-primary-red" />
                      ))}
                    </div>

                    <p className="font-body text-sm text-neutral-300 leading-relaxed italic mb-8">
                      "{t.quote}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-white/5 pt-6">
                    {/* Fake Initial Avatar */}
                    <div className="w-10 h-10 rounded-full bg-primary-red/10 border border-primary-red/20 flex items-center justify-center font-heading text-sm font-bold text-primary-red">
                      {t.name[0]}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading text-sm font-bold text-white uppercase tracking-tight">
                        {t.name}
                      </span>
                      <span className="font-body text-[10px] text-muted-text uppercase font-semibold">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
