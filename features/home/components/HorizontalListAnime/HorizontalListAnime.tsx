import { Button, Spinner, Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import { ListItem } from "./ListItem";
import { useFetch, useQuery } from "../../../../hooks";
import { Anime, HomeStackParamsList, Query, Response } from "../../../../common/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { Error } from "../../../../components";

interface HorizontalListAnimeProps {
  title: string;
  api: () => Promise<Response<Anime[]>>;
  apiKey: string;
  filterKey?: string;
  defaultQuery?: Query;
}

export const HorizontalListAnime: React.FC<HorizontalListAnimeProps> = ({
  title,
  api,
  apiKey,
  filterKey,
  defaultQuery,
}) => {
  const { query } = useQuery(defaultQuery);

  const { data, error } = useFetch(api, apiKey, query);

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleShowMore = useCallback(() => {
    navigation.navigate("AnimeList", { title, apiKey, filterKey });
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
        <Text category="h3">{title}</Text>
        <Button appearance="ghost" onPress={handleShowMore}>
          Show all
        </Button>
      </View>
      {error ? (
        <Error height={200} message={error.message} />
      ) : !data ? (
        <View
          style={{
            width: "100%",
            height: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner size="giant" />
        </View>
      ) : (
        <FlatList
          centerContent
          horizontal
          data={data}
          renderItem={({ item }) => <ListItem anime={item} />}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}
    </View>
  );
};
