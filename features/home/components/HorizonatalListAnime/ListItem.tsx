import { Layout, Text } from "@ui-kitten/components";
import { memo } from "react";
import { Image, TouchableHighlight, TouchableOpacity, View } from "react-native";
import { Anime } from "../../../../common/types";
import TextTicker from "react-native-text-ticker";

interface ListItem {
  anime: Anime;
}

export const ListItem: React.FC<ListItem> = memo(({ anime }) => {
  return (
    <TouchableHighlight>
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
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">
                {anime.title}, {anime.showType}
              </Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableHighlight>
  );
});
