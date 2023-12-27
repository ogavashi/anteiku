import { Manga } from "../../../common/types";

export const mangaNormalizer = (rawData: any): Manga[] => {
  const normalized: Manga[] = rawData.data.map((raw: any) => ({
    id: raw.mal_id,
    type: raw.type,
    isAnime: false,
    title: raw?.title || raw?.title_english || raw?.title_japanese || "No title",
    image: raw?.images?.jpg?.large_image_url || raw?.images?.webp?.large_image_ur,
    score: raw.score,
    year: raw.published.prop?.to?.year || raw?.published.prop?.from?.year,
    poster: raw?.images?.jpg?.image_url || raw?.images?.webp?.image_ur,
    genres: raw?.genres.map((genre: { [key in string]: string }) => ({
      id: genre.mal_id,
      name: genre.name,
    })),
  }));

  return normalized;
};
