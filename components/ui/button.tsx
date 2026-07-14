"use client";

import * as React from "react";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isMagnetic?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isMagnetic = true,
      glow = true,
      children,
      ...props
    },
    ref
  ) => {
    // Magnetic Effect States
    const buttonRef = React.useRef<HTMLButtonElement | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isMagnetic || !buttonRef.current) return;
      const rect = buttonRef.current.getBoundingClientRect();
      const clientX = e.clientX - rect.left - rect.width / 2;
      const clientY = e.clientY - rect.top - rect.height / 2;
      // Allow up to 15px displacement
      x.set(clientX * 0.35);
      y.set(clientY * 0.35);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    // Style classes
    const baseStyles =
      "relative inline-flex items-center justify-center font-heading font-medium tracking-wide rounded-full overflow-hidden transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-red/50 cursor-pointer active:scale-95";

    const variants = {
      primary: "bg-[#FF2D2D] text-white hover:bg-[#D90429] hover:shadow-[0_0_20px_rgba(255,45,45,0.4)]",
      secondary: "bg-surface text-white border border-border-custom hover:bg-neutral-800 hover:border-neutral-700",
      outline: "bg-transparent text-white border border-border-custom hover:border-primary-red hover:text-white hover:shadow-[0_0_15px_rgba(255,45,45,0.25)]",
      ghost: "bg-transparent text-muted-text hover:text-white hover:bg-white/5",
      danger: "bg-[#D90429] text-white hover:bg-[#FF2D2D] hover:shadow-[0_0_20px_rgba(217,4,41,0.4)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs",
      md: "px-6 py-3 text-sm",
      lg: "px-8 py-4 text-base",
    };

    const mergedRef = (node: HTMLButtonElement | null) => {
      buttonRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.button
        ref={mergedRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ x: springX, y: springY }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Glow light track under primary & danger */}
        {glow && (variant === "primary" || variant === "danger" || variant === "outline") && (
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
