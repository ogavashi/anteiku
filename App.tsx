import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { RootNavigator } from "./features/navigation/navigators";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { useAppTheme, useGetGenres } from "./hooks";

export default function App() {
  const { theme, style } = useAppTheme();

  useGetGenres();

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
