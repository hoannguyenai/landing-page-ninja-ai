import { useInView } from "framer-motion";
import { useRef } from "react";

interface StaggerGridOptions {
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale";
  distance?: number;
  duration?: number;
}

export function useStaggerGrid(options: StaggerGridOptions = {}) {
  const {
    once = true,
    amount = 0.3,
    staggerDelay = 0.1,
    direction = "up",
    distance = 30,
    duration = 0.6,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Generate variants for grid items
  const getItemVariants = (index: number) => {
    const baseDelay = index * staggerDelay;

    let initial: any = { opacity: 0 };
    let animate: any = {
      opacity: 1,
      transition: {
        duration,
        delay: baseDelay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
      },
    };

    // Add directional movement
    switch (direction) {
      case "up":
        initial.y = distance;
        animate.y = 0;
        break;
      case "down":
        initial.y = -distance;
        animate.y = 0;
        break;
      case "left":
        initial.x = distance;
        animate.x = 0;
        break;
      case "right":
        initial.x = -distance;
        animate.x = 0;
        break;
      case "scale":
        initial.scale = 0.9;
        animate.scale = 1;
        break;
      default:
        initial.y = distance;
        animate.y = 0;
    }

    return {
      initial,
      animate: isInView ? animate : initial,
    };
  };

  // Container variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.2,
      },
    },
  };

  return {
    ref,
    isInView,
    containerVariants,
    getItemVariants,
    staggerDelay,
  };
}