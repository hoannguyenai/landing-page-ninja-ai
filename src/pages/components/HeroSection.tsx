import React, {
  memo,
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { TypewriterText } from "@/components/TypewriterText";

// React thuần
const Spline = lazy(() => import("@splinetool/react-spline"));

const SIDE_CROP = 175; // px mỗi bên

/** Tìm phần tử header “ở ngay phía trên” Hero mà không cần sửa file index */
function findHeaderEl(host) {
  // 1) đi ngược các sibling ở cùng cấp để tìm <header> / role="banner"
  let node = host?.previousElementSibling || null;
  while (node) {
    const tag = node.tagName?.toLowerCase();
    if (tag === "header" || node.getAttribute?.("role") === "banner")
      return node;
    node = node.previousElementSibling;
  }
  // 2) fallback: đi lên parent rồi lại kiểm tra các sibling trước đó
  let p = host?.parentElement;
  while (p) {
    let sib = p.previousElementSibling;
    while (sib) {
      const tag = sib.tagName?.toLowerCase();
      if (tag === "header" || sib.getAttribute?.("role") === "banner")
        return sib;
      sib = sib.previousElementSibling;
    }
    p = p.parentElement;
  }
  // 3) cuối cùng: lấy sibling ngay trước host (nếu có) coi như header
  return host?.previousElementSibling || null;
}

function useHeaderHeightAuto(hostRef) {
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

    const cleanups = [];

    // resize window
    const onResize = () => read();
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    // observe header size if có
    if (header) {
      const ro = new ResizeObserver(read);
      ro.observe(header);
      cleanups.push(() => ro.disconnect());
    }

    // font/layout ổn định xong thì đọc lại
    const raf = requestAnimationFrame(read);
    cleanups.push(() => cancelAnimationFrame(raf));

    return () => cleanups.forEach((fn) => fn());
  }, [hostRef]);

  return h;
}

const HeroSection = memo(function HeroSection({
  scene = "https://prod.spline.design/2di31lDY8GOXaDfF/scene.splinecode",
}) {
  const hostRef = useRef(null);
  const headerH = useHeaderHeightAuto(hostRef);
  const [mount3D, setMount3D] = useState(false);

  // Chặn cuộn ngang ở body trong lúc Hero hiển thị (không cần sửa global CSS)
  useEffect(() => {
    const prevBodyOverflowX = document.body.style.overflowX;
    const prevHtmlOverflowX = document.documentElement.style.overflowX;
    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = prevBodyOverflowX;
      document.documentElement.style.overflowX = prevHtmlOverflowX;
    };
  }, []);

  // Lazy-mount 3D khi vào viewport
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setMount3D(entries[0].isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  // Tổng (header + hero) = 100vh
  const heroHeight = `calc(100vh - ${headerH}px)`;

  return (
    <section
      ref={hostRef}
      className="relative w-[100vw] mx-auto bg-white overflow-hidden select-none"
      style={{ height: heroHeight }}
      aria-label="Hero"
    >
      {/* Lớp 3D (bị CẮT 175px mỗi bên nhờ overflow-hidden ở section) */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0"
        // width = 100vw + 350px => thò 175px mỗi bên nhưng bị cắt hẳn, không thể cuộn thấy
        style={{
          width: `calc(100vw + ${SIDE_CROP * 2}px)`,
          height: "100%",
          pointerEvents: "auto",
          touchAction: "auto",
        }}
      >
        {mount3D && !prefersReducedMotion ? (
          <Suspense fallback={null}>
            <Spline
              scene={scene}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
                willChange: "transform",
              }}
            />
          </Suspense>
        ) : null}
      </div>

      {/* Lưới 3 cột — chỉ còn chữ động ở cột trái; KHÔNG chặn pointer vào 3D */}
      <div
        className="relative z-10 h-full w-full grid grid-cols-1 lg:grid-cols-3 items-center"
        style={{ pointerEvents: "none" }}
      >
        <div className="px-6 md:px-8">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight text-gray-900">
            <TypewriterText
              texts={[
                "Giúp con khám phá tư duy lập trình từ sớm",
                "Khơi dậy sáng tạo & tư duy logic",
                "Trang bị kỹ năng công nghệ cho thế hệ Alpha",
              ]}
              loop
              className="text-[#1E90FF]"
              speed={80}
              delay={400}
              highlights={{
                "khám phá": "text-[#FFA500]", // cam
                "tư duy lập trình": "text-[#B266FF]", // vàng
                "sáng tạo": "text-[#FFA500]", // cam
                "tư duy logic": "text-[#B266FF]", // vàng
                "kỹ năng công nghệ": "text-[#B266FF]", // xanh
                "thế hệ Alpha": "text-[#FFA500]", //cam
              }}
            />
          </h1>
        </div>
        <div className="hidden lg:block" />
        <div className="hidden lg:block" />
      </div>
    </section>
  );
});

export default HeroSection;
