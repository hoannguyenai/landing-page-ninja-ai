import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import CodingGame from "@/components/CodingGame";

export function CodingGameSection() {
  // Section container with directional scroll reveal
  const containerReveal = useScrollReveal({
    once: false, // Allow re-triggering based on scroll direction
    amount: 0.3,
    direction: "up",
    distance: 0, // No translate for zoom effect
    duration: 0.8
  });

  // Parallax transforms for background elements
  const { scrollYProgress } = useScroll();
  const bg1Y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]); // Slow parallax
  const bg1Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.4, 0.25]); // Pulse effect

  const bg2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]); // Reverse parallax
  const bg2Opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 0.35, 0.2]); // Pulse effect
  const bg2Rotate = useTransform(scrollYProgress, [0, 1], [0, 5]); // Subtle rotation

  // Headline text reveal - changes based on scroll direction
  const headlineReveal = useTextReveal({
    once: false,
    amount: 0.3,
    type: "letter", // Default for scroll down
    staggerDelay: 0.05, // Faster for typewriter effect
    delay: 0.2
  });

  return (
    <motion.section
      ref={containerReveal.ref}
      initial={{
        opacity: 0,
        scale: 1.1 // Start zoomed in
      }}
      animate={containerReveal.isInView ? {
        opacity: 1,
        scale: 1, // Zoom out to normal
        transition: {
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      } : {
        opacity: 0,
        scale: 1.1
      }}
      className="py-12 md:py-20 px-4 relative overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-16 h-16 bg-yellow-200 rounded-full"
        style={{
          y: bg1Y,
          opacity: bg1Opacity,
          willChange: 'transform, opacity'
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-purple-200 rounded-full"
        style={{
          y: bg2Y,
          opacity: bg2Opacity,
          rotate: bg2Rotate,
          willChange: 'transform, opacity'
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.6, delay: 0.1 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Headline with Typewriter Glow Effect */}
          <motion.h2
            {...headlineReveal.containerProps}
            className="text-3xl lg:text-4xl font-bold mb-4 text-foreground"
          >
            {"🎮 Học lập trình qua trò chơi".split("").map((char, index) => (
              <motion.span
                key={index}
                {...headlineReveal.childProps}
                className="inline-block"
                style={{
                  color: 'hsl(var(--foreground))',
                  textShadow: headlineReveal.isInView
                    ? "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3)"
                    : "none",
                  transition: "text-shadow 0.3s ease"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h2>

          {/* Subheadline with Slide-in Effect */}
          <motion.p
            className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-4"
            whileInView={{
              opacity: [0, 1],
              x: [-50, 0], // Slide in from left
              transition: { duration: 0.6, delay: 0.8 }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Thử ngay game lập trình tương tác! Học cách sử dụng loops, điều kiện và biến
            thông qua việc điều khiển rocket đến ngôi sao.
          </motion.p>
        </motion.div>

        {/* Game Container with Bounce-in Effect */}
        <motion.div
          whileInView={{
            opacity: [0, 1],
            scale: [0.8, 1.1, 1], // Bounce-in effect
            rotate: [3, -2, 0], // Subtle rotation bounce
            transition: {
              duration: 0.8,
              delay: 0.4,
              ease: "easeOut"
            }
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <CodingGame />
        </motion.div>
      </div>
    </motion.section>
  );
}