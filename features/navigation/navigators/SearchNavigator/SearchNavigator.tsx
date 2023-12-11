import { createStackNavigator } from "@react-navigation/stack";
import { Anime, AnimeSearch, MangaSearch } from "../../../../screens";
import { SearchStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<SearchStackParamsList>();

export const SearchNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SearchAnime" component={AnimeSearch} options={{ headerShown: false }} />
      <Stack.Screen
        name="SearchManga"
        component={MangaSearch}
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
      <Stack.Screen name="Anime" component={Anime} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
