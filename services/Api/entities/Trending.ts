import { AxiosInstance } from "axios";
import { trendingAnimeNormalizer, trendingMangaNormalizer } from "../normalizers";

export const Trending = (instance: AxiosInstance) => ({
  async getAllAnime() {
    const { data: rawData } = await instance.get("/trending/anime");

    return trendingAnimeNormalizer(rawData);
  },

  async getAllManga() {
    const { data: rawData } = await instance.get("/trending/manga");

    return trendingMangaNormalizer(rawData);
  },
});
