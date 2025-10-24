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
import FinalCTASection from "./components/FinalCTASection";

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

      <div id="course">
        <CoreProgramSection />
      </div>

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
      <div id="pricing">
        <CountdownTimer />
      </div>
      

      <div id="testimonials">
        <FeedbackSection />
      </div>
      
      

      {/* Final CTA Section */}
      <FinalCTASection />

      {/* Contact Section */}
     

      <Footer />
    </div>
  );
};

export default Index;
