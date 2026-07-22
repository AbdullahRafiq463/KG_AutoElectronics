"use client";

import React from "react";
import { Star, Quote } from "lucide-react";
import { Heading } from "@/components/ui/heading";

const testimonials = [
  {
    name: "Mark Thompson",
    role: "BMW M4 Owner",
    rating: 5,
    quote: "My steering wheel buttons and paddle shifters completely stopped working, and the dealership wanted £1,800 for a new column. KG Autos rebuilt the clock spring and recoded the SZL module inside 2 hours for a fraction of that cost.",
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
  {
    name: "Oliver Wright",
    role: "Porsche Cayenne Owner",
    rating: 5,
    quote: "Diagnosed a complex CAN bus gateway error that two local garages gave up on. Re-soldered component micro-pins and returned the module within 24 hours. Genuine dealership-level expertise.",
  },
  {
    name: "Richard Croft",
    role: "Range Rover Sport Owner",
    rating: 5,
    quote: "Saved me thousands on a complete instrument cluster replacement. Display backlight was dead. Shipped it to Birmingham and had it back fixed with lifetime warranty in 2 days. 10/10 service!",
  },
];

export default function Testimonials() {
  // Duplicating list 3x for seamless infinite marquee loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-12">
        <Heading
          badge="Testimonials"
          title="What Our Clients Say"
          subtitle="Read real responses from vehicle owners and fleet managers who bypassed dealership rates with our engineering-grade repairs."
          align="center"
        />
      </div>

      {/* Marquee Track Container with Gradient Edge Fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right Gradient Overlays for Luxury Edge Blur */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[#141414] via-[#141414]/80 to-transparent z-20 pointer-events-none" />

        {/* Continuous Horizontal Auto-Scrolling Track */}
        <div className="animate-marquee flex gap-6 py-4">
          {duplicatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[380px] md:w-[420px] shrink-0"
            >
              <div className="glass-card h-full p-6 sm:p-8 rounded-2xl flex flex-col justify-between border border-white/10 relative bg-[#090909]/70 hover:border-primary-red/40 transition-all duration-300 shadow-xl group">
                {/* Decorative Quote Icon */}
                <Quote className="absolute top-6 right-6 w-8 h-8 text-neutral-800/40 pointer-events-none group-hover:text-primary-red/20 transition-colors" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary-red text-primary-red" />
                    ))}
                  </div>

                  <p className="font-body text-xs sm:text-sm text-neutral-300 leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-white/5 pt-5 mt-auto">
                  {/* Avatar Letter */}
                  <div className="w-10 h-10 rounded-full bg-primary-red/10 border border-primary-red/30 flex items-center justify-center font-heading text-sm font-bold text-primary-red shrink-0 group-hover:scale-105 transition-transform">
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
    </section>
  );
}
