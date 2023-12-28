import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef, useCallback, useEffect, useState } from "react";
import { BottomSheet, Loader } from "../../../../components";
import { View } from "react-native";
import { BASE_COLLECTIONS } from "../../../../common/baseCollections";
import { Collection } from "./Collection";
import { addToCollection, getCollections } from "../../../../lib";
import { useStore } from "../../../../store";
import { Anime, Collection as TCollection, Manga } from "../../../../common/types";
import { Error as ErrorComponent } from "../../../error";
import Toast from "react-native-toast-message";

interface AddToLibrarySheetProps {
  closeModal: () => void;
  title: Anime | Manga;
}

export const AddToLibrarySheet = forwardRef<BottomSheetModalMethods, AddToLibrarySheetProps>(
  ({ closeModal, title }, ref) => {
    const { user } = useStore();
    const [isLoading, setIsLoading] = useState(false);
    const [isRefetching, setIsRefetching] = useState(false);
    const [collections, setCollections] = useState<TCollection[] | null>(null);

    if (!user) {
      return null;
    }

    useEffect(() => {
      const initialFetch = async () => {
        setIsLoading(true);
        await fetchCollections();
        setIsLoading(false);
      };

      initialFetch();
    }, []);

    const fetchCollections = useCallback(async () => {
      try {
        const fetched = await getCollections(BASE_COLLECTIONS, user.id, title);
        setCollections(fetched || []);
      } catch (error) {
        if (error instanceof Error) {
          Toast.show({ type: "error", text1: "Error", text2: error.message });
        }
        setCollections([]);
      }
    }, [user, title]);

    const handleAdd = useCallback(
      async (collection: string) => {
        setIsRefetching(true);

        const error = await addToCollection(user.id, title, collection);

        if (error) {
          Toast.show({ type: "error", text1: "Error", text2: error.message });
          return;
        }

        await fetchCollections();

        setIsRefetching(false);
      },
      [user, title, fetchCollections]
    );

    const renderContent = useCallback(() => {
      if (isLoading) {
        return <Loader />;
      }

      if (!collections) {
        return <ErrorComponent message="Error" />;
      }

      return collections.map((collection) => (
        <Collection
          key={collection.key}
          collection={collection}
          handleAdd={handleAdd}
          isLoading={isRefetching}
        />
      ));
    }, [isLoading, collections, handleAdd, isRefetching]);

    return (
      <BottomSheet ref={ref} height="40%">
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
