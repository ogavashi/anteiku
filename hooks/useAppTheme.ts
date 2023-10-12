import { useColorScheme } from "react-native";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useStore } from "../store";
import { useMemo } from "react";

import theme from "../common/theme";

export const useAppTheme = () => {
  const deviceTheme = useColorScheme();
  const userTheme = useStore().theme;

  const currentTheme = useMemo(() => {
    let appTheme = userTheme;

    if (userTheme === "automatic") {
      appTheme = deviceTheme === "dark" ? "dark" : "light";
    }

    return appTheme === "dark"
      ? { theme: theme.dark, style: "light", navigatorTheme: DarkTheme }
      : { theme: theme.light, style: "dark", navigatorTheme: DefaultTheme };
  }, [userTheme, deviceTheme]);

  return currentTheme;
};
