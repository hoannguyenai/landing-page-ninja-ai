import { motion, useScroll, useTransform } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import { useTextReveal } from "@/hooks/useTextReveal";
import brainDevelopment from "@/assets/brain-development.jpg";
import subjectsConnection from "@/assets/subjects-connection.jpg";
import techHabits from "@/assets/tech-habits.jpg";
import alphaGeneration from "@/assets/alpha-generation.jpg";

interface BenefitItem {
  number: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const benefits: BenefitItem[] = [
  {
    number: 1,
    title: "Giúp con phát triển trí não trong giai đoạn vàng",
    description: "Học lập trình sớm giúp kích thích tư duy logic, sáng tạo và giải quyết vấn đề.",
    image: brainDevelopment,
    alt: "Phát triển trí não cho trẻ"
  },
  {
    number: 2,
    title: "Phát triển tư duy – học tốt các môn trên trường",
    description: "Lập trình rèn luyện khả năng kết nối kiến thức Toán, Lý, Anh, Tin học.",
    image: subjectsConnection,
    alt: "Kết nối kiến thức các môn học"
  },
  {
    number: 3,
    title: "Thay đổi thói quen dùng công nghệ của con",
    description: "Từ người tiêu thụ nội dung sang người sáng tạo, biết làm ra sản phẩm công nghệ.",
    image: techHabits,
    alt: "Thay đổi thói quen công nghệ"
  },
  {
    number: 4,
    title: "Thế hệ Alpha – Công nghệ & AI là kỹ năng bắt buộc",
    description: "Học lập trình giúp trẻ hiểu cách AI hoạt động và làm chủ công nghệ.",
    image: alphaGeneration,
    alt: "Thế hệ Alpha và công nghệ AI"
  }
];

export function BenefitsSection() {
  // Section container with directional scroll reveal
  const containerReveal = useScrollReveal({
    once: false, // Allow re-triggering based on scroll direction
    amount: 0.3,
    direction: "up",
    distance: 30,
    duration: 0.6
  });

  // Headline text reveal - changes based on scroll direction
  const headlineReveal = useTextReveal({
    once: false,
    amount: 0.3,
    type: "letter", // Default for scroll down
    staggerDelay: 0.03,
    delay: 0.2
  });

  // Benefit items stagger grid
  const itemsGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.1,
    direction: "up",
    distance: 30,
    duration: 0.6
  });

  return (
    <motion.section
      ref={containerReveal.ref}
      initial={containerReveal.initial}
      animate={containerReveal.animate}
      className="py-20 px-4 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Headline */}
        <motion.div
          className="text-center mb-16"
          {...headlineReveal.containerProps}
        >
          <motion.h2
            className="text-5xl font-bold mb-6"
            style={{ color: '#111827' }}
          >
            <span className="text-primary">Lý do</span> ba mẹ nên cho con học lập trình sớm
          </motion.h2>
        </motion.div>

        {/* Benefits Grid - 2 columns layout */}
        <motion.div
          ref={itemsGrid.ref}
          variants={itemsGrid.containerVariants}
          initial="hidden"
          animate={itemsGrid.isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12"
        >
          {benefits.map((benefit, index) => {
            const itemVariants = itemsGrid.getItemVariants(index);
            return (
              <motion.div
                key={benefit.number}
                initial={itemVariants.initial}
                animate={itemVariants.animate}
              >
                <BenefitItem {...benefit} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Individual Benefit Item Component
function BenefitItem({ number, title, description, image, alt }: BenefitItem) {
  // Parallax transform for images
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="flex flex-col h-full">
      {/* Icon and Content Row - Fixed height section */}
      <div className="flex items-start gap-4 min-h-[140px]">
        {/* Animated Number Icon */}
        <motion.div
          className="w-12 h-12 bg-cta text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0"
          whileInView={{
            scale: [0.8, 1.1, 1], // Scale-in + bounce effect
            rotate: [0, 5, -5, 0], // Subtle bounce rotation
            transition: { duration: 0.6, ease: "easeOut" }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {number}
        </motion.div>

        {/* Title and Description */}
        <motion.div
          className="flex-1"
          whileInView={{
            opacity: [0, 1],
            y: [20, 0], // Slide-up effect
            transition: { duration: 0.6, delay: 0.2 }
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-3 text-primary">
            {title}
          </h3>
          <p className="leading-relaxed" style={{ color: '#374151' }}>
            {description}
          </p>
        </motion.div>
      </div>

      {/* Animated Image with Parallax - Always at same position */}
      <motion.div
        className="mt-6 w-full"
        whileInView={{
          opacity: [0, 1],
          scale: [0.95, 1], // Subtle scale-in
          transition: { duration: 0.6, delay: 0.3 }
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="relative w-full h-64 overflow-hidden rounded-lg shadow-medium">
          <motion.img
            src={image}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              y: imageY, // Parallax effect
              willChange: 'transform' // Performance optimization
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}