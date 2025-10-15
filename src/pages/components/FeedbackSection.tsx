import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, CheckCircle2, Shield, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { type ComponentType, type SVGProps } from "react";

// components/FeedbackSection.tsx

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

interface Stat {
  label: string; // tiêu đề ngắn gọn
  valueText: string; // số liệu nổi bật
  note: string; // chú thích ngắn
  Icon: IconType;
}

const stats: Stat[] = [
  {
    label: "Hoàn thành sản phẩm",
    valueText: "95%",
    note: "Học viên có sản phẩm ở cuối khóa",
    Icon: Trophy,
  },
  {
    label: "Mức hài lòng",
    valueText: "4.8/5",
    note: "Điểm từ phản hồi phụ huynh",
    Icon: Star,
  },
  {
    label: "An toàn AI",
    valueText: "100%",
    note: "Được hướng dẫn sử dụng AI đúng cách",
    Icon: Shield,
  },
];

interface Testimonial {
  content: string;
  author: string;
  rating: number; // 1-5
}

const testimonials: Testimonial[] = [
  {
    content:
      "Sau khóa học, con tự làm được game Snake và rất tự tin khoe với bạn bè.",
    author: "Phụ huynh học sinh lớp 7",
    rating: 5,
  },
  {
    content:
      "Không chỉ biết code, con suy nghĩ có hệ thống và chủ động hơn hẳn.",
    author: "Phụ huynh học sinh lớp 8",
    rating: 5,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-16 px-4 bg-[#a3bafa]/10">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold mb-4">💬 Feedback từ phụ huynh & học viên</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Số liệu gọn – ý nghĩa rõ. Không rườm rà, tập trung vào kết quả.
          </p>
        </motion.div>

        {/* KPI / Proof Bar (thoáng, không lặp ý) */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {stats.map(({ label, valueText, note, Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex"
            >
              <Card className="flex flex-col justify-between bg-blue-50 shadow-medium hover:shadow-large transition-shadow w-full">
                <CardHeader className="flex flex-row items-center gap-3">
                  <div className="p-2 rounded-xl bg-white shadow-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{label}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-4xl font-extrabold tracking-tight text-primary">{valueText}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{note}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Cards (ngắn gọn, súc tích) */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="flex"
            >
              <Card className="flex flex-col justify-between shadow-medium bg-blue-50 w-full">
                <CardContent className="pt-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex mb-3">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="text-yellow-400 fill-current" size={20} />
                      ))}
                    </div>
                    <blockquote className="text-lg mb-4 italic">“{t.content}”</blockquote>
                  </div>
                  <p className="font-medium text-primary mt-auto">— {t.author}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}