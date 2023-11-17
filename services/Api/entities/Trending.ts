import { Query } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";

export const Trending = (instance: AxiosInstance) => ({
  async getAllAnime(query?: Query) {
    const { data: rawData } = await instance.get("/trending/anime", { params: query });

    return animeNormalizer(rawData);
  },

  async getAllManga() {
    const { data: rawData } = await instance.get("/trending/manga");

    return mangaNormalizer(rawData);
  },
});
