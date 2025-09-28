import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { X, Laptop, Clock, BookOpen, Target } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    consultationGoals: "",
  });
  
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const topicsText = selectedTopics.length > 0 ? `Quan tâm về: ${selectedTopics.join(", ")}. ` : "";
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong 24h tới để tư vấn chi tiết.",
    });
    setFormData({ parentName: "", phone: "", consultationGoals: "" });
    setSelectedTopics([]);
    onClose();
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev => 
      prev.includes(topic) 
        ? prev.filter(t => t !== topic)
        : [...prev, topic]
    );
  };

  const consultationTopics = [
    { icon: Laptop, label: "Học phí", color: "bg-primary" },
    { icon: Clock, label: "Thời gian học", color: "bg-primary" },
    { icon: BookOpen, label: "Lộ trình học", color: "bg-primary" },
    { icon: Target, label: "Mức độ phù hợp", color: "bg-primary" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white p-2 rounded-lg">
              <Laptop className="text-primary" size={24} />
            </div>
            <span className="text-sm font-medium">Rocket Tech Academy</span>
          </div>
          
          <DialogTitle className="text-2xl font-bold mb-4">
            ĐĂNG KÝ TƯ VẤN
          </DialogTitle>
          
          <div className="flex flex-wrap gap-2">
            {consultationTopics.map((topic, index) => (
              <button
                key={index}
                onClick={() => toggleTopic(topic.label)}
                className={`px-3 py-1 text-sm font-medium rounded-full transition-all duration-200 ${
                  selectedTopics.includes(topic.label)
                    ? 'bg-white text-primary shadow-md scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {topic.label}
              </button>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="text-sm font-medium">
                Tên phụ huynh
              </Label>
              <Input
                id="parentName"
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                className="rounded-full bg-gray-100 border-0 px-4 py-2"
                placeholder="Nhập tên phụ huynh"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Số điện thoại
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="rounded-full bg-gray-100 border-0 px-4 py-2"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="consultationGoals" className="text-sm font-medium">
                Lộ trình học và mục tiêu phụ huynh cần tư vấn
              </Label>
              <Input
                id="consultationGoals"
                value={formData.consultationGoals}
                onChange={(e) => setFormData({...formData, consultationGoals: e.target.value})}
                className="rounded-full bg-gray-100 border-0 px-4 py-2"
                placeholder="Mô tả mục tiêu và lộ trình học cho con"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-full text-lg mt-6"
            >
              GỬI ĐĂNG KÝ
            </Button>
          </form>
        </div>

        {/* Bottom CTA */}
        <div className="bg-primary p-4 text-white text-center">
          <p className="text-sm font-medium">
            Ba mẹ để lại thông tin để được{" "}
            <span className="font-bold">giải đáp thông tin khóa học ngay!</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};