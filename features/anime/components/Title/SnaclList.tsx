import { Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import { Chip } from "../../../../components";

interface SnackListProps {
  title: string;
  data: string[];
}

export const SnackList: React.FC<SnackListProps> = ({ title, data }) => {
  return (
    <View style={{ gap: 10 }}>
      <Text category="h4" style={{ marginHorizontal: 10 }}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Chip value={item} itemKey={item} key={item} />}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};
