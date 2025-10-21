import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Zap, Calendar, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return {
            ...prev,
            seconds: prev.seconds - 1,
          };
        } else if (prev.minutes > 0) {
          return {
            ...prev,
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        } else if (prev.hours > 0) {
          return {
            hours: prev.hours - 1,
            minutes: 59,
            seconds: 59,
          };
        } else {
          return {
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-blue-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-teal-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-6 md:py-6 md:px-8">
            <div className="flex items-center justify-center gap-2 md:gap-3 flex-wrap">
              <Zap className="animate-bounce" size={24} />
              <h2 className="text-lg md:text-2xl font-bold text-center">
                Ưu Đãi Có Thời Hạn
              </h2>
              <Zap className="animate-bounce" size={24} />
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-8">
            {/* Main Message */}
            <div className="text-center">
              <p className="text-base md:text-lg text-gray-700 font-medium">
                ⏰ Thời gian còn lại để nhận ưu đãi <span className="text-teal-600 font-bold">15% học phí</span>
              </p>
            </div>

            {/* Countdown Display */}
            <div className="grid grid-cols-3 gap-2 md:gap-4 lg:gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Giờ
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Phút
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 text-white rounded-lg md:rounded-2xl p-3 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Giây
                  </div>
                </div>
              </div>
            </div>

            {/* Course Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6">
              {/* Khai giảng */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-blue-200">
                <div className="flex justify-center mb-3">
                  <Calendar className="text-blue-600" size={28} />
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
                  Khai giảng
                </h3>
                <p className="text-lg md:text-2xl font-bold text-blue-600">
                  15/10/2024
                </p>
              </div>

              {/* Học phí */}
              <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-teal-200">
                <div className="flex justify-center mb-3">
                  <div className="text-3xl md:text-4xl">💰</div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-2 text-gray-900">
                  Học phí
                </h3>
                <p className="text-lg md:text-2xl font-bold text-teal-600">3.600.000đ</p>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  ≈ 300.000đ/buổi
                </p>
              </div>

              {/* Ưu đãi */}
              <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow text-center border border-cyan-200 sm:col-span-2 lg:col-span-1">
                <div className="flex justify-center mb-3">
                  <div className="text-3xl md:text-4xl">🎁</div>
                </div>
                <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-900">
                  Ưu đãi
                </h3>
                <Badge className="bg-teal-500 hover:bg-teal-600 text-white text-xs md:text-sm px-2 md:px-3 py-1 inline-block">
                  Giảm 15%
                </Badge>
                <p className="text-xs md:text-sm mt-2 text-gray-700">
                  + Tặng 1 buổi học thử
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center space-y-4">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-6 md:px-12 py-5 md:py-6 rounded-xl font-bold text-base md:text-lg shadow-xl transform hover:scale-105 transition-all"
              >
                <Timer className="mr-2" size={20} />
                Nhận Ưu Đãi Ngay
              </Button>
              
              <p className="text-xs md:text-sm text-gray-600 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
                Chỉ còn <span className="font-bold text-teal-600">5 suất</span> cuối cùng
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;