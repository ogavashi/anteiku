import { Manga, Query, Response } from "../../../common/types";
import { ApiService } from "../../../services";

export const getApi = (apiKey: string): ((query?: Query) => Promise<Response<Manga[]>>) | null => {
  switch (apiKey) {
    case "trendingManga":
      return ApiService().trending.getAllManga;
    case "ongoingManga":
      return ApiService().ongoing.getAllManga;
    default:
      return null;
  }
};
