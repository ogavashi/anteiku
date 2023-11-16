import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ListLayout } from "../../components/layout";
import { GridList } from "../../features/manga";

export const MangaList: React.FC<StackScreenProps<HomeStackParamsList, "MangaList">> = ({
  route,
}) => {
  const { title, ...props } = route.params;

  return (
    <ListLayout title={title}>
      <GridList {...props} />
    </ListLayout>
  );
};
