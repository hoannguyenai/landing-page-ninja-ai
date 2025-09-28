import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { X, Rocket, Lightbulb } from "lucide-react";

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden bg-white rounded-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={20} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-600 p-2.5 rounded-xl">
              <Rocket className="text-white" size={20} />
            </div>
            <span className="text-sm font-medium text-blue-600">Rocket Tech Academy</span>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-blue-600 mb-2">
            Đăng ký tư vấn
          </DialogTitle>
          
          <p className="text-sm text-gray-600">
            Nhận tư vấn về: <span className="font-medium">Học phí · Thời gian học · Lộ trình học · Mức độ phù hợp</span>
          </p>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="parentName" className="text-sm font-medium text-gray-700">
                Tên phụ huynh
              </Label>
              <Input
                id="parentName"
                value={formData.parentName}
                onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                className="rounded-lg border-gray-200 bg-white px-3 py-2.5 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nhập tên phụ huynh"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Số điện thoại
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="rounded-lg border-gray-200 bg-white px-3 py-2.5 focus:border-blue-500 focus:ring-blue-500"
                placeholder="Nhập số điện thoại"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="consultationGoals" className="text-sm font-medium text-gray-700">
                Lộ trình học và mục tiêu phụ huynh cần tư vấn
              </Label>
              <Textarea
                id="consultationGoals"
                value={formData.consultationGoals}
                onChange={(e) => setFormData({...formData, consultationGoals: e.target.value})}
                className="rounded-lg border-gray-200 bg-white px-3 py-2.5 min-h-[80px] focus:border-blue-500 focus:ring-blue-500"
                placeholder="Mô tả mục tiêu và lộ trình học cho con"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full h-12 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-xl text-base mt-6 transition-all duration-200 hover:shadow-lg"
            >
              GỬI ĐĂNG KÝ
            </Button>
          </form>
        </div>

        {/* Footer Note */}
        <div className="bg-white p-4 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-center">
            <Lightbulb className="text-gray-500" size={16} />
            <p className="text-sm text-gray-600">
              Ba mẹ để lại thông tin để được{" "}
              <span className="font-medium">giải đáp thông tin khóa học ngay!</span>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};