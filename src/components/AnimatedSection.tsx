import { motion } from "framer-motion";
import { useStaggerAnimation } from "@/hooks/useStaggerAnimation";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'stagger' | 'fade' | 'slide';
}

export function AnimatedSection({
  children,
  className = "",
  variant = 'stagger'
}: AnimatedSectionProps) {
  const { ref, isInView, containerVariants, itemVariants } = useStaggerAnimation();

  if (variant === 'stagger') {
    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={className}
      >
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={itemVariants}>
            {children}
          </motion.div>
        )}
      </motion.div>
    );
  }

  // Fallback for other variants
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}