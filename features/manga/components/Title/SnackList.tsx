import { Text } from "@ui-kitten/components";
import { FlatList, View } from "react-native";
import { Chip } from "../../../../components";

interface SnackListProps {
  title: string;
  data: { [key in string]: string }[];
  queryKey?: string;
}

export const SnackList: React.FC<SnackListProps> = ({ title, data, queryKey }) => {
  if (!data.length) {
    return null;
  }

  return (
    <View style={{ gap: 10 }}>
      <Text category="h4" style={{ marginHorizontal: 10 }}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => (
          <Chip value={item.name} itemKey={item.id} key={item.id} queryKey={queryKey} />
        )}
        contentContainerStyle={{ paddingHorizontal: 5 }}
      />
    </View>
  );
};
