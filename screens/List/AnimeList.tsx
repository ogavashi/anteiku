import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { GridList, getFilters } from "../../features/anime";
import { ListLayout } from "../../components/layout";
import { FiltersSheet } from "../../features/filters";
import { useBottomModal, useQuery } from "../../hooks";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";
import { useMemo } from "react";

export const AnimeList: React.FC<StackScreenProps<HomeStackParamsList, "AnimeList">> = ({
  route,
}) => {
  const { title, filterKey, ...props } = route.params;

  const { bottomModalRef, openModal, closeModal } = useBottomModal();

  const { query, setQuery } = useQuery();

  const filters = useMemo(() => getFilters(filterKey), [filterKey]);

  return (
    <ListLayout
      title={title}
      accessoryRight={
        filters ? () => <TopActions icon={FiltersIcon} navigate={openModal} /> : undefined
      }
    >
      <GridList {...props} query={query} />
      {filters && (
        <FiltersSheet
          query={query}
          setQuery={setQuery}
          filters={filters}
          ref={bottomModalRef}
          closeModal={closeModal}
        />
      )}
    </ListLayout>
  );
};
