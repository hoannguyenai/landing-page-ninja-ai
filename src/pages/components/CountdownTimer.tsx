import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Timer, Zap } from "lucide-react";

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
    <section className="py-12 px-4 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-400 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <Card className="bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 px-6">
            <div className="flex items-center justify-center gap-3">
              <Zap className="animate-bounce" size={24} />
              <h2 className="text-xl md:text-2xl font-bold text-center">
                Ưu Đãi Có Thời Hạn
              </h2>
              <Zap className="animate-bounce" size={24} />
            </div>
          </div>

          <div className="p-6 md:p-10">
            {/* Main Message */}
            <div className="text-center mb-8">
              <p className="text-lg md:text-xl text-gray-700 font-medium mb-2">
                ⏰ Thời gian còn lại để nhận ưu đãi <span className="text-orange-600 font-bold">15% học phí</span>
              </p>
            </div>

            {/* Countdown Display */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 mb-8 max-w-xl mx-auto">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-4xl md:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.hours.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Giờ
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-4xl md:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.minutes.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Phút
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg transform hover:scale-105 transition-transform">
                  <div className="text-4xl md:text-6xl font-extrabold mb-1 md:mb-2">
                    {timeLeft.seconds.toString().padStart(2, "0")}
                  </div>
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider opacity-90">
                    Giây
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="bg-orange-50 rounded-xl p-6 mb-8">
              <h3 className="text-center font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
                <span className="text-2xl">🎁</span>
                <span>Bạn sẽ nhận được:</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Giảm ngay <span className="font-bold text-orange-600">630.000đ</span> học phí
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Tặng <span className="font-bold text-blue-600">1 buổi học thử</span> miễn phí
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Bộ tài liệu học tập trị giá <span className="font-bold text-blue-600">200.000đ</span>
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                    ✓
                  </div>
                  <p className="text-gray-700">
                    Hỗ trợ <span className="font-bold text-blue-600">1-1</span> với giảng viên
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center space-y-4">
              <Button
                size="lg"
                className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 md:px-12 py-6 rounded-xl font-bold text-lg shadow-xl transform hover:scale-105 transition-all"
              >
                <Timer className="mr-2" size={20} />
                Nhận Ưu Đãi Ngay
              </Button>
              
              <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Chỉ còn <span className="font-bold text-orange-600">5 suất</span> cuối cùng
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;