import { Text } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";
import { Icon } from "./Icon";
import { CollectionShort as TCollectionShort } from "../../../../../common/types";
import { Swipeable } from "react-native-gesture-handler";
import { RightActions } from "./RightActions";

interface CollectionShortProps {
  collection: TCollectionShort;
}

export const CollectionShort: React.FC<CollectionShortProps> = ({ collection }) => {
  return (
    <Swipeable
      renderRightActions={(progress, dragValue) => (
        <RightActions progress={progress} dragValue={dragValue} />
      )}
    >
      <TouchableOpacity>
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
            <Text appearance="hint">Number of titles: 10</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};
