import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

export type LeadInsert = TablesInsert<"leads">;

export async function saveLead(payload: LeadInsert) {
  const { error } = await supabase.from("leads").insert(payload);
  if (error) {
    // 23505 = unique_violation
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if ((error as any).code === "23505") {
      throw new Error("Email + SĐT này đã được đăng ký trước đó.");
    }
    throw error;
  }
}
