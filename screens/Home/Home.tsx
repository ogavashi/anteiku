import { HomeScreenProps } from "../../common/types";
import { View } from "react-native";
import { ScrollLayout } from "../../components";
import { FeaturedCarousel } from "../../features/home";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollLayout>
      <FeaturedCarousel />
    </ScrollLayout>
  );
};
