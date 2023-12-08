import { FullAnime } from "./../../../common/types";
import { AxiosInstance } from "axios";
import { fullAnimeNormalizer } from "../normalizers";

export const Title = (instance: AxiosInstance) => ({
  async getAnime(id: String): Promise<FullAnime> {
    const { data: rawData } = await instance.get(`anime/${id}/full`);

    return fullAnimeNormalizer(rawData);
  },
});
