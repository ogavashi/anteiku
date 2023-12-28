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

  if (data?.length === 0) {
    const targetCollection = collection === "watching" ? "dropped" : "watching";

    if (collection === "watching" || collection === "dropped") {
      const { data, error } = await supabase
        .from(targetCollection)
        .select()
        .eq("user_id", userId)
        .eq("title_id", title.id)
        .single();

      if (error) {
        return error;
      }

      if (data) {
        const { error: deleteError } = await supabase
          .from(targetCollection)
          .delete()
          .eq("id", data.id);

        if (deleteError) {
          return deleteError;
        }
      }
    }

    const { error } = await supabase
      .from(collection)
      .insert({ user_id: userId, title_id: title.id, isAnime: title.isAnime });

    return error;
  }

  const { error: deleteError } = await supabase.from(collection).delete().eq("id", data[0].id);

  return deleteError;
};
