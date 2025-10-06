import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import CodingGame from "@/components/CodingGame";
import { ZaloChatWidget } from "@/components/ZaloChatWidget";
import { OverlayTransition } from "@/components/OverlayTransition";
import heroBanner from "@/assets/hero-banner.jpg";
import instructor1 from "@/assets/instructor-1.jpg";
import studentProjects from "@/assets/student-projects.jpg";
import brainDevelopment from "@/assets/brain-development.jpg";
import subjectsConnection from "@/assets/subjects-connection.jpg";
import techHabits from "@/assets/tech-habits.jpg";
import alphaGeneration from "@/assets/alpha-generation.jpg";
import {
  CheckCircle2,
  Code,
  Users,
  Award,
  Calendar,
  Clock,
  Star,
  Rocket,
  Gamepad2,
  Smartphone,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
import { CodingTestCTA } from "@/features/coding-test";
import { TypewriterText } from "@/components/TypewriterText";
import { FeaturesSection } from "@/components/FeaturesSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CodingGameSection } from "@/components/CodingGameSection";
import { BasicCourseSection } from "@/components/BasicCourseSection";
import { SectionDivider } from "@/components/SectionDivider";
import { motion, useScroll, useTransform } from "framer-motion";

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
    { icon: CheckCircle2, text: "Học xong có thể tự tin viết chương trình đơn giản" },
  ];

  const testimonials = [
    {
      content: "Con tôi ban đầu không hứng thú với Tin học. Sau khóa học ở Rocket Tech Academy, bé lớp 7 đã tự làm game Snake và rất tự hào khoe với bạn bè.",
      author: "Chị H., phụ huynh lớp 7",
      rating: 5,
    },
    {
      content: "Khóa học không chỉ dạy code mà còn rèn tư duy logic. Con tôi chủ động, sáng tạo hơn rất nhiều.",
      author: "Anh T., phụ huynh lớp 8", 
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#EAF4FF] to-white">
        <div className="container mx-auto max-w-6xl relative z-10 px-6 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 animate-fade-up text-center">
              <div className="flex flex-col gap-4">
                <h1
                  className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-900 to-teal-500 bg-clip-text text-transparent mb-4"
                  style={{
                    textShadow: '0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                </h1>
                <div className="bg-badge-teal inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
                  🚀 Khơi nguồn sáng tạo
                </div>
                <div className="min-h-[200px] flex items-start justify-center">
                  <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                    <TypewriterText
                      texts={[
                        "Giúp con khám phá tư duy lập trình từ sớm",
                        "Khơi dậy sáng tạo & tư duy logic",
                        "Trang bị kỹ năng công nghệ cho thế hệ Alpha"
                      ]}
                      loop={true}
                      className="text-gray-900"
                      speed={80}
                      delay={500}
                      highlights={{
                        "khám phá": "text-teal-600",
                        "tư duy lập trình": "text-blue-600",
                        "sáng tạo": "text-teal-600",
                        "tư duy logic": "text-blue-600",
                        "kỹ năng công nghệ": "text-blue-600",
                        "thế hệ Alpha": "text-teal-600"
                      }}
                    />
                  </h1>
                </div>
                <p className="text-xl leading-relaxed" style={{ color: '#374151' }}>
                  NINJA AI TALENT HUNT” giúp học sinh khám phá tài năng lập trình, phát triển tư duy sáng tạo và hiện thực hóa ý tưởng qua sản phẩm công nghệ thực tế.
                </p>
              </div>

              <div className="space-y-4">
                <CodingTestCTA
                  label="Thi thử Miễn Phí - Nhận Học Bổng Ngay"
                  className="cta-entry bg-cta-gradient hover:bg-cta-gradient font-bold text-white shadow-[0px_4px_10px_rgba(20,184,166,0.3)] hover:shadow-[0px_6px_15px_rgba(20,184,166,0.4)] transition-all duration-300 hover:scale-105 group"
                />
                <p className="text-sm text-muted-foreground">
                  Thi thử 45 phút - Nhận học bổng đến 80% - Cam kết sản phẩm thật sau 12 tuần.
                </p>
              </div>
            </div>

            <div className="animate-slide-right">
              <img
                src={heroBanner}
                alt="Học sinh lập trình tại Rocket Tech Academy"
                className="rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section with Advanced Scroll Animations */}
      <BenefitsSection />

      {/* Enhanced Features Section with Advanced Scroll Animations */}
      <div id="features">
        <FeaturesSection />
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

      {/* Course Section */}
      <section id="course" className="py-16 px-4 bg-white relative overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute top-10 right-10 w-28 h-28 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-15"
          style={{
            y: useTransform(useScroll().scrollYProgress, [0, 1], ["0%", "-35%"])
          }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full opacity-20"
          style={{
            y: useTransform(useScroll().scrollYProgress, [0, 1], ["0%", "50%"])
          }}
        />

        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-large bg-blue-100">
              <CardHeader className="text-center">
                <motion.div
                  whileInView={{ y: [30, 0] }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <CardTitle className="text-3xl mb-4">
                    🎯 Mini-test Lập trình <Badge variant="secondary">MIỄN PHÍ</Badge>
                  </CardTitle>
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <CardDescription className="text-lg">
                    Bài test nhanh với 5–7 câu hỏi trắc nghiệm về tư duy logic và code cơ bản
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    className="space-y-6"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -50 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold">Lợi ích cho phụ huynh:</h3>
                    <ul className="space-y-3">
                      <motion.li
                        className="flex items-center gap-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        <CheckCircle2 className="text-success" size={20} />
                        Nhận báo cáo kết quả chi tiết
                      </motion.li>
                      <motion.li
                        className="flex items-center gap-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        <CheckCircle2 className="text-success" size={20} />
                        Được tư vấn lộ trình học phù hợp cho con
                      </motion.li>
                      <motion.li
                        className="flex items-center gap-3"
                        whileInView={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                      >
                        <CheckCircle2 className="text-success" size={20} />
                        Phân cấp: Beginner – Intermediate – Advanced
                      </motion.li>
                    </ul>
                  </motion.div>

                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 50 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {[
                      { id: "parentName", label: "Họ tên phụ huynh *", value: formData.parentName },
                      { id: "phone", label: "Số điện thoại *", value: formData.phone, type: "tel" },
                      { id: "email", label: "Email *", value: formData.email, type: "email" },
                      { id: "childName", label: "Tên của con *", value: formData.childName },
                      { id: "childGrade", label: "Lớp học hiện tại *", value: formData.childGrade, placeholder: "Ví dụ: Lớp 7, Lớp 10..." }
                    ].map((field, index) => (
                      <motion.div
                        key={field.id}
                        className="space-y-2"
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      >
                        <Label htmlFor={field.id}>{field.label}</Label>
                        <Input
                          id={field.id}
                          type={field.type || "text"}
                          placeholder={field.placeholder}
                          value={field.value}
                          onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                          required
                        />
                      </motion.div>
                    ))}

                    <motion.div
                      whileInView={{ opacity: 1, scale: 1 }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                    >
                      <OverlayTransition to="/test">
                        <Button type="submit" size="lg" variant="cta" className="w-full group">
                          <span className="arrow-slide inline-block">👉</span> Bắt đầu làm bài test ngay
                        </Button>
                      </OverlayTransition>
                    </motion.div>
                  </motion.form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Course Details Section with Advanced Scroll Animations */}
      <BasicCourseSection />

      {/* Gradient Line Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#2563EB]/30 via-[#3B82F6]/10 to-transparent my-12"></div>

      {/* Instructors Section */}
      <section id="instructors" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6 text-blue-600">
              👨‍🏫 Giảng viên – Truyền cảm hứng từ công nghệ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <img
                    src={instructor1}
                    alt="Thầy Lê Thành Chỉnh"
                    className="w-20 h-20 rounded-full object-cover shadow-soft"
                  />
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Lê Thành Chỉnh</h3>
                    <p className="text-muted-foreground">
                      Cử nhân CNTT Bách Khoa, chuyên về Python & AI
                    </p>
                    <p className="text-sm">
                      Nhiều năm kinh nghiệm giảng dạy học sinh, đam mê truyền cảm hứng công nghệ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl shadow-soft">
                    NQ
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Nguyễn Quang</h3>
                    <p className="text-muted-foreground">
                      Chuyên gia đa công nghệ, fullstack developer
                    </p>
                    <p className="text-sm">
                      Từng tham gia nhiều dự án phần mềm thực tế, kinh nghiệm thực chiến phong phú
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-muted-foreground">
              ➡️ Kinh nghiệm giảng dạy + thực chiến công nghệ, giúp học sinh học dễ hiểu – làm được ngay
            </p>
          </div>
        </div>
      </section>

      {/* Countdown & Pricing Section */}
      <CountdownTimer />

      {/* Additional Pricing Details */}
      <section id="pricing" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-large bg-blue-50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">
                📋 Chi tiết khóa học & Đăng ký
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <Calendar className="text-primary mx-auto" size={32} />
                  <h3 className="text-xl font-semibold">Khai giảng</h3>
                  <p className="text-2xl font-bold text-primary">15/10/2024</p>
                </div>

                <div className="space-y-3">
                  <div className="text-3xl">💰</div>
                  <h3 className="text-xl font-semibold">Học phí</h3>
                  <p className="text-2xl font-bold">3.600.000đ</p>
                  <p className="text-sm text-muted-foreground">≈ 300.000đ/buổi</p>
                </div>

                <div className="space-y-3">
                  <div className="text-3xl">🎁</div>
                  <h3 className="text-xl font-semibold">Ưu đãi</h3>
                  <Badge variant="secondary" className="text-base px-3 py-1 mb-2">
                    Giảm 15%
                  </Badge>
                  <p className="text-sm">+ Tặng 1 buổi học thử</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="xl" variant="secondary" className="animate-scale-in">
                  👉 Giữ chỗ ngay hôm nay
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 bg-[#a3bafa]/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              💬 Feedback từ phụ huynh & học viên
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium bg-blue-50">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current" size={20} />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <p className="font-semibold text-primary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              🤝 Đối tác & Uy tín
            </h2>
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
                  <li>• Code.org - Nền tảng giáo dục lập trình hàng đầu thế giới</li>
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
              cùng Rocket Tech Academy - nơi ươm mầm những lập trình viên tương lai
            </p>
            
            <div className="space-y-4">
              <Button size="xl" variant="secondary" className="animate-scale-in">
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
                📞 Hotline: 09xx.xxx.xxx
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <MessageCircle size={20} />
                💬 Zalo: Click-to-Call  
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Mail size={20} />
                ✉️ Email: info@rockettechacademy.vn
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