import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ListLayout } from "../../components/layout";
import { GridList, getFilters } from "../../features/manga";
import { useBottomModal, useQuery } from "../../hooks";
import { useMemo } from "react";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";
import { FiltersSheet } from "../../features/filters";

export const MangaList: React.FC<StackScreenProps<HomeStackParamsList, "MangaList">> = ({
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
