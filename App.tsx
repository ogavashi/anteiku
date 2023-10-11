import { useCallback, useState } from "react";

import { ApplicationProvider, Button, IconRegistry, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import theme from "./common/theme";
import { RootNavigator } from "./features/navigation";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [appTheme, setAppTheme] = useState("dark");

  const handleChangeTheme = useCallback(() => {
    setAppTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={appTheme === "dark" ? theme.dark : theme.light}>
        <StatusBar style="light" />
        <RootNavigator />
      </ApplicationProvider>
    </>
  );
}
