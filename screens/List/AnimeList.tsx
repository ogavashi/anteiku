import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { GridList } from "../../features/anime";
import { ListLayout } from "../../components/layout";

export const AnimeList: React.FC<StackScreenProps<HomeStackParamsList, "AnimeList">> = ({
  route,
}) => {
  const { title, ...props } = route.params;

  return (
    <ListLayout title={title}>
      <GridList {...props} />
    </ListLayout>
  );
};
