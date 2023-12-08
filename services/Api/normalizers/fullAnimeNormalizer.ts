import { FullAnime } from "../../../common/types";
import { capitalizeFirst } from "../../../utils";

export const fullAnimeNormalizer = (rawData: any): FullAnime => {
  const raw = rawData.data;

  const normalized: FullAnime = {
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
    videoId: raw.trailer.youtube_id,
    status: raw.status === "Finished Airing" ? "Finished" : "Airing",
    rating: raw.rating.split(" ")[0],
    rank: raw.rank,
    source: raw.source,
    season: raw?.season ? capitalizeFirst(raw.season) : "-",
    episodes: raw.episodes || "?",
    fullYear: raw.year,
    synopsis: raw.synopsis,
    studios: raw?.studios.map((studio: { [key in string]: string }) => ({
      id: studio.mal_id,
      name: studio.name,
    })),
    producers: raw?.producers.map((producer: { [key in string]: string }) => ({
      id: producer.mal_id,
      name: producer.name,
    })),
    background: raw.background,
  };

  return normalized;
};
