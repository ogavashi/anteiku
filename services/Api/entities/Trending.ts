import { Anime, Response, Query, Manga } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";

export const Trending = (instance: AxiosInstance) => ({
  async getAllAnime(query?: Query): Promise<Response<Anime[]>> {
    const { data: rawData } = await instance.get("/trending/anime", { params: query });

    return {
      data: await animeNormalizer(rawData),
      meta: {
        count: rawData?.meta?.count,
        hasNext: rawData?.links?.next,
      },
    };
  },

  async getAllManga(query?: Query): Promise<Response<Manga[]>> {
    const { data: rawData } = await instance.get("/trending/manga", { params: query });

    return {
      data: mangaNormalizer(rawData),
      meta: {
        count: rawData?.meta?.count,
        hasNext: rawData?.link?.next,
      },
    };
  },
});
