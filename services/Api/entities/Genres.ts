import { AxiosInstance } from "axios";
import { genresNormalizer } from "../normalizers";
import { Genre, Response } from "../../../common/types";

export const Genres = (instance: AxiosInstance) => ({
  async getAll(url: string): Promise<Response<Genre[]>> {
    const { data: rawData } = await instance.get(url);
    const data = genresNormalizer(rawData);

    return data;
  },
});
