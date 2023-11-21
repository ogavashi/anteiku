import { FlatList } from "react-native";
import { Item } from "./Item";
import { useInfiniteScroll } from "../../../../hooks";
import { Error, Loader } from "../../../../components";
import { useMemo } from "react";
import { getApi } from "../../lib";

interface GridLisProps {
  apiKey: string;
}

export const GridList: React.FC<GridLisProps> = ({ apiKey }) => {
  const api = useMemo(() => getApi(apiKey), []);

  if (!api) {
    return <Error message="Something went wrong" />;
  }

  const { data, error, isLoading, fetchNext, refresh } = useInfiniteScroll(api);

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
      centerContent
      renderItem={({ item }) => <Item item={item} />}
      onEndReached={fetchNext}
      onEndReachedThreshold={0.2}
      refreshing={isLoading === "refresh"}
      onRefresh={refresh}
      contentContainerStyle={{ paddingVertical: 10 }}
      ListFooterComponent={<>{isLoading === "next" && <Loader height={100} />}</>}
    />
  );
};
