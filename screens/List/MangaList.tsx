import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ListLayout } from "../../components/layout";
import { GridList } from "../../features/anime";

export const MangaList: React.FC<StackScreenProps<HomeStackParamsList, "MangaList">> = ({
  navigation,
  route,
}) => {
  const { title } = route.params;

  return (
    <ListLayout title={title}>
      <GridList />
    </ListLayout>
  );
};
