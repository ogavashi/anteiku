import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "../AppNavigator";
import { useAppTheme } from "../../../../hooks";

export const RootNavigator = () => {
  const { navigatorTheme } = useAppTheme();

  return (
    <NavigationContainer theme={navigatorTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
};
