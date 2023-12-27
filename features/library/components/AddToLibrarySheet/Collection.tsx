import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { Collection as TCollection } from "../../../../common/types";
import { Icon } from "./Icon";
import { useCallback, useState } from "react";
import { PostgrestError } from "@supabase/supabase-js";
import Toast from "react-native-toast-message";

interface CollectionProps {
  collection: TCollection;
  handleAdd: (collection: string) => Promise<PostgrestError | null>;
}

export const Collection: React.FC<CollectionProps> = ({ collection, handleAdd }) => {
  const [isAdded, setIsAdded] = useState(collection.added);
  const [count, setCount] = useState(collection.count);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = useCallback(async () => {
    setIsLoading(true);
    try {
      const error = await handleAdd(collection.key);

      if (error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });

        return;
      }

      setIsAdded((prev) => !prev);
      setCount((prev) => (isAdded ? prev - 1 : prev + 1));
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  }, [handleAdd, collection, isAdded]);

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
        <Text appearance="hint">Number of titles: {count}</Text>
      </View>
      <Button
        style={{ flex: 1 }}
        onPress={handlePress}
        status={isAdded ? "danger" : "primary"}
        disabled={isLoading}
      >
        {isAdded ? "Remove" : "Add"}
      </Button>
    </View>
  );
};
