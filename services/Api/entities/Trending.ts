import { Anime, Response, Query, Manga } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";

export const Trending = (instance: AxiosInstance) => ({
  async getAllAnime(query?: Query): Promise<Response<Anime[]>> {
    const { data: rawData } = await instance.get("/top/anime", { params: query });

    return {
      data: animeNormalizer(rawData),
      meta: {
        count: rawData?.pagination?.items?.count,
        hasNext: rawData?.pagination?.has_next_page,
      },
    };
  },

  async getAllManga(query?: Query): Promise<Response<Manga[]>> {
    const { data: rawData } = await instance.get("/top/manga", { params: query });

    return {
      data: mangaNormalizer(rawData),
      meta: {
        count: rawData?.pagination?.items?.count,
        hasNext: rawData?.pagination?.has_next_page,
      },
    };
  },
});
