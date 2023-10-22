import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselItem } from "./CarouselItem";
import { Text } from "@ui-kitten/components";
import { DotsCarousel } from "../../../../components";
import { useCallback, useState } from "react";

export const FeaturedCarousel = () => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState<number>(0);

  const handleIndex = useCallback((index: number) => {
    setIndex(index);
  }, []);

  return (
    <View style={{ flex: 1, marginHorizontal: 10, gap: 5 }}>
      <Text category="h3" style={{ marginHorizontal: 5 }}>
        Featured
      </Text>
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Carousel
          loop
          width={width}
          height={width / 2}
          autoPlay={true}
          data={[...new Array(6).keys()]}
          scrollAnimationDuration={2000}
          onSnapToItem={handleIndex}
          autoPlayInterval={3000}
          onProgressChange={(_, absoluteProgress) => {
            handleIndex(Math.round(absoluteProgress));
          }}
          renderItem={({ index }) => <CarouselItem title={String(index)} />}
        />
        <DotsCarousel LENGTH={6} index={index} />
      </View>
    </View>
  );
};
