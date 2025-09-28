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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Đăng ký thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong 24h tới để tư vấn chi tiết.",
    });
    setFormData({ parentName: "", phone: "", consultationGoals: "" });
    onClose();
  };

  const consultationTopics = [
    { icon: Laptop, label: "Học phí", color: "bg-red-500" },
    { icon: Clock, label: "Thời gian học", color: "bg-red-500" },
    { icon: BookOpen, label: "Lộ trình học", color: "bg-red-500" },
    { icon: Target, label: "Mức độ phù hợp", color: "bg-red-500" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 to-pink-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500 p-2 rounded-lg">
              <Laptop className="text-white" size={24} />
            </div>
            <span className="text-sm font-medium">mindX Technology School</span>
          </div>
          
          <DialogTitle className="text-2xl font-bold mb-4">
            ĐĂNG KÝ TƯ VẤN
          </DialogTitle>
          
          <div className="flex flex-wrap gap-2">
            {consultationTopics.map((topic, index) => (
              <Badge
                key={index}
                className={`${topic.color} text-white px-3 py-1 text-sm font-medium`}
              >
                {topic.label}
              </Badge>
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
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-full text-lg mt-6"
            >
              GỬI ĐĂNG KÝ
            </Button>
          </form>
        </div>

        {/* Bottom CTA */}
        <div className="bg-red-500 p-4 text-white text-center">
          <p className="text-sm font-medium">
            Ba mẹ để lại thông tin để được{" "}
            <span className="font-bold">giải đáp thông tin khóa học ngay!</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};