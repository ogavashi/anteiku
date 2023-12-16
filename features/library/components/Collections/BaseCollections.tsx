import { View } from "react-native";
import { CollectionShort } from "../Collection/CollectionShort";
import { BASE_COLLECTIONS } from "../../../../common/baseCollections";

export const BaseCollections = () => {
  return (
    <View
      style={{
        gap: 10,
      }}
    >
      {BASE_COLLECTIONS.map((collection) => (
        <CollectionShort key={collection.key} collection={collection} />
      ))}
    </View>
  );
};
