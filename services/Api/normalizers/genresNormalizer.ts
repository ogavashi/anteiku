import { Genre, Response } from "../../../common/types";

export const genresNormalizer = (rawData: any): Genre[] => {
  const normalized: Genre[] = rawData.data.map((raw: any) => ({
    value: raw.name,
    key: raw.mal_id,
  }));

  return normalized;
};
