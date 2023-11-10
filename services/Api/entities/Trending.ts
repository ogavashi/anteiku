import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";

export const Trending = (instance: AxiosInstance) => ({
  async getAllAnime() {
    const { data: rawData } = await instance.get("/trending/anime");

    return animeNormalizer(rawData);
  },

  async getAllManga() {
    const { data: rawData } = await instance.get("/trending/manga");

    return mangaNormalizer(rawData);
  },
});
