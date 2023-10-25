import { Anime } from "../../../common/types";

export const ongoingAnimeNormalizer = (rawData: any): Anime[] => {
  const normalized: Anime[] = rawData.data.map((raw: any) => ({
    id: raw.id,
    title:
      raw.attributes.titles?.en ||
      raw.attributes.titles?.en_jp ||
      raw.attributes.titles?.jp_jp ||
      "No title",
    poster: raw.attributes.posterImage.original,
    showType: raw.attributes.showType,
  }));

  return normalized;
};
