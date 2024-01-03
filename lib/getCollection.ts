import { supabase } from "../common/supabase";
import { ApiService } from "../services";

export const getCollection = async (
  collectionName: string,
  user_id: string,
  isAnime: boolean = true
) => {
  const { data, error } = await supabase
    .from(collectionName)
    .select()
    .eq("user_id", user_id)
    .eq("isAnime", isAnime);

  if (error) {
    return { error };
  }

  const service = ApiService();

  const fetch = isAnime ? service.title.getAnime : service.title.getManga;

  try {
    const collection = await Promise.all(data.map(async (item) => await fetch(item.title_id)));

    return { data: collection };
  } catch (error) {
    return { error };
  }
};
