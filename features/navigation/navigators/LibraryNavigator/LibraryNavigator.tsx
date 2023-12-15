import { createStackNavigator } from "@react-navigation/stack";
import { Library } from "../../../../screens";
import { LibraryStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<LibraryStackParamsList>();

export const LibraryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
