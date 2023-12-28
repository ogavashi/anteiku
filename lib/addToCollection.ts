import { supabase } from "../common/supabase";
import { Anime, Manga } from "../common/types";

export const addToCollection = async (userId: string, title: Anime | Manga, collection: string) => {
  const { data, error } = await supabase
    .from(collection)
    .select()
    .eq("user_id", userId)
    .eq("title_id", title.id)
    .eq("isAnime", title.isAnime);

  if (error) {
    return error;
  }

  if (data?.length === 0) {
    console.log("1");

    const targetCollection = collection === "watching" ? "dropped" : "watching";

    if (collection === "watching" || collection === "dropped") {
      const { data, error } = await supabase
        .from(targetCollection)
        .select()
        .eq("user_id", userId)
        .eq("title_id", title.id)
        .eq("isAnime", title.isAnime);

      if (error) {
        console.log(error);
        return error;
      }

      console.log("1.5");
      if (data.length) {
        console.log("delete");
        const { error: deleteError } = await supabase
          .from(targetCollection)
          .delete()
          .eq("id", data[0].id);

        if (deleteError) {
          return deleteError;
        }
      }
    }
    console.log("Add");
    const { error } = await supabase
      .from(collection)
      .insert({ user_id: userId, title_id: title.id, isAnime: title.isAnime });

    return error;
  }

  console.log("2");
  const { error: deleteError } = await supabase.from(collection).delete().eq("id", data[0].id);

  return deleteError;
};
