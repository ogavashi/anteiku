import axios from "axios";
import { Anime } from "../../../common/types";
import { config } from "../../../common/config";

const fetchGenres = async (rawUrl: string) => {
  const sanitized = rawUrl.split("edge:")[1];

  const url = sanitized || rawUrl;

  const { data: rawData } = await axios.get(url, { baseURL: config.BASE_URL });

  const normalized: [] = rawData?.data.map((raw: any) => raw.id) || [];

  return normalized;
};

export const animeNormalizer = async (rawData: any): Promise<Anime[]> => {
  const normalized = await Promise.all(
    rawData.data.map(async (raw: any) => {
      const genres = await fetchGenres(raw.relationships.genres.links.self);

      const title = {
        id: raw.id,
        type: raw.type,
        title:
          raw.attributes.titles?.en ||
          raw.attributes.titles?.en_jp ||
          raw.attributes.titles?.jp_jp ||
          "No title",
        image: raw.attributes.coverImage?.original,
        showType: raw.attributes.showType,
        year: new Date(raw.attributes.endDate || raw.attributes.startDate).getFullYear(),
        poster: raw.attributes.posterImage?.original,
        genres,
      };

      return title;
    })
  );

  return normalized;
};
