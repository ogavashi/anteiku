import { supabase } from "../common/supabase";
import { Anime, CollectionShort, Manga } from "../common/types";

export const getCollections = async (
  collections: CollectionShort[],
  userId: string,
  title?: Anime | Manga
) => {
  const fetchedCollections = await Promise.all(
    collections.map(async (collection) => {
      const { count } = await supabase
        .from(collection.key)
        .select("*", { count: "exact" })
        .eq("user_id", userId);

      const { data: existing } = await supabase
        .from(collection.key)
        .select()
        .eq("user_id", userId)
        .eq("title_id", title?.id)
        .eq("isAnime", title?.isAnime)
        .single();

      return { ...collection, count: count || 0, added: !!existing };
    })
  );

  return fetchedCollections;
};
