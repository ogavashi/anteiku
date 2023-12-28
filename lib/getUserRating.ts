import { supabase } from "../common/supabase";
import { Anime, Manga } from "../common/types";

export const getUserRating = async (title: Anime | Manga, userId: string) => {
  const { data, error } = await supabase
    .from("rating")
    .select("rating")
    .eq("user_id", userId)
    .eq("title_id", title.id)
    .eq("isAnime", title.isAnime);

  return { data: data?.[0], error };
};
