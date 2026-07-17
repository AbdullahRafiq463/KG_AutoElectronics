"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Users } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  desc: string;
  image: string;
  pos: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Umer Shahid",
    role: "Senior Electronics Engineer",
    desc: "Partner & logic systems programmer",
    image: "/images/team/ceo.png",
    pos: "top", // 12 o'clock
  },
  {
    name: "Marcus Vance",
    role: "Master Technician",
    desc: "Micro-soldering & circuitry expert",
    image: "/images/team/cto.png",
    pos: "right", // 3 o'clock
  },
  {
    name: "Sarah Jenkins",
    role: "Diagnostics Specialist",
    desc: "ABS & steering logic calibrator",
    image: "/images/team/engr.png",
    pos: "bottom", // 6 o'clock
  },
  {
    name: "Liam O'Connor",
    role: "Workshop Operations",
    desc: "Quality assurance & mail-in logistics",
    image: "/images/team/dev.png",
    pos: "left", // 9 o'clock
  },
];

export default function TeamOrbit() {
  const orbitRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    // GSAP rotation setup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1 });

      // Rotate the alloy wheel orbit clockwise
      tl.to(orbitRef.current, {
        rotate: 360,
        duration: 40,
        ease: "none",
      }, 0);

      // Counter-rotate the team avatars counter-clockwise to keep them upright
      tl.to(".team-member-node", {
        rotate: -360,
        duration: 40,
        ease: "none",
      }, 0);

      timelineRef.current = tl;
    }, orbitRef);

    return () => ctx.revert();
  }, []);

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
    // Smoothly decelerate and pause rotation
    gsap.to(timelineRef.current, { timeScale: 0, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    // Smoothly accelerate and resume rotation
    gsap.to(timelineRef.current, { timeScale: 1, duration: 0.5 });
  };

  // Positions corresponding to 12, 3, 6, 9 o'clock
  const positionClasses: Record<string, string> = {
    top: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
    right: "top-1/2 left-full -translate-x-1/2 -translate-y-1/2",
    bottom: "top-full left-1/2 -translate-x-1/2 -translate-y-1/2",
    left: "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2",
  };

  return (
    <section className="relative py-24 bg-[#141414] overflow-hidden border-b border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,45,45,0.03)_0%,transparent_70%)] pointer-events-none blur-3xl" />
      <div className="absolute -top-40 right-10 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.02)_0%,transparent_70%)] pointer-events-none blur-3xl" />

      {/* Particle elements inside the background */}
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 rounded-full mb-4">
            <Users className="w-3.5 h-3.5" />
            THE EXPERTS
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-black text-white uppercase tracking-tight max-w-2xl mx-auto">
            Meet The Experts Behind Every Repair
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-red to-[#D90429] mt-4 rounded-full mx-auto" />
          <p className="font-body text-sm md:text-base text-muted-text max-w-xl mx-auto mt-6">
            Our strength comes from a team of passionate specialists dedicated to precision, innovation, and exceptional workmanship.
          </p>
        </div>

        {/* Orbit Wheel Area */}
        <div className="relative flex items-center justify-center h-[380px] md:h-[620px] w-full max-w-[620px] mx-auto select-none">
          
          {/* Static sports alloy wheel SVG spokes in background (remains fixed behind Owner) */}
          <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.25" />
              <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.25" />
              <circle cx="50" cy="50" r="22" stroke="currentColor" strokeWidth="0.2" />
              
              {/* Radial Spokes (Sports Wheel lines) */}
              <line x1="50" y1="2" x2="50" y2="98" stroke="currentColor" strokeWidth="0.2" />
              <line x1="2" y1="50" x2="98" y2="50" stroke="currentColor" strokeWidth="0.2" />
              <line x1="16" y1="16" x2="84" y2="84" stroke="currentColor" strokeWidth="0.15" />
              <line x1="84" y1="16" x2="16" y2="84" stroke="currentColor" strokeWidth="0.15" />
              <line x1="31.3" y1="5" x2="68.7" y2="95" stroke="currentColor" strokeWidth="0.1" />
              <line x1="68.7" y1="5" x2="31.3" y2="95" stroke="currentColor" strokeWidth="0.1" />
              <line x1="5" y1="31.3" x2="95" y2="68.7" stroke="currentColor" strokeWidth="0.1" />
              <line x1="95" y1="31.3" x2="5" y2="68.7" stroke="currentColor" strokeWidth="0.1" />
            </svg>
          </div>

          {/* Center Node (Owner/Director) - Remains Fixed */}
          <div className="absolute z-30 flex flex-col items-center">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px 2px rgba(255, 45, 45, 0.2)",
                  "0 0 35px 6px rgba(255, 45, 45, 0.4)",
                  "0 0 20px 2px rgba(255, 45, 45, 0.2)"
                ]
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="relative w-[110px] h-[110px] md:w-[180px] md:h-[180px] rounded-full p-1 bg-gradient-to-tr from-primary-red to-[#FF6B6B] border border-white/10 shadow-2xl"
            >
              <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900">
                <Image
                  src="/images/team/owner.png"
                  alt="Ahmad Raza - Founder & Director"
                  fill
                  sizes="(max-width: 768px) 110px, 180px"
                  className="object-cover scale-105"
                  priority
                />
              </div>
            </motion.div>
            
            {/* Center Owner Designation Glass Badge */}
            <div className="mt-4 px-4 py-1.5 glass rounded-full border border-primary-red/30 shadow-[0_5px_15px_rgba(0,0,0,0.4)] text-center max-w-[130px] md:max-w-none">
              <p className="font-heading text-[10px] md:text-xs font-black text-white uppercase tracking-wider leading-none">
                Ahmad Raza
              </p>
              <p className="font-body text-[8px] md:text-[9px] text-primary-red font-semibold uppercase tracking-widest mt-1">
                Founder & Director
              </p>
            </div>
          </div>

          {/* Rotating Alloy Wheel Orbit container */}
          <div
            ref={orbitRef}
            className="absolute w-[240px] h-[240px] md:w-[480px] md:h-[480px] rounded-full border border-dashed border-white/10 z-20 flex items-center justify-center"
          >
            {/* Concentric helper circle design */}
            <div className="absolute inset-4 rounded-full border border-white/5" />
            <div className="absolute inset-12 rounded-full border border-white/5" />

            {/* Orbiting Team Members */}
            {teamMembers.map((member, index) => {
              const isActive = hoveredIndex === index;

              return (
                <div
                  key={index}
                  className={`absolute team-member-node select-none cursor-pointer ${
                    positionClasses[member.pos]
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => hoveredIndex === index ? handleMouseLeave() : handleMouseEnter(index)}
                >
                  <div className="relative group/avatar">
                    {/* Glowing effect ring behind active avatar */}
                    <div
                      className={`absolute -inset-2 bg-gradient-to-r from-primary-red to-[#FF6B6B] rounded-full blur transition-opacity duration-300 -z-10 ${
                        isActive ? "opacity-70 scale-105" : "opacity-0 group-hover/avatar:opacity-30"
                      }`}
                    />

                    {/* Member Avatar Circle Container */}
                    <div
                      className={`relative w-[65px] h-[65px] md:w-[100px] md:h-[100px] rounded-full p-0.5 border bg-[#141414]/90 backdrop-blur-sm transition-all duration-300 ${
                        isActive
                          ? "border-primary-red scale-110 shadow-[0_0_20px_rgba(255,45,45,0.4)]"
                          : "border-white/10 hover:border-white/30"
                      }`}
                    >
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-neutral-900">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 768px) 65px, 100px"
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Upright Floating Info Card - Framer Motion */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 15, x: "-50%" }}
                          animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
                          exit={{ opacity: 0, scale: 0.9, y: 10, x: "-50%" }}
                          transition={{ type: "spring", stiffness: 260, damping: 20 }}
                          className="absolute bottom-full left-1/2 mb-4 z-40 bg-[#090909]/95 border border-primary-red/30 p-4 rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.6)] w-56 text-center backdrop-blur-md"
                        >
                          {/* Inner glowing triangle pointer */}
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-primary-red/30" />
                          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[2px] w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[5px] border-t-[#090909]" />

                          <h4 className="font-heading text-xs font-black text-white uppercase tracking-wider leading-none">
                            {member.name}
                          </h4>
                          <p className="font-body text-[9px] text-primary-red font-bold uppercase tracking-widest mt-1">
                            {member.role}
                          </p>
                          <div className="h-px bg-white/5 my-2" />
                          <p className="font-body text-[10px] text-muted-text leading-relaxed">
                            {member.desc}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
