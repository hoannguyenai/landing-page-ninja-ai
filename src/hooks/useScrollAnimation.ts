import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  offset?: any;
  outputRange?: [number, number];
  stiffness?: number;
  damping?: number;
  mass?: number;
}

export function useScrollAnimation(options: ScrollAnimationOptions = {}) {
  const {
    offset = ["start end", "end start"],
    outputRange = [0, 1],
    stiffness = 400,
    damping = 40,
    mass = 1,
  } = options;

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  // Create smooth spring animation
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
    mass,
  });

  // Common transforms
  const y = useTransform(smoothProgress, [0, 1], outputRange);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.1]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Helper function to create custom transforms
  const createTransform = (
    inputRange: [number, number] = [0, 1],
    outputRange: [number, number],
    springConfig?: { stiffness: number; damping: number; mass: number }
  ): MotionValue<number> => {
    const transform = useTransform(smoothProgress, inputRange, outputRange);
    return springConfig ? useSpring(transform, springConfig) : transform;
  };

  // Counter animation for stats
  const counter = useTransform(smoothProgress, [0, 1], [0, 100]);

  // Morph transforms for 404 page
  const morphScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 0.8]);
  const morphRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  return {
    ref,
    scrollYProgress,
    smoothProgress,
    y,
    opacity,
    scale,
    rotate,
    counter,
    morphScale,
    morphRotate,
    createTransform,
    // Pre-built transform combinations
    parallaxY: createTransform([0, 1], [-100, 100]),
    parallaxX: createTransform([0, 1], [-50, 50]),
    fadeInUp: {
      opacity: useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 1]),
      y: useTransform(smoothProgress, [0, 0.3, 1], [50, 0, 0]),
    },
    scaleIn: {
      opacity: useTransform(smoothProgress, [0, 0.5, 1], [0, 1, 1]),
      scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 1.05]),
    },
    slideInLeft: {
      opacity: useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 1]),
      x: useTransform(smoothProgress, [0, 0.3, 1], [-50, 0, 0]),
    },
    slideInRight: {
      opacity: useTransform(smoothProgress, [0, 0.3, 1], [0, 1, 1]),
      x: useTransform(smoothProgress, [0, 0.3, 1], [50, 0, 0]),
    },
    // Progress bar animation
    progressWidth: useTransform(smoothProgress, [0, 1], ['0%', '100%']),
    // Text reveal stagger
    textReveal: useTransform(smoothProgress, [0, 0.5, 1], [0, 0.5, 1]),
  };
}