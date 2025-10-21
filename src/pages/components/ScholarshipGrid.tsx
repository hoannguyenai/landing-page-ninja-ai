"use client";

import React, { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

type Tier = {
  score: string;
  icon: string;
  rank: string;
  fee: string;
  bg: string;
  ring: string;
  barBg: string;
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
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(TIERS.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger items one by one
          TIERS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newArray = [...prev];
                newArray[i] = true;
                return newArray;
              });
            }, i * 100);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="scholarship-title"
      className="relative w-full py-16 px-6 md:px-8 bg-white"
      ref={sectionRef}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề */}
        <div className="text-center mb-10">
          <h2
            id="scholarship-title"
            className={`text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Học Bổng Được Trao Theo Đúng Năng Lực
          </h2>
          <p
            className={`mt-3 text-muted-foreground transition-all duration-700 delay-150 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Minh bạch – công bằng – dựa trên kết quả thi thực tế
          </p>
        </div>

        {/* 4 card ngang */}
        <ol className="grid md:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {TIERS.map((t, i) => (
            <li
              key={i}
              className={`h-full transition-all duration-700 ease-out ${
                visibleItems[i]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${150 + i * 100}ms`,
              }}
            >
              <Card
                className={`relative h-full w-full ${t.bg} ${t.ring} rounded-2xl shadow-sm hover:shadow-md transition-shadow`}
              >
                <CardContent className="p-6 pt-10 flex flex-col h-full">
                  {/* Thanh tiêu đề hạng */}
                  <div
                    className={`absolute left-0 right-0 top-0 ${t.barBg} text-white rounded-t-2xl h-9 flex items-center justify-center gap-2 text-[11px] md:text-xs font-semibold tracking-wide uppercase`}
                    aria-label={`Xếp hạng: ${t.rank}`}
                  >
                    <span className="text-sm leading-none">{t.icon}</span>
                    <span>{t.rank}</span>
                  </div>

                  {/* Nội dung chính */}
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
                      <div className="mt-1 text-base md:text-lg font-semibold text-blue-700">
                        {t.fee}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1" />
                </CardContent>
              </Card>
            </li>
          ))}
        </ol>

        {/* Note dưới bảng */}
        <p
          className={`mt-8 text-center text-sm text-slate-600 transition-all duration-700 ease-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionDelay: isVisible ? "500ms" : "0ms",
          }}
        >
          <em>
            * Học phí gốc khóa 12 tuần: <strong>5.000.000 – 7.000.000đ</strong>.
            Tất cả học viên đều được nhận học bổng dựa trên kết quả thi thực tế.
          </em>
        </p>
      </div>
    </section>
  );
}