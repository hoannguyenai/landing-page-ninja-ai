import { useInView } from "framer-motion";
import { useRef } from "react";

interface TextRevealOptions {
  once?: boolean;
  amount?: number;
  staggerDelay?: number;
  type?: "letter" | "word";
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
}

export function useTextReveal(options: TextRevealOptions = {}) {
  const {
    once = true,
    amount = 0.3,
    staggerDelay = 0.03,
    type = "letter",
    direction = "up",
    distance = 20,
    duration = 0.6,
    delay = 0,
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  // Split text into elements
  const splitText = (text: string) => {
    return type === "word" ? text.split(" ") : text.split("");
  };

  // Generate variants for text elements
  const getTextVariants = () => {
    const container = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
          delayChildren: delay,
        },
      },
    };

    const child = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          ease: [0.25, 0.46, 0.45, 0.94] as any, // easeOutQuart
        },
      },
    };

    return { container, child };
  };

  const variants = getTextVariants();

  return {
    ref,
    isInView,
    variants,
    splitText,
    containerProps: {
      ref,
      variants: variants.container,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
    },
    childProps: {
      variants: variants.child,
      style: { display: "inline-block" },
    },
  };
}