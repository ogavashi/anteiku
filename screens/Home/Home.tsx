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
import { StackScreenProps } from "@react-navigation/stack";

export const Home: React.FC<StackScreenProps<HomeStackParamsList, "Home">> = () => {
  const ongoingApi = useMemo(
    () => ({
      ongoingAnime: ApiService().ongoing.getAllAnime,
      ongoingManga: ApiService().ongoing.getAllManga,
    }),
    [ApiService]
  );

  return (
    <ScrollLayout>
      <View style={{ display: "flex", gap: 20 }}>
        {/* <FeaturedAnimeCarousel /> */}
        <HorizontalListAnime
          title="Ongoing anime"
          api={ongoingApi.ongoingAnime}
          apiKey="ongoingAnime"
        />
        {/* <FeaturedMangaCarousel />
        <HorizontalListManga
          title="Ongoing manga"
          api={ongoingApi.ongoingManga}
          apiKey="ongoingManga"
        /> */}
      </View>
    </ScrollLayout>
  );
};
