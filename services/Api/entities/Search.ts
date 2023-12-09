import { Anime, Query, Response } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { animeNormalizer } from "../normalizers";

export const Search = (instance: AxiosInstance) => ({
  async getAnime(query?: Query): Promise<Response<Anime[]>> {
    const { data: rawData } = await instance.get("/anime", { params: query });

    return {
      data: animeNormalizer(rawData),
      meta: {
        count: rawData?.pagination?.items?.count,
        hasNext: rawData?.pagination?.has_next_page,
      },
    };
  },
});
