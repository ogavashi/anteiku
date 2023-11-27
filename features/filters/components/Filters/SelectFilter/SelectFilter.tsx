import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { View } from "react-native";
import { SelectFilterProps } from "../../../../../common/types";
import { useCallback, useMemo } from "react";
import { getSelectValues } from "../../../lib";

export const SelectFilter: React.FC<SelectFilterProps> = ({ filterData, query, setQuery }) => {
  const { options, filterKey, multiple, title } = filterData;

  const handleSelect = useCallback((value: IndexPath | IndexPath[]) => {
    if (Array.isArray(value)) {
      const indexes = value.map((el) => el.row as number);

      const newValues = options.filter((_, index) => indexes.includes(index)).map(({ key }) => key);

      setQuery(filterKey, newValues);

      return;
    }

    const index = value.row as number;

    const newValue = options[index].key;

    setQuery(filterKey, newValue);
  }, []);

  const { index: selectedIndex, value: selectedValue } = useMemo(
    () => getSelectValues(query, filterKey, options),
    [query, options, filterKey]
  );

  return (
    <View>
      <Select
        label={title}
        selectedIndex={selectedIndex}
        onSelect={(index) => handleSelect(index)}
        value={selectedValue}
        multiSelect={multiple}
      >
        {options.map(({ key, value }) => (
          <SelectItem key={key} id={key} title={value} />
        ))}
      </Select>
    </View>
  );
};
