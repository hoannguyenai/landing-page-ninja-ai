import { motion, Variants } from "framer-motion";
import * as React from "react";
import { ReactNode, useRef } from "react";
import { useParallax } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationVariant = "fade" | "slide" | "scale" | "parallax" | "rotate";
type Direction = "up" | "down" | "left" | "right";

interface ScrollSectionProps {
  children: ReactNode;
  className?: string;
  variant?: AnimationVariant;
  direction?: Direction;
  delay?: number;
  intensity?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollSection({
  children,
  className,
  variant = "fade",
  direction = "up",
  delay = 0,
  intensity = 1,
  duration = 0.6,
  once = true,
}: ScrollSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const parallaxY = useParallax(ref, intensity);

  // Smooth easing curve
  const easing: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

  // Variants based on animation type
  const getVariants = (): Variants => {
    const baseTransition = {
      duration,
      ease: easing,
      delay,
    };

    switch (variant) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: baseTransition,
          },
        };

      case "slide":
        const slideOffset = 60;
        const slideInitial = {
          up: { y: slideOffset, opacity: 0 },
          down: { y: -slideOffset, opacity: 0 },
          left: { x: slideOffset, opacity: 0 },
          right: { x: -slideOffset, opacity: 0 },
        }[direction];

        return {
          hidden: slideInitial,
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: baseTransition,
          },
        };

      case "scale":
        return {
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: baseTransition,
          },
        };

      case "rotate":
        return {
          hidden: {
            rotate: -10,
            scale: 0.9,
            opacity: 0,
          },
          visible: {
            rotate: 0,
            scale: 1,
            opacity: 1,
            transition: baseTransition,
          },
        };

      case "parallax":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: baseTransition },
        };

      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: baseTransition },
        };
    }
  };

  const variants = getVariants();

  // For parallax, use motion value directly
  if (variant === "parallax") {
    return (
      <motion.div
        ref={ref}
        style={{ y: parallaxY }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-100px" }}
        variants={variants}
        className={cn("will-change-transform", className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={variants}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for animating children in sequence
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Counter animation component
interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  suffix = "",
  className,
}: CounterProps) {
  const [count, setCount] = React.useState(from);
  const [isInView, setIsInView] = React.useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = from + (to - from) * easeOut;
      
      setCount(Math.floor(current));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [from, to, duration, isInView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsInView(true)}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {count}{suffix}
    </motion.span>
  );
}
