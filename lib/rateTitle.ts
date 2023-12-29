import { supabase } from "../common/supabase";
import { FullAnime, FullManga } from "../common/types";

export const rateTitle = async (title: FullAnime | FullManga, userId: string, rating: number) => {
  const { data, error: fetchError } = await supabase
    .from("rating")
    .select()
    .eq("user_id", userId)
    .eq("title_id", title.id)
    .eq("isAnime", title.isAnime);

  if (fetchError) {
    return fetchError;
  }

  if (data?.[0]) {
    const { error } = await supabase.from("rating").update({ rating }).eq("id", data[0].id);

    return error;
  }

  const { error: insertError } = await supabase
    .from("rating")
    .insert({ user_id: userId, title_id: title.id, isAnime: title.isAnime, rating });

  return insertError;
};
