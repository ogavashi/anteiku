import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthNavigator } from "../AuthNavigator";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
