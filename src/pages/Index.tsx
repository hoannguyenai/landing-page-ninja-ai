import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Footer from "@/components/Footer";
import CountdownTimer from "@/pages/components/CountdownTimer";
import {
  CheckCircle2,
  Users,
  Award,
  Calendar,
  Clock,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { BenefitsSection } from "@/pages/components/BenefitsSection";
import { CodingGameSection } from "@/pages/components/CodingGameSection";
import LearningJourneyPipeline from "./components/LearningJourneyPipeline";
import ScholarshipTiers from "./components/ScholarshipGrid";
import CoreProgramSection from "./components/CoreProgramSection";
import HeroSection from "./components/HeroSection";
import FeedbackSection from "./components/FeedbackSection";
import InstructorsSection from "./components/InstructorsSection";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
    childGrade: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong 24h tới.",
    });
  };

  const features = [
    { icon: CheckCircle2, text: "12 buổi học trực quan, sinh động" },
    { icon: CheckCircle2, text: "2 dự án thực tế (Mini Game + Ứng dụng nhỏ)" },
    {
      icon: CheckCircle2,
      text: "Học xong có thể tự tin viết chương trình đơn giản",
    },
  ];

  const testimonials = [
    {
      content:
        "Con tôi ban đầu không hứng thú với Tin học. Sau khóa học ở Rocket Tech Academy, bé lớp 7 đã tự làm game Snake và rất tự hào khoe với bạn bè.",
      author: "Chị H., phụ huynh lớp 7",
      rating: 5,
    },
    {
      content:
        "Khóa học không chỉ dạy code mà còn rèn tư duy logic. Con tôi chủ động, sáng tạo hơn rất nhiều.",
      author: "Anh T., phụ huynh lớp 8",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth isolate">
      {/* <Header /> */}

      <HeroSection />

      <LearningJourneyPipeline />

      <ScholarshipTiers />

      {/* Enhanced Benefits Section with Advanced Scroll Animations */}
      <BenefitsSection />

      <CoreProgramSection />

      {/* Dots Divider */}
      <div className="flex justify-center gap-2 py-6">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-150"></span>
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-300"></span>
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-500"></span>
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-700"></span>
      </div>

      {/* Enhanced Interactive Coding Game Section with Advanced Scroll Animations */}
      <CodingGameSection />

      {/* Gradient Line Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#2563EB]/30 via-[#3B82F6]/10 to-transparent my-12"></div>

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Countdown & Pricing Section */}
      <CountdownTimer />

      <FeedbackSection />

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">🤝 Đối tác & Uy tín</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Award className="text-primary" />
                  Giáo trình tham khảo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    • Code.org - Nền tảng giáo dục lập trình hàng đầu thế giới
                  </li>
                  <li>• Scratch - Ngôn ngữ lập trình trực quan cho trẻ em</li>
                  <li>• Python for Kids - Tài liệu học Python chuyên biệt</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-blue-50">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <CheckCircle2 className="text-success" />
                  Chuẩn quốc tế
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Phù hợp định hướng thi Tin học trẻ</li>
                  <li>• Theo chuẩn các kỳ thi quốc tế</li>
                  <li>• Đáp ứng nhu cầu học tập hiện đại</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-[#93C5FD] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8 animate-fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold">
              🌟 Hãy để con bắt đầu hành trình lập trình ngay hôm nay
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              cùng Rocket Tech Academy - nơi ươm mầm những lập trình viên tương
              lai
            </p>

            <div className="space-y-4">
              <Button
                size="xl"
                variant="secondary"
                className="animate-scale-in"
              >
                👉 Làm Mini-test Lập trình ngay – Miễn phí
              </Button>
              <p className="text-sm opacity-75">
                Nhận ngay báo cáo chi tiết và lộ trình học phù hợp cho con
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-card">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-semibold">Liên hệ với chúng tôi</h3>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone size={20} />
                Hotline: 09xx.xxx.xxx
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle size={20} />
                Zalo: Click-to-Call
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail size={20} />
                Email: info@rockettechacademy.vn
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
