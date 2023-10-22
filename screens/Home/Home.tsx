import { HomeScreenProps } from "../../common/types";
import { View } from "react-native";
import { ScrollLayout } from "../../components";
import { FeaturedCarousel } from "../../features/home";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <ScrollLayout>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          marginVertical: 10,
        }}
      >
        <FeaturedCarousel />
      </View>
    </ScrollLayout>
  );
};
