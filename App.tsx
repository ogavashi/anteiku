import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { RootNavigator } from "./features/navigation";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { useAppTheme } from "./hooks";

export default function App() {
  const { theme, style } = useAppTheme();

  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <StatusBar style={style as StatusBarStyle} />
        <RootNavigator />
      </ApplicationProvider>
    </>
  );
}
