import { createStackNavigator } from "@react-navigation/stack";
import { AnimeSearch } from "../../../../screens";
import { SearchStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<SearchStackParamsList>();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchAnime" component={AnimeSearch} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
