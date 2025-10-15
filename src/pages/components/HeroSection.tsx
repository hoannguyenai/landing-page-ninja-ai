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

const Spline = lazy(() => import("@splinetool/react-spline"));

const SIDE_CROP = 175; // px mỗi bên

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

const HeroSection = memo(function HeroSection({
  scene = "https://prod.spline.design/2di31lDY8GOXaDfF/scene.splinecode",
}: {
  scene?: string;
}) {
  const hostRef = useRef<HTMLElement | null>(null);
  const headerH = useHeaderHeightAuto(hostRef as React.RefObject<HTMLElement>);
  const [mount3D, setMount3D] = useState(false);

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

  const heroHeight = `calc(100vh - ${headerH}px)`;

  return (
    <section
      ref={hostRef as React.RefObject<HTMLElement>}
      className="relative w-[100vw] mx-auto bg-white overflow-hidden select-none"
      style={{ height: heroHeight }}
      aria-label="Hero"
    >
      {/* Lớp 3D (bị CẮT 175px mỗi bên nhờ overflow-hidden ở section) */}
      <div
        className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-0"
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

      {/* Lưới nội dung:
          - Mobile: 1 cột x 5 hàng
              H1 (NINJA): hàng 1, font nhỏ hơn để không che hình
              Typewriter: hàng 2-5 (row-span-4) và flex items-center để "ở giữa màn hình"
          - Desktop (>=lg): 3 cột x 2 hàng
              Typewriter: col1/row1 và căn xuống đáy ô (self-end)
              NINJA: col3/row1, cỡ chữ gọn gàng
          Giữ pointer-events: none ở container để không chặn tương tác Spline
      */}
      <div
        className="relative z-10 h-full w-full grid grid-cols-1 grid-rows-5 lg:grid-cols-3 lg:grid-rows-2"
        style={{ pointerEvents: "none" }}
      >
        {/* NINJA AI TALENT HUNT — Mobile nhỏ lại; Desktop đặt col3/row1 */}
        <div className="row-start-1 col-start-1 px-6 md:px-8 pt-6 lg:pt-8 self-start justify-self-center text-center lg:justify-self-start lg:text-left lg:row-start-1 lg:col-start-3">
          <h2
            className="
              font-extrabold tracking-tight uppercase text-gray-900
              text-lg sm:text-2xl md:text-2xl
              lg:text-[1.6rem] xl:text-2xl
            "
            style={{ pointerEvents: "auto" }}
          >
            NINJA AI TALENT HUNT{" "}
            <span className="block normal-case text-gray-800 font-bold">
              – Săn tài năng lập trình nhí
            </span>
          </h2>
        </div>

        {/* Typewriter — Mobile: giữa màn hình; Desktop: căn xuống đáy ô góc trái */}
        <div
          className="
            row-start-2 row-span-4 col-start-1
            lg:row-start-1 lg:row-span-1 lg:col-start-1
            px-6 md:px-8
            flex lg:block
            items-center lg:items-auto
            h-full
            lg:self-end lg:pb-10 lg:pt-6
          "
        >
          <h1
            className="
              font-bold leading-tight text-gray-900
              text-3xl sm:text-4xl md:text-5xl
              lg:text-4xl xl:text-5xl
            "
          >
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
                "khám phá": "text-[#FFA500]",
                "tư duy lập trình": "text-[#B266FF]",
                "sáng tạo": "text-[#FFA500]",
                "tư duy logic": "text-[#B266FF]",
                "kỹ năng công nghệ": "text-[#B266FF]",
                "thế hệ Alpha": "text-[#FFA500]",
              }}
            />
          </h1>
        </div>

        {/* Giữ chỗ desktop cho layout 3x2 */}
        <div className="hidden lg:block lg:row-start-1 lg:col-start-2" />
        <div className="hidden lg:block lg:row-start-2 lg:col-start-2" />
        <div className="hidden lg:block lg:row-start-2 lg:col-start-3" />
      </div>
    </section>
  );
});

export default HeroSection;
