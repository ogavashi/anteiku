import { createStackNavigator } from "@react-navigation/stack";
import { Home, AnimeList, MangaList } from "../../../../screens";
import { HomeStackParamsList } from "../../../../common/types";

const Stack = createStackNavigator<HomeStackParamsList>();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="AnimeList" component={AnimeList} options={{ headerShown: false }} />
      <Stack.Screen name="MangaList" component={MangaList} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
