import { Text } from "@ui-kitten/components";
import { Image, View } from "react-native";
import { Manga } from "../../../../common/types";

interface CarouselItemProps {
  item: Manga;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <Image
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 10,
        }}
        source={{
          uri: item.image,
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
            {item.title}
          </Text>
          <Text style={{ opacity: 0.8, color: "white" }}>
            {item.type}, {item.year}
          </Text>
        </View>
      </View>
    </View>
  );
};
