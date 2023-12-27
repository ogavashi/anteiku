import { FullManga } from "../../../common/types";

export const fullMangaNormalizer = (rawData: any): FullManga => {
  const raw = rawData.data;

  const normalized: FullManga = {
    id: raw.mal_id,
    type: raw.type,
    title: raw?.title || raw?.title_english || raw?.title_japanese || "No title",
    image: raw?.images?.jpg?.large_image_url || raw?.images?.webp?.large_image_ur,
    score: raw.score,
    year: raw.published.prop?.to?.year || raw?.published.prop?.from?.year,
    poster: raw?.images?.jpg?.image_url || raw?.images?.webp?.image_ur,
    genres: raw?.genres.map((genre: { [key in string]: string }) => ({
      id: genre.mal_id,
      name: genre.name,
    })),
    authors: raw?.authors.map((author: { [key in string]: string }) => ({
      id: author.mal_id,
      name: author.name,
    })),
    serializations: raw?.serializations.map((serialization: { [key in string]: string }) => ({
      id: serialization.mal_id,
      name: serialization.name,
    })),
    synopsis: raw.synopsis,
    background: raw.background,
    volumes: raw.volumes || "?",
    chapters: raw.chapters || "?",
    rank: raw.rank,
    status: raw.status === "Finished" ? "Finished" : "Ongoing",
    isAnime: false,
  };

  return normalized;
};
