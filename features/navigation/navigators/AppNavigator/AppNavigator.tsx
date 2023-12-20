import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "../TabNavigator";
import { AuthNavigator } from "../AuthNavigator";
import { AppStackParamsList } from "../../../../common/types";
import { useStore } from "../../../../store";
import { Loader } from "../../../../components";
import { AuthenticatedNavigator } from "../AuthenticatedNavigator";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppNavigator = () => {
  const { session, initialized } = useStore();

  if (!initialized) {
    return <Loader />;
  }

  return (
    <Stack.Navigator>
      {session ? (
        <Stack.Screen
          name="Authenticated"
          component={AuthenticatedNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};
