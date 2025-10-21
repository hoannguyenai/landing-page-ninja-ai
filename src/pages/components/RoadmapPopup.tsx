"use client";

import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarDays, Sparkles } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

type RoadmapPopupProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  className?: string;
};

export default function RoadmapPopup({ open, onOpenChange, className }: RoadmapPopupProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActive = useRef<HTMLElement | null>(null);

  // Close on ESC
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onOpenChange(false);
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  // Restore focus & trap basic focus inside dialog
  useEffect(() => {
    if (open) {
      lastActive.current = document.activeElement as HTMLElement;
      dialogRef.current?.focus();
      const handler = (e: FocusEvent) => {
        if (!dialogRef.current) return;
        if (dialogRef.current.contains(e.target as Node)) return;
        dialogRef.current.focus();
      };
      document.addEventListener("focusin", handler);
      return () => {
        document.removeEventListener("focusin", handler);
        lastActive.current?.focus?.();
      };
    }
  }, [open]);

  // Prevent scroll when open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = original; };
  }, [open]);

  // Render nothing if SSR or closed (AnimatePresence handles exit)
  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.button
            aria-label="Đóng popup"
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-[2px] cursor-default"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="roadmap-title"
            tabIndex={-1}
            ref={dialogRef}
            className={cn(
              "fixed z-[70] inset-x-0 top-8 mx-auto w-[92%] sm:w-[700px] lg:w-[820px] outline-none",
              className
            )}
            initial={{ opacity: 0, y: -40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 180, damping: 20 } }}
            exit={{ opacity: 0, y: -24, scale: 0.98, transition: { duration: 0.18 } }}
          >
            <div className="rounded-2xl border border-blue-200/60 bg-white shadow-2xl">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b bg-gradient-to-b from-blue-50/70 to-transparent rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-blue-600" size={20} aria-hidden="true" />
                  <h3 id="roadmap-title" className="text-xl sm:text-2xl font-bold text-blue-700">
                    Mỗi Kỳ Học Là Một Sản Phẩm Thật
                  </h3>
                </div>
                <button
                  onClick={() => onOpenChange(false)}
                  className="shrink-0 rounded-full p-2 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                  aria-label="Đóng"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}
              <div className="p-5 sm:p-6">
                <Tabs defaultValue="scratch" className="w-full">
                  <TabsList className="grid grid-cols-1 sm:grid-cols-3 w-full">
                    <TabsTrigger value="scratch">Scratch Explorer (Lớp 3–6)</TabsTrigger>
                    <TabsTrigger value="web">Web Mini (Lớp 6–9)</TabsTrigger>
                    <TabsTrigger value="python">Python/AI Jr (Lớp 7–9)</TabsTrigger>
                  </TabsList>

                  {/* Tab 1 */}
                  <TabsContent value="scratch" className="mt-5">
                    <SectionCard
                      icon="🎮"
                      title='Game "Bảo Vệ Di Sản Quê Em"'
                      bullets={[
                        "✓ Tuần 1-4: Làm quen logic lập trình",
                        "✓ Tuần 5-8: Xây dựng nhân vật & cơ chế game",
                        "✓ Tuần 9-12: Hoàn thiện & trình diễn",
                      ]}
                    />
                  </TabsContent>

                  {/* Tab 2 */}
                  <TabsContent value="web" className="mt-5">
                    <SectionCard
                      icon="🌐"
                      title="Website Sự Kiện Trường/CLB"
                      bullets={[
                        "✓ Tuần 1-4: HTML/CSS cơ bản",
                        "✓ Tuần 5-8: JavaScript tương tác",
                        "✓ Tuần 9-12: Deploy & trình bày",
                      ]}
                    />
                  </TabsContent>

                  {/* Tab 3 */}
                  <TabsContent value="python" className="mt-5">
                    <SectionCard
                      icon="🤖"
                      title="Chatbot Học Tập + AI Nhỏ"
                      bullets={[
                        "✓ Tuần 1-4: Python cơ bản",
                        "✓ Tuần 5-8: Xây dựng chatbot",
                        "✓ Tuần 9-12: Tích hợp AI & báo cáo",
                      ]}
                    />
                  </TabsContent>
                </Tabs>

                {/* Milestone timeline */}
                <div className="mt-7 border-t pt-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CalendarDays className="text-blue-600" size={18} aria-hidden="true" />
                    <p className="font-semibold text-blue-700">Milestone Timeline</p>
                  </div>

                  <ul className="space-y-2 text-sm text-gray-700">
                    <TimelineItem text="📅 Tuần 6: DEMO WEEK - Trình bày tiến độ" />
                    <TimelineItem text="📅 Tuần 12: SHOWCASE - Triển lãm sản phẩm" />
                    <TimelineItem text="📊 4 tuần/lần: Báo cáo tiến bộ gửi phụ huynh" />
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}

function SectionCard({
  icon,
  title,
  bullets,
}: {
  icon: string;
  title: string;
  bullets: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28 }}
      className="rounded-xl border border-blue-200 bg-blue-50 p-4 sm:p-5"
    >
      <div className="flex items-start gap-3">
        <div className="text-xl sm:text-2xl" aria-hidden="true">{icon}</div>
        <div>
          <h4 className="text-base sm:text-lg font-semibold text-blue-700">{title}</h4>
          <ul className="mt-2 space-y-1.5 text-gray-700 text-sm">
            {bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function TimelineItem({ text }: { text: string }) {
  return <li className="leading-relaxed">{text}</li>;
}
