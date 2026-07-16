"use client";

import { useState, useRef, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
import Image from "next/image";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative py-24 bg-[#141414] overflow-hidden">
      {/* Background spot glows using radial gradients to prevent GPU rendering/filter bugs on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(255,45,45,0.05)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(217,4,41,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Heading
          badge="Interactive Comparison"
          title="The Restoration Standard"
          subtitle="Drag the slider to compare typical component failures with our engineering-grade electronic rebuilds."
        />

        {/* Comparison Slider Container */}
        <div className="max-w-4xl mx-auto relative h-[350px] sm:h-[500px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl select-none">
          <div
            ref={containerRef}
            className="relative w-full h-full cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/instrument_cluster.png"
                alt="Repaired Instrument Cluster - clean dials, glowing LCD"
                fill
                className="object-cover pointer-events-none"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
              <div className="absolute bottom-6 right-6 glass px-3 py-1 text-xs font-bold text-white rounded-full uppercase tracking-wider">
                Restored (OEM Calibration)
              </div>
            </div>

            {/* Before Image (Sliding Overlay) */}
            <div
              className="absolute inset-0 w-full h-full overflow-hidden"
              style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
            >
              <Image
                src="/images/instrument_cluster.png"
                alt="Failed Instrument Cluster - broken speedometer dials, dead LCD illumination"
                fill
                className="object-cover filter grayscale contrast-125 brightness-50 pointer-events-none"
                sizes="(max-width: 1200px) 100vw, 800px"
              />
              {/* Fake overlay warning text to look damaged */}
              <div className="absolute inset-0 bg-black/30 flex flex-col items-start justify-center p-12 pointer-events-none">
                <div className="px-4 py-2 bg-red-600/20 border border-red-500/50 rounded-xl text-red-500 font-heading text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  LCD Connection Failed / Dials Frozen
                </div>
              </div>
              <div className="absolute bottom-6 left-6 glass bg-red-950/40 border-red-500/20 px-3 py-1 text-xs font-bold text-primary-red rounded-full uppercase tracking-wider">
                Malfunctioning Module
              </div>
            </div>

            {/* Divider Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary-red z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle Knob */}
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#090909] border-2 border-primary-red flex items-center justify-center shadow-2xl">
                <div className="flex gap-1 justify-center items-center">
                  <span className="w-1.5 h-3 border-l border-r border-neutral-600 group-hover:border-primary-red" />
                  <span className="w-1.5 h-3 border-l border-r border-neutral-600 group-hover:border-primary-red" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
