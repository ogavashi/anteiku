import { Image, View } from "react-native";
import { Anime } from "../../../../common/types";
import React from "react";
import { Text } from "@ui-kitten/components";

interface TitleProps {
  item?: Anime;
}

export const Title: React.FC<TitleProps> = ({ item }) => {
  const mockItem = {
    image: "https://cdn.myanimelist.net//images//anime//1244//138851l.jpg",
  };

  return (
    <View>
      <View>
        <View>
          <Image source={{ uri: mockItem.image }} style={{ width: 385, height: 600 }} />
        </View>
        <View>
          <Text>Steins;Gate</Text>
        </View>
      </View>
    </View>
  );
};
