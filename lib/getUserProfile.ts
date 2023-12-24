import { supabase } from "../common/supabase";

export const getUserProfile = async (id: string) => {
  const { data: user, error } = await supabase.from("profiles").select().eq("id", id).single();

  return { user, error };
};
