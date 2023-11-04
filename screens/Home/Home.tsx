import { View } from "react-native";
import { HomeStackParamsList } from "../../common/types";
import { ScrollLayout } from "../../components";
import {
  FeaturedAnimeCarousel,
  FeaturedMangaCarousel,
  HorizontalListAnime,
  HorizontalListManga,
} from "../../features/home";
import { useMemo } from "react";
import { ApiService } from "../../services";
import { Button } from "@ui-kitten/components";
import { StackScreenProps } from "@react-navigation/stack";

export const Home: React.FC<StackScreenProps<HomeStackParamsList, "Home">> = ({ navigation }) => {
  const ongoingApi = useMemo(
    () => ({ anime: ApiService().ongoing.getAllAnime, manga: ApiService().ongoing.getAllManga }),
    [ApiService]
  );

  const goList = () => {
    navigation.navigate("List");
  };

  return (
    <ScrollLayout>
      <View style={{ display: "flex", gap: 20 }}>
        <Button onPress={goList}>List</Button>
        <FeaturedAnimeCarousel />
        <HorizontalListAnime title="Ongoing anime" api={ongoingApi.anime} />
        <FeaturedMangaCarousel />
        <HorizontalListManga title="Ongoing manga" api={ongoingApi.manga} />
      </View>
    </ScrollLayout>
  );
};
