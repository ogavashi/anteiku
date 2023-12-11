import { View } from "react-native";
import { FullManga } from "../../../../common/types";
import { DescTable } from "./DescTable";
import { TopSegment } from "./TopSegment";
import { Poster } from "./Poster";
import { SnackList } from "./SnackList";
import { TextBlock } from "./TextBlock";

interface TitleProps {
  item: FullManga;
}

export const Title: React.FC<TitleProps> = ({ item }) => {
  return (
    <View style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <TopSegment title={item.title} year={item.year} type={item.type} />
      <Poster url={item.image} />
      <SnackList title="Genres" data={item.genres} />
      <TextBlock title="Synopsis" text={item.synopsis} />
      <DescTable item={item} />
      <TextBlock title="Background" text={item.background} />
      <SnackList title="Authors" data={item.authors} />
      <SnackList title="Serializations" data={item.serializations} />
    </View>
  );
};
