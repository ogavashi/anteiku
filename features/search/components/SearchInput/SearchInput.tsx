import { Input } from "@ui-kitten/components";
import { View } from "react-native";
import { Query } from "../../../../common/types";
import { useCallback, useEffect, useState } from "react";
import { useDebounce } from "../../../../hooks";

interface SearchInputProps {
  queryKey: string;
  query: Query;
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setQuery, query, queryKey }) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  const handleSearch = useCallback(() => {
    setQuery((prev) => ({ ...prev, [queryKey]: value }));
  }, [value]);

  useEffect(() => {
    handleSearch();
  }, [debouncedValue]);

  useEffect(() => {
    const value = query?.[queryKey];

    if (!value) {
      setValue("");
    }
  }, [query]);

  return (
    <View style={{ width: "75%" }}>
      <Input
        keyboardType="web-search"
        placeholder="Search..."
        value={value}
        onChangeText={handleChange}
        clearButtonMode="always"
      />
    </View>
  );
};
