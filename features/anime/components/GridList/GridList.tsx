import { FlatList } from "react-native";
import { Item } from "./Item";
import { useFetch } from "../../../../hooks";
import { Anime } from "../../../../common/types";
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

  const { data, error } = useFetch(api as unknown as () => Promise<Anime[]>, apiKey);

  if (!data && !error) {
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
    />
  );
};
