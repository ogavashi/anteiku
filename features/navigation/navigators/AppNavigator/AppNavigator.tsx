import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthNavigator } from "../AuthNavigator";
import { AppStackParamsList } from "../../../../common/types";
import { PersonalAccountNavigator } from "../PersonalAccountNavigator";
import { useStore } from "../../../../store";
import { Loader } from "../../../../components";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppNavigator = () => {
  const { session, initialized } = useStore();

  if (!initialized) {
    return <Loader />;
  }

  return (
    <Stack.Navigator>
      {session ? (
        <Stack.Screen name="App" component={TabNavigator} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      )}
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
