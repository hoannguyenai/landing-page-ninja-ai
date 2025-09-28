import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { ConsultationModal } from "./ConsultationModal";

export const FloatingChatIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-cta hover:bg-cta/90 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
        aria-label="Mở form tư vấn"
      >
        <MessageCircle size={24} />
      </button>
      
      <ConsultationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};