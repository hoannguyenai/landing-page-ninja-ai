import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import CodingGame from "@/pages/components/CodingGame";

export function CodingGameSection() {
  const containerReveal = useScrollReveal({
    once: false,
    amount: 0.3,
    direction: "up",
    distance: 0,
    duration: 0.8,
  });

  const { scrollYProgress } = useScroll();
  const bg1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const bg1Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.25, 0.4, 0.25]
  );

  const bg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const bg2Opacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.2, 0.35, 0.2]
  );
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

  const headlineReveal = useTextReveal({
    once: false,
    amount: 0.3,
    type: "letter",
    staggerDelay: 0.05,
    delay: 0.2,
  });

  return (
    <motion.section
      ref={containerReveal.ref}
      initial={{
        opacity: 0,
        scale: 1.1,
      }}
      animate={
        containerReveal.isInView
          ? {
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
              },
            }
          : {
              opacity: 0,
              scale: 1.1,
            }
      }
      className="py-12 sm:py-16 md:py-20 px-4 relative overflow-hidden bg-[#a3bafa]/5"
    >
      {/* Parallax Background - Hidden on mobile for performance */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-12 sm:w-16 h-12 sm:h-16 bg-yellow-200 rounded-full hidden sm:block"
        style={{
          y: bg1Y,
          opacity: bg1Opacity,
          willChange: "transform, opacity",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-10 sm:w-12 h-10 sm:h-12 bg-purple-200 rounded-full hidden sm:block"
        style={{
          y: bg2Y,
          opacity: bg2Opacity,
          rotate: bg2Rotate,
          willChange: "transform, opacity",
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 sm:mb-12"
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Headline */}
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-blue-600 px-2">
            🎮 Học lập trình qua trò chơi
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-3"
            whileInView={{
              opacity: [0, 1],
              x: [-50, 0],
              transition: { duration: 0.6, delay: 0.8 },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Thử ngay game lập trình tương tác! Học cách sử dụng loops, điều kiện
            và biến thông qua việc điều khiển rocket đến ngôi sao.
          </motion.p>
        </motion.div>

        {/* Game Container */}
        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.8, 1.1, 1],
            rotate: [3, -2, 0],
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut",
            },
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CodingGame />
        </motion.div>
      </div>
    </motion.section>
  );
}
