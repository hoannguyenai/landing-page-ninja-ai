import { supabase } from "@/integrations/supabase/client";
import type { TablesInsert } from "@/integrations/supabase/types";

export type LeadInsert = TablesInsert<"leads">;

export async function saveLead(payload: LeadInsert) {
  const { error } = await supabase.from("leads").insert(payload);
  if (error) throw error;
}
