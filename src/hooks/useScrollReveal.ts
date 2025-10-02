import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface ScrollRevealOptions {
  once?: boolean;
  amount?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    once = false,
    amount = 0.3,
    direction = "up",
    distance = 30,
    duration = 0.6,
    delay = 0,
  } = options;

  const ref = useRef(null);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const isInView = useInView(ref, { once, amount });

  // Calculate initial and animate states based on scroll direction
  const getInitialState = () => {
    const baseState = { opacity: 0 };

    if (scrollDirection === "down") {
      // Scrolling down: elements come from bottom
      switch (direction) {
        case "up":
          return { ...baseState, y: distance };
        case "down":
          return { ...baseState, y: -distance };
        case "left":
          return { ...baseState, x: distance };
        case "right":
          return { ...baseState, x: -distance };
        default:
          return { ...baseState, y: distance };
      }
    } else {
      // Scrolling up: elements come from top
      switch (direction) {
        case "up":
          return { ...baseState, y: -distance };
        case "down":
          return { ...baseState, y: distance };
        case "left":
          return { ...baseState, x: -distance };
        case "right":
          return { ...baseState, x: distance };
        default:
          return { ...baseState, y: -distance };
      }
    }
  };

  const getAnimateState = () => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
    },
  });

  return {
    ref,
    isInView,
    scrollDirection,
    initial: getInitialState(),
    animate: isInView ? getAnimateState() : getInitialState(),
  };
}