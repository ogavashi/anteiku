import { Genre, Response } from "../../../common/types";

export const genresNormalizer = (rawData: any): Response<Genre[]> => {
  const normalized: Genre[] = rawData.data.map((raw: any) => ({
    id: raw.id,
    name: raw.attributes.name,
  }));

  return {
    data: normalized,
    meta: {
      count: rawData?.meta?.count,
      hasNext: rawData?.links?.next,
    },
  };
};
