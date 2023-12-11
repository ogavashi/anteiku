import { StackScreenProps } from "@react-navigation/stack";
import { SearchLayout } from "../../components/layout";
import { getFilters } from "../../features/anime";
import { useBottomModal, useQuery } from "../../hooks";
import { SearchStackParamsList } from "../../common/types";
import { useMemo } from "react";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";
import { FiltersSheet } from "../../features/filters";
import { GridList } from "../../features/manga";

export const MangaSearch: React.FC<StackScreenProps<SearchStackParamsList, "SearchManga">> = ({
  route,
}) => {
  const { query: defaultQuery } = route.params;

  const { query, setQuery } = useQuery(defaultQuery);

  const { bottomModalRef, openModal, closeModal } = useBottomModal();

  // Change to manga filters
  const filters = useMemo(() => getFilters("ongoingFilters"), []);

  return (
    <SearchLayout
      showBack={false}
      query={query}
      setQuery={setQuery}
      accessoryRight={
        filters ? () => <TopActions icon={FiltersIcon} navigate={openModal} /> : undefined
      }
    >
      <GridList apiKey="search" query={query} />
      {filters && (
        <FiltersSheet
          query={query}
          setQuery={setQuery}
          filters={filters}
          ref={bottomModalRef}
          closeModal={closeModal}
        />
      )}
    </SearchLayout>
  );
};
