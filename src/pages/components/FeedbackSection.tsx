import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

// Định nghĩa cấu trúc cho một testimonial
interface Testimonial {
  content: string;
  author: string;
  role: string;
  avatarUrl: string;
}

// Mảng dữ liệu chứa các feedback, đã thay thế avatarUrl
const testimonials: Testimonial[] = [
  {
    content:
      "Sau khi học tại Learn To Leap, chị thấy bé đã trở nên tự tin hơn và có thể tự lập trình các chương trình game của mình.",
    author: "Chị Hồ Thị Thảo",
    role: "Mẹ Gia Khánh (8T)",
    avatarUrl: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  },
  {
    content:
      "Chương trình đã giúp cho con tôi phát triển các kỹ năng sáng tạo, giải quyết vấn đề và phát triển kỹ năng thực hành. Tôi thấy bé đã không còn rụt rè khi thuyết trình trước đám đông.",
    author: "Anh Nguyễn Bình Minh",
    role: "Bố Nguyễn Huy (10T)",
    avatarUrl: "https://i.pravatar.cc/150?u=a04258114e29026702d",
  },
  {
    content:
      "Sau thời gian học tại Learn To Leap, con đã rèn luyện tư duy và tính kiên trì và rất háo hức mong chờ đến giờ đi học tại Learn To Leap.",
    author: "Chị Phan Mai Hoa",
    role: "Mẹ bạn Khánh Chi (10T)",
    avatarUrl: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
  },
];

// Hiệu ứng fade up cho tiêu đề
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function FeedbackSection() {
  return (
    <section id="feedback" className="py-16 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        {/* Tiêu đề section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
        >
          <h2 className="text-4xl font-bold uppercase" style={{ color: '#4788F1' }}>
            Feedback Phụ Huynh
          </h2>
        </motion.div>

        {/* Lưới chứa các testimonial */}
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-24">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center h-full"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Thẻ feedback với nền gradient */}
              <Card 
                className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-lg w-full mb-6 relative flex flex-col flex-grow"
              >
                <CardContent className="p-6 flex flex-col flex-grow justify-center">
                  <blockquote className="text-base italic leading-relaxed">
                    "{t.content}"
                  </blockquote>
                  <div 
                    className="absolute -bottom-6 right-6 text-8xl font-bold text-blue-200 opacity-50"
                  >
                    ”
                  </div>
                </CardContent>
              </Card>

              {/* Thông tin tác giả */}
              <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 border-4 border-white -mt-16 z-10 shadow-md">
                  <AvatarImage src={t.avatarUrl} alt={t.author} />
                  <AvatarFallback>
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="mt-4">
                  <p className="font-bold text-lg text-gray-900">{t.author}</p>
                  <p className="text-gray-600">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}