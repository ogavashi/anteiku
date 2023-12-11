import { Layout, Text } from "@ui-kitten/components";
import React, { memo, useCallback } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import TextTicker from "react-native-text-ticker";
import { Anime, HomeStackParamsList, SearchStackParamsList } from "../../../../common/types";
import { Rating } from "../../../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ItemProps {
  item: Anime;
}

export const Item: React.FC<ItemProps> = memo(({ item }) => {
  const navigation = useNavigation<NavigationProp<SearchStackParamsList & HomeStackParamsList>>();

  const handleOpen = useCallback(() => {
    navigation.navigate("Anime", { id: item.id, title: item.title });
  }, []);

  return (
    <TouchableOpacity onPress={handleOpen}>
      <View style={{ marginHorizontal: 10, borderRadius: 1, width: 175, marginBottom: 10 }}>
        <Image
          style={{
            height: 240,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={{
            uri: item.poster,
          }}
        />
        <Rating style={{ position: "absolute", top: 5, right: 5 }} score={item.score} />
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">
                {item.title}, {item.type} {item?.genres[0]?.name ? `, ${item.genres[0].name}` : ""}
              </Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableOpacity>
  );
});
