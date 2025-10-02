// Animation presets for consistent timing and easing across the app

export const durations = {
  fast: 0.3,
  normal: 0.5,
  slow: 0.8,
  page: 0.6,
} as const;

export const easings = {
  smooth: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
  bounce: [0.68, -0.55, 0.265, 1.55], // easeOutBounce
  elastic: [0.34, 1.56, 0.64, 1], // easeOutBack
} as const;

// Page transition variants for different routes
export const pageVariants = {
  '/': {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 100, opacity: 0 },
  },
  '/about': {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.1 },
  },
  '/programs': {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
  },
  '/contact': {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  },
  '/test': {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.1, opacity: 0 },
  },
  '*': {
    initial: { scale: 0.3, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.3, opacity: 0 },
  },
} as const;

export const pageTransition = {
  duration: durations.page,
  ease: easings.smooth,
} as const;

// Stagger animation variants
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.normal,
      ease: easings.smooth,
    },
  },
};

// Form animation variants
export const formVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: durations.normal,
        ease: easings.smooth,
      },
    },
  },
};

// Progress animation variants
export const progressVariants = {
  initial: { width: '0%' },
  animate: { width: '100%' },
  transition: {
    duration: durations.slow,
    ease: easings.smooth,
  },
};