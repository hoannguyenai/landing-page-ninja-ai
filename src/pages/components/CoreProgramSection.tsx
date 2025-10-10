"use client";

import React, { useState } from "react";
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

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useStaggerGrid } from "@/hooks/useStaggerGrid";
import RoadmapPopup from "./RoadmapPopup";

export default function CoreProgramSection() {
  const [openRoadmap, setOpenRoadmap] = useState(false);
  const sectionReveal = useScrollReveal({
    once: false,
    amount: 0.3,
    direction: "up",
    distance: 40,
    duration: 0.6,
  });

  const highlightsGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.16,
    direction: "up",
    distance: 20,
    duration: 0.5,
  });

  const leftDetailsGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.14,
    direction: "up",
    distance: 30,
    duration: 0.55,
  });

  const extrasGrid = useStaggerGrid({
    once: false,
    amount: 0.3,
    staggerDelay: 0.12,
    direction: "up",
    distance: 20,
    duration: 0.45,
  });

  return (
    <motion.section
      ref={sectionReveal.ref}
      initial={sectionReveal.initial}
      animate={sectionReveal.animate}
      className="py-20 px-4 bg-[#a3bafa]/5"
      aria-labelledby="core-program-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          whileInView={{
            opacity: [0, 1],
            y: [30, 0],
            transition: { duration: 0.6, delay: 0.1 },
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <motion.h2
            id="core-program-heading"
            className="text-3xl lg:text-4xl font-bold mb-3 text-blue-600 flex items-center justify-center gap-3"
          >
            <span aria-hidden="true">🎯</span>
            Chương trình Lập trình Cơ bản
          </motion.h2>

          <motion.p
            className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto"
            whileInView={{
              opacity: [0, 1],
              x: [-40, 0],
              transition: { duration: 0.6, delay: 0.2 },
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lộ trình 12 tuần giúp học sinh xây dựng tư duy máy tính và tạo ra
            sản phẩm đầu tay qua các nhiệm vụ nhỏ, tăng độ khó theo từng tuần.
          </motion.p>
        </motion.div>

        {/* Highlights */}
        <motion.div
          ref={highlightsGrid.ref}
          variants={highlightsGrid.containerVariants}
          initial="hidden"
          animate={highlightsGrid.isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mb-14 items-stretch"
        >
          {[
            {
              icon: Clock,
              title: "12 tuần tinh gọn",
              desc: "Mỗi tuần 1 chủ đề & thử thách rõ ràng.",
            },
            {
              icon: Rocket,
              title: "2 dự án capstone",
              desc: "Một game nhỏ và một ứng dụng thực dụng.",
            },
            {
              icon: Check,
              title: "Tự tin xuất bản",
              desc: "Đưa sản phẩm lên web và chia sẻ với bạn bè.",
            },
          ].map((item, i) => {
            const v = highlightsGrid.getItemVariants(i);
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={v.initial}
                animate={v.animate}
                className="h-full"
              >
                <Card className="bg-blue-50 border border-blue-200 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Icon
                      className="text-blue-600 mb-3"
                      size={32}
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold text-blue-700">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main: 2 cột, items-start để ảnh ngang với card đầu tiên */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Thông tin chi tiết (không có CTA) */}
          <motion.div
            ref={leftDetailsGrid.ref}
            variants={leftDetailsGrid.containerVariants}
            initial="hidden"
            animate={leftDetailsGrid.isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {/* Card 1: Cấu trúc học & phương pháp */}
            <motion.div
              initial={leftDetailsGrid.getItemVariants(0).initial}
              animate={leftDetailsGrid.getItemVariants(0).animate}
            >
              <Card className="bg-blue-50 border border-blue-200 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-blue-700">
                    <Clock
                      size={22}
                      className="text-primary"
                      aria-hidden="true"
                    />
                    Cấu trúc & Phương pháp
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check
                          size={16}
                          className="text-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                      <span>
                        <strong>Thời lượng:</strong> 12 tuần – nhịp ổn định, mỗi
                        tuần một kỹ năng cốt lõi.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check
                          size={16}
                          className="text-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                      <span>
                        <strong>Phương pháp:</strong> Học qua dự án
                        (project-based), chia nhỏ mục tiêu, phản hồi nhanh.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check
                          size={16}
                          className="text-blue-600"
                          aria-hidden="true"
                        />
                      </span>
                      <span>
                        <strong>Thực hành:</strong> 60–70% thời lượng; lý thuyết
                        chỉ để đủ dụng.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2: Kết quả & sản phẩm */}
            <motion.div
              initial={leftDetailsGrid.getItemVariants(1).initial}
              animate={leftDetailsGrid.getItemVariants(1).animate}
            >
              <Card className="bg-blue-50 border border-blue-200 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-blue-700">
                    <Rocket
                      size={22}
                      className="text-secondary"
                      aria-hidden="true"
                    />
                    Kết quả mong đợi
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <Gamepad2
                      size={18}
                      className="text-blue-600 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Hoàn thiện <em>mini game</em> (ví dụ: Snake/Flappy) — tập
                      trung vào thuật toán điều khiển.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone
                      size={18}
                      className="text-blue-600 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Ứng dụng nhỏ hữu ích (máy tính bỏ túi, chatbot cơ bản) —
                      rèn quy trình từ ý tưởng đến triển khai.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award
                      size={18}
                      className="text-blue-600 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>
                      Nắm chắc nền tảng: biến, điều kiện, vòng lặp, hàm, đọc/ghi
                      dữ liệu và tư duy chia bài toán.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right: Ảnh + CTA buttons */}
          <motion.div className="flex flex-col gap-8">
            {/* Image: Ngang với card đầu tiên */}
            <motion.div
              whileInView={{
                opacity: [0, 1],
                x: [50, 0],
                rotate: [-2.5, 0],
                transition: { duration: 0.7, delay: 0.2 },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full"
            >
              <div className="rounded-2xl shadow-large overflow-hidden">
                <img
                  src={studentProjects}
                  alt="Sản phẩm do học viên thực hiện tại Rocket Tech Academy"
                  className="w-full h-[240px] sm:h-[300px] lg:h-[420px] object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              whileInView={{
                opacity: [0, 1],
                scale: [0.96, 1.04, 1],
                transition: { duration: 0.55, delay: 0.15 },
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-col gap-3"
              role="group"
              aria-label="Hành động nhanh"
            >
              <Button size="lg" variant="cta" className="w-full group">
                <span className="arrow-slide inline-block" aria-hidden="true">
                  👉
                </span>
                Đăng ký học miễn phí
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full"
                onClick={() => setOpenRoadmap(true)}
              >
                Xem thêm lộ trình 12 tuần
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Extra features */}
        <motion.div
          ref={extrasGrid.ref}
          variants={extrasGrid.containerVariants}
          initial="hidden"
          animate={extrasGrid.isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 mt-16 items-stretch"
        >
          {[
            {
              icon: Code,
              title: "Giáo trình cập nhật",
              desc: "Chắt lọc từ Code.org, Scratch, Python for Kids — điều chỉnh theo trình độ từng lớp.",
            },
            {
              icon: Users,
              title: "Giảng viên sát cánh",
              desc: "Giảng viên Bách Khoa & chuyên gia CNTT; kèm cặp nhỏ nhóm, phản hồi ngay trên bài làm.",
            },
            {
              icon: Award,
              title: "Đối tượng phù hợp",
              desc: "Học sinh 12–18 tuổi; không yêu cầu nền tảng, chỉ cần tinh thần khám phá.",
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
                      <Icon
                        className="text-primary shrink-0"
                        size={22}
                        aria-hidden="true"
                      />
                      <div>
                        <h3 className="text-base font-semibold text-blue-700">
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

      <RoadmapPopup open={openRoadmap} onOpenChange={setOpenRoadmap} />
    </motion.section>

    
  );
}
