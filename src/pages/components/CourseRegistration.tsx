import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Award, Gift, Phone, MessageCircle, Mail } from "lucide-react";

const CourseRegistration = () => {
  return (
    <section id="registration" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thông Tin Khóa Học
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Đầu tư cho tương lai của con với chi phí hợp lý
          </p>
        </div>

        {/* Main Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {/* Schedule Card */}
          <Card className="bg-white border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Calendar className="text-blue-600" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Lịch Khai Giảng</h3>
                  <p className="text-3xl font-bold text-blue-600">15/10/2024</p>
                  <div className="flex items-center justify-center gap-2 mt-3 text-sm text-gray-600">
                    <Clock size={16} />
                    <span>2 buổi/tuần, 90 phút/buổi</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing Card */}
          <Card className="bg-white border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg">
              Ưu đãi
            </div>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-3xl">💰</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Học Phí</h3>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 line-through">4.200.000đ</p>
                    <p className="text-3xl font-bold text-orange-600">3.600.000đ</p>
                    <p className="text-sm text-gray-600 mt-2">
                      12 buổi học • Chỉ <span className="font-semibold text-blue-600">300k/buổi</span>
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Class Size Card */}
          <Card className="bg-white border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="text-green-600" size={32} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Quy Mô Lớp</h3>
                  <p className="text-3xl font-bold text-green-600">8-12 học viên</p>
                  <p className="text-sm text-gray-600 mt-3">
                    Đảm bảo chăm sóc từng em
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Special Offers */}
        <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 mb-10">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-orange-700">
              <Gift size={24} />
              <span>Ưu Đãi Đặc Biệt Tháng 10</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Giảm 15% học phí</h4>
                  <p className="text-sm text-gray-600">Khi đăng ký trước ngày khai giảng. Tiết kiệm được 630.000đ!</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tặng buổi học thử miễn phí</h4>
                  <p className="text-sm text-gray-600">Để con trải nghiệm trước khi quyết định theo học dài hạn</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tặng bộ tài liệu học tập</h4>
                  <p className="text-sm text-gray-600">Trị giá 200.000đ bao gồm sách bài tập và tài khoản học online</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hỗ trợ 1-1 miễn phí</h4>
                  <p className="text-sm text-gray-600">30 phút tư vấn trực tiếp với giảng viên sau mỗi buổi học</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Chỉ còn 5 suất cuối cùng!
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay để nhận đầy đủ ưu đãi và đảm bảo chỗ cho con
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="secondary" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-6 text-lg shadow-lg">
              Đăng Ký Ngay
            </Button>
            
            <div className="hidden sm:block text-white/50">hoặc</div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <Phone size={18} className="mr-2" />
                Gọi ngay
              </Button>
              <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10">
                <MessageCircle size={18} className="mr-2" />
                Chat Zalo
              </Button>
            </div>
          </div>

          <p className="text-sm mt-6 opacity-75">
            💡 Bạn sẽ nhận phản hồi trong vòng 2 giờ làm việc
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseRegistration;