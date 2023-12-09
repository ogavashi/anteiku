import { StackScreenProps } from "@react-navigation/stack";
import { ListLayout } from "../../components/layout";
import { GridList } from "../../features/anime";
import { useQuery } from "../../hooks";
import { SearchStackParamsList } from "../../common/types";

export const AnimeSearch: React.FC<StackScreenProps<SearchStackParamsList, "SearchAnime">> = () => {
  const { query, setQuery } = useQuery();

  return (
    <ListLayout>
      <GridList apiKey="search" query={query} />
    </ListLayout>
  );
};
