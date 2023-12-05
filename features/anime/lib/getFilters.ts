import { Filter } from "../../../common/types";
import { ApiService } from "../../../services";
import { Filters } from "../../filters";

const filters = {
  ongoingFilters: [
    {
      filterKey: "genres",
      title: "Genres",
      component: Filters.SelectFilter,
      api: ApiService().genres.getAnime,
    },
  ],
  topFilters: [
    {
      filterKey: "type",
      title: "Type",
      component: Filters.SelectFilter,
      options: [
        { key: "tv", value: "TV" },
        { key: "movie", value: "Movie" },
      ],
    },
    {
      filterKey: "rating",
      title: "Rating",
      component: Filters.SelectFilter,
      options: [
        { key: "g", value: "All Ages" },
        { key: "pg", value: "Children" },
        { key: "pg13", value: "Teens 13 or older" },
        { key: "r17", value: "P17+ (violence & profanity)" },
        { key: "r", value: "Mild Nudity" },
        { key: "rx", value: "Hentai" },
      ],
    },
  ],
};

export const getFilters = (filterKey?: string): Filter[] | null => {
  switch (filterKey) {
    case "ongoingFilters":
      return filters.ongoingFilters;
    case "topFilters":
      return filters.topFilters;
    default:
      return null;
  }
};