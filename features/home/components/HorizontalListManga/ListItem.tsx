import { Layout, Text } from "@ui-kitten/components";
import { memo, useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { HomeStackParamsList, Manga } from "../../../../common/types";
import TextTicker from "react-native-text-ticker";
import { Rating } from "../../../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ListItem {
  manga: Manga;
}

export const ListItem: React.FC<ListItem> = memo(({ manga }) => {
  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleOpen = useCallback(() => {
    navigation.navigate("Manga", { id: manga.id, title: manga.title });
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
            uri: manga.poster,
          }}
        />
        <Rating style={{ position: "absolute", top: 5, right: 5 }} score={manga.score} />
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">
                {manga.title}, {manga.type}
                {manga.genres[0]?.name ? `, ${manga.genres[0].name}` : ""}
              </Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableOpacity>
  );
});
