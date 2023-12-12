import { Filter } from "../../../common/types";
import { ApiService } from "../../../services";
import { Filters } from "../../filters";

const filters = {
  ongoingFilters: [
    {
      filterKey: "genres",
      title: "Genres",
      component: Filters.SelectFilter,
      api: ApiService().genres.getManga,
    },
    {
      filterKey: "order_by",
      title: "Order By",
      component: Filters.SelectFilter,
      options: [
        { key: "title", value: "Title" },
        { key: "start_date", value: "Start date" },
        { key: "end_date", value: "End date" },
        { key: "chapters", value: "Chapters" },
        { key: "volumes", value: "Volumes" },
        { key: "score", value: "Score" },
        { key: "popularity", value: "Popularity" },
      ],
    },
    {
      filterKey: "sort",
      title: "Sort",
      component: Filters.ButtonsGroupFilter,
      options: [
        { key: "asc", value: "Ascending" },
        { key: "desc", value: "Descending" },
      ],
      watchKey: "order_by",
    },
    { filterKey: "start_date", title: "Start date", component: Filters.DatePickerFilter },
    { filterKey: "end", title: "End date", component: Filters.DatePickerFilter },
  ],
  topFilters: [
    {
      filterKey: "type",
      title: "Type",
      component: Filters.SelectFilter,
      options: [
        { key: "manga", value: "Manga" },
        { key: "novel", value: "Novel" },
        { key: "lightnovel", value: "Lightnovel" },
        { key: "oneshot", value: "Oneshot" },
        { key: "doujin", value: "Doujin" },
        { key: "manhwa", value: "Manhwa" },
        { key: "manhua", value: "Manhua" },
      ],
    },
  ],
  searchFilters: [
    {
      filterKey: "genres",
      title: "Genres",
      component: Filters.SelectFilter,
      api: ApiService().genres.getManga,
    },
    {
      filterKey: "type",
      title: "Type",
      component: Filters.SelectFilter,
      options: [
        { key: "manga", value: "Manga" },
        { key: "novel", value: "Novel" },
        { key: "lightnovel", value: "Lightnovel" },
        { key: "oneshot", value: "Oneshot" },
        { key: "doujin", value: "Doujin" },
        { key: "manhwa", value: "Manhwa" },
        { key: "manhua", value: "Manhua" },
      ],
    },
    {
      filterKey: "status",
      title: "Status",
      component: Filters.SelectFilter,
      option: [
        { key: "publishing", value: "Publishing" },
        { key: "complete", value: "Complete" },
        { key: "hiatus", value: "Hiatus" },
        { key: "discontinued", value: "Discontinued" },
        { key: "upcoming", value: "Upcoming" },
      ],
    },
    {
      filterKey: "sort",
      title: "Sort",
      component: Filters.ButtonsGroupFilter,
      options: [
        { key: "asc", value: "Ascending" },
        { key: "desc", value: "Descending" },
      ],
      watchKey: "order_by",
    },
    { filterKey: "start_date", title: "Start date", component: Filters.DatePickerFilter },
    { filterKey: "end", title: "End date", component: Filters.DatePickerFilter },
  ],
};

export const getFilters = (filterKey?: string): Filter[] | null => {
  switch (filterKey) {
    case "ongoingFilters":
      return filters.ongoingFilters;
    case "topFilters":
      return filters.topFilters;
    case "searchFilters":
      return filters.searchFilters;
    default:
      return null;
  }
};
