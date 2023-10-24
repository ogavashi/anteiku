import { FeaturedManga } from "../../../common/types";

export const trendingMangaNormalizer = (rawData: any): FeaturedManga[] => {
  const normalized: FeaturedManga[] = rawData.data.map((raw: any) => ({
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
  }));

  return normalized;
};
