import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";

interface GenreChipProps {
  genre: string;
}

export const GenreChip: React.FC<GenreChipProps> = ({ genre }) => {
  return (
    <View style={{ marginHorizontal: 5 }}>
      <Layout level="4" style={{ borderRadius: 10 }}>
        <Text category="h6" style={{ padding: 10 }}>
          {genre}
        </Text>
      </Layout>
    </View>
  );
};
