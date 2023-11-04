import { View } from "react-native";
import { HomeScreenProps } from "../../common/types";
import { ScrollLayout } from "../../components";
import {
  FeaturedAnimeCarousel,
  FeaturedMangaCarousel,
  HorizontalListAnime,
  HorizontalListManga,
} from "../../features/home";
import { useMemo } from "react";
import { ApiService } from "../../services";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const ongoingApi = useMemo(
    () => ({ anime: ApiService().ongoing.getAllAnime, manga: ApiService().ongoing.getAllManga }),
    [ApiService]
  );

  return (
    <ScrollLayout>
      <View style={{ display: "flex", gap: 20 }}>
        <FeaturedAnimeCarousel />
        <HorizontalListAnime title="Ongoing anime" api={ongoingApi.anime} />
        <FeaturedMangaCarousel />
        <HorizontalListManga title="Ongoing manga" api={ongoingApi.manga} />
      </View>
    </ScrollLayout>
  );
};
