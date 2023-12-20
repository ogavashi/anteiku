import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthenticatedStackParamsList } from "../../../../common/types";
import { PersonalAccountNavigator } from "../PersonalAccountNavigator";

const Stack = createStackNavigator<AuthenticatedStackParamsList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="App" component={TabNavigator} options={{ headerShown: false }} />
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
