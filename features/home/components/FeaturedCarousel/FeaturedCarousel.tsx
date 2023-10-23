import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselItem } from "./CarouselItem";
import { Spinner, Text } from "@ui-kitten/components";
import { DotsCarousel } from "../../../../components";
import { useCallback, useState } from "react";
import { useFetch } from "../../../../hooks";
import { FeaturedAnime } from "../../../../common/types";
import { featured_anime_url } from "../../../../api";
import { featuredNormalizer } from "../../../../api";
import { Error } from "../../../../features/error";

export const FeaturedCarousel = () => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState<number>(0);

  const handleIndex = useCallback((index: number) => {
    setIndex(index);
  }, []);

  const { data, error } = useFetch<FeaturedAnime[]>(featured_anime_url, featuredNormalizer);

  return (
    <View
      style={{
        display: "flex",
        gap: 5,
        width: "100%",
      }}
    >
      <Text category="h3" style={{ marginHorizontal: 10 }}>
        Featured
      </Text>

      {error ? (
        <Error message={error.message} />
      ) : (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            minHeight: 200,
          }}
        >
          {!data ? (
            <Spinner size="giant" />
          ) : (
            <>
              <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={2000}
                onSnapToItem={handleIndex}
                autoPlayInterval={3000}
                onProgressChange={(_, absoluteProgress) => {
                  handleIndex(Math.round(absoluteProgress));
                }}
                renderItem={({ item }) => <CarouselItem item={item} />}
              />
              <DotsCarousel LENGTH={data.length} index={index} />
            </>
          )}
        </View>
      )}
    </View>
  );
};
