import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Layout, Text } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";
import { TabParamList } from "../../../common/types";
import { useCallback } from "react";

interface ChipProps {
  value: string;
  itemKey: string;
  queryKey?: string;
}

export const Chip: React.FC<ChipProps> = ({ value, itemKey, queryKey }) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const handleNavigate = useCallback(() => {
    if (!queryKey) {
      return;
    }

    navigation.navigate("Search", {
      screen: "SearchAnime",
      params: { query: { [queryKey]: itemKey } },
    });
  }, [queryKey, navigation]);

  return (
    <TouchableOpacity onPress={handleNavigate}>
      <View style={{ marginHorizontal: 5 }}>
        <Layout level="4" style={{ borderRadius: 10 }}>
          <Text category="h6" style={{ padding: 10 }}>
            {value}
          </Text>
        </Layout>
      </View>
    </TouchableOpacity>
  );
};
