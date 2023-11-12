import { Button, Spinner, Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import { ListItem } from "./ListItem";
import { useFetch } from "../../../../hooks";
import { Error } from "../../../error";
import { HomeStackParamsList, Manga } from "../../../../common/types";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

interface HorizontalListMangaProps {
  title: string;
  api: () => Promise<Manga[]>;
}

export const HorizontalListManga: React.FC<HorizontalListMangaProps> = ({ title, api }) => {
  const { data, error } = useFetch(api, "ongoingManga");

  const navigation = useNavigation<NavigationProp<HomeStackParamsList>>();

  const handleShowMore = useCallback(() => {
    navigation.navigate("AnimeList", { title });
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
        <Error message={error.message} />
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
          renderItem={({ item }) => <ListItem manga={item} />}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}
    </View>
  );
};
