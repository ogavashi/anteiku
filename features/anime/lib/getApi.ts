import { Anime, Query, Response } from "../../../common/types";
import { ApiService } from "../../../services";

export const getApi = (apiKey: string): ((query?: Query) => Promise<Response<Anime[]>>) | null => {
  switch (apiKey) {
    case "featuredAnime":
      return ApiService().trending.getAllAnime;
    case "ongoingAnime":
      return ApiService().ongoing.getAllAnime;
    case "search":
      return ApiService().search.getAnime;
    default:
      return null;
  }
};
