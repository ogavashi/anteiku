import { FlatList } from "react-native";
import { Item } from "./Item";
import { NotFound } from "../../../../components";
import { FullManga } from "../../../../common/types";

interface MangaGridListProps {
  data: FullManga[];
  isRefreshing: boolean;
  refresh: () => void;
}

export const MangaGridList: React.FC<MangaGridListProps> = ({ data, isRefreshing, refresh }) => {
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
