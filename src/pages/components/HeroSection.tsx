'use client';
import React, { memo, lazy, Suspense, useEffect, useRef, useState } from 'react';
import { TypewriterText } from '@/components/TypewriterText'; // giữ nguyên alias của bạn

// React thuần dùng gói này
const Spline = lazy(() => import('@splinetool/react-spline'));

const HeroSection = memo(function HeroSection() {
  const [mount3D, setMount3D] = useState(false);
  const hostRef = useRef(null);

  // Chỉ mount Spline khi hero vào viewport
  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => setMount3D(entries[0].isIntersecting),
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Respect prefers-reduced-motion
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      ref={hostRef}
      className="relative w-full bg-gradient-to-b from-[#EAF4FF] to-white overflow-visible"
      aria-label="Hero"
    >
      {/* 3D full-bleed: tràn 175px mỗi bên, cao 560px */}
      <div
        className="absolute top-1/2 -translate-y-1/2 left-[-175px] right-[-175px] z-0"
        style={{ height: '560px' }}
      >
        <div className="h-full w-full">
          {mount3D && !prefersReducedMotion ? (
            <Suspense fallback={<div className="h-full w-full" />}>
              <Spline
                scene="https://prod.spline.design/2di31lDY8GOXaDfF/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </Suspense>
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
      </div>

      {/* Lưới 3 cột: chữ ở cột trái ngoài cùng; 2 cột còn lại để trống */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[420px] lg:min-h-[560px] items-center">
          <div className="py-12">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              <TypewriterText
                texts={[
                  'Giúp con khám phá tư duy lập trình từ sớm',
                  'Khơi dậy sáng tạo & tư duy logic',
                  'Trang bị kỹ năng công nghệ cho thế hệ Alpha',
                ]}
                loop
                className="text-gray-900"
                speed={80}
                delay={400}
                highlights={{
                  'khám phá': 'text-teal-600',
                  'tư duy lập trình': 'text-blue-600',
                  'sáng tạo': 'text-teal-600',
                  'tư duy logic': 'text-blue-600',
                  'kỹ năng công nghệ': 'text-blue-600',
                  'thế hệ Alpha': 'text-teal-600',
                }}
              />
            </h1>
          </div>

          <div className="hidden lg:block" />
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
