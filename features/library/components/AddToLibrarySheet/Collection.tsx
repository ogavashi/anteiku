import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { Collection as TCollection } from "../../../../common/types";
import { Icon } from "./Icon";

interface CollectionProps {
  collection: TCollection;
  handleAdd: (collection: string) => void;
  isLoading: boolean;
}

export const Collection: React.FC<CollectionProps> = ({ collection, handleAdd, isLoading }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        width: "100%",
      }}
    >
      <Icon icon={collection.icon} />
      <View style={{ gap: 5 }}>
        <Text category="h5">{collection.title}</Text>
        <Text appearance="hint">Number of titles: {collection.count}</Text>
      </View>
      <Button
        style={{ flex: 1 }}
        onPress={() => handleAdd(collection.key)}
        status={collection.added ? "danger" : "primary"}
        disabled={isLoading}
      >
        {collection.added ? "Remove" : "Add"}
      </Button>
    </View>
  );
};
