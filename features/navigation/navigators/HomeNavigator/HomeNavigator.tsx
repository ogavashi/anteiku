import { createStackNavigator } from "@react-navigation/stack";
import { Home, List } from "../../../../screens";
import { HomeStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="List" component={List} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
