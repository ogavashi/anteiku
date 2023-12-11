import { View } from "react-native";
import { BottomSheet } from "../../../../components";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { Filters, Query } from "../../../../common/types";
import { Button } from "@ui-kitten/components";

interface FiltersSheetProps {
  filters: Filters;
  query: Query;
  setQuery: (query: Query) => void;
  closeModal: () => void;
}

export const FiltersSheet = forwardRef<BottomSheetModalMethods, FiltersSheetProps>(
  ({ filters, query, setQuery, closeModal }, ref) => {
    const [filtersQuery, setFiltersQuery] = useState<Query>(query);

    const handleSelectFilter = useCallback((key: string, value: any) => {
      setFiltersQuery((prev) => ({ ...prev, [key]: value }));
    }, []);

    const submitQuery = useCallback(() => {
      setQuery(filtersQuery);
      closeModal();
    }, [filtersQuery]);

    const resetQuery = useCallback(() => {
      const searchQuery = query?.["q"];

      setFiltersQuery({ q: searchQuery });
    }, [query]);

    // To watch search input changes
    useEffect(() => {
      setFiltersQuery(query);
    }, [query]);

    const isEmpty = useMemo(() => !!!Object.keys(filtersQuery).length, [filtersQuery]);

    return (
      <BottomSheet ref={ref}>
        <View
          style={{
            paddingHorizontal: 10,
            gap: 10,
            height: "100%",
            width: "100%",
          }}
        >
          {filters.map(({ component: Component, ...filterData }) => (
            <Component
              filterData={{ ...filterData }}
              query={filtersQuery}
              setQuery={handleSelectFilter}
              key={filterData.filterKey}
            />
          ))}
          <View
            style={{
              gap: 10,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Button style={{ flex: 1 }} onPress={resetQuery} status="danger" disabled={isEmpty}>
              Reset
            </Button>
            <Button style={{ flex: 1 }} onPress={submitQuery}>
              Apply
            </Button>
          </View>
        </View>
      </BottomSheet>
    );
  }
);
