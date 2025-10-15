import React from "react";
import { Button } from "@/components/ui/button";

type FinalCTASectionProps = {
  /** Truyền callback nếu bạn muốn gắn hành vi cho nút CTA (mở mini-test, modal, v.v.) */
  onStartMiniTest?: () => void;
  /** Cho phép tuỳ chỉnh nội dung nếu cần trong tương lai */
  title?: string;
  subtitle?: string;
  buttonText?: string;
  noteText?: string;
};

const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onStartMiniTest,
  title = "🌟 Hãy để con bắt đầu hành trình lập trình ngay hôm nay",
  subtitle = "Cùng Rocket Tech Academy - Nơi ươm mầm những lập trình viên tương lai",
  buttonText = "👉 Làm Mini-test Lập trình ngay – Miễn phí",
  noteText = "Nhận ngay báo cáo chi tiết và lộ trình học phù hợp cho con",
}) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-teal-500 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl opacity-95 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
          <div className="space-y-4">
            <Button
              size="xl"
              className="animate-scale-in w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all"
              onClick={onStartMiniTest}
              aria-label="Làm mini-test lập trình miễn phí"
            >
              {buttonText}
            </Button>
            <p className="text-xs sm:text-sm opacity-90 drop-shadow">
              {noteText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;