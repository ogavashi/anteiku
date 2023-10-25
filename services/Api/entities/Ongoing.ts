import { AxiosInstance } from "axios";
import { ongoingAnimeNormalizer } from "../normalizers";

export const Ongoing = (instance: AxiosInstance) => ({
  async getAllAnime() {
    const { data: rawData } = await instance.get("/anime?filter[status]=current");

    return ongoingAnimeNormalizer(rawData);
  },
});
