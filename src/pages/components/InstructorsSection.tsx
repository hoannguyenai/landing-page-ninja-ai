"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    avatarSrc: "/src/assets/instructor-1.jpg",
    skills: ["Python", "AI cơ bản", "Thuật toán", "Project-based"],
    highlight: "Mentor sản phẩm học sinh đạt giải cụm",
  },
  {
    name: "Nguyễn Quang",
    role: "Full-stack Developer",
    bio: "Kinh nghiệm dự án phần mềm thực chiến, giúp học sinh hiểu nhanh – làm được ngay.",
    avatarType: "image",
    avatarSrc: "/src/assets/z7150648687704_96023c9cd9ec57e28a772f8981fb936c.jpg",
    skills: ["HTML/CSS", "JS/TS", "React", "UX cơ bản"],
    highlight: "Thiết kế lộ trình học theo năng lực",
  },
];

export default function HeroSectionWithInstructors() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const current = INSTRUCTORS[currentIndex];

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === INSTRUCTORS.length - 1 ? 0 : prev + 1
      );
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handlePrev = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev === 0 ? INSTRUCTORS.length - 1 : prev - 1
    );
    startAutoSlide();
  };

  const handleNext = () => {
    stopAutoSlide();
    setCurrentIndex((prev) =>
      prev === INSTRUCTORS.length - 1 ? 0 : prev + 1
    );
    startAutoSlide();
  };

  return (
    <section id = "instructors" className="bg-white overflow-hidden relative">
      <div className="w-full mx-auto py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* --- Cột trái: Thông tin giảng viên --- */}
        <div className="lg:w-1/2 w-full text-center lg:text-left order-2 lg:order-1 animate-fade-in px-4 lg:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1D4ED8] mb-4 tracking-tight">
            Trung tâm giảng dạy lập trình Rocket Edu
          </h1>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            {current.name}
          </h2>
          <p className="text-blue-600 font-medium mt-1">{current.role}</p>

          <p className="mt-4 text-gray-700 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            {current.bio}
          </p>

          {current.highlight && (
            <p className="mt-3 text-indigo-600 font-semibold italic">
              “{current.highlight}”
            </p>
          )}

          <div className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2">
            {current.skills.map((skill) => (
              <span
                key={skill}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          <a
            href="/test"
            className="mt-10 inline-block px-10 py-4 bg-gradient-to-r from-[#1D4ED8] to-[#4788F1] text-white font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-xl"
          >
            Đăng ký ngay &rarr;
          </a>
        </div>

        {/* --- Cột phải: Ảnh giảng viên --- */}
        <div className="relative lg:w-1/2 w-full flex justify-center items-center order-1 lg:order-2 min-h-[420px] sm:min-h-[520px]">
          {/* Hiệu ứng nền xoay gradient */}
          <div className="absolute w-[460px] sm:w-[520px] h-[460px] sm:h-[520px] rounded-full bg-gradient-to-tr from-blue-200 via-indigo-200 to-transparent blur-3xl opacity-60 animate-spin-slow"></div>

          {/* Khung ảnh giảng viên */}
          <div
            key={currentIndex}
            className="relative z-10 w-[400px] sm:w-[460px] h-[400px] sm:h-[460px] bg-white shadow-[0_25px_80px_rgba(29,78,216,0.3)] overflow-hidden rounded-[2rem] border-[3px] border-transparent bg-clip-padding group transition-transform duration-700 ease-in-out hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-blue-100/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2rem]"></div>

            {current.avatarType === "image" && current.avatarSrc ? (
              <img
                src={current.avatarSrc}
                alt={current.name}
                className="w-full h-full object-cover object-top rounded-[2rem] transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center text-white text-7xl font-bold rounded-[2rem]">
                {current.avatarText}
              </div>
            )}
          </div>

          {/* Nút chuyển slide */}
          <button
            onClick={handlePrev}
            aria-label="Previous"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition"
          >
            <ChevronLeft className="w-7 h-7 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-3 shadow-lg hover:bg-white hover:scale-110 transition"
          >
            <ChevronRight className="w-7 h-7 text-gray-700" />
          </button>
        </div>
      </div>

      {/* CSS animation */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-in-out;
        }
        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
