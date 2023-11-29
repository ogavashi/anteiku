import { View } from "react-native";
import { BottomSheet } from "../../../../components";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
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

    return (
      <BottomSheet ref={ref}>
        <View
          style={{
            paddingHorizontal: 10,
            gap: 10,
            height: "100%",
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
          <Button onPress={submitQuery}>Apply</Button>
        </View>
      </BottomSheet>
    );
  }
);
