import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "../AppNavigator";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { useColorScheme } from "react-native";

export const RootNavigator = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
