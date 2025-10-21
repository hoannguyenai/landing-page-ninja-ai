"use client";

import React, { useState } from "react";
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

import RoadmapPopup from "./RoadmapPopup";

export default function CoreProgramSection() {
  const [openRoadmap, setOpenRoadmap] = useState(false);

  return (
    <section
      className="py-20 px-4 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50"
      aria-labelledby="core-program-heading"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="core-program-heading"
            className="text-3xl lg:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent flex items-center justify-center gap-3 pb-3"
          >
            Chương trình Lập trình Cơ bản
          </h2>

          <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
            Lộ trình 12 tuần giúp học sinh xây dựng tư duy máy tính và tạo ra
            sản phẩm đầu tay qua các nhiệm vụ nhỏ, tăng độ khó theo từng tuần.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-14 items-stretch">
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
            const Icon = item.icon;
            return (
              <div key={i} className="h-full">
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Icon
                      className="text-teal-600 mb-3"
                      size={32}
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Main: 2 cột */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Thông tin chi tiết */}
          <div className="space-y-8">
            {/* Card 1: Cấu trúc học & phương pháp */}
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    <Clock size={22} className="text-teal-600" aria-hidden="true" />
                    Cấu trúc & Phương pháp
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check size={16} className="text-teal-600" aria-hidden="true" />
                      </span>
                      <span>
                        <strong>Thời lượng:</strong> 12 tuần – nhịp ổn định, mỗi
                        tuần một kỹ năng cốt lõi.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check size={16} className="text-teal-600" aria-hidden="true" />
                      </span>
                      <span>
                        <strong>Phương pháp:</strong> Học qua dự án
                        (project-based), chia nhỏ mục tiêu, phản hồi nhanh.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5">
                        <Check size={16} className="text-teal-600" aria-hidden="true" />
                      </span>
                      <span>
                        <strong>Thực hành:</strong> 60–70% thời lượng; lý thuyết
                        chỉ để đủ dụng.
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Card 2: Kết quả & sản phẩm */}
            <div>
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                    <Rocket size={22} className="text-teal-500" aria-hidden="true" />
                    Kết quả mong đợi
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 space-y-3">
                  <div className="flex items-start gap-3">
                    <Gamepad2 size={18} className="text-teal-600 mt-0.5" aria-hidden="true" />
                    <span>
                      Hoàn thiện <em>mini game</em> (ví dụ: Snake/Flappy) — tập
                      trung vào thuật toán điều khiển.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Smartphone size={18} className="text-teal-600 mt-0.5" aria-hidden="true" />
                    <span>
                      Ứng dụng nhỏ hữu ích (máy tính bỏ túi, chatbot cơ bản) — rèn quy trình từ ý tưởng đến triển khai.
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award size={18} className="text-teal-600 mt-0.5" aria-hidden="true" />
                    <span>
                      Nắm chắc nền tảng: biến, điều kiện, vòng lặp, hàm, đọc/ghi
                      dữ liệu và tư duy chia bài toán.
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right: Ảnh + CTA buttons */}
          <div className="flex flex-col h-[466px]">
            {/* Image */}
            <div className="flex-1 rounded-lg shadow-md overflow-hidden mb-3">
              <img
                src={studentProjects}
                alt="Sản phẩm do học viên thực hiện tại Rocket Tech Academy"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3" role="group" aria-label="Hành động nhanh">
              <Button size="lg" variant="cta" className="w-full group">
                <span className="arrow-slide inline-block" aria-hidden="true">👉</span>
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
            </div>
          </div>
        </div>

        {/* Extra features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 items-stretch">
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
            const Icon = f.icon;
            return (
              <div key={i} className="h-full">
                <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Icon className="text-teal-600 shrink-0" size={22} aria-hidden="true" />
                      <div>
                        <h3 className="text-base font-semibold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">{f.title}</h3>
                        <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <RoadmapPopup open={openRoadmap} onOpenChange={setOpenRoadmap} />
    </section>
  );
}