import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";
import { BottomSheet, Loader } from "../../../../components";
import { View } from "react-native";
import { BASE_COLLECTIONS } from "../../../../common/baseCollections";
import { Collection } from "./Collection";
import { addToCollection, getCollections } from "../../../../lib";
import { useStore } from "../../../../store";
import { Anime, Collection as TCollection, Manga } from "../../../../common/types";
import { Error } from "../../../error";

interface AddToLibrarySheetProps {
  closeModal: () => void;
  title: Anime | Manga;
}

export const AddToLibrarySheet = forwardRef<BottomSheetModalMethods, AddToLibrarySheetProps>(
  ({ closeModal, title }, ref) => {
    const { user } = useStore();

    const [isLoading, setIsLoading] = useState(false);
    const [collections, setCollections] = useState<TCollection[] | null>(null);
    const [refetch, setRefetch] = useState(false);

    if (!user) {
      return null;
    }

    useEffect(() => {
      fetchCollections();
    }, []);

    useEffect(() => {
      if (refetch) {
        fetchCollections();
        setRefetch(false);
      }
    }, [refetch]);

    const fetchCollections = useCallback(async () => {
      try {
        setIsLoading(true);
        const fetched = await getCollections(BASE_COLLECTIONS, user.id, title);
        setCollections(fetched);
      } catch (error) {
        setCollections([]);
      } finally {
        setIsLoading(false);
      }
    }, []);

    const handleAdd = useCallback(
      async (collection: string) => {
        const error = await addToCollection(user.id, title, collection);

        return error;
      },
      [user, title]
    );

    const handleRefresh = useCallback(() => {
      setRefetch(true);
    }, []);

    const renderContent = useCallback(() => {
      if (isLoading) {
        return <Loader />;
      }
      if (!collections) {
        return <Error message="Error" />;
      }

      return collections.map((collection) => (
        <Collection key={collection.key} collection={collection} handleAdd={handleAdd} />
      ));
    }, [isLoading, collections, handleAdd]);

    return (
      <BottomSheet ref={ref} height="40%" onDismiss={handleRefresh}>
        <View
          style={{
            gap: 10,
            width: "100%",
            paddingHorizontal: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {renderContent()}
        </View>
      </BottomSheet>
    );
  }
);
