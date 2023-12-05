import { Button } from "@ui-kitten/components";
import { ButtonsGroupFilterProps } from "../../../../../common/types";
import { useCallback, useMemo, useState } from "react";
import { View } from "react-native";

export const ButtonsGroupFilter: React.FC<ButtonsGroupFilterProps> = ({
  filterData,
  query,
  setQuery,
}) => {
  const { options, watchKey, filterKey } = filterData;

  if (watchKey && !query[watchKey]) {
    return null;
  }

  const selected = useMemo(() => query[filterKey] || options![0].key, [query]);

  const handleSelect = useCallback((value: string) => {
    setQuery(filterKey, value);
  }, []);

  return (
    <View style={{ display: "flex", gap: 10, flexDirection: "row", justifyContent: "flex-end" }}>
      {options!.map(({ key, value }) => (
        <Button
          key={key}
          appearance={key === selected ? "filled" : "outline"}
          onPress={() => handleSelect(key)}
        >
          {value}
        </Button>
      ))}
    </View>
  );
};
