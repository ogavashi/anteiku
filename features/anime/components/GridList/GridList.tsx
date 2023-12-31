import { FlatList } from "react-native";
import { Item } from "./Item";
import { useInfiniteScroll } from "../../../../hooks";
import { Error, Loader, NotFound } from "../../../../components";
import { useMemo } from "react";
import { getApi } from "../../lib";
import { Query } from "../../../../common/types";

interface GridLisProps {
  apiKey: string;
  query: Query;
}

export const GridList: React.FC<GridLisProps> = ({ apiKey, query }) => {
  const api = useMemo(() => getApi(apiKey), []);

  if (!api) {
    return <Error message="Something went wrong" />;
  }

  const { data, error, isLoading, fetchNext, refresh } = useInfiniteScroll(api, query);

  if (isLoading === "main") {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <FlatList
      data={data}
      numColumns={2}
      style={{ flex: 1 }}
      renderItem={({ item }) => <Item item={item} />}
      onEndReached={fetchNext}
      onEndReachedThreshold={0.2}
      refreshing={isLoading === "refresh"}
      onRefresh={refresh}
      contentContainerStyle={{ paddingVertical: 10 }}
      ListFooterComponent={<>{isLoading === "next" && <Loader height={100} />}</>}
      ListEmptyComponent={<NotFound height={500} />}
    />
  );
};
