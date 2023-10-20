import { useCallback, useMemo, useState } from "react";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import { capitalizeFirst } from "../../../../utils";
import { useStore } from "../../../../store";
import { Theme } from "../../../../common/types";

const themes = ["light", "dark", "automatic"];

export const ThemeSelect = () => {
  const { theme, setTheme } = useStore();

  const themeIndex = useMemo(() => themes.findIndex((localTheme) => localTheme === theme), [theme]);

  const [selectedIndex, setSelectedIndex] = useState<IndexPath | IndexPath[]>(
    new IndexPath(themeIndex)
  );

  const handleChangeTheme = useCallback((index: IndexPath | IndexPath[]) => {
    setSelectedIndex(index);

    const newTheme = themes[(index.toString() as unknown as number) - 1] as Theme;

    setTheme(newTheme);
  }, []);
  return (
    <Select
      label="App theme"
      value={capitalizeFirst(themes[themeIndex])}
      selectedIndex={selectedIndex}
      onSelect={handleChangeTheme}
    >
      {themes.map((theme, index) => (
        <SelectItem title={capitalizeFirst(theme)} key={index} />
      ))}
    </Select>
  );
};
