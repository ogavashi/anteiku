import axios from "axios";
import { config } from "../../common/config";
import { Ongoing, Trending } from "./entities";

type ApiServiceReturnType = {
  trending: ReturnType<typeof Trending>;
  ongoing: ReturnType<typeof Ongoing>;
};

export const ApiService = (): ApiServiceReturnType => {
  const instance = axios.create({
    baseURL: config.BASE_URL,
  });

  const entities = {
    trending: Trending,
    ongoing: Ongoing,
  };

  const apis = Object.entries(entities).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiServiceReturnType);

  return apis;
};
