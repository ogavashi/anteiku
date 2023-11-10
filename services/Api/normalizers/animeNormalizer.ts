import { Anime } from "../../../common/types";

export const animeNormalizer = (rawData: any): Anime[] => {
  const normalized = rawData.data.map((raw: any) => ({
    id: raw.id,
    type: raw.type,
    title:
      raw.attributes.titles?.en ||
      raw.attributes.titles?.en_jp ||
      raw.attributes.titles?.jp_jp ||
      "No title",
    image: raw.attributes.coverImage?.original,
    showType: raw.attributes.showType,
    year: new Date(raw.attributes.endDate || raw.attributes.startDate).getFullYear(),
    poster: raw.attributes.posterImage?.original,
  }));

  return normalized;
};
