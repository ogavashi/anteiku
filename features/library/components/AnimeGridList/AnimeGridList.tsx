import { FlatList } from "react-native";
import { Item } from "./Item";
import { NotFound } from "../../../../components";
import { FullAnime } from "../../../../common/types";

interface AnimeGridListProps {
  data: FullAnime[];
  isRefreshing: boolean;
  refresh: () => void;
}

export const AnimeGridList: React.FC<AnimeGridListProps> = ({ data, isRefreshing, refresh }) => {
  return (
    <FlatList
      data={data}
      numColumns={2}
      style={{ flex: 1 }}
      renderItem={({ item }) => <Item item={item} />}
      contentContainerStyle={{ paddingVertical: 10 }}
      refreshing={isRefreshing}
      onRefresh={refresh}
      ListEmptyComponent={<NotFound height={500} />}
    />
  );
};
