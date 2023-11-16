import { Dimensions, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { CarouselItem } from "./CarouselItem";
import { Button, Spinner, Text } from "@ui-kitten/components";
import { useCallback, useMemo, useState } from "react";
import { DotsCarousel, Error } from "../../../../components";
import { useFetch } from "../../../../hooks";
import { ApiService } from "../../../../services";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { HomeStackParamsList } from "../../../../common/types";

export const FeaturedMangaCarousel = () => {
  const width = Dimensions.get("window").width;
  const [index, setIndex] = useState<number>(0);

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleIndex = useCallback((index: number) => {
    setIndex(index);
  }, []);

  const api = useMemo(() => ApiService().trending.getAllManga, []);

  const { data, error } = useFetch(api, "trendingManga");

  const handleShowMore = useCallback(() => {
    navigation.navigate("MangaList", { title: "Featured manga", apiKey: "trendingManga" });
  }, []);

  return (
    <View
      style={{
        display: "flex",
        gap: 5,
        width: "100%",
      }}
    >
      <View
        style={{
          marginHorizontal: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text category="h3">Featured manga</Text>
        <Button appearance="ghost" onPress={handleShowMore}>
          Show all
        </Button>
      </View>

      {error ? (
        <Error height={200} message={error.message} />
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
                autoPlayInterval={4000}
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
