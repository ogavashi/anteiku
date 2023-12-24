import { supabase } from "../common/supabase";

export const updateUserProfile = async (update: { [x: string]: string }, id: string) => {
  const { error, data: updatedUser } = await supabase
    .from("profiles")
    .update(update)
    .eq("id", id)
    .select()
    .single();

  return { error, updatedUser };
};
