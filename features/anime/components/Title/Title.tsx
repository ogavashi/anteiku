import { FlatList, Image, View } from "react-native";
import { Anime } from "../../../../common/types";
import { useCallback, useState } from "react";
import { Button, Divider, Layout, Text } from "@ui-kitten/components";
import { GenreChip, Loader } from "../../../../components";
import YoutubePlayer from "react-native-youtube-iframe";
import { StarIcon } from "../../../icons";

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
  };

  const [playing, setPlaying] = useState(false);
  const [loading, setIsLoading] = useState(true);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  const handleLoaded = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <View style={{ display: "flex", justifyContent: "center", gap: 20 }}>
      <View style={{ display: "flex", justifyContent: "center", marginHorizontal: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text category="h3">Frieren</Text>
          <Button appearance="outline" accessoryRight={StarIcon}>
            Rate
          </Button>
        </View>
        <Text category="h6">TV, 2023</Text>
      </View>
      <View style={{ maxHeight: 230 }}>
        {loading && <Loader />}
        <YoutubePlayer
          height={250}
          play={playing}
          videoId={"tR8YH0G67Rk"}
          onChangeState={onStateChange}
          onReady={handleLoaded}
        />
      </View>
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginHorizontal: 10,
        }}
      >
        <Image
          source={{ uri: mockItem.image }}
          style={{ width: "100%", height: 480, borderRadius: 10 }}
        />
      </View>
      <View style={{ gap: 10 }}>
        <Text category="h4" style={{ marginHorizontal: 10 }}>
          Genres
        </Text>
        <FlatList
          horizontal
          data={mockItem.genres}
          renderItem={({ item }) => <GenreChip genre={item} />}
          contentContainerStyle={{ paddingHorizontal: 5 }}
        />
      </View>
      <Divider />
      <View style={{ gap: 10, marginHorizontal: 10 }}>
        <Text category="h4">Synopsis</Text>
        <Text style={{ textAlign: "justify" }}>{`${mockItem.synopsis}`}</Text>
      </View>
      <Divider />
      {/* TODO: Table */}
      <View>
        <Layout>
          <View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
          </View>
        </Layout>
      </View>
    </View>
  );
};
