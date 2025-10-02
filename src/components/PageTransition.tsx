import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { pageVariants, pageTransition } from "@/lib/animations";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const location = useLocation();

  // Get the appropriate variants for the current route
  const getVariants = (pathname: string) => {
    return pageVariants[pathname as keyof typeof pageVariants] || pageVariants['*'];
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={getVariants(location.pathname)}
        transition={pageTransition}
        className="min-h-screen"
        style={{ willChange: 'transform, opacity' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
