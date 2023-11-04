import { Spinner, Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import { ListItem } from "./ListItem";
import { useFetch } from "../../../../hooks";
import { Error } from "../../../error";
import { Anime } from "../../../../common/types";

interface HorizontalListAnimeProps {
  title: string;
  api: () => Promise<Anime[]>;
}

export const HorizontalListAnime: React.FC<HorizontalListAnimeProps> = ({ title, api }) => {
  const { data, error } = useFetch(api, "ongoingAnime");

  return (
    <View
      style={{
        display: "flex",
        gap: 5,
        width: "100%",
      }}
    >
      <Text category="h3" style={{ marginHorizontal: 10 }}>
        {title}
      </Text>
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
          renderItem={({ item }) => <ListItem anime={item} />}
          keyExtractor={({ id }) => id}
          contentContainerStyle={{ paddingBottom: 10 }}
        />
      )}
    </View>
  );
};
