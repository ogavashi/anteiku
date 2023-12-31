import { Text } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";
import { Collection, LibraryStackParamsList } from "../../../../../common/types";
import { Swipeable } from "react-native-gesture-handler";
import { RightActions } from "./RightActions";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface CollectionShortProps {
  collection: Collection;
}

export const CollectionShort: React.FC<CollectionShortProps> = ({ collection }) => {
  const navigation = useNavigation<NavigationProp<LibraryStackParamsList>>();

  const handleOpen = () => {
    navigation.navigate("AnimeCollection", { collection });
  };

  return (
    <Swipeable
      renderRightActions={(progress, dragValue) => (
        <RightActions progress={progress} dragValue={dragValue} />
      )}
    >
      <TouchableOpacity onPress={handleOpen}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Icon icon={collection.icon} />
          <View style={{ gap: 5 }}>
            <Text category="h4">{collection.title}</Text>
            <Text appearance="hint">Number of titles: {collection.count}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
