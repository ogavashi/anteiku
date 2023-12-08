import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { FullManga } from "../../../../common/types";

interface DescTableProps {
  item: FullManga;
}

export const DescTable: React.FC<DescTableProps> = ({ item }) => {
  return (
    <Layout style={{ marginHorizontal: 10, borderRadius: 10, padding: 10 }} level="4">
      <View style={{ display: "flex", gap: 10 }}>
        <View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <Text category="h6" appearance="hint">
                Score:
              </Text>
              <Text category="h6">{item.score} / 10</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <Text category="h6" appearance="hint">
                Status:
              </Text>
              <Text category="h6">{item.status}</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <Text category="h6" appearance="hint">
                Volumes:
              </Text>
              <Text category="h6">{item.volumes}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                justifyContent: "space-between",
                width: 150,
              }}
            >
              <Text category="h6" appearance="hint">
                Chapters:
              </Text>
              <Text category="h6">{item.chapters}</Text>
            </View>
          </View>
        </View>
      </View>
    </Layout>
  );
};
