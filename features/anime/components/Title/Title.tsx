import { View } from "react-native";
import { FullAnime } from "../../../../common/types";
import { DescTable } from "./DescTable";
import { Trailer } from "./Trailer";
import { TopSegment } from "./TopSegment";
import { Poster } from "./Poster";
import { SnackList } from "./SnackList";
import { TextBlock } from "./TextBlock";

interface TitleProps {
  item: FullAnime;
}

export const Title: React.FC<TitleProps> = ({ item }) => {
  return (
    <View style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <TopSegment title={item.title} year={+item.year || item.fullYear} type={item.type} />
      <Trailer videoId={item.videoId} />
      <Poster url={item.image} />
      <SnackList title="Genres" data={item.genres} queryKey="genres" />
      <TextBlock title="Synopsis" text={item.synopsis} />
      <DescTable item={item} />
      <TextBlock title="Background" text={item.background} />
      <SnackList title="Studios" data={item.studios} />
      <SnackList title="Producers" data={item.producers} />
    </View>
  );
};
