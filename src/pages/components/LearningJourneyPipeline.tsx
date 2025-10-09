"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

import {
  durations,
  easings,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

type Step = {
  icon: string;
  title: string;
  content: string;
};

const steps: Step[] = [
  {
    icon: "📝",
    title: "Đăng ký thi thử",
    content: "Điền form & chọn track phù hợp với lứa tuổi",
  },
  {
    icon: "⚡",
    title: "Làm bài test 45-60'",
    content: "2 phần: Tư duy logic + Thực hành mini (Scratch/Web/Python)",
  },
  {
    icon: "🎁",
    title: "Nhận kết quả + học bổng",
    content: "Trong 24h - Học bổng lên đến 80% theo năng lực thực tế",
  },
  {
    icon: "🚀",
    title: "Khởi đầu hành trình 12 tuần",
    content: "Xây dựng sản phẩm thật + Showcase + Báo cáo tiến bộ",
  },
];

export default function LearningJourneyPipeline() {
  return (
    <section
      aria-labelledby="learning-journey-title"
      className="relative w-full py-16 px-6 md:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề: đồng bộ easing/duration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.h2
            id="learning-journey-title"
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2"
          >
            Hành Trình 4 Bước Khám Phá Tài Năng
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-3 text-muted-foreground"
          >
            Lộ trình rõ ràng – minh bạch – dễ bắt đầu
          </motion.p>
        </motion.div>

        {/* Wrapper để vẽ line + grid cột */}
        <div className="relative">
          {/* Line nối các hình tròn (desktop) – animate scaleX theo presets */}
          <motion.div
            aria-hidden="true"
            className="hidden md:block absolute left-0 right-0 top-[28px] h-1 origin-left bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: durations.slow, ease: easings.smooth }}
          />

          {/* Grid các bước với stagger chung */}
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6 md:gap-8 items-start"
          >
            {steps.map((step, idx) => (
              <motion.li
                key={idx}
                variants={staggerItem}
                className="flex flex-col items-center h-full"
              >
                {/* Circle index (cùng cao độ với line) */}
                <motion.div
                  className="relative z-10 mb-4"
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                  }}
                >
                  <div className="absolute inset-0 blur-xl rounded-full bg-teal-300/30 -z-10" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                </motion.div>

                {/* Card nội dung – h-full để bằng nhau */}
                <motion.div
                  className="w-full h-full"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: durations.normal,
                    ease: easings.smooth,
                  }}
                >
                  <Card className="w-full h-full border-blue-100 bg-blue-50/60">
                    <CardContent className="p-5 flex flex-col h-full">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl leading-none">
                          {step.icon}
                        </span>
                        <div>
                          <h3 className="text-lg font-semibold text-blue-700">
                            {step.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-600">
                            {step.content}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1" />
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
