import { Text } from "@ui-kitten/components";
import { ItemLayout } from "../../components";
import { Title } from "../../features/anime";

export const Anime = () => {
  const image = "https://cdn.myanimelist.net/images/anime/1244/138851l.jpg";

  return (
    <ItemLayout title="One Piece">
      <Title />
    </ItemLayout>
  );
};
