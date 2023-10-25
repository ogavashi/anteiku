import { View } from "react-native";
import { HomeScreenProps } from "../../common/types";
import { ScrollLayout } from "../../components";
import {
  FeaturedAnimeCarousel,
  FeaturedMangaCarousel,
  HorizonatalListAnime,
} from "../../features/home";
import { useMemo } from "react";
import { ApiService } from "../../services";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const ongoingApi = useMemo(() => ApiService().ongoing.getAllAnime, [ApiService]);

  return (
    <ScrollLayout>
      <View style={{ display: "flex", gap: 20 }}>
        <FeaturedAnimeCarousel />
        <HorizonatalListAnime title="Ongoing anime" api={ongoingApi} />
        <FeaturedMangaCarousel />
      </View>
    </ScrollLayout>
  );
};
