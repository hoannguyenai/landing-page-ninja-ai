import { useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface UseStaggerAnimationOptions {
  once?: boolean;
  margin?: string;
  staggerDelay?: number;
}

export function useStaggerAnimation(options: UseStaggerAnimationOptions = {}) {
  const {
    once = true,
    margin = "-50px",
    staggerDelay = 0.1,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  const containerVariants = {
    ...staggerContainer,
    visible: {
      ...staggerContainer.visible,
      transition: {
        ...staggerContainer.visible.transition,
        staggerChildren: staggerDelay,
      },
    },
  };

  return {
    ref,
    isInView,
    containerVariants,
    itemVariants: staggerItem,
  };
}