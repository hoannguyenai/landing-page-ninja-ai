import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { durations, easings } from "@/lib/animations";

interface ScrollSectionProps {
  children: React.ReactNode;
  variant?: 'fade' | 'slide' | 'scale' | 'parallax';
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  intensity?: number;
  className?: string;
  once?: boolean;
  margin?: any;
}

const variants = {
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      }
    }
  },
  slide: {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
    }),
    visible: (direction: string) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      }
    })
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: durations.normal,
        ease: easings.bounce,
      }
    }
  },
  parallax: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: durations.slow,
        ease: easings.smooth,
      }
    }
  }
};

export function ScrollSection({
  children,
  variant = 'fade',
  direction = 'up',
  delay = 0,
  intensity = 1,
  className = "",
  once = true,
  margin = "-100px"
}: ScrollSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin });

  // For parallax variant, use scroll animation
  const scrollAnim = useScrollAnimation({
    offset: ["start end", "end start"],
    outputRange: [0, intensity * 100],
  });

  if (variant === 'parallax') {
    return (
      <motion.section
        ref={scrollAnim.ref}
        className={className}
        style={{
          y: scrollAnim.y,
          willChange: 'transform',
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants.parallax}
        transition={{ delay }}
      >
        {children}
      </motion.section>
    );
  }

  // For other variants, use whileInView
  return (
    <motion.section
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={variants[variant]}
      custom={direction}
      transition={{ delay }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </motion.section>
  );
}