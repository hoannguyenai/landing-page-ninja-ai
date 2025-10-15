import { useState } from "react";
import { X, MessageCircle } from "lucide-react";

export const ZaloChatWidget = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const handleZaloChat = () => {
    window.open("https://zalo.me/yourZaloID", "_blank");
  };

  const handleQuickChat = () => {
    setIsPopupOpen(false);
    setIsChatbotOpen(true);
    // TODO: Implement internal chatbot
  };

  const closeChatbot = () => {
    setIsChatbotOpen(false);
  };

  return (
    <>
      {/* Floating Zalo Button */}
      <button
        onClick={() => setIsPopupOpen(!isPopupOpen)}
        className="fixed bottom-6 right-6 md:bottom-4 md:right-4 z-50 w-14 h-14 md:w-12 md:h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl transition"
      >
        <MessageCircle size={20} />
      </button>

      {/* Popup Chat Box */}
      {isPopupOpen && (
        <div className="fixed bottom-20 right-5 z-[100000] w-80 bg-white rounded-xl shadow-xl border">
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-500 font-bold text-sm">TF</span>
              </div>
              <div>
                <h3 className="font-semibold text-sm">The Forum Education</h3>
                <p className="text-xs opacity-90">Đang hoạt động</p>
              </div>
            </div>
            <button
              onClick={() => setIsPopupOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Xin chào! Rất vui khi được hỗ trợ bạn
            </p>

            <div className="space-y-3">
              <button
                onClick={handleZaloChat}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Chat bằng Zalo
              </button>

              <button
                onClick={handleQuickChat}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium transition-colors"
              >
                Chat nhanh
              </button>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200 flex justify-center gap-4 text-sm text-gray-500">
              <button className="hover:text-blue-500">Tiếng Việt</button>
              <span>|</span>
              <button className="hover:text-blue-500">English</button>
            </div>
          </div>
        </div>
      )}

      {/* Internal Chatbot (placeholder) */}
      {isChatbotOpen && (
        <div className="fixed bottom-20 right-5 z-[100000] w-80 h-96 bg-white rounded-xl shadow-xl border">
          <div className="bg-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
            <h3 className="font-semibold">Chat nhanh</h3>
            <button
              onClick={closeChatbot}
              className="text-white hover:bg-white/20 rounded-full p-1"
            >
              <X size={16} />
            </button>
          </div>
          <div className="p-4 h-full flex items-center justify-center text-gray-500">
            Chatbot nội bộ sẽ được triển khai ở đây
          </div>
        </div>
      )}
    </>
  );
};
