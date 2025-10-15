import { Card, CardContent } from "@/components/ui/card";
import brainDevelopment from "@/assets/brain-development.jpg";
import subjectsConnection from "@/assets/subjects-connection.jpg";
import techHabits from "@/assets/tech-habits.jpg";
import alphaGeneration from "@/assets/alpha-generation.jpg";

type BenefitItem = {
  number: number;
  title: string;
  description: string;
  image: string;
  alt: string;
};

const benefits: BenefitItem[] = [
  {
    number: 1,
    title: "Giúp con phát triển trí não trong giai đoạn vàng",
    description:
      "Học lập trình sớm giúp kích thích tư duy logic, sáng tạo và giải quyết vấn đề.",
    image: brainDevelopment,
    alt: "Phát triển trí não cho trẻ",
  },
  {
    number: 2,
    title: "Phát triển tư duy – học tốt các môn trên trường",
    description:
      "Lập trình rèn luyện khả năng kết nối kiến thức Toán, Lý, Anh, Tin học.",
    image: subjectsConnection,
    alt: "Kết nối kiến thức các môn học",
  },
  {
    number: 3,
    title: "Thay đổi thói quen dùng công nghệ của con",
    description:
      "Từ người tiêu thụ nội dung sang người sáng tạo, biết làm ra sản phẩm công nghệ.",
    image: techHabits,
    alt: "Thay đổi thói quen công nghệ",
  },
  {
    number: 4,
    title: "Thế hệ Alpha – Công nghệ & AI là kỹ năng bắt buộc",
    description:
      "Học lập trình giúp trẻ hiểu cách AI hoạt động và làm chủ công nghệ.",
    image: alphaGeneration,
    alt: "Thế hệ Alpha và công nghệ AI",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-teal-500 bg-clip-text text-transparent pb-2">
            Lý do ba mẹ nên cho con học lập trình sớm
          </h2>
          <p className="mt-3 text-muted-foreground">
            Tư duy – Kỹ năng – Thói quen công nghệ là lợi thế của thế hệ mới
          </p>
        </div>

        {/* Grid responsive: 1 → 2 → 4 cột */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((b) => (
            <BenefitCard key={b.number} {...b} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({ number, title, description, image, alt }: BenefitItem) {
  return (
    <div className="relative">
      {/* Badge số – đè lên đường thẳng cạnh trên */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-4 z-20">
        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-xl rounded-full bg-teal-300/30" />
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white font-bold flex items-center justify-center shadow-lg">
            {number}
          </div>
        </div>
      </div>

      <Card className="h-full border-blue-100 bg-blue-50/60 overflow-hidden">
        {/* Thanh top gradient để badge đè lên */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-teal-200 to-blue-200" />

        <CardContent className="p-5">
          {/* 2 nửa: text (trên) + ảnh (dưới) – giữ chiều cao đều nhau */}
          <div className="grid grid-rows-2 min-h-[22rem] sm:min-h-[22rem] md:min-h-[24rem] lg:min-h-[26rem]">
            {/* Nửa trên: Text – đẩy xuống khỏi badge */}
            <div className="flex flex-col pt-6">
              <h3 className="text-lg font-semibold text-blue-700">{title}</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                {description}
              </p>
              {/* bỏ spacer lớn để ảnh gần text hơn */}
            </div>

            {/* Nửa dưới: Ảnh – khớp cạnh card (bù padding bằng margin âm) */}
            <div className="mt-2 -mx-5 -mb-5">
              <img
                src={image}
                alt={alt}
                className="w-full h-48 md:h-52 lg:h-56 object-cover block"
                loading="lazy"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
