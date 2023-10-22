import { Text } from "@ui-kitten/components";
import { Image, View } from "react-native";
import { useAppTheme } from "../../../../hooks";

interface CarouselItemProps {
  title: string;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ title }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 5,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
        }}
        source={{
          uri: "https://media.kitsu.io/anime/45857/cover_image/7628bd46d94b8a96108292aa7e4d5571.jpg",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: 5,
          width: "100%",
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Text category="h6" style={{ color: "white" }}>
            Jujutsu Kaisen
          </Text>
          <Text style={{ opacity: 0.8, color: "white" }}>TV, 2023</Text>
        </View>
      </View>
    </View>
  );
};
