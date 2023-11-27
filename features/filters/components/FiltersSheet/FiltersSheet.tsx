import { View } from "react-native";
import { BottomSheet } from "../../../../components";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useState } from "react";
import { Filters, Query } from "../../../../common/types";

interface FiltersSheetProps {
  filters: Filters;
}

export const FiltersSheet = forwardRef<BottomSheetModalMethods, FiltersSheetProps>(
  ({ filters }, ref) => {
    const [filtersQuery, setFiltersQuery] = useState<Query>({});

    const handleSelectFilter = useCallback((key: string, value: any) => {
      setFiltersQuery((prev) => ({ ...prev, [key]: value }));
    }, []);

    return (
      <BottomSheet ref={ref}>
        <View style={{ paddingHorizontal: 10 }}>
          {filters.map(({ component: Component, ...filterData }) => (
            <Component
              filterData={{ ...filterData }}
              query={filtersQuery}
              setQuery={handleSelectFilter}
              key={filterData.filterKey}
            />
          ))}
        </View>
      </BottomSheet>
    );
  }
);
