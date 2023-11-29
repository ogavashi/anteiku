import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { View } from "react-native";
import { Option, SelectFilterProps } from "../../../../../common/types";
import { useCallback, useEffect, useMemo, useState } from "react";
import { getSelectValues } from "../../../lib";

export const SelectFilter: React.FC<SelectFilterProps> = ({ filterData, query, setQuery }) => {
  const { options, filterKey, multiple, title, api } = filterData;

  const [selectOptions, setSelectOptions] = useState(options || []);
  const [isLoading, setIsLoading] = useState(false);

  const fetchOptions = useCallback(async () => {
    if (!api) {
      return;
    }

    try {
      setIsLoading(true);
      const fetchedOptions: Option[] = await api();

      setSelectOptions(fetchedOptions);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (api) {
      fetchOptions();
    }
  }, []);

  const handleSelect = useCallback(
    (value: IndexPath | IndexPath[]) => {
      if (Array.isArray(value)) {
        const indexes = value.map((el) => el.row as number);

        const newValues = selectOptions
          .filter((_, index) => indexes.includes(index))
          .map(({ key }) => key);

        setQuery(filterKey, newValues);

        return;
      }

      const index = value.row as number;

      const newValue = selectOptions[index].key;

      setQuery(filterKey, newValue);
    },
    [selectOptions]
  );

  const { index: selectedIndex, value: selectedValue } = useMemo(
    () => getSelectValues(query, filterKey, selectOptions),
    [query, selectOptions, filterKey]
  );

  return (
    <View>
      <Select
        label={title}
        selectedIndex={selectedIndex}
        onSelect={(index) => handleSelect(index)}
        value={selectedValue}
        multiSelect={multiple}
        disabled={isLoading}
        placeholder={isLoading ? "Loading..." : undefined}
      >
        {selectOptions.map(({ key, value }) => (
          <SelectItem key={key} id={key} title={value} />
        ))}
      </Select>
    </View>
  );
};
