"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Star,
  ShieldCheck,
  Clock,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Car,
  Wrench,
  Info,
} from "lucide-react";
import { Service } from "@/src/data/services";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
  onBookRepair: (service: Service) => void;
}

export default function ServiceCard({
  service,
  onLearnMore,
  onBookRepair,
}: ServiceCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between group/card transition-all duration-500 hover:shadow-[0_10px_35px_rgba(255,45,45,0.18)]">
      <div>
        {/* Card Header Image with Hover Zoom */}
        <CardHeader className="p-0 mb-4 rounded-xl overflow-hidden relative aspect-[16/10] border border-white/10 bg-[#141414]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover opacity-70 group-hover/card:scale-110 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent z-10" />

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2">
            {/* Category Tag */}
            <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-primary-red/40 text-primary-red px-2.5 py-1 rounded-full shadow-lg">
              {service.category}
            </span>

            {/* Featured Badge or Warranty */}
            <span className="text-[10px] font-heading font-bold uppercase tracking-wider bg-primary-red/90 text-white px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              {service.warranty}
            </span>
          </div>

          {/* Brand Pills bottom left of image */}
          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-1.5 flex-wrap">
            {service.brand.map((b, i) => (
              <span
                key={i}
                className="text-[10px] font-heading font-semibold bg-white/10 backdrop-blur-md border border-white/15 text-neutral-200 px-2 py-0.5 rounded-md flex items-center gap-1"
              >
                <Car className="w-2.5 h-2.5 text-primary-red" />
                {b}
              </span>
            ))}
          </div>

          {/* Turnaround Badge bottom right */}
          <div className="absolute bottom-3 right-3 z-20 text-[10px] font-heading font-semibold bg-black/80 backdrop-blur-md border border-white/10 text-neutral-300 px-2 py-0.5 rounded-md flex items-center gap-1">
            <Clock className="w-2.5 h-2.5 text-primary-red" />
            {service.turnaround}
          </div>
        </CardHeader>

        {/* Card Body */}
        <CardContent className="px-0 py-1 flex flex-col flex-1">
          {/* Rating Stars & Reviews */}
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] font-heading font-bold text-white">
              {service.rating.toFixed(1)}
            </span>
            <span className="text-[10px] text-muted-text">
              ({service.reviewsCount} verified)
            </span>
          </div>

          {/* Service Title */}
          <CardTitle className="mb-2 text-lg group-hover/card:text-primary-red transition-colors duration-300 line-clamp-2 leading-snug">
            {service.title}
          </CardTitle>

          {/* Description */}
          <CardDescription className="mb-4 text-xs text-neutral-300 leading-relaxed line-clamp-2">
            {service.description}
          </CardDescription>

          {/* Key Faults Fixed Bullet List */}
          <div className="space-y-1.5 mb-4 bg-surface/40 p-3 rounded-xl border border-white/5">
            <span className="text-[10px] font-heading uppercase tracking-wider font-bold text-neutral-400 block mb-1">
              Repairs & Rectifies:
            </span>
            {service.faultsFixed.slice(0, 2).map((fault, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-[11px] text-neutral-300 font-body">
                <CheckCircle2 className="w-3 h-3 text-primary-red shrink-0 mt-0.5" />
                <span className="line-clamp-1">{fault}</span>
              </div>
            ))}
          </div>

          {/* Price Estimate & Guarantee */}
          {service.priceEstimate && (
            <div className="flex items-center justify-between text-xs font-heading font-semibold border-t border-white/5 pt-3 mb-4 text-neutral-300">
              <span className="text-muted-text">Bench Repair:</span>
              <span className="text-primary-red font-bold">{service.priceEstimate}</span>
            </div>
          )}
        </CardContent>
      </div>

      {/* Card Footer Action Buttons */}
      <div className="pt-3 border-t border-white/10 flex flex-col gap-2 mt-auto">
        {/* Top Row: Learn More & Book Repair */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={() => onLearnMore(service)}
            className="w-full text-[11px] py-2 border-white/10 hover:border-white/30"
          >
            <Info className="w-3 h-3 text-neutral-400 group-hover:text-white" />
            <span>Learn More</span>
          </Button>

          <Button
            size="sm"
            variant="primary"
            onClick={() => onBookRepair(service)}
            className="w-full text-[11px] py-2 shadow-[0_0_15px_rgba(255,45,45,0.25)]"
          >
            <Wrench className="w-3 h-3" />
            <span>Book Repair</span>
          </Button>
        </div>

        {/* Bottom Row: Buy on eBay */}
        <a
          href={service.ebayUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full"
        >
          <Button
            size="sm"
            variant="outline"
            className="w-full text-[11px] py-2 border-amber-500/30 text-amber-300 hover:text-amber-200 hover:bg-amber-500/10 hover:border-amber-500/50 flex items-center justify-center gap-1.5"
          >
            <span className="font-heading font-bold">Buy on eBay</span>
            <ExternalLink className="w-3 h-3 text-amber-400" />
          </Button>
        </a>
      </div>
    </Card>
  );
}
