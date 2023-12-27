import { supabase } from "../common/supabase";
import { Anime, Manga } from "../common/types";

export const addToCollection = async (userId: string, title: Anime | Manga, collection: string) => {
  const { data, error } = await supabase
    .from(collection)
    .select()
    .eq("user_id", userId)
    .eq("title_id", title.id);

  if (error) {
    return error;
  }

  if (!data?.length) {
    const { error } = await supabase
      .from(collection)
      .insert({ user_id: userId, title_id: title.id, isAnime: title.isAnime });

    return error;
  }

  const item = data[0];

  const { error: deleteError } = await supabase.from(collection).delete().eq("id", item.id);

  return deleteError;
};
