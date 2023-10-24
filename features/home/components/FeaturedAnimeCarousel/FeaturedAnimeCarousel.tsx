import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselItem } from "./CarouselItem";
import { Spinner, Text } from "@ui-kitten/components";
import { useCallback, useMemo, useState } from "react";
import { DotsCarousel } from "../../../../components";
import { useFetch } from "../../../../hooks";
import { Error } from "../../../error";
import { ApiService } from "../../../../services";

export const FeaturedAnimeCarousel = () => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState<number>(0);

  const handleIndex = useCallback((index: number) => {
    setIndex(index);
  }, []);

  const api = useMemo(() => ApiService().trending.getAllAnime, []);

  const { data, error } = useFetch(api, "trendingAnime");

  return (
    <View
      style={{
        display: "flex",
        gap: 5,
        width: "100%",
      }}
    >
      <Text category="h3" style={{ marginHorizontal: 10 }}>
        Featured anime
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
            minHeight: 220,
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
