import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { TypewriterText } from "./TypewriterText";
import heroBanner from "@/assets/hero-banner.jpg";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Check if section is in view for staggered animations
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  return (
    <section
      ref={containerRef}
      className={`relative overflow-hidden w-full h-screen flex items-center ${className}`}
      style={{
        backgroundAttachment: "fixed", // CSS fallback for older browsers
      }}
    >
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100"
          style={{ y: backgroundY }}
        />

        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            y: backgroundY,
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Container */}
        <motion.div
          className="container mx-auto max-w-7xl relative z-10 px-6 md:px-8 py-16 md:py-24"
          style={{ y: contentY }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="space-y-8">
              {/* Badge */}
              <motion.div
                className="bg-teal-100 text-teal-800 inline-flex items-center rounded-full px-4 py-2 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                🚀 Khơi nguồn sáng tạo
              </motion.div>

              {/* Headline with Stagger Text */}
              <div className="min-h-[200px] flex items-start">
                <StaggerText
                  text="Giúp con khám phá tư duy lập trình từ sớm"
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
                  delay={0.4}
                  highlight={[
                    { start: 18, end: 23, className: "text-blue-600" },
                    { start: 24, end: 33, className: "text-emerald-500" }
                  ]}
                />
              </div>

              {/* Subheadline with Stagger Text */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <StaggerText
                  text="Khóa học giúp học sinh phát triển tư duy logic, sáng tạo qua dự án thực tế."
                  className="text-xl leading-relaxed"
                  style={{ color: '#374151' }}
                  delay={1.0}
                  staggerType="word"
                />
              </motion.div>

              {/* CTA Section */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <TypewriterText
                  texts={[
                    "Làm Bài Test Miễn Phí Ngay",
                    "Đăng ký học thử miễn phí",
                    "Khám phá lộ trình học phù hợp"
                  ]}
                  loop={true}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-colors"
                  speed={80}
                  delay={1500}
                />
                <p className="text-sm text-muted-foreground">
                  Xác định trình độ lập trình của con chỉ trong 5 phút – nhận ngay báo cáo kết quả & lộ trình học phù hợp.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              className="animate-slide-right"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.img
                src={heroBanner}
                alt="Học sinh lập trình tại Rocket Tech Academy"
                className="rounded-2xl shadow-large w-full"
                style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.2), var(--shadow-large)" }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]) }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-teal-200 rounded-full opacity-20 animate-float"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ["0%", "30%"]),
            animationDelay: "1s"
          }}
        />
      </section>
  );
}

// StaggerText Component for letter/word reveals
interface StaggerTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  staggerType?: "letter" | "word";
  highlight?: Array<{start: number; end: number; className: string}>;
}

function StaggerText({
  text,
  className = "",
  style,
  delay = 0,
  staggerType = "letter",
  highlight = []
}: StaggerTextProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const elements = staggerType === "word"
    ? text.split(" ")
    : text.split("");

  return (
    <motion.span
      className={className}
      style={style}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {elements.map((element, index) => {
        const highlightClass = highlight.find(h => index >= h.start && index <= h.end)?.className || "";
        return (
          <motion.span
            key={index}
            variants={child}
            style={{ display: "inline-block" }}
            className={highlightClass}
          >
            {element}
            {staggerType === "word" && index < elements.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </motion.span>
  );
}