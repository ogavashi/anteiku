import { Collection, LibraryModalData, LibraryStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { Collections, EditModal } from "../../features/library";
import { LibraryLayout } from "../../components";
import { useCallback, useEffect, useState } from "react";
import { useStore } from "../../store";
import { getCollections } from "../../lib";
import { BASE_COLLECTIONS } from "../../common/baseCollections";
import Toast from "react-native-toast-message";

export const Library: React.FC<StackScreenProps<LibraryStackParamsList, "Library">> = () => {
  const [modalData, setModalData] = useState<LibraryModalData | null>(null);
  const [refetch, setRefetch] = useState(false);

  const { user } = useStore();

  if (!user) {
    return null;
  }

  const [collections, setCollections] = useState<Collection[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initialFetch = async () => {
      setIsLoading(true);
      await fetchCollections();
      setIsLoading(false);
    };

    initialFetch();
  }, []);

  useEffect(() => {
    const reFetech = async () => {
      await fetchCollections();
      setRefetch(false);
    };

    if (refetch) {
      reFetech();
    }
  }, [refetch]);

  const fetchCollections = useCallback(async () => {
    try {
      const fetched = await getCollections(BASE_COLLECTIONS, user.id);
      setCollections(fetched || []);
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
      setCollections([]);
    }
  }, [user]);

  return (
    <LibraryLayout
      title="Library"
      setModalData={setModalData}
      refetch={refetch}
      setRefetch={setRefetch}
      isLoading={isLoading}
    >
      <Collections collections={collections || []} />
      {modalData && <EditModal modalData={modalData} setModalData={setModalData} />}
    </LibraryLayout>
  );
};
