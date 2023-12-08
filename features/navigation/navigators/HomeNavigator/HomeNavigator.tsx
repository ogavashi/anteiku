import { createStackNavigator } from "@react-navigation/stack";
import { Home, AnimeList, MangaList, Anime } from "../../../../screens";
import { HomeStackParamsList } from "../../../../common/types";
import { Manga } from "../../../../screens/Manga";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="AnimeList" component={AnimeList} options={{ headerShown: false }} />
      <Stack.Screen name="MangaList" component={MangaList} options={{ headerShown: false }} />
      <Stack.Screen name="Anime" component={Anime} options={{ headerShown: false }} />
      <Stack.Screen name="Manga" component={Manga} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
