import { FullAnime, FullManga } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { fullAnimeNormalizer, fullMangaNormalizer } from "../normalizers";

export const Title = (instance: AxiosInstance) => ({
  async getAnime(id: String): Promise<FullAnime> {
    const { data: rawData } = await instance.get(`anime/${id}/full`);

    return fullAnimeNormalizer(rawData);
  },

  async getManga(id: String): Promise<FullManga> {
    const { data: rawData } = await instance.get(`manga/${id}/full`);

    return fullMangaNormalizer(rawData);
  },
});
