import axios from "axios";
import rateLimit from "axios-rate-limit";
import { config } from "../../common/config";
import { Genres, Ongoing, Trending } from "./entities";
import * as qs from "qs";

type ApiServiceReturnType = {
  trending: ReturnType<typeof Trending>;
  ongoing: ReturnType<typeof Ongoing>;
  genres: ReturnType<typeof Genres>;
};

const instance = rateLimit(
  axios.create({
    baseURL: config.BASE_URL,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: "comma" });
    },
  }),
  { maxRequests: 1, perMilliseconds: 1000 }
);

export const ApiService = (): ApiServiceReturnType => {
  const entities = {
    trending: Trending,
    ongoing: Ongoing,
    genres: Genres,
  };

  const apis = Object.entries(entities).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiServiceReturnType);

  return apis;
};
