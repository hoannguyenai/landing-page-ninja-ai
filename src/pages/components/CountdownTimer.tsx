import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input"; // Giả sử bạn có component Input
import { Button } from "@/components/ui/button";
import { Percent } from "lucide-react";

// --- Helper Component cho ô đếm ngược ---
// Thay đổi: text-purple-700 -> text-blue-700
const TimeUnit = ({ value, label }) => (
  <div className="text-center">
    <div className="text-4xl lg:text-5xl font-bold text-blue-700">
      {value.toString().padStart(2, "0")}
    </div>
    <div className="text-xs text-gray-500 uppercase">{label}</div>
  </div>
);


const RegistrationForm = () => {
  // Thiết lập thời gian ban đầu như trong hình ảnh
  const initialTime = {
    days: 0,
    hours: 8,
    minutes: 48,
    seconds: 27,
  };

  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              // Logic khi hết giờ, ví dụ: reset lại hoặc dừng
              // Ở đây ta sẽ dừng lại ở 0
              return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    // Dọn dẹp timer khi component bị unmount
    return () => clearTimeout(timer);
  }, [timeLeft]);


  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <main className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        {/* --- Cột bên trái: Hình ảnh --- */}
        <div className="hidden md:block">
          <img
            src="https://ohstem.vn/wp-content/uploads/2021/08/Untitled-1-34.jpg"
            alt="Học sinh đang học lập trình"
            className="w-full h-full object-cover"
          />
        </div>

        {/* --- Cột bên phải: Form và Thông tin ưu đãi --- */}
        <div className="p-8 lg:p-12">
          {/* Thay đổi: text-purple-700 -> text-blue-700 */}
          <h1 className="text-2xl lg:text-3xl font-bold text-blue-700 uppercase text-center mb-6">
            Đăng ký học thử miễn phí ngay tại nhà
          </h1>

          {/* Hộp ưu đãi */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8">
            <div className="flex justify-center mb-4">
                {/* Thay đổi: bg-purple-200 -> bg-blue-200 và text-purple-700 -> text-blue-700 */}
                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <Percent className="text-blue-700" size={28} />
                </div>
            </div>
            
            <p className="text-center text-gray-800 text-lg">
              {/* Thay đổi: bg-purple-700 -> bg-blue-700 */}
              Ưu đãi <span className="bg-blue-700 text-white font-semibold rounded px-2 py-1">Giảm 25% học phí</span> cho 10 học sinh đăng ký đầu tiên
            </p>

            <div className="mt-6">
              <p className="text-center text-sm text-gray-500 mb-3">
                Thời gian nhận ưu đãi còn:
              </p>
              <div className="flex justify-center items-center space-x-4">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Min" />
                <TimeUnit value={timeLeft.seconds} label="Sec" />
              </div>
            </div>
          </div>

          {/* Form đăng ký */}
          <div className="space-y-4">
            <h2 className="font-semibold text-lg text-center text-gray-700">
              Nhận ưu đãi ngay hôm nay!
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input type="text" placeholder="Họ và tên" className="w-full" />
                <Input type="tel" placeholder="Số điện thoại" className="w-full" />
              </div>
              <Input type="email" placeholder="Email" />
              <Input type="number" placeholder="Tuổi của con" />
              {/* 
                Thay đổi: Chuyển sang dùng background gradient
                - Loại bỏ: bg-purple-700 hover:bg-purple-800
                - Thêm: bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600
              */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white font-bold py-3 text-base transition-all duration-300"
              >
                ĐĂNG KÝ HỌC THỬ
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegistrationForm;