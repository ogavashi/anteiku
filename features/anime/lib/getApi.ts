import { Anime, Query } from "../../../common/types";
import { ApiService } from "../../../services";

export const getApi = (apiKey: string): ((query?: Query) => Promise<Anime[]>) | null => {
  switch (apiKey) {
    case "featuredAnime":
      return ApiService().trending.getAllAnime;
    case "ongoingAnime":
      return ApiService().ongoing.getAllAnime;
    default:
      return null;
  }
};
