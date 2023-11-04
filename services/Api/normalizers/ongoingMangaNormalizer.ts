import { Manga } from "../../../common/types";

export const ongoingMangaNormalizer = (rawData: any): Manga[] => {
  const normalized: Manga[] = rawData.data.map((raw: any) => ({
    id: raw.id,
    title:
      raw.attributes.titles?.en ||
      raw.attributes.titles?.en_jp ||
      raw.attributes.titles?.ja_jp ||
      raw.attributes.titles?.en_us ||
      "No title",
    poster: raw.attributes.posterImage.original,
    mangaType: raw.attributes.mangaType,
  }));

  return normalized;
};
