"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Sparkles } from "lucide-react";
import instructor1 from "@/assets/instructor-1.jpg";

type Instructor = {
  name: string;
  role: string;
  bio: string;
  avatarType: "image" | "initial";
  avatarSrc?: string;
  avatarText?: string;
  skills: string[];
  highlight?: string;
};

const INSTRUCTORS: Instructor[] = [
  {
    name: "Lê Thành Chỉnh",
    role: "Python & AI • ĐH Bách Khoa",
    bio: "Nhiều năm dạy học sinh THCS/THPT, định hướng sản phẩm thực tế và tư duy thuật toán.",
    avatarType: "image",
    avatarSrc: instructor1,
    skills: ["Python", "AI cơ bản", "Thuật toán", "Project-based"],
    highlight: "Mentor sản phẩm học sinh đạt giải cụm",
  },
  {
    name: "Nguyễn Quang",
    role: "Full-stack Developer",
    bio: "Kinh nghiệm dự án phần mềm thực chiến, giúp học sinh hiểu nhanh – làm được ngay.",
    avatarType: "initial",
    avatarText: "NQ",
    skills: ["HTML/CSS", "JS/TS", "React", "UX cơ bản"],
    highlight: "Thiết kế lộ trình học theo năng lực",
  },
];

export default function InstructorsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(
    new Array(INSTRUCTORS.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger items with staggered delay
          INSTRUCTORS.forEach((_, i) => {
            setTimeout(() => {
              setVisibleItems((prev) => {
                const newArray = [...prev];
                newArray[i] = true;
                return newArray;
              });
            }, i * 150);
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
    <section id="instructors" className="py-16 px-4 bg-white" ref={sectionRef}>
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <div
            className={`inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Sparkles size={14} /> Đội ngũ giảng viên
          </div>
          <h2
            className={`text-3xl lg:text-4xl font-bold mt-4 text-blue-700 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? "100ms" : "0ms",
            }}
          >
            Giảng viên – Truyền cảm hứng từ công nghệ
          </h2>
          <p
            className={`text-muted-foreground mt-3 max-w-2xl mx-auto transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: isVisible ? "200ms" : "0ms",
            }}
          >
            Kết hợp kinh nghiệm giảng dạy và thực chiến để biến kiến thức thành sản phẩm thật.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {INSTRUCTORS.map((ins, idx) => (
            <div
              key={idx}
              className={`transition-all duration-700 ease-out ${
                visibleItems[idx]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${300 + idx * 150}ms`,
              }}
            >
              <Card className="h-full bg-blue-50/70 border-blue-200/70 hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    {/* Avatar */}
                    {ins.avatarType === "image" ? (
                      <img
                        src={ins.avatarSrc}
                        alt={ins.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md flex-shrink-0"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white flex items-center justify-center text-xl font-bold ring-2 ring-white shadow-md flex-shrink-0">
                        {ins.avatarText}
                      </div>
                    )}

                    <div className="min-w-0">
                      <CardTitle className="text-xl">{ins.name}</CardTitle>
                      <CardDescription className="mt-0.5">{ins.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Highlight */}
                  {ins.highlight && (
                    <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-white text-blue-700 border border-blue-200 px-3 py-1.5 text-xs">
                      <Award size={14} />
                      <span className="font-medium">{ins.highlight}</span>
                    </div>
                  )}

                  {/* Bio */}
                  <p className="text-sm text-slate-700">{ins.bio}</p>

                  {/* Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {ins.skills.map((s) => (
                      <Badge
                        key={s}
                        variant="secondary"
                        className="bg-white text-slate-700 border border-slate-200"
                      >
                        {s}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}