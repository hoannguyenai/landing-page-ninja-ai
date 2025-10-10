"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

// Presets animation dùng chung
import {
  durations,
  easings,
  staggerContainer,
  staggerItem,
} from "@/lib/animations"; // chỉnh path đúng nơi bạn lưu

type Tier = {
  score: string;
  icon: string;
  rank: string;
  fee: string;
  // style
  bg: string; // nền card
  ring: string; // viền card
  barBg: string; // thanh tiêu đề trên cùng
};

const TIERS: Tier[] = [
  {
    score: "90 - 100",
    icon: "🏆",
    rank: "XUẤT SẮC",
    fee: "1.000.000 – 1.500.000đ",
    bg: "bg-gradient-to-br from-[#e6f1ff] via-[#e9fbf7] to-[#f0f7ff]",
    ring: "ring-1 ring-blue-200",
    barBg: "bg-gradient-to-r from-blue-600 to-teal-500",
  },
  {
    score: "75 - 89",
    icon: "⭐",
    rank: "GIỎI",
    fee: "2.000.000 – 2.500.000đ",
    bg: "bg-gradient-to-br from-[#eef5ff] via-[#ebfeff] to-[#f4faff]",
    ring: "ring-1 ring-teal-200",
    barBg: "bg-gradient-to-r from-teal-600 to-blue-500",
  },
  {
    score: "60 - 74",
    icon: "✨",
    rank: "KHÁ",
    fee: "3.000.000 – 3.500.000đ",
    bg: "bg-gradient-to-br from-[#f2f7ff] via-[#f0fffb] to-[#f6fbff]",
    ring: "ring-1 ring-blue-200",
    barBg: "bg-gradient-to-r from-blue-500 to-teal-500",
  },
  {
    score: "Dưới 60",
    icon: "🌟",
    rank: "STARTER",
    fee: "4.000.000 – 5.000.000đ",
    bg: "bg-gradient-to-br from-[#f8fbff] via-[#f3fffd] to-[#f9fbff]",
    ring: "ring-1 ring-teal-200",
    barBg: "bg-gradient-to-r from-teal-500 to-blue-500",
  },
];

export default function ScholarshipTiers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  return (
    <section
      aria-labelledby="scholarship-title"
      className="relative w-full py-16 px-6 md:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="text-center mb-10"
        >
          <motion.h2
            id="scholarship-title"
            variants={staggerItem}
            className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2"
          >
            Học Bổng Được Trao Theo Đúng Năng Lực
          </motion.h2>
          <motion.p
            variants={staggerItem}
            className="mt-3 text-muted-foreground"
          >
            Minh bạch – công bằng – dựa trên kết quả thi thực tế
          </motion.p>
        </motion.div>

        {/* 4 card ngang, equal height */}
        <motion.ol
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="grid md:grid-cols-4 gap-6 md:gap-8 items-stretch"
          aria-label="Các mức học bổng theo điểm test"
        >
          {TIERS.map((t, i) => (
            <motion.li key={i} variants={staggerItem} className="h-full">
              <Card
                className={`relative h-full w-full ${t.bg} ${t.ring} rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6 pt-10 flex flex-col h-full">
                  {/* Thanh tiêu đề hạng ở cạnh trên của card */}
                  <div
                    className={`absolute left-0 right-0 top-0 ${t.barBg} text-white rounded-t-2xl h-9 flex items-center justify-center gap-2 text-[11px] md:text-xs font-semibold tracking-wide uppercase`}
                    aria-label={`Xếp hạng: ${t.rank}`}
                  >
                    <span className="text-sm leading-none">{t.icon}</span>
                    <span>{t.rank}</span>
                  </div>

                  {/* Nội dung chính: Điểm nổi bật nhất */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-[11px] md:text-xs font-medium uppercase text-slate-500 tracking-wider">
                        ĐIỂM TEST
                      </div>
                      <div className="mt-1 text-3xl md:text-4xl font-extrabold text-slate-900">
                        {t.score}
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] md:text-xs font-medium uppercase text-slate-500 tracking-wider">
                        HỌC PHÍ SAU GIẢM
                      </div>
                      {/* Vừa đủ, không quá to */}
                      <div className="mt-1 text-base md:text-lg font-semibold text-blue-700">
                        {t.fee}
                      </div>
                    </div>
                  </div>

                  {/* Spacer để equal height */}
                  <div className="flex-1" />
                </CardContent>
              </Card>
            </motion.li>
          ))}
        </motion.ol>

        {/* Note dưới bảng */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={controls}
          transition={{
            duration: durations.normal,
            ease: easings.smooth,
            delay: 0.05,
          }}
          className="mt-8 text-center text-sm text-slate-600"
        >
          <em>
            * Học phí gốc khóa 12 tuần: <strong>5.000.000 – 7.000.000đ</strong>.
            Tất cả học viên đều được nhận học bổng dựa trên kết quả thi thực tế.
          </em>
        </motion.p>
      </div>
    </section>
  );
}
