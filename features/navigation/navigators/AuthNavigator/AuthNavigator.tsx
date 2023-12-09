import { createStackNavigator } from "@react-navigation/stack";
import { Boarding, Login, Register } from "../../../../screens";
import { AuthStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<AuthStackParamsList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Boarding">
      <Stack.Screen name="Boarding" component={Boarding} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
