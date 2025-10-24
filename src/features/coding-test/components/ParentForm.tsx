import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ParentFormSchema, type ParentFormData } from "../types";
import { toast } from "@/hooks/use-toast";
import { saveLead } from "@/integrations/supabase/services/leads";

interface ParentFormProps {
  onTakeTest: (data: ParentFormData) => void;
  onRegisterTrial: (data: ParentFormData) => void;
  defaultValues?: Partial<ParentFormData>;
}

export function ParentForm({
  onTakeTest,
  onRegisterTrial,
  defaultValues,
}: ParentFormProps) {
  const [saving, setSaving] = useState(false);

  const form = useForm<ParentFormData>({
    resolver: zodResolver(ParentFormSchema),
    defaultValues: {
      parentName: "",
      email: "",
      phone: "",
      studentName: "",
      grade: "",
      ...defaultValues,
    },
  });

  // Xử lý chung để lưu dữ liệu
  const handleSaveData = async (
    data: ParentFormData,
    onSuccess: (data: ParentFormData) => void
  ) => {
    try {
      setSaving(true);

      // ✅ Ghi dữ liệu vào bảng leads trên Supabase
      await saveLead({
        parent_name: data.parentName,
        email: data.email,
        phone: data.phone,
        student_name: data.studentName || null,
        grade: data.grade,
      });

      toast({
        title: "Đã lưu thông tin",
        description:
          "Chúng tôi đã ghi nhận thông tin của quý phụ huynh.",
      });

      onSuccess(data);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Lỗi",
        description:
          error?.message || "Không thể lưu thông tin, vui lòng thử lại.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">
            Thông tin phụ huynh để gửi kết quả
          </CardTitle>
          <CardDescription>
            Vui lòng điền thông tin để chúng tôi có thể gửi báo cáo kết quả test
            và lộ trình học phù hợp cho học sinh
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            {/* 
              Không cần thẻ <form> với onSubmit ở đây nữa vì 
              chúng ta sẽ xử lý submit qua onClick của từng nút.
            */}
            <form
              onSubmit={(e) => e.preventDefault()} // Ngăn chặn hành vi submit mặc định
              className="space-y-6"
            >
              {/* Họ tên phụ huynh */}
              <FormField
                control={form.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên phụ huynh *</FormLabel>
                    <FormControl>
                      <Input placeholder="Nguyễn Văn A" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Số điện thoại */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Số điện thoại *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="0901234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Tên học sinh */}
              <FormField
                control={form.control}
                name="studentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tên học sinh *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Tên con"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Khối lớp */}
              <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Khối lớp hiện tại *</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn khối lớp" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
                          <SelectItem key={grade} value={grade.toString()}>
                            Khối {grade}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Các nút submit */}
              <div className="flex flex-col space-y-4 pt-4">
                <Button
                  type="button" // Sử dụng type="button" để tránh submit mặc định
                  size="lg"
                  className="w-full"
                  disabled={form.formState.isSubmitting || saving}
                  onClick={form.handleSubmit((data) => handleSaveData(data, onTakeTest))}
                >
                  {saving ? "Đang lưu..." : "Làm bài thi"}
                </Button>

                <Button
                  type="button"
                  size="lg"
                  variant="secondary" // Sử dụng màu khác cho nút thứ hai
                  className="w-full"
                  disabled={form.formState.isSubmitting || saving}
                  onClick={form.handleSubmit((data) => handleSaveData(data, onRegisterTrial))}
                >
                  {saving ? "Đang lưu..." : "Đăng ký học thử"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}