import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { RootNavigator } from "./features/navigation/navigators";
import { StatusBar, StatusBarStyle } from "expo-status-bar";
import { useAppTheme } from "./hooks";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  const { theme, style } = useAppTheme();

  return (
    <ApplicationProvider {...eva} theme={theme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <IconRegistry icons={EvaIconsPack} />
          <StatusBar style={style as StatusBarStyle} />
          <RootNavigator />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ApplicationProvider>
  );
}
