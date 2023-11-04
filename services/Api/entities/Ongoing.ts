import { AxiosInstance } from "axios";
import { ongoingAnimeNormalizer, ongoingMangaNormalizer } from "../normalizers";

export const Ongoing = (instance: AxiosInstance) => ({
  async getAllAnime() {
    const { data: rawData } = await instance.get("anime?filter[status]=current");

    return ongoingAnimeNormalizer(rawData);
  },

  async getAllManga() {
    const { data: rawData } = await instance.get(
      "manga?filter[status]=current&page[limit]=20&page[offset]=0"
    );

    return ongoingMangaNormalizer(rawData);
  },
});
