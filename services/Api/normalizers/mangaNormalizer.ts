import { Manga } from "../../../common/types";

export const mangaNormalizer = (rawData: any): Manga[] => {
  const normalized: Manga[] = rawData.data.map((raw: any) => ({
    id: raw.id,
    type: raw.type,
    title:
      raw.attributes.titles?.en ||
      raw.attributes.titles?.en_jp ||
      raw.attributes.titles?.ja_jp ||
      raw.attributes.titles?.en_us ||
      "No title",
    image: raw.attributes.coverImage?.original || raw.attributes.posterImage?.original,
    mangaType: raw.attributes.mangaType,
    year: new Date(raw.attributes.endDate || raw.attributes.startDate).getFullYear(),
    poster: raw.attributes.posterImage.original,
  }));

  return normalized;
};
