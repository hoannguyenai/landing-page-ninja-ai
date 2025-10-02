import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTextReveal } from "@/hooks/useTextReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import instructor1 from "@/assets/instructor-1.jpg";

interface Lecturer {
  id: number;
  name: string;
  title: string;
  description: string;
  avatar: string | null;
  initials?: string;
}

const lecturers: Lecturer[] = [
  {
    id: 1,
    name: "Lê Thành Chỉnh",
    title: "Cử nhân CNTT Bách Khoa, chuyên về Python & AI",
    description: "Nhiều năm kinh nghiệm giảng dạy học sinh, đam mê truyền cảm hứng công nghệ",
    avatar: instructor1,
  },
  {
    id: 2,
    name: "Nguyễn Quang",
    title: "Chuyên gia đa công nghệ, fullstack developer",
    description: "Từng tham gia nhiều dự án phần mềm thực tế, kinh nghiệm thực chiến phong phú",
    avatar: null,
    initials: "NQ",
  },
];

export function LecturerCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Section container with directional scroll reveal
  const containerReveal = useScrollReveal({
    once: false, // Allow re-triggering based on scroll direction
    amount: 0.3,
    direction: "up",
    distance: 0, // No translate for zoom effect
    duration: 0.8
  });

  // Headline text reveal - changes based on scroll direction
  const headlineReveal = useTextReveal({
    once: false,
    amount: 0.3,
    type: "word", // Default for scroll down
    staggerDelay: 0.1,
    delay: 0.2
  });

  // Auto carousel logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % lecturers.length);
    }, 4000); // 4 seconds auto-slide

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause auto-play when user interacts
  };

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
      className="py-20 px-4 bg-muted/30 sticky top-0 z-10"
      style={{ minHeight: '100vh' }} // Sticky viewport height
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Header Icon with Bounce-in + Glow */}
          <motion.div
            className="text-4xl mb-4"
            whileInView={{
              scale: [0.5, 1.3, 1], // Bounce-in effect
              rotate: [0, 15, 0], // Subtle bounce
              transition: { duration: 0.8, ease: "easeOut" }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 0px rgba(59, 130, 246, 0)",
                  "0 0 10px rgba(59, 130, 246, 0.5)",
                  "0 0 20px rgba(59, 130, 246, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            >
              👨‍🏫
            </motion.span>
          </motion.div>

          {/* Headline with Word-by-word Wipe Mask */}
          <motion.h2
            {...headlineReveal.containerProps}
            className="text-4xl font-bold mb-6"
          >
            {"Giảng viên – Truyền cảm hứng từ công nghệ".split(" ").map((word, index) => (
              <motion.span
                key={index}
                {...headlineReveal.childProps}
                className="inline-block mr-2"
                style={{
                  background: headlineReveal.isInView
                    ? "linear-gradient(90deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)"
                    : "transparent",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  color: headlineReveal.isInView ? "transparent" : "inherit",
                  backgroundSize: "200% 100%",
                  animation: headlineReveal.isInView ? "wipeMask 0.8s ease-out forwards" : "none",
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h2>
        </div>

        {/* Lecturer Carousel */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex justify-center"
            >
              <LecturerCard lecturer={lecturers[currentIndex]} />
            </motion.div>
          </AnimatePresence>

          {/* Dot Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {lecturers.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted-foreground/30'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentIndex ? [1, 1.2, 1] : 1,
                  transition: { duration: 0.3 }
                }}
              />
            ))}
          </div>
        </div>

        {/* Closing Text */}
        <motion.div
          className="text-center"
          whileInView={{
            opacity: [0, 1],
            scale: [0.9, 1.05, 1], // Pulse effect
            transition: { duration: 0.8, delay: 0.4 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-lg text-muted-foreground">
            ➡️ Kinh nghiệm giảng dạy + thực chiến công nghệ, giúp học sinh học dễ hiểu – làm được ngay
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}

// Individual Lecturer Card Component
function LecturerCard({ lecturer }: { lecturer: Lecturer }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-md mx-auto"
    >
      <Card className="shadow-medium">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            {/* Avatar with Scale-in + Rotate */}
            <motion.div
              className="w-20 h-20 rounded-full overflow-hidden shadow-soft flex-shrink-0"
              whileInView={{
                scale: [0.8, 1], // Scale-in
                rotate: [-5, 0], // Rotate to normal
                transition: { duration: 0.6, delay: 0.2 }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {lecturer.avatar ? (
                <img
                  src={lecturer.avatar}
                  alt={lecturer.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl">
                  {lecturer.initials}
                </div>
              )}
            </motion.div>

            {/* Content with Staggered Reveals */}
            <motion.div
              className="flex-1 space-y-2"
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Name with Fade-in + Slide-up */}
              <motion.h3
                className="text-xl font-semibold"
                whileInView={{
                  opacity: [0, 1],
                  y: [20, 0],
                  transition: { duration: 0.6, delay: 0.3 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {lecturer.name}
              </motion.h3>

              {/* Title with Fade-in + Slide-up */}
              <motion.p
                className="text-muted-foreground"
                whileInView={{
                  opacity: [0, 1],
                  y: [15, 0],
                  transition: { duration: 0.6, delay: 0.4 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {lecturer.title}
              </motion.p>

              {/* Description with Stagger Text Reveal */}
              <motion.p
                className="text-sm"
                whileInView={{
                  opacity: [0, 1],
                  transition: { duration: 0.6, delay: 0.5 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                {lecturer.description.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    className="inline-block mr-1"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, delay: 0.6 + index * 0.05 }
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}