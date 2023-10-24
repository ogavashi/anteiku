import axios from "axios";
import { config } from "../../common/config";
import { Trending } from "./entities";

type ApiServiceReturnType = {
  trending: ReturnType<typeof Trending>;
};

export const ApiService = (): ApiServiceReturnType => {
  const instance = axios.create({
    baseURL: config.BASE_URL,
  });

  const entities = {
    trending: Trending,
  };

  const apis = Object.entries(entities).reduce((prev, [key, f]) => {
    return {
      ...prev,
      [key]: f(instance),
    };
  }, {} as ApiServiceReturnType);

  return apis;
};
