import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import zaloIcon from "@/assets/zalo-icon.png";
import forumAvatar from "@/assets/forum-avatar.png";
import { Button } from "./ui/button";
import { InternalChatBox } from "./InternalChatBox";

export const ZaloChatWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showInternalChat, setShowInternalChat] = useState(false);
  const [language, setLanguage] = useState<"vi" | "en">("vi");

  const handleZaloChat = () => {
    // Thay link này bằng link Zalo Official Account thực tế
    window.open("https://zalo.me/xxxxxxxx", "_blank");
  };

  const handleQuickChat = () => {
    setIsPopupOpen(false);
    setShowInternalChat(true);
  };

  const texts = {
    vi: {
      greeting: "Xin chào! Rất vui khi được hỗ trợ bạn",
      zaloChat: "Chat bằng Zalo",
      quickChat: "Chat nhanh",
    },
    en: {
      greeting: "Hello! We're happy to assist you",
      zaloChat: "Chat via Zalo",
      quickChat: "Quick Chat",
    },
  };

  return (
    <>
      {/* Floating Zalo Button */}
      <AnimatePresence>
        {!isPopupOpen && !showInternalChat && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsPopupOpen(true)}
            className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse bg-white p-2"
            aria-label="Mở chat Zalo"
          >
            <img src={zaloIcon} alt="Zalo" className="w-full h-full object-contain" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-5 right-5 z-50 w-[90vw] max-w-[360px] bg-white rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={forumAvatar}
                  alt="The Forum Education"
                  className="w-12 h-12 rounded-full border-2 border-white shadow-md"
                />
                <div>
                  <h3 className="text-white font-semibold text-sm">
                    The Forum Education
                  </h3>
                  <p className="text-blue-100 text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                aria-label="Đóng"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 space-y-4">
              {/* Greeting */}
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-gray-700 text-sm">
                  {texts[language].greeting}
                </p>
              </div>

              {/* Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleZaloChat}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  {texts[language].zaloChat}
                </Button>
                <Button
                  onClick={handleQuickChat}
                  variant="outline"
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-lg border-gray-300 transition-all duration-200 transform hover:scale-105"
                >
                  {texts[language].quickChat}
                </Button>
              </div>
            </div>

            {/* Footer - Language Selector */}
            <div className="border-t border-gray-200 p-3 flex items-center justify-center gap-4">
              <button
                onClick={() => setLanguage("vi")}
                className={`text-sm transition-colors ${
                  language === "vi"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Tiếng Việt
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm transition-colors ${
                  language === "en"
                    ? "text-blue-600 font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                English
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Internal Chat Box */}
      {showInternalChat && (
        <InternalChatBox onClose={() => setShowInternalChat(false)} />
      )}
    </>
  );
};
