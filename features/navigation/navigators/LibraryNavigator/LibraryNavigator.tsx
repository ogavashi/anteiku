import { createStackNavigator } from "@react-navigation/stack";
import { Anime, AnimeCollection, Library, MangaCollection } from "../../../../screens";
import { LibraryStackParamsList } from "../../../../common/types";
import { Manga } from "../../../../screens/Manga";

const Stack = createStackNavigator<LibraryStackParamsList>();

export const LibraryNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Library" component={Library} options={{ headerShown: false }} />
      <Stack.Screen name="Anime" component={Anime} options={{ headerShown: false }} />
      <Stack.Screen name="Manga" component={Manga} options={{ headerShown: false }} />
      <Stack.Screen
        name="AnimeCollection"
        component={AnimeCollection}
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
      <Stack.Screen
        name="MangaCollection"
        component={MangaCollection}
        options={{ headerShown: false, presentation: "transparentModal" }}
      />
    </Stack.Navigator>
  );
};
