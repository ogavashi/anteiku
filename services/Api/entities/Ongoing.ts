import { AxiosInstance } from "axios";
import { animeNormalizer, mangaNormalizer } from "../normalizers";

export const Ongoing = (instance: AxiosInstance) => ({
  async getAllAnime() {
    const { data: rawData } = await instance.get("anime?filter[status]=current");

    return animeNormalizer(rawData);
  },

  async getAllManga() {
    const { data: rawData } = await instance.get(
      "manga?filter[status]=current&page[limit]=20&page[offset]=0"
    );

    return mangaNormalizer(rawData);
  },
});
