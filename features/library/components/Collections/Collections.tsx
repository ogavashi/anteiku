import { View } from "react-native";
import { CollectionShort } from "../Collection/CollectionShort";
import { Collection } from "../../../../common/types";

interface CollectionsProps {
  collections: Collection[];
}

export const Collections: React.FC<CollectionsProps> = ({ collections }) => {
  return (
    <View style={{ paddingHorizontal: 10, gap: 10 }}>
      {collections?.map((collection) => (
        <CollectionShort key={collection.key} collection={collection} />
      ))}
    </View>
  );
};
