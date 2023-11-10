import { Layout, Text } from "@ui-kitten/components";
import React, { memo } from "react";
import { Image, TouchableHighlight, View } from "react-native";
import TextTicker from "react-native-text-ticker";

interface ItemProps {
  item: { id: number; title: string; img: string };
}

export const Item: React.FC<ItemProps> = memo(({ item }) => {
  return (
    <TouchableHighlight>
      <View style={{ marginHorizontal: 10, borderRadius: 1, width: 175, marginBottom: 10 }}>
        <Image
          style={{
            height: 240,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={{
            uri: item.img,
          }}
        />
        <Layout
          level="4"
          style={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10, padding: 10 }}
        >
          <View>
            <TextTicker style={{ fontSize: 24 }} duration={6000} loop bounce marqueeDelay={1000}>
              <Text category="h6">{item.title}, TV</Text>
            </TextTicker>
          </View>
        </Layout>
      </View>
    </TouchableHighlight>
  );
});
