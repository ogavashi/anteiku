import { Filters, HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { GridList } from "../../features/anime";
import { ListLayout } from "../../components/layout";
import { FiltersSheet } from "../../features/filters";
import { useBottomModal } from "../../hooks";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";
import { Filters as Filter } from "../../features/filters/components";

const filters: Filters = [
  {
    filterKey: "genre",
    title: "Genres",
    component: Filter.SelectFilter,
    options: [
      { key: "1", value: "Action" },
      { key: "2", value: "Romance" },
    ],
    multiple: true,
  },
];

export const AnimeList: React.FC<StackScreenProps<HomeStackParamsList, "AnimeList">> = ({
  route,
}) => {
  const { title, ...props } = route.params;

  const { bottomFiltersModalRef, openFilters } = useBottomModal();

  return (
    <ListLayout
      title={title}
      accessoryRight={() => <TopActions icon={FiltersIcon} navigate={openFilters} />}
    >
      <GridList {...props} />
      <FiltersSheet filters={filters} ref={bottomFiltersModalRef} />
    </ListLayout>
  );
};
