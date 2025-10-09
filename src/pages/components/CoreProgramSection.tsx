// components/CoreProgramSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Rocket,
  Gamepad2,
  Smartphone,
  Check,
  Code,
  Users,
  Award,
} from "lucide-react";
import studentProjects from "@/assets/student-projects.jpg";

// Hooks animation dùng chung trong app
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import { useTextReveal } from "@/hooks/useTextReveal";

export default function CoreProgramSection() {
  // Reveal cho toàn section
  const sectionReveal = useScrollReveal({
    once: false,
    amount: 0.3,
    direction: "up",
    distance: 40,
    duration: 0.6,
  });

  // Tiêu đề: letter-by-letter
  const headingReveal = useTextReveal({
    once: false,
    amount: 0.3,
    type: "letter",
    staggerDelay: 0.03,
    delay: 0.2,
  });

  // Grid 3 highlight tóm tắt
  const highlightsGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.18,
    direction: "up",
    distance: 24,
    duration: 0.55,
  });

  // Grid trái (2 card chi tiết + CTA)
  const leftDetailsGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.16,
    direction: "up",
    distance: 30,
    duration: 0.6,
  });

  // Grid 3 thẻ bổ sung
  const extrasGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.12,
    direction: "up",
    distance: 24,
    duration: 0.5,
  });

  return (
    <motion.section
      ref={sectionReveal.ref}
      initial={sectionReveal.initial}
      animate={sectionReveal.animate}
      className="py-20 px-4 bg-[#a3bafa]/5"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            {...headingReveal.containerProps}
            className="text-4xl font-bold mb-6 tracking-wide flex items-center justify-center gap-3 flex-wrap"
          >
            {/* Icon 🎯 cùng dòng tiêu đề */}
            <motion.span
              {...headingReveal.childProps}
              aria-hidden="true"
              className="inline-block leading-none text-3xl md:text-4xl translate-y-[1px] pb-2"
            >
              🎯
            </motion.span>

            {/* Chữ có gradient + letter reveal */}
            <span className="bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2">
              {"Chương trình Lập trình Cơ bản".split("").map((char, idx) => (
                <motion.span
                  key={`h-${idx}`}
                  {...headingReveal.childProps}
                  style={{
                    ...headingReveal.childProps.style,
                    display: char === " " ? "inline" : "inline-block",
                    marginRight: char === " " ? "0.125em" : 0,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h2>

          {/* 3 highlight tóm tắt (không lặp lại ở dưới) */}
          <motion.div
            ref={highlightsGrid.ref}
            variants={highlightsGrid.containerVariants}
            initial="hidden"
            animate={highlightsGrid.isInView ? "visible" : "hidden"}
            className="grid md:grid-cols-3 gap-6 mb-14"
          >
            {[
              {
                icon: Check,
                title: "12 buổi học",
                desc: "Mỗi buổi 90 phút, học tập hiệu quả",
              },
              {
                icon: Check,
                title: "2 dự án thực tế",
                desc: "Xây dựng game và ứng dụng thực tế",
              },
              {
                icon: Check,
                title: "Viết chương trình sau khóa",
                desc: "Tự tin tạo sản phẩm của riêng mình",
              },
            ].map((item, i) => {
              const v = highlightsGrid.getItemVariants(i);
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={v.initial}
                  animate={v.animate}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="bg-blue-50 border border-blue-200 rounded-3xl shadow-soft p-6 text-center"
                >
                  <Icon className="text-blue-600 mb-3 inline-block" size={32} />
                  <h3 className="text-lg font-bold text-blue-600 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Main content 2 cột */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Trái: 2 card chi tiết + CTA */}
          <motion.div
            ref={leftDetailsGrid.ref}
            variants={leftDetailsGrid.containerVariants}
            initial="hidden"
            animate={leftDetailsGrid.isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Card: Thời lượng & Phương pháp */}
            <motion.div
              initial={leftDetailsGrid.getItemVariants(0).initial}
              animate={leftDetailsGrid.getItemVariants(0).animate}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  x: [-50, 0],
                  transition: { duration: 0.6 },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-blue-50 border border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-600">
                      <motion.div
                        whileInView={{
                          scale: [0.85, 1.15, 1],
                          transition: { duration: 0.45, delay: 0.15 },
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Clock className="text-primary" size={22} />
                      </motion.div>
                      Thời lượng & Phương pháp
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [8, 0] }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>12 buổi</strong> (mỗi buổi 90 phút)
                    </motion.p>
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [8, 0] }}
                      transition={{ duration: 0.35, delay: 0.28 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>Phương pháp:</strong> Project-based learning
                    </motion.p>
                    <motion.p
                      whileInView={{ opacity: [0, 1], y: [8, 0] }}
                      transition={{ duration: 0.35, delay: 0.36 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      • <strong>Kết hợp:</strong> Lý thuyết + Thực hành
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Card: Sản phẩm đầu ra */}
            <motion.div
              initial={leftDetailsGrid.getItemVariants(1).initial}
              animate={leftDetailsGrid.getItemVariants(1).animate}
            >
              <motion.div
                whileInView={{
                  opacity: [0, 1],
                  y: [40, 0],
                  transition: { duration: 0.6 },
                }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Card className="bg-blue-50 border border-blue-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-600">
                      <motion.div
                        whileInView={{
                          scale: [0.85, 1.15, 1],
                          transition: { duration: 0.45, delay: 0.15 },
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                      >
                        <Rocket className="text-secondary" size={22} />
                      </motion.div>
                      Sản phẩm đầu ra
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <motion.div
                      className="flex items-center gap-3"
                      whileInView={{ opacity: [0, 1], x: [18, 0] }}
                      transition={{ duration: 0.35, delay: 0.2 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <Gamepad2 className="text-accent" size={18} />
                      <span>Mini Game Snake hoặc Flappy Bird</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileInView={{ opacity: [0, 1], x: [18, 0] }}
                      transition={{ duration: 0.35, delay: 0.28 }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <Smartphone className="text-accent" size={18} />
                      <span>
                        Ứng dụng nhỏ (Máy tính bỏ túi, Chatbot cơ bản)
                      </span>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* CTA */}
            <motion.div
              whileInView={{
                opacity: [0, 1],
                scale: [0.9, 1.08, 1],
                transition: { duration: 0.55, delay: 0.2 },
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Button size="lg" variant="cta" className="w-full group">
                <span className="arrow-slide inline-block">👉</span> Đăng ký học
                thử miễn phí 1 buổi
              </Button>
            </motion.div>
          </motion.div>

          {/* Phải: Hình minh họa */}
          <motion.div
            whileInView={{
              opacity: [0, 1],
              x: [50, 0],
              rotate: [-4, 0],
              transition: { duration: 0.75, delay: 0.25 },
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

        {/* 3 thẻ bổ sung (không trùng Highlights) */}
        <motion.div
          ref={extrasGrid.ref}
          variants={extrasGrid.containerVariants}
          initial="hidden"
          animate={extrasGrid.isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mt-16"
        >
          {[
            {
              icon: Code,
              title: "Giáo trình quốc tế",
              desc: "Tham khảo Code.org, Scratch, Python for Kids",
            },
            {
              icon: Users,
              title: "Giảng viên chuyên nghiệp",
              desc: "Giảng viên Bách Khoa & chuyên gia CNTT nhiều kinh nghiệm",
            },
            {
              icon: Award,
              title: "Đối tượng phù hợp",
              desc: "Học sinh 12–18 tuổi (cấp 2 & 3)",
            },
          ].map((f, i) => {
            const v = extrasGrid.getItemVariants(i);
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={v.initial}
                animate={v.animate}
                className="h-full"
              >
                <Card className="bg-blue-50 border border-blue-200 h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Icon className="text-primary" size={22} />
                      <div>
                        <h3 className="text-base font-semibold text-blue-600">
                          {f.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
