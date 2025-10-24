import React, {
  memo,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { TypewriterText } from "@/components/TypewriterText";

// Các hàm tiện ích useHeaderHeightAuto và findHeaderEl được giữ nguyên
// vì chúng rất hữu ích để tính toán chiều cao của section một cách chính xác.
function findHeaderEl(host: HTMLElement | null) {
  let node: Element | null = host?.previousElementSibling || null;
  while (node) {
    const tag = (node as HTMLElement).tagName?.toLowerCase();
    if (
      tag === "header" ||
      (node as HTMLElement).getAttribute?.("role") === "banner"
    )
      return node as HTMLElement;
    node = (node as HTMLElement).previousElementSibling;
  }
  let p: HTMLElement | null = host?.parentElement || null;
  while (p) {
    let sib: Element | null = p.previousElementSibling;
    while (sib) {
      const tag = (sib as HTMLElement).tagName?.toLowerCase();
      if (
        tag === "header" ||
        (sib as HTMLElement).getAttribute?.("role") === "banner"
      )
        return sib as HTMLElement;
      sib = (sib as HTMLElement).previousElementSibling;
    }
    p = p.parentElement;
  }
  return (host?.previousElementSibling as HTMLElement) || null;
}

function useHeaderHeightAuto(hostRef: React.RefObject<HTMLElement>) {
  const [h, setH] = useState(0);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const header = findHeaderEl(host);
    const read = () => {
      const height = header?.getBoundingClientRect?.().height ?? 0;
      setH(Math.max(0, Math.round(height)));
    };

    read();

    const cleanups: Array<() => void> = [];

    const onResize = () => read();
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    if (header) {
      const ro = new ResizeObserver(read);
      ro.observe(header);
      cleanups.push(() => ro.disconnect());
    }

    const raf = requestAnimationFrame(read);
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, [hostRef]);

  return h;
}

const HeroSection = memo(function HeroSection() {
  const hostRef = useRef<HTMLElement | null>(null);
  const headerH = useHeaderHeightAuto(hostRef as React.RefObject<HTMLElement>);
  const heroHeight = `calc(100vh - ${headerH}px)`;

  // --- Mảng chứa các link ảnh để dễ quản lý ---
  const images = {
    main: "https://w.ladicdn.com/s1050x900/631e92c346981f00203a3f59/new-uc-home-page-1-e1632382217968-copy-20230513074116-ukxfn.png",
    scratch: "https://w.ladicdn.com/s550x550/631e92c346981f00203a3f59/scratch-20230513074301-eyeof.png",
    robot: "https://w.ladicdn.com/s650x550/631e92c346981f00203a3f59/nxt-20230513074116-i1wcv.png",
    classroom: "https://w.ladicdn.com/s550x500/631e92c346981f00203a3f59/c28145b3a124ee8d89cda8383f06d81e-20230513074116-oqfon.png",
  }

  return (
    <section
      ref={hostRef as React.RefObject<HTMLElement>}
      className="relative w-full mx-auto bg-white overflow-hidden select-none"
      style={{ minHeight: '700px', height: heroHeight }}
      aria-label="Hero"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute bg-purple-100 rounded-full w-96 h-96 -top-20 -left-20 opacity-50 blur-2xl"></div>
        <div className="absolute bg-blue-100 rounded-full w-[500px] h-[500px] -bottom-40 -right-20 opacity-60 blur-3xl"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-8 h-full grid lg:grid-cols-2 gap-12 items-center">

        <div className="text-center lg:text-left animate-fade-in-up">
          <h2
            className="
              font-extrabold tracking-widest uppercase text-purple-600
              text-sm sm:text-base
            "
          >
            NINJA AI TALENT HUNT
          </h2>

          <p className="mt-2 text-xl text-slate-700 font-medium">
            Trang bị kỹ năng công nghệ cho thế hệ Alpha
          </p>


          <h1
            className="
              mt-5 font-black leading-tight text-slate-800
              text-4xl sm:text-5xl md:text-6xl
            "
          >
            <TypewriterText
              texts={[
                "Phát triển tư duy Lập trình",
                "Khơi dậy sự Sáng tạo",
                "Xây dựng Kỹ năng tương lai",
              ]}
              loop
              className="text-blue-600"
              speed={70}
              delay={500}
              highlights={{
                "Lập trình": "text-blue-600  font-bold ",
                "Sáng tạo": "text-blue-600 font-bold",
                "Kỹ năng tương lai": "text-blue-600 font-bold",
              }}
            />
          </h1>

          <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-slate-600 text-lg">
            Hãy để con bạn biến những ý tưởng sáng tạo thành sản phẩm công nghệ thực tế và trang bị những kỹ năng cần thiết cho một tương lai rộng mở.
          </p>

          <button className="
            mt-10 group relative inline-flex items-center justify-center
            bg-[#3177E5] text-white font-bold
            py-4 px-10 rounded-full text-lg
            shadow-lg shadow-purple-500/30
            hover:bg-purple-700
            transition-all duration-300 ease-in-out
            transform hover:scale-105"
          >
            <span>Đăng Ký Trải Nghiệm Miễn Phí</span>
            {/* Icon mũi tên */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* === CẢI TIẾN: Bố cục collage cho các hình ảnh === */}
        <div className="hidden lg:flex items-center justify-center h-full relative animate-fade-in">
          <div className="relative w-full max-w-2xl h-[500px] animate-float">
            
            {/* Khung nền trang trí */}
            <div className="absolute top-0 left-0 w-full h-full bg-blue-200 rounded-3xl transform -rotate-6 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-amber-200 rounded-3xl transform rotate-6 opacity-50"></div>
            
            {/* Ảnh chính */}
            <img
              src={images.main}
              alt="Học sinh học lập trình với robot"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] object-cover rounded-2xl shadow-2xl z-10"
            />
            
            {/* Ảnh phụ: Lớp học */}
            <img 
              src={images.classroom}
              alt="Lớp học lập trình"
              className="absolute top-0 left-10 w-48 h-auto object-cover rounded-xl shadow-lg transform -rotate-6 z-20"
            />

            {/* Ảnh phụ: Robot NXT */}
            <img 
              src={images.robot}
              alt="Robot NXT"
              className="absolute top-12 right-0 w-52 h-auto object-cover rounded-xl shadow-lg transform rotate-6 z-0"
            />
            
            {/* Ảnh phụ: Scratch */}
            <img 
              src={images.scratch}
              alt="Lập trình Scratch"
              className="absolute bottom-4 left-0 w-48 h-auto object-cover rounded-xl shadow-lg z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;