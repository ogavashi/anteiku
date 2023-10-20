import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthNavigator } from "../AuthNavigator";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { AppStackParamsList } from "../../../../common/types";
import { Profile, Settings } from "../../../../screens";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureDirection: "vertical",
          headerShown: false,
        }}
      />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
