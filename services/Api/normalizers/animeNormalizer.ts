import { Anime } from "../../../common/types";

export const animeNormalizer = (rawData: any): Anime[] => {
  const normalized = rawData.data.map((raw: any) => {
    const title = {
      id: raw.mal_id,
      type: raw.type,
      title: raw?.title || raw?.title_english || raw?.title_japanese || "No title",
      image: raw?.images?.jpg?.large_image_url || raw?.images?.webp?.large_image_ur,
      score: raw.score,
      year: raw.aired.prop?.to?.year || raw?.aired.prop?.from?.year,
      poster: raw?.images?.jpg?.large_image_url || raw?.images?.webp?.large_image_ur,
      genres: raw?.genres.map((genre: { [key in string]: string }) => ({
        id: genre.mal_id,
        name: genre.name,
      })),
    };

    return title;
  });

  return normalized;
};
