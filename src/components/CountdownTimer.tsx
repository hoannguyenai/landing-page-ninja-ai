import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, DollarSign, Gift } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
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
            minutes: prev.minutes - 1,
            seconds: 59,
          };
        } else {
          // Reset to 59:59 when it reaches 0:0
          return {
            minutes: 59,
            seconds: 59,
          };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-[#EFF6FF] via-[#DBEAFE] to-[#93C5FD]">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-white border-[#DBEAFE] rounded-2xl shadow-xl">
          <CardContent className="pt-8 pb-8">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-700 mb-4">
                Lịch Khai Giảng & Học Phí
              </h2>
              <p className="text-lg text-gray-600">
                Thời gian còn lại để đăng ký ưu đãi:
              </p>
            </div>

            {/* Countdown Display */}
            <div className="grid grid-cols-2 gap-8 mb-8 justify-center max-w-md mx-auto">
              <div className="text-center bg-blue-50 rounded-lg p-4">
                <div className="text-6xl font-extrabold text-blue-600 mb-2">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-base font-semibold text-orange-500">
                  PHÚT
                </div>
              </div>
              <div className="text-center bg-blue-50 rounded-lg p-4">
                <div className="text-6xl font-extrabold text-blue-600 mb-2">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-base font-semibold text-orange-500">
                  GIÂY
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="text-blue-600" size={20} />
                <span className="text-gray-700">
                  <strong>Lịch khai giảng gần nhất:</strong> <span className="text-blue-600">15/10/2024</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <DollarSign className="text-blue-600" size={20} />
                <span className="text-gray-700">
                  <strong>Học phí:</strong> <span className="text-blue-600">3.600.000đ</span> / 12 buổi (≈ <span className="text-blue-600">300.000đ</span>/buổi)
                </span>
              </div>
            </div>

            {/* Special Offers */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Gift className="text-orange-500" size={20} />
                <span className="text-orange-500 font-bold text-lg">
                  Ưu Đãi Đặc Biệt:
                </span>
              </div>

              <div className="space-y-2 ml-8">
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700">
                    Giảm ngay <span className="text-blue-600">15%</span> cho đăng ký trước ngày khai giảng.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span className="text-gray-700">
                    Tặng thêm <span className="text-blue-600">1 buổi học thử</span> hoàn toàn miễn phí.
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg"
              >
                Giữ Chỗ Ngay Hôm Nay
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CountdownTimer;