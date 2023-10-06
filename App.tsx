import { useCallback, useState } from "react";

import { ApplicationProvider, Button, Layout, Text } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import theme from "./common/theme";

export default function App() {
  const [appTheme, setAppTheme] = useState("dark");

  const handleChangeTheme = useCallback(() => {
    setAppTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ApplicationProvider {...eva} theme={appTheme === "dark" ? theme.dark : theme.light}>
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text category="h1">HOME</Text>
        <Button onPress={handleChangeTheme}>Toggle theme</Button>
      </Layout>
    </ApplicationProvider>
  );
}
