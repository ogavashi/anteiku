import { Filter } from "../../../common/types";
import { ApiService } from "../../../services";
import { Filters } from "../../../features/filters";

const filters = {
  ongoingFilters: [
    {
      filterKey: "genres",
      title: "Genres",
      component: Filters.SelectFilter,
      api: ApiService().genres.getAnime,
      multiple: true,
    },
  ],
};

export const getFilters = (filterKey?: string): Filter[] | null => {
  switch (filterKey) {
    case "ongoingFilters":
      return filters.ongoingFilters;
    default:
      return null;
  }
};
