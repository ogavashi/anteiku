import { AxiosInstance } from "axios";
import { genresNormalizer } from "../normalizers";
import { Genre } from "../../../common/types";

export const Genres = (instance: AxiosInstance) => ({
  async getAnime(): Promise<Genre[]> {
    const { data: rawData } = await instance.get("genres/anime");
    const data = genresNormalizer(rawData);

    return data;
  },

  async getManga(): Promise<Genre[]> {
    const { data: rawData } = await instance.get("genres/manga");
    const data = genresNormalizer(rawData);

    return data;
  },
});
