"use client";

import Image from "next/image";

interface Brand {
  name: string;
  logo: string;
  width: number;
  height: number;
}

const brands: Brand[] = [
  { name: "Mercedes", logo: "/images/brands/mercedes.png", width: 44, height: 44 },
  { name: "BMW", logo: "/images/brands/bmw.png", width: 44, height: 44 },
  { name: "Audi", logo: "/images/brands/audi.svg", width: 56, height: 32 },
  { name: "Porsche", logo: "/images/brands/porsche.png", width: 38, height: 44 },
  { name: "Land Rover", logo: "/images/brands/land-rover.png", width: 62, height: 34 },
  { name: "Volkswagen", logo: "/images/brands/volkswagen.png", width: 42, height: 42 },
  { name: "Jaguar", logo: "/images/brands/jaguar.svg", width: 56, height: 32 },
  { name: "Volvo", logo: "/images/brands/volvo.png", width: 44, height: 44 },
  { name: "Bentley", logo: "/images/brands/bentley.png", width: 64, height: 32 },
  { name: "Ford", logo: "/images/brands/ford.png", width: 56, height: 30 },
  { name: "Mini", logo: "/images/brands/mini.png", width: 58, height: 30 },
  { name: "Lexus", logo: "/images/brands/lexus.png", width: 52, height: 34 },
  { name: "Skoda", logo: "/images/brands/skoda.png", width: 42, height: 42 },
  { name: "Seat", logo: "/images/brands/seat.png", width: 42, height: 42 },
  { name: "Toyota", logo: "/images/brands/toyota.svg", width: 50, height: 34 },
  { name: "Honda", logo: "/images/brands/honda.png", width: 44, height: 40 },
  { name: "Hyundai", logo: "/images/brands/hyundai.png", width: 52, height: 32 },
];

export default function TrustBar() {
  return (
    <section className="bg-[#0a0a0a] py-10 border-y border-white/5 overflow-hidden relative w-full select-none">
      {/* Left & Right Edge Fades for Smooth Infinite Ribbon */}
      <div className="absolute top-0 left-0 w-24 md:w-44 h-full bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-44 h-full bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-20 pointer-events-none" />

      {/* Centered Heading */}
      <div className="max-w-7xl mx-auto px-6 mb-8 text-center relative z-10 flex flex-col items-center">

        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-tight">
          Brands We Engineer
        </h3>

      </div>

      {/* Infinite Horizontal Logo Marquee with Original Brand Colors */}
      <div className="flex overflow-hidden relative z-10 py-2">
        <div className="animate-marquee flex gap-4 sm:gap-6 items-center">
          {/* First iteration */}
          {brands.map((brand, idx) => (
            <div
              key={`b1-${idx}`}
              className="flex flex-col items-center justify-center gap-2 px-5 py-3.5 min-w-[120px] sm:min-w-[130px] rounded-2xl bg-[#141414]/90 border border-white/10 hover:border-primary-red/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer shrink-0 shadow-lg backdrop-blur-md"
            >
              <div className="relative flex items-center justify-center h-10 w-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain max-h-8 max-w-[60px] w-auto drop-shadow-md"
                />
              </div>
              <span className="font-heading text-[11px] font-bold uppercase text-neutral-300 group-hover:text-white tracking-wider transition-colors duration-300 text-center whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}

          {/* Second iteration (for seamless infinite loop) */}
          {brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              className="flex flex-col items-center justify-center gap-2 px-5 py-3.5 min-w-[120px] sm:min-w-[130px] rounded-2xl bg-[#141414]/90 border border-white/10 hover:border-primary-red/50 hover:bg-[#1a1a1a] transition-all duration-300 group cursor-pointer shrink-0 shadow-lg backdrop-blur-md"
            >
              <div className="relative flex items-center justify-center h-10 w-full transition-transform duration-300 group-hover:scale-110">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} official logo`}
                  width={brand.width}
                  height={brand.height}
                  className="object-contain max-h-8 max-w-[60px] w-auto drop-shadow-md"
                />
              </div>
              <span className="font-heading text-[11px] font-bold uppercase text-neutral-300 group-hover:text-white tracking-wider transition-colors duration-300 text-center whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
