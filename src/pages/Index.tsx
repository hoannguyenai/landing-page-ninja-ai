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
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-hero-bg-light" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6">
                <div className="bg-badge-teal inline-flex items-center rounded-full px-4 py-2 text-sm font-medium">
                  🚀 Khơi nguồn sáng tạo
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Giúp con khám phá{" "}
                  <span className="text-primary">
                    tư duy lập trình
                  </span>{" "}
                  từ sớm 🚀
                </h1>
                <p className="text-xl leading-relaxed" style={{ color: '#374151' }}>
                  Khóa học giúp học sinh phát triển tư duy logic, sáng tạo qua dự án thực tế.
                </p>
              </div>
              
              <div className="space-y-4">
                <CodingTestCTA 
                  label="👉 Làm Bài Test Miễn Phí Ngay"
                  className="animate-scale-in bg-cta-gradient hover:bg-cta-gradient font-bold text-white shadow-[0px_4px_10px_rgba(20,184,166,0.3)] hover:shadow-[0px_6px_15px_rgba(20,184,166,0.4)] transition-all duration-300"
                />
                <p className="text-sm text-muted-foreground">
                  Xác định trình độ lập trình của con chỉ trong 5 phút – nhận ngay báo cáo kết quả & lộ trình học phù hợp.
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

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#111827' }}>
              Lý do ba mẹ nên cho con học lập trình sớm
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefit 1 */}
            <div className="flex flex-col space-y-6 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cta text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Giúp con phát triển trí não trong giai đoạn vàng
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#374151' }}>
                    Học lập trình sớm giúp kích thích tư duy logic, sáng tạo và giải quyết vấn đề.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={brainDevelopment}
                  alt="Phát triển trí não cho trẻ"
                  className="w-full h-48 object-cover rounded-xl shadow-medium"
                />
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="flex flex-col space-y-6 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cta text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-accent">
                    Phát triển tư duy – học tốt các môn trên trường
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#374151' }}>
                    Lập trình rèn luyện khả năng kết nối kiến thức Toán, Lý, Anh, Tin học.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={subjectsConnection}
                  alt="Kết nối kiến thức các môn học"
                  className="w-full h-48 object-cover rounded-xl shadow-medium"
                />
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col space-y-6 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cta text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-primary">
                    Thay đổi thói quen dùng công nghệ của con
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#374151' }}>
                    Từ người tiêu thụ nội dung sang người sáng tạo, biết làm ra sản phẩm công nghệ.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={techHabits}
                  alt="Thay đổi thói quen công nghệ"
                  className="w-full h-48 object-cover rounded-xl shadow-medium"
                />
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="flex flex-col space-y-6 animate-fade-up">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cta text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-accent">
                    Thế hệ Alpha – Công nghệ & AI là kỹ năng bắt buộc
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#374151' }}>
                    Học lập trình giúp trẻ hiểu cách AI hoạt động và làm chủ công nghệ.
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <img
                  src={alphaGeneration}
                  alt="Thế hệ Alpha và công nghệ AI"
                  className="w-full h-48 object-cover rounded-xl shadow-medium"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              Chương trình <span className="text-primary">Lập trình cơ bản</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Khóa học được thiết kế đặc biệt cho học sinh từ 12-18 tuổi (cấp 2 & 3)
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow animate-scale-in">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <feature.icon className="text-success mt-1 flex-shrink-0" size={24} />
                    <p className="text-foreground">{feature.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <Code className="text-primary mb-2" size={32} />
                <CardTitle>Giáo trình quốc tế</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Tham khảo từ Code.org, Scratch, Python for Kids</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/5 to-primary/5">
              <CardHeader>
                <Users className="text-secondary mb-2" size={32} />
                <CardTitle>Giảng viên chuyên nghiệp</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Giảng viên Bách Khoa & chuyên gia CNTT, giàu kinh nghiệm</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/5 to-secondary/5">
              <CardHeader>
                <Award className="text-accent mb-2" size={32} />
                <CardTitle>Đối tượng phù hợp</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Học sinh từ 12–18 tuổi (cấp 2 & 3)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Coding Game Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              🎮 Học lập trình qua trò chơi
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Thử ngay game lập trình tương tác! Học cách sử dụng loops, điều kiện và biến 
              thông qua việc điều khiển rocket đến ngôi sao.
            </p>
          </div>
          <CodingGame />
        </div>
      </section>

      {/* Course Section */}
      <section id="course" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-large animate-scale-in">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">
                🎯 Mini-test Lập trình <Badge variant="secondary">MIỄN PHÍ</Badge>
              </CardTitle>
              <CardDescription className="text-lg">
                Bài test nhanh với 5–7 câu hỏi trắc nghiệm về tư duy logic và code cơ bản
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold">Lợi ích cho phụ huynh:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-success" size={20} />
                      Nhận báo cáo kết quả chi tiết
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-success" size={20} />
                      Được tư vấn lộ trình học phù hợp cho con
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="text-success" size={20} />
                      Phân cấp: Beginner – Intermediate – Advanced
                    </li>
                  </ul>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentName">Họ tên phụ huynh *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Số điện thoại *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childName">Tên của con *</Label>
                    <Input
                      id="childName"
                      value={formData.childName}
                      onChange={(e) => setFormData({...formData, childName: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="childGrade">Lớp học hiện tại *</Label>
                    <Input
                      id="childGrade"
                      placeholder="Ví dụ: Lớp 7, Lớp 10..."
                      value={formData.childGrade}
                      onChange={(e) => setFormData({...formData, childGrade: e.target.value})}
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" variant="hero" className="w-full">
                    👉 Bắt đầu làm bài test ngay
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Details Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              🎯 Khóa Lập trình Cơ bản
            </h2>
            <p className="text-xl text-muted-foreground">
              12 buổi, 2 dự án thực tế, học xong làm được ngay
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="text-primary" />
                    Thời lượng & Phương pháp
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>• <strong>12 buổi</strong> (mỗi buổi 90 phút)</p>
                  <p>• <strong>Phương pháp:</strong> Học qua dự án (Project-based learning)</p>
                  <p>• <strong>Kết hợp:</strong> Lý thuyết + Thực hành</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Rocket className="text-secondary" />
                    Sản phẩm đầu ra
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="text-accent" size={20} />
                    <span>Mini Game Snake hoặc Flappy Bird</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Smartphone className="text-accent" size={20} />
                    <span>Ứng dụng nhỏ (Máy tính bỏ túi, Chatbot cơ bản)</span>
                  </div>
                </CardContent>
              </Card>

              <Button size="lg" variant="outline" className="w-full">
                👉 Đăng ký học thử miễn phí 1 buổi
              </Button>
            </div>

            <div className="animate-slide-right">
              <img
                src={studentProjects}
                alt="Dự án học viên tại Rocket Tech Academy"
                className="rounded-2xl shadow-large w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              👨‍🏫 Giảng viên – Truyền cảm hứng từ công nghệ
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-medium">
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

            <Card className="shadow-medium">
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
      <section id="pricing" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-large bg-gradient-to-r from-primary/5 to-secondary/5">
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
      <section id="testimonials" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              💬 Feedback từ phụ huynh & học viên
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-medium">
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
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl font-bold mb-6">
              🤝 Đối tác & Uy tín
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
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

            <Card>
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
      <section className="py-20 px-4 bg-hero-gradient text-white">
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