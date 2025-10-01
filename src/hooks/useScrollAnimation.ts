import { useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface ScrollAnimationOptions {
  offset?: [number, number];
  stiffness?: number;
  damping?: number;
  restDelta?: number;
}

interface ScrollAnimationReturn {
  scrollYProgress: MotionValue<number>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
  createTransform: (input: number[], output: number[]) => MotionValue<number>;
}

export function useScrollAnimation(
  ref: RefObject<HTMLElement>,
  options: ScrollAnimationOptions = {}
): ScrollAnimationReturn {
  const {
    offset = ["start end", "end start"],
    stiffness = 100,
    damping = 30,
    restDelta = 0.001,
  } = options;

  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any,
  });

  // Apply spring physics for smooth animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness,
    damping,
    restDelta,
  });

  // Pre-defined transforms
  const y = useTransform(smoothProgress, [0, 1], [100, -100]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const rotate = useTransform(smoothProgress, [0, 1], [0, 360]);

  // Helper to create custom transforms
  const createTransform = (input: number[], output: number[]) => {
    return useTransform(smoothProgress, input, output);
  };

  return {
    scrollYProgress: smoothProgress,
    y,
    opacity,
    scale,
    rotate,
    createTransform,
  };
}

// Counter animation hook
export function useCounterAnimation(target: number, duration: number = 2) {
  const { scrollYProgress } = useScroll();
  const counter = useTransform(scrollYProgress, [0, 1], [0, target]);
  
  return useSpring(counter, {
    stiffness: 50,
    damping: 20,
    duration: duration * 1000,
  });
}

// Parallax hook with intensity control
export function useParallax(ref: RefObject<HTMLElement>, intensity: number = 1) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-100 * intensity, 100 * intensity]
  );

  const smoothY = useSpring(y, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return smoothY;
}
