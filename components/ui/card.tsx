"use client";

import * as React from "react";
import { motion, HTMLMotionProps, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  tiltEffect?: boolean;
  glowEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, tiltEffect = true, glowEffect = true, ...props }, ref) => {
    const cardRef = React.useRef<HTMLDivElement | null>(null);

    // 3D Tilt Values
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { damping: 20, stiffness: 200 });
    const springY = useSpring(y, { damping: 20, stiffness: 200 });

    const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

    // Border Glow Position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      
      if (tiltEffect) {
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        
        x.set(mouseXVal / width - 0.5);
        y.set(mouseYVal / height - 0.5);
      }

      if (glowEffect) {
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
      mouseX.set(0);
      mouseY.set(0);
    };

    const mergedRef = (node: HTMLDivElement | null) => {
      cardRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };

    return (
      <motion.div
        ref={mergedRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: tiltEffect ? rotateX : 0,
          rotateY: tiltEffect ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "glass-card relative rounded-2xl p-6 overflow-hidden flex flex-col group/card cursor-pointer hover:border-primary-red/30",
          className
        )}
        {...props}
      >
        {/* Border Glow Spotlight effect */}
        {glowEffect && (
          <motion.div
            className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-0"
            style={{
              background: useTransform(
                [mouseX, mouseY],
                ([mx, my]) =>
                  `radial-gradient(400px circle at ${mx}px ${my}px, rgba(255, 45, 45, 0.08) 0%, transparent 80%)`
              ),
            }}
          />
        )}

        <div className="relative z-10 flex flex-col flex-1 h-full" style={{ transform: "translateZ(20px)" }}>
          {children}
        </div>
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export function CardHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex flex-col gap-1.5 mb-4", className)} {...props}>{children}</div>;
}

export function CardTitle({ className, children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-heading text-xl font-bold tracking-tight text-white", className)} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ className, children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-muted-text font-body", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("flex-1 text-sm font-body text-neutral-300", className)} {...props}>{children}</div>;
}
