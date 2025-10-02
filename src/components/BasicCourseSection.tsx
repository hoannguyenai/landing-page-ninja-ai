import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import { useTextReveal } from "@/hooks/useTextReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Rocket, Gamepad2, Smartphone, Check } from "lucide-react";
import studentProjects from "@/assets/student-projects.jpg";

export function BasicCourseSection() {
  // Section container with directional scroll reveal
  const containerReveal = useScrollReveal({
    once: false, // Allow re-triggering based on scroll direction
    amount: 0.3,
    direction: "up",
    distance: 40,
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

  // Content boxes stagger grid
  const boxesGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.2, // Slower stagger for boxes
    direction: "up",
    distance: 30,
    duration: 0.6
  });

  return (
    <motion.section
      ref={containerReveal.ref}
      initial={containerReveal.initial}
      animate={containerReveal.animate}
      className="py-20 px-4 bg-[#a3bafa]/5"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Header Icon with Pop-in Effect */}
          <motion.div
            className="text-4xl mb-4"
            whileInView={{
              scale: [0, 1.2, 1], // Pop-in effect
              rotate: [0, 10, 0], // Subtle bounce
              transition: { duration: 0.6, ease: "easeOut" }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            🎯
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl font-bold mb-6 tracking-wide text-blue-600"
          >
            Chương trình Lập trình Cơ bản
          </motion.h2>

          {/* Feature Boxes */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            whileInView={{
              opacity: [0, 1],
              y: [30, 0],
              transition: { duration: 0.6, delay: 0.8 }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              className="bg-blue-50 border border-blue-200 rounded-3xl shadow-soft p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-blue-600 mb-2">12 buổi học</h3>
              <p className="text-gray-500 text-sm">Mỗi buổi 90 phút, học tập hiệu quả</p>
            </motion.div>
            <motion.div
              className="bg-blue-50 border border-blue-200 rounded-3xl shadow-soft p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-blue-600 mb-2">2 dự án thực tế</h3>
              <p className="text-gray-500 text-sm">Xây dựng game và ứng dụng thực tế</p>
            </motion.div>
            <motion.div
              className="bg-blue-50 border border-blue-200 rounded-3xl shadow-soft p-6 flex flex-col items-center text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Check className="text-blue-600 mb-4" size={32} />
              <h3 className="text-lg font-bold text-blue-600 mb-2">Học xong có thể viết chương trình</h3>
              <p className="text-gray-500 text-sm">Tự tin tạo ra sản phẩm của riêng mình</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content Boxes */}
          <motion.div
            ref={boxesGrid.ref}
            variants={boxesGrid.containerVariants}
            initial="hidden"
            animate={boxesGrid.isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Content Box 1 - Thời lượng & Phương pháp */}
            <motion.div
              initial={boxesGrid.getItemVariants(0).initial}
              animate={boxesGrid.getItemVariants(0).animate}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  x: [-50, 0], // Slide in from left
                  transition: { duration: 0.6 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-blue-50 border border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-600">
                      <motion.div
                        whileInView={{
                          scale: [0.8, 1.2, 1], // Scale-in bounce
                          transition: { duration: 0.5, delay: 0.2 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Clock className="text-primary" size={24} />
                      </motion.div>
                      Thời lượng & Phương pháp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [10, 0] }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>12 buổi</strong> (mỗi buổi 90 phút)
                    </motion.p>
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [10, 0] }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>Phương pháp:</strong> Học qua dự án (Project-based learning)
                    </motion.p>
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [10, 0] }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>Kết hợp:</strong> Lý thuyết + Thực hành
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Content Box 2 - Sản phẩm đầu ra */}
            <motion.div
              initial={boxesGrid.getItemVariants(1).initial}
              animate={boxesGrid.getItemVariants(1).animate}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0], // Slide in from bottom
                  transition: { duration: 0.6 }
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-blue-50 border border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-600">
                      <motion.div
                        whileInView={{
                          scale: [0.8, 1.2, 1], // Scale-in bounce
                          transition: { duration: 0.5, delay: 0.2 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Rocket className="text-secondary" size={24} />
                      </motion.div>
                      Sản phẩm đầu ra
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.div
                      className="flex items-center gap-3"
                      whileInView={{ opacity: [0, 1], x: [20, 0] }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <motion.div
                        whileInView={{
                          rotate: [-180, 0], // Rotate-in effect
                          transition: { duration: 0.6, delay: 0.4 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Gamepad2 className="text-accent" size={20} />
                      </motion.div>
                      <span>Mini Game Snake hoặc Flappy Bird</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileInView={{ opacity: [0, 1], x: [20, 0] }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <motion.div
                        whileInView={{
                          rotate: [-180, 0], // Rotate-in effect
                          transition: { duration: 0.6, delay: 0.5 }
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Smartphone className="text-accent" size={20} />
                      </motion.div>
                      <span>Ứng dụng nhỏ (Máy tính bỏ túi, Chatbot cơ bản)</span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              whileInView={{
                opacity: [0, 1],
                scale: [0.8, 1.1, 1], // Scale-in + pulse effect
                transition: { duration: 0.6, delay: 0.6 }
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button size="lg" variant="cta" className="w-full group">
                <span className="arrow-slide inline-block">👉</span> Đăng ký học thử miễn phí 1 buổi
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Course Image */}
          <motion.div
            whileInView={{
              opacity: [0, 1],
              x: [50, 0], // Slide in from right
              rotate: [-5, 0], // Subtle rotation
              transition: { duration: 0.8, delay: 0.4 }
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src={studentProjects}
              alt="Dự án học viên tại Rocket Tech Academy"
              className="rounded-2xl shadow-large w-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}