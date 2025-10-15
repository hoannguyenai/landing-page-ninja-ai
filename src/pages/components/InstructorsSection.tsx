"use client";

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
  return (
    <section id="instructors" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-3 py-1 text-xs font-medium">
            <Sparkles size={14} /> Đội ngũ giảng viên
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mt-4 text-blue-700">
            Giảng viên – Truyền cảm hứng từ công nghệ
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Kết hợp kinh nghiệm giảng dạy và thực chiến để biến kiến thức thành sản phẩm thật.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {INSTRUCTORS.map((ins, idx) => (
            <Card
              key={idx}
              className="h-full bg-blue-50/70 border-blue-200/70 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  {ins.avatarType === "image" ? (
                    <img
                      src={ins.avatarSrc}
                      alt={ins.name}
                      className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-500 text-white flex items-center justify-center text-xl font-bold ring-2 ring-white shadow-md">
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
                    <Badge key={s} variant="secondary" className="bg-white text-slate-700 border border-slate-200">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
