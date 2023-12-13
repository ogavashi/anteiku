import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthNavigator } from "../AuthNavigator";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { AppStackParamsList } from "../../../../common/types";
import { Profile, Settings } from "../../../../screens";
import { PersonalAccountNavigator } from "../PersonalAccountNavigator";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      <Stack.Screen
        name="PersonalAccount"
        component={PersonalAccountNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
