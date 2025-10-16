"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import brainDevelopment from "@/assets/brain-development.jpg";
import subjectsConnection from "@/assets/subjects-connection.jpg";
import techHabits from "@/assets/tech-habits.jpg";
import alphaGeneration from "@/assets/alpha-generation.jpg";

type BenefitItem = {
  number: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const benefits: BenefitItem[] = [
  {
    number: 1,
    title: "Giúp con phát triển trí não trong giai đoạn vàng",
    description:
      "Học lập trình sớm giúp kích thích tư duy logic, sáng tạo và giải quyết vấn đề.",
    image: brainDevelopment,
    alt: "Phát triển trí não cho trẻ",
  },
  {
    number: 2,
    title: "Phát triển tư duy – học tốt các môn trên trường",
    description:
      "Lập trình rèn luyện khả năng kết nối kiến thức Toán, Lý, Anh, Tin học.",
    image: subjectsConnection,
    alt: "Kết nối kiến thức các môn học",
  },
  {
    number: 3,
    title: "Thay đổi thói quen dùng công nghệ của con",
    description:
      "Từ người tiêu thụ nội dung sang người sáng tạo, biết làm ra sản phẩm công nghệ.",
    image: techHabits,
    alt: "Thay đổi thói quen công nghệ",
  },
  {
    number: 4,
    title: "Thế hệ Alpha – Công nghệ & AI là kỹ năng bắt buộc",
    description:
      "Học lập trình giúp trẻ hiểu cách AI hoạt động và làm chủ công nghệ.",
    image: alphaGeneration,
    alt: "Thế hệ Alpha và công nghệ AI",
  },
];

export function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(benefits.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger items with staggered delay
          benefits.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newArray = [...prev];
                newArray[i] = true;
                return newArray;
              });
            }, i * 120);
          });
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 px-4 md:px-6 lg:px-8 bg-white"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Lý do ba mẹ nên cho con học lập trình sớm
          </h2>
          <p
            className={`mt-3 text-muted-foreground transition-all duration-700 delay-100 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Tư duy – Kỹ năng – Thói quen công nghệ là lợi thế của thế hệ mới
          </p>
        </div>

        {/* Grid responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b, idx) => (
            <BenefitCard
              key={b.number}
              {...b}
              isVisible={visibleItems[idx]}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  number,
  title,
  description,
  image,
  alt,
  isVisible,
  index,
}: BenefitItem & { isVisible: boolean; index: number }) {
  return (
    <div
      className={`relative transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      }`}
      style={{
        transitionDelay: `${150 + index * 120}ms`,
      }}
    >
      {/* Badge số – đè lên đường thẳng cạnh trên */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-xl rounded-full bg-teal-300/30" />
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-bold flex items-center justify-center shadow-lg">
            {number}
          </div>
        </div>
      </div>

      <Card className="h-full border-blue-100 bg-blue-50/60 overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Thanh top gradient */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200" />

        <CardContent className="p-5">
          {/* Bố cục: text (trên) + ảnh (dưới) */}
          <div className="flex flex-col h-full min-h-[22rem] sm:min-h-[20rem] md:min-h-[24rem]">
            {/* Phần text – đẩy xuống khỏi badge */}
            <div className="flex flex-col pt-6 pb-4 flex-shrink-0">
              <h3 className="text-lg font-semibold text-blue-700 leading-snug">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {description}
              </p>
            </div>

            {/* Spacer – đẩy ảnh xuống đáy */}
            <div className="flex-1" />

            {/* Ảnh – khớp cạnh card */}
            <div className="-mx-5 -mb-5 flex-shrink-0">
              <img
                src={image}
                alt={alt}
                className="w-full h-40 sm:h-36 md:h-44 lg:h-48 object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}