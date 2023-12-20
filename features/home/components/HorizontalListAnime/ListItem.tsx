import { Layout, Text } from "@ui-kitten/components";
import { memo, useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Anime, HomeStackParamsList } from "../../../../common/types";
import TextTicker from "react-native-text-ticker";
import { Rating } from "../../../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ListItem {
  anime: Anime;
}

export const ListItem: React.FC<ListItem> = memo(({ anime }) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleOpen = useCallback(() => {
    navigation.navigate("Anime", { id: anime.id, title: anime.title });
  }, []);

  return (
    <TouchableOpacity onPress={handleOpen}>
      <View style={{ marginHorizontal: 10, borderRadius: 1, width: 284 }}>
        <Image
          style={{
            height: 402,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={{
            uri: anime.poster,
          }}
        />
        <Rating style={{ position: "absolute", top: 5, right: 5 }} score={anime.score} />
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">
                {anime.title}, {anime.type}
                {anime.genres[0]?.name ? `, ${anime.genres[0].name}` : ""}
              </Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableOpacity>
  );
});
