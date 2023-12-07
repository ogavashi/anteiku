import { FlatList, Image, View } from "react-native";
import { Anime } from "../../../../common/types";
import { Button, Divider, Text } from "@ui-kitten/components";
import { Chip, Loader } from "../../../../components";
import { StarIcon } from "../../../icons";
import { DescTable } from "./DescTable";
import { Trailer } from "./Trailer";
import { TopSegment } from "./TopSegment";
import { Poster } from "./Poster";
import { SnackList } from "./SnaclList";
import { TextBlock } from "./TextBlock";

interface TitleProps {
  item?: Anime;
}

export const Title: React.FC<TitleProps> = ({ item }) => {
  const mockItem = {
    image:
      "https://m.media-amazon.com/images/M/MV5BMjVjZGU5ZTktYTZiNC00N2Q1LThiZjMtMDVmZDljN2I3ZWIwXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    genres: ["Action", "Romance", "Comedy", "Adventure", "Thriller", "History"],
    synopsis:
      "During their decade-long quest to defeat the Demon King, the members of the hero's party—Himmel himself, the priest Heiter, the dwarf warrior Eisen, and the elven mage Frieren—forge bonds through adventures and battles, creating unforgettable precious memories for most of them.\n\nHowever, the time that Frieren spends with her comrades is equivalent to merely a fraction of her life, which has lasted over a thousand years. When the party disbands after their victory, Frieren casually returns to her \"usual\" routine of collecting spells across the continent. Due to her different sense of time, she seemingly holds no strong feelings toward the experiences she went through.\n\nAs the years pass, Frieren gradually realizes how her days in the hero's party truly impacted her. Witnessing the deaths of two of her former companions, Frieren begins to regret having taken their presence for granted; she vows to better understand humans and create real personal connections. Although the story of that once memorable journey has long ended, a new tale is about to begin.\n\n[Written by MAL Rewrite]",
    background:
      "Sousou no Frieren was released on Blu-ray and DVD in seven volumes from January 24, 2024, to July 17, 2024.",
    studios: ["Madhouse"],
    producers: [
      "Aniplex",
      "Dentsu",
      "Shogakukan-Shueisha Productions",
      "Nippon Television Network",
      "TOHO animation",
      "Shogakukan",
    ],
  };

  return (
    <View style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <TopSegment />
      <Trailer />
      <Poster url={mockItem.image} />
      <SnackList title="Genres" data={mockItem.genres} />
      <Divider />
      <TextBlock title="Synopsis" text={mockItem.synopsis} />
      <Divider />
      <DescTable />
      <Divider />
      <TextBlock title="Background" text={mockItem.background} />
      <SnackList title="Studios" data={mockItem.studios} />
      <SnackList title="Producers" data={mockItem.producers} />
    </View>
  );
};
