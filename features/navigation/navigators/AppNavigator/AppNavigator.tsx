import { createStackNavigator } from "@react-navigation/stack";
import { AuthNavigator } from "../AuthNavigator";
import { AppStackParamsList } from "../../../../common/types";
import { useStore } from "../../../../store";
import { Loader } from "../../../../components";
import { AuthenticatedNavigator } from "../AuthenticatedNavigator";
import { Layout } from "@ui-kitten/components";

const Stack = createStackNavigator<AppStackParamsList>();

export const AppNavigator = () => {
  const { session, initialized } = useStore();

  if (!initialized) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
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
