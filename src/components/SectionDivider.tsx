import { motion } from "framer-motion";

interface SectionDividerProps {
  colorTop: string;
  colorBottom: string;
  flip?: boolean;
}

export function SectionDivider({ colorTop, colorBottom, flip = false }: SectionDividerProps) {
  return (
    <div className="w-full h-20 md:h-24 lg:h-28 overflow-hidden">
      <svg
        className={`w-full h-full ${flip ? 'transform scaleY(-1)' : ''}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,60 C300,0 900,120 1200,60 L1200,120 L0,120 Z"
          fill={colorTop}
          animate={{ d: "M0,60 C300,10 900,110 1200,60 L1200,120 L0,120 Z" }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <path
          d="M0,60 C300,0 900,120 1200,60 L1200,0 L0,0 Z"
          fill={colorBottom}
        />
      </svg>
    </div>
  );
}