import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";

interface ChipProps {
  value: string;
  itemKey: string;
  queryKey?: string;
}

export const Chip: React.FC<ChipProps> = ({ value, itemKey, queryKey }) => {
  return (
    <View style={{ marginHorizontal: 5 }}>
      <Layout level="4" style={{ borderRadius: 10 }}>
        <Text category="h6" style={{ padding: 10 }}>
          {value}
        </Text>
      </Layout>
    </View>
  );
};
