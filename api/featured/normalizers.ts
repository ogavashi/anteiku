import { FeaturedAnime } from "../../common/types";

export const featuredNormalizer = (rawData: any): FeaturedAnime[] => {
  const normalized = rawData.map((raw: any) => ({
    id: raw.id,
    type: raw.type,
    title:
      raw.attributes.titles?.en ||
      raw.attributes.titles?.en_jp ||
      raw.attributes.titles?.jp_jp ||
      "No title",
    image: raw.attributes.coverImage.original,
    showType: raw.attributes.showType,
    year: new Date(raw.attributes.endDate || raw.attributes.startDate).getFullYear(),
  }));

  return normalized;
};
