/**
 * Animation Examples - Fluent Future Style
 * Usage examples for ScrollSection and animation hooks
 */

import { ScrollSection, StaggerContainer, Counter } from "@/components/ScrollSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// ========================================
// EXAMPLE 1: Hero Section with Parallax
// ========================================
export function HeroExample() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Parallax Background */}
      <ScrollSection
        variant="parallax"
        intensity={0.5}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-20" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10 animate-parallax-float" />
      </ScrollSection>

      {/* Hero Content with Stagger */}
      <div className="container mx-auto px-4 pt-32">
        <StaggerContainer staggerDelay={0.15}>
          <ScrollSection variant="fade" delay={0}>
            <h1 className="text-6xl font-bold text-center mb-6">
              Học Lập Trình <span className="text-primary">Dành Cho Trẻ</span>
            </h1>
          </ScrollSection>

          <ScrollSection variant="slide" direction="up" delay={0.2}>
            <p className="text-xl text-center text-muted-foreground max-w-2xl mx-auto mb-8">
              Khơi nguồn tư duy logic và sáng tạo cho thế hệ tương lai
            </p>
          </ScrollSection>

          <ScrollSection variant="scale" delay={0.4}>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="cta" className="cta-shimmer cta-pulse">
                Bắt đầu học thử
              </Button>
              <Button size="lg" variant="outline">
                Xem chương trình
              </Button>
            </div>
          </ScrollSection>
        </StaggerContainer>
      </div>
    </section>
  );
}

// ========================================
// EXAMPLE 2: Stats Section with Counter
// ========================================
export function StatsExample() {
  const stats = [
    { number: 5000, suffix: "+", label: "Học viên" },
    { number: 95, suffix: "%", label: "Hài lòng" },
    { number: 50, suffix: "+", label: "Giáo viên" },
    { number: 100, suffix: "+", label: "Dự án" },
  ];

  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <ScrollSection variant="fade" className="mb-12">
          <h2 className="text-4xl font-bold text-center">Con số ấn tượng</h2>
        </ScrollSection>

        <StaggerContainer staggerDelay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollSection
                key={index}
                variant="scale"
                delay={index * 0.1}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-large transition-shadow gpu-accelerated">
                  <CardContent className="p-0">
                    <div className="text-5xl font-bold text-primary mb-2">
                      <Counter to={stat.number} suffix={stat.suffix} duration={2.5} />
                    </div>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              </ScrollSection>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

// ========================================
// EXAMPLE 3: Programs Section with Scale
// ========================================
export function ProgramsExample() {
  const programs = [
    {
      title: "Scratch Junior",
      age: "5-7 tuổi",
      description: "Lập trình qua kéo thả khối hình ảnh",
      icon: "🎨",
    },
    {
      title: "Scratch",
      age: "8-11 tuổi",
      description: "Tạo game và animation đơn giản",
      icon: "🎮",
    },
    {
      title: "Python",
      age: "12+ tuổi",
      description: "Ngôn ngữ lập trình chuyên nghiệp",
      icon: "🐍",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <ScrollSection variant="slide" direction="up" className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-4">Lộ trình học</h2>
          <p className="text-center text-muted-foreground">
            Chương trình phù hợp với từng độ tuổi
          </p>
        </ScrollSection>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ScrollSection
              key={index}
              variant="scale"
              delay={index * 0.15}
              className="h-full"
            >
              <Card className="h-full hover:scale-105 transition-transform gpu-accelerated group">
                <CardContent className="p-6">
                  <div className="text-6xl mb-4 animate-parallax-float group-hover:animate-counter-spin">
                    {program.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-primary font-semibold mb-3">{program.age}</p>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// EXAMPLE 4: Teachers Section with Rotate
// ========================================
export function TeachersExample() {
  const teachers = [
    { name: "Thầy Nam", role: "Senior Instructor", avatar: "/instructor-1.jpg" },
    { name: "Cô Linh", role: "Python Expert", avatar: "/instructor-2.jpg" },
    { name: "Thầy Minh", role: "Game Developer", avatar: "/instructor-3.jpg" },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollSection variant="fade" className="mb-12">
          <h2 className="text-4xl font-bold text-center">Đội ngũ giảng viên</h2>
        </ScrollSection>

        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <ScrollSection
              key={index}
              variant="rotate"
              delay={index * 0.1}
              className="text-center"
            >
              <div className="mb-4 inline-block">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary gpu-accelerated hover:scale-110 transition-transform">
                  <img
                    src={teacher.avatar}
                    alt={teacher.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
              <p className="text-muted-foreground">{teacher.role}</p>
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========================================
// EXAMPLE 5: Contact Form with Slide
// ========================================
export function ContactExample() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background Element */}
      <ScrollSection
        variant="parallax"
        intensity={0.3}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-96 bg-primary/10 rounded-full blur-3xl -z-10"
      >
        <div />
      </ScrollSection>

      <div className="container mx-auto px-4 max-w-2xl">
        <ScrollSection variant="slide" direction="down" className="mb-8">
          <h2 className="text-4xl font-bold text-center mb-4">Đăng ký tư vấn</h2>
          <p className="text-center text-muted-foreground">
            Để lại thông tin, chúng tôi sẽ liên hệ trong 24h
          </p>
        </ScrollSection>

        <ScrollSection variant="scale" delay={0.2}>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 font-medium">Họ tên phụ huynh</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="Nguyễn Văn A"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Số điện thoại</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                    placeholder="0912345678"
                  />
                </div>
                <Button type="submit" size="lg" variant="cta" className="w-full">
                  Gửi đăng ký
                </Button>
              </form>
            </CardContent>
          </Card>
        </ScrollSection>
      </div>
    </section>
  );
}

// ========================================
// EXAMPLE 6: 404 Page with Morph Animation
// ========================================
export function NotFound404Example() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <ScrollSection variant="scale">
          <div className="relative inline-block mb-8">
            <div className="w-64 h-64 bg-gradient-to-br from-primary to-accent animate-morph-bounce opacity-20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-9xl font-bold text-primary">404</span>
            </div>
          </div>
        </ScrollSection>

        <ScrollSection variant="fade" delay={0.2}>
          <h1 className="text-4xl font-bold mb-4">Không tìm thấy trang</h1>
          <p className="text-muted-foreground mb-8">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa
          </p>
        </ScrollSection>

        <ScrollSection variant="slide" direction="up" delay={0.4}>
          <Button size="lg" variant="cta">
            Về trang chủ
          </Button>
        </ScrollSection>
      </div>
    </div>
  );
}
