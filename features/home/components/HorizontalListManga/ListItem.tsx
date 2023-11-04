import { Layout, Text } from "@ui-kitten/components";
import { memo } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import { Manga } from "../../../../common/types";
import TextTicker from "react-native-text-ticker";

interface ListItem {
  manga: Manga;
}

export const ListItem: React.FC<ListItem> = memo(({ manga }) => {
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
            uri: manga.poster,
          }}
        />
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">
                {manga.title}, {manga.mangaType}
              </Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableHighlight>
  );
});
