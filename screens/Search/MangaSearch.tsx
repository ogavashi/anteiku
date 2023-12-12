import { StackScreenProps } from "@react-navigation/stack";
import { SearchLayout } from "../../components/layout";
import { getFilters } from "../../features/manga";
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
  const { params } = route;

  const defaultQuery = params?.query;
  const { query, setQuery } = useQuery(defaultQuery);

  const { bottomModalRef, openModal, closeModal } = useBottomModal();

  const filters = useMemo(() => getFilters("searchFilters"), []);

  const showBack = useMemo(() => !!defaultQuery, [route]);

  return (
    <SearchLayout
      showBack={showBack}
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
