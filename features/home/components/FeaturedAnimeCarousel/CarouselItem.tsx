import { Text } from "@ui-kitten/components";
import { Image, TouchableOpacity, View } from "react-native";
import { Anime, HomeStackParamsList } from "../../../../common/types";
import TextTicker from "react-native-text-ticker";
import { Rating } from "../../../../components";
import { useCallback } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface CarouselItemProps {
  item: Anime;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleOpen = useCallback(() => {
    navigation.navigate("Anime", { id: item.id, title: item.title });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <TouchableOpacity onPress={handleOpen}>
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
        <Rating style={{ position: "absolute", top: 5, right: 5 }} score={item.score} />
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
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6" style={{ color: "white" }}>
                {item.title}
              </Text>
            </TextTicker>
            <Text style={{ opacity: 0.8, color: "white" }}>
              {item.type}, {item.year}, {item.genres[0].name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
