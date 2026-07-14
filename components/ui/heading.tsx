"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadingProps extends Omit<HTMLMotionProps<"div">, "title" | "children"> {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function Heading({ className, badge, title, subtitle, align = "center", ...props }: HeadingProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  const alignStyles = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={cn("flex flex-col mb-12 md:mb-16", alignStyles[align], className)}
      {...props}
    >
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary-red bg-primary-red/10 border border-primary-red/20 rounded-full mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-red animate-ping" />
          {badge}
        </span>
      )}
      
      <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase max-w-4xl">
        {title}
      </h2>

      {/* Decorative Red Accent Line */}
      <div className="h-1 w-20 bg-gradient-to-r from-primary-red to-accent-red mt-4 rounded-full" />

      {subtitle && (
        <p className="font-body text-base md:text-lg text-muted-text max-w-2xl mt-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
