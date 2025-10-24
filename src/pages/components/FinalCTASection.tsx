import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type HeroSectionProps = {
  title?: string[];
  subtitle?: string;
  buttonText?: string;
  noteText?: string;
};

// Dữ liệu cho các thẻ khóa học để dễ quản lý
const coursesData = [
  {
    imageSrc: "	https://w.ladicdn.com/s450x400/631e92c346981f00203a3f59/scratch-20230504070913-fypkn.png",
    title: "Lập Trình SCRATCH",
    description: (
      <>
        Làm quen với <strong>tư duy máy tính</strong> (Computer thinking) và các khái niệm cơ bản đến nâng cao như <strong>vòng lặp, tọa độ, điều kiện và biến</strong>. Trẻ tự xây dựng các <strong>dự án trò chơi</strong> hoặc <strong>ứng dụng</strong> của riêng mình.
      </>
    ),
    details: [
      { label: "Tuổi", value: "7+" },
      { label: "Level", value: "3 cấp độ" },
      { label: "Thời lượng", value: "72 giờ" },
      { label: "Hình thức học", value: "BLENDED LEARNING (Online kết hợp Offline)" },
      { label: "Mô hình lớp học", value: "1/1; 1/4; 1/10" },
    ],
  },

  {
    imageSrc: "data:image/jpeg;base64,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",
    title: "Lập Trình Python",
    description: (
      <>
        Lập trình nâng cao với những cấu trúc về <strong>vòng lặp, điều kiện, rẽ nhánh</strong>, các khái niệm về <strong>toán tử, biến số, dữ liệu, cách tổ chức xây dựng các hàm, các lớp</strong>... được lồng ghép trong những bài toán thực tế.
      </>
    ),
    details: [
      { label: "Tuổi", value: "10+" },
      { label: "Level", value: "3 cấp độ" },
      { label: "Thời lượng", value: "72 giờ" },
      { label: "Hình thức học", value: "BLENDED LEARNING (Online kết hợp Offline)" },
      { label: "Mô hình lớp học", value: "1/1; 1/4; 1/10" },
    ],
  },
  {
    imageSrc: "https://w.ladicdn.com/s550x350/631e92c346981f00203a3f59/roblox_logo_2022svg-20230510232910-fdslz.png",
    title: "Lập Trình Roblox với JemS",
    description: (
      <>
        Jem S là phần mềm mã hóa khối, có thể được sử dụng với Roblox Studio. Không cần phải dùng mã hóa văn bản phức tạp, JemS giúp sắp xếp tuần tự trong không gian, <strong>các kiến thức lập trình</strong> để mỗi người dùng là một nhà thiết kế, sáng tạo cho thế giới của mình.
      </>
    ),
    details: [
        { label: "Tuổi", value: "11+" },
        { label: "Level", value: "3 cấp độ" },
        { label: "Thời lượng", value: "72 giờ" },
        { label: "Hình thức học", value: "BLENDED LEARNING (Online kết hợp Offline)" },
    ],
  },
  {
    imageSrc: "https://w.ladicdn.com/s450x400/631e92c346981f00203a3f59/ai-bee-logo-20230510233244-zzb1d.png",
    title: "Lập Trình Ứng dụng",
    description: (
      <>
        Cung cấp <strong>kiến thức cơ bản về lập trình ứng dụng</strong> di động, nắm bắt cách sử dụng công cụ App Inventor, Mockingbot, Heroku để triển khai xây dựng các ứng dụng và trò chơi thực tế trên điện thoại.
      </>
    ),
    details: [
        { label: "Tuổi", value: "11+" },
        { label: "Level", value: "3 cấp độ" },
        { label: "Thời lượng", value: "72 giờ" },
        { label: "Hình thức học", value: "BLENDED LEARNING (Online kết hợp Offline)" },
    ],
  },
];


const FinalCTASection: React.FC<HeroSectionProps> = ({
  title = ["Trang bị kỹ năng", "công nghệ cho", "thế hệ Alpha"],
  subtitle = "NINJA AI TALENT HUNT™ giúp học sinh khám phá tài năng lập trình, phát triển tư duy sáng tạo và hiện thực hóa ý tưởng qua sản phẩm công nghệ thực tế.",
  buttonText = "Bài test trình độ lập trình miễn phí",
  noteText = "Thi thử 45 phút - Nhận học bổng đến 80% - Cam kết sản phẩm thật sau 12 tuần.",
}) => {
  return (
    <section  className="bg-white">
      {/* PHẦN TRÊN GIỮ NGUYÊN */}
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left animate-fade-in-left">
            <p className="text-sm font-semibold text-gray-500 mb-4 flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 3v4M3 5h4M4 17v4m-2-2h4m11-4v4m-2-2h4M12 3v18"
                />
              </svg>
              Khơi nguồn sáng tạo
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              {title[0]} <span className="text-blue-600">{title[1]}</span>{" "}
              {title[2]}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-gray-600 max-w-xl">
              {subtitle}
            </p>
            <div className="mt-8 space-y-4">
              <Link to="/test">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-[#4788F1] to-[#1D4ED8] hover:from-[#5A3CF1] hover:to-[#4338CA] text-white font-bold text-base px-8 py-6 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                  aria-label={buttonText}
                >
                  🚀 {buttonText}
                </Button>

              </Link>
              <p className="text-xs sm:text-sm text-gray-500">{noteText}</p>
            </div>
          </div>

          <div className="flex justify-center items-center animate-fade-in-right">
            <div className="relative w-full max-w-md lg:max-w-none">
              <img
                src="https://www.pace.edu.vn/uploads/news/2023/11/7-cau-hoi-thuong-gap-ve-gen-alpha.jpg"
                alt="Học sinh lập trình robot"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* PHẦN 4 CỘT ĐÃ ĐƯỢC THAY THẾ HOÀN TOÀN */}
      <div id ="4-course" className="bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coursesData.map((course, index) => (
              <div
                key={index}
                className="bg-white border border-purple-200 rounded-3xl p-6 flex flex-col text-left h-full"
              >
                <div className="text-center">
                  <img
                    src={course.imageSrc}
                    alt={course.title}
                    className="h-24 mx-auto mb-4 object-contain"
                  />
                  <h3 className="  min-h-16 text-2xl font-extrabold text-[#1D4ED8] mb-4">
                    {course.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 flex-grow min-h-133 ">
                  {course.description}
                </p>

                <ul className="text-sm space-y-1 text-gray-700 mb-6">
                  {course.details.map((detail, i) => (
                    <li key={i}>
                      - {detail.label}: <strong className="text-gray-900">{detail.value}</strong>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto text-center">
                  <Button className="bg-gradient-to-r from-[#4788F1] to-[#1D4ED8] hover:from-[#5A3CF1] hover:to-purple-800 text-white font-bold py-3 px-8 rounded-full text-base transition-all duration-300">
                    HỌC THỬ MIỄN PHÍ
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;