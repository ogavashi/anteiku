import { createStackNavigator } from "@react-navigation/stack";
import { Account, Boarding, Login, Profile, Register, Settings } from "../../../../screens";
import { PersonalAccountParamsList } from "../../../../common/types";

const Stack = createStackNavigator<PersonalAccountParamsList>();

export const PersonalAccountNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
