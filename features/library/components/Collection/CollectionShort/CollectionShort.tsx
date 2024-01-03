import { Text } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";
import { Collection } from "../../../../../common/types";
import { Swipeable } from "react-native-gesture-handler";
import { RightActions } from "./RightActions";
import { getCollection } from "../../../../../lib";
import { useStore } from "../../../../../store";

interface CollectionShortProps {
  collection: Collection;
}

export const CollectionShort: React.FC<CollectionShortProps> = ({ collection }) => {
  const { user } = useStore();

  const test = async () => {
    const { data, error } = await getCollection(collection.key, user!.id);
    console.log(data, error);
  };

  return (
    <Swipeable
      renderRightActions={(progress, dragValue) => (
        <RightActions progress={progress} dragValue={dragValue} />
      )}
    >
      <TouchableOpacity onPress={test}>
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
