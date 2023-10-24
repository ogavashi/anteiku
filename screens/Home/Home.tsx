import { View } from "react-native";
import { HomeScreenProps } from "../../common/types";
import { ScrollLayout } from "../../components";
import { FeaturedAnimeCarousel, FeaturedMangaCarousel } from "../../features/home";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollLayout>
      <View style={{ display: "flex", gap: 20 }}>
        <FeaturedAnimeCarousel />
        <FeaturedMangaCarousel />
      </View>
    </ScrollLayout>
  );
};
