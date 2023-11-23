import { Query } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";
import { Anime, Manga, Response } from "../../../common/types";

export const Ongoing = (instance: AxiosInstance) => ({
  async getAllAnime(query?: Query): Promise<Response<Anime[]>> {
    const { data: rawData } = await instance.get("anime?status=airing", {
      params: query,
    });

    return {
      data: animeNormalizer(rawData),
      meta: {
        count: rawData?.pagination?.items?.count,
        hasNext: rawData?.pagination?.has_next_page,
      },
    };
  },

  async getAllManga(query?: Query): Promise<Response<Manga[]>> {
    const { data: rawData } = await instance.get("manga?status=publishing", { params: query });

    return {
      data: mangaNormalizer(rawData),
      meta: {
        count: rawData?.pagination?.items?.count,
        hasNext: rawData?.pagination?.has_next_page,
      },
    };
  },
});
