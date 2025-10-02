import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Code, Users, Award } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import { useTextReveal } from "@/hooks/useTextReveal";

interface FeatureCard {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

const allCards: FeatureCard[] = [
  {
    icon: CheckCircle2,
    title: "12 buổi học trực quan, sinh động",
    description: "Học qua dự án thực tế với phương pháp project-based learning"
  },
  {
    icon: CheckCircle2,
    title: "2 dự án thực tế (Mini Game + Ứng dụng nhỏ)",
    description: "Xây dựng portfolio với sản phẩm hoàn chỉnh"
  },
  {
    icon: CheckCircle2,
    title: "Học xong có thể tự tin viết chương trình đơn giản",
    description: "Trang bị nền tảng vững chắc cho lập trình viên tương lai"
  },
  {
    icon: Code,
    title: "Giáo trình quốc tế",
    description: "Tham khảo từ Code.org, Scratch, Python for Kids"
  },
  {
    icon: Users,
    title: "Giảng viên chuyên nghiệp",
    description: "Giảng viên Bách Khoa & chuyên gia CNTT, giàu kinh nghiệm"
  },
  {
    icon: Award,
    title: "Đối tượng phù hợp",
    description: "Học sinh từ 12–18 tuổi (cấp 2 & 3)"
  }
];

export function FeaturesSection() {
  // Section container with directional scroll reveal
  const sectionReveal = useScrollReveal({
    once: false, // Allow re-triggering based on scroll direction
    amount: 0.3,
    direction: "up",
    distance: 30,
    duration: 0.6
  });

  // Heading text reveal (letter by letter)
  const headingReveal = useTextReveal({
    once: true,
    amount: 0.3,
    type: "letter",
    staggerDelay: 0.03,
    delay: 0.2
  });

  // Subheading text reveal (word by word)
  const subheadingReveal = useTextReveal({
    once: true,
    amount: 0.3,
    type: "word",
    staggerDelay: 0.08,
    delay: 0.4
  });

  // All cards stagger grid (6 cards total)
  const allCardsGrid = useStaggerGrid({
    once: true,
    amount: 0.3,
    staggerDelay: 0.12,
    direction: "up",
    distance: 30,
    duration: 0.6
  });

  return (
    <motion.section
      ref={sectionReveal.ref}
      initial={sectionReveal.initial}
      animate={sectionReveal.animate}
      className="py-20 px-4"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            {...headingReveal.containerProps}
            className="text-4xl font-bold mb-6"
          >
            {"Chương trình ".split("").map((char, index) => (
              <motion.span
                key={`chuong-trinh-${index}`}
                {...headingReveal.childProps}
                style={{
                  ...headingReveal.childProps.style,
                  display: char === " " ? "inline" : "inline-block",
                  marginRight: char === " " ? "0.125em" : "0"
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <span className="text-primary">
              {"Lập trình cơ bản".split("").map((char, index) => (
                <motion.span
                  key={`lap-trinh-${index}`}
                  {...headingReveal.childProps}
                  style={{
                    ...headingReveal.childProps.style,
                    display: char === " " ? "inline" : "inline-block",
                    marginRight: char === " " ? "0.125em" : "0"
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          <motion.p
            {...subheadingReveal.containerProps}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {"Khóa học được thiết kế đặc biệt cho học sinh từ 12-18 tuổi (cấp 2 & 3)".split(" ").map((word, index) => (
              <motion.span
                key={index}
                {...subheadingReveal.childProps}
                style={{ marginRight: index < "Khóa học được thiết kế đặc biệt cho học sinh từ 12-18 tuổi (cấp 2 & 3)".split(" ").length - 1 ? "0.25em" : "0" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.p>
        </div>

        {/* All Cards Grid - 6 cards with equal height */}
        <motion.div
          ref={allCardsGrid.ref}
          variants={allCardsGrid.containerVariants}
          initial="hidden"
          animate={allCardsGrid.isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch"
        >
          {allCards.map((card, index) => {
            const itemVariants = allCardsGrid.getItemVariants(index);
            return (
              <motion.div
                key={index}
                initial={itemVariants.initial}
                animate={itemVariants.animate}
                className="h-full"
              >
                <UnifiedCard {...card} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

// Unified Card Component for all 6 cards with equal height
function UnifiedCard({ icon: Icon, title, description }: FeatureCard) {
  // Check if this is a feature card (CheckCircle2) or program card (Code, Users, Award)
  const isFeatureCard = Icon === CheckCircle2;

  return (
    <motion.div
      whileHover={isFeatureCard ? {
        scale: 1.05,
        transition: { duration: 0.2 }
      } : {
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="h-full"
    >
      <Card className="bg-blue-50 hover:shadow-lg transition-shadow h-full flex flex-col justify-between group">
        <CardContent className="pt-6 flex-1 flex flex-col">
          <div className="flex flex-col items-center text-center">
            <motion.div
              whileHover={isFeatureCard ? {
                rotate: [0, -10, 10, 0],
                transition: { duration: 0.5 }
              } : {
                scale: [1, 1.1, 1],
                transition: { duration: 0.3 }
              }}
              className="mb-4"
            >
              <Icon
                className={`${
                  isFeatureCard
                    ? "text-blue-600 mt-1 flex-shrink-0 group-hover:text-blue-700"
                    : "text-primary group-hover:text-accent"
                } transition-colors`}
                size={isFeatureCard ? 40 : 32}
              />
            </motion.div>
            <div className="flex-1">
              <h3 className={`${
                isFeatureCard
                  ? "text-lg font-semibold mb-2 group-hover:text-primary"
                  : "text-xl font-semibold mb-2 group-hover:text-primary"
              } transition-colors`}>
                {title}
              </h3>
              <p className={`${
                isFeatureCard
                  ? "text-muted-foreground text-sm group-hover:text-foreground"
                  : "text-muted-foreground group-hover:text-foreground"
              } transition-colors`}>
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}