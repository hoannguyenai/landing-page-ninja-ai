"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      ref={sectionRef}
      aria-labelledby="learning-journey-title"
      className="relative w-full py-16 px-6 md:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2
            id="learning-journey-title"
            className={`text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Hành Trình 4 Bước Khám Phá Tài Năng
          </h2>
          <p
            className={`mt-3 text-muted-foreground transition-all duration-700 delay-100 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Lộ trình rõ ràng – minh bạch – dễ bắt đầu
          </p>
        </div>

        {/* Wrapper để vẽ line + grid cột */}
        <div className="relative">
          {/* Line nối các hình tròn (desktop) */}
          <div
            aria-hidden="true"
            className={`hidden md:block absolute left-0 right-0 top-[28px] h-1 origin-left bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200 transition-transform duration-1000 delay-200 ease-out ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />

          {/* Grid các bước */}
          <ol className="grid md:grid-cols-4 gap-6 md:gap-8 items-start">
            {steps.map((step, idx) => (
              <li
                key={idx}
                className="flex flex-col items-center h-full"
                style={{
                  transitionDelay: `${300 + idx * 150}ms`,
                }}
              >
                {/* Circle index */}
                <div
                  className={`relative z-10 mb-4 transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 scale-100 translate-y-0"
                      : "opacity-0 scale-90 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: `${300 + idx * 150}ms`,
                  }}
                >
                  <div className="absolute inset-0 blur-xl rounded-full bg-teal-300/30 -z-10" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-bold flex items-center justify-center shadow-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Card nội dung */}
                <div
                  className={`w-full h-full transition-all duration-700 ease-out ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: `${350 + idx * 150}ms`,
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
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}