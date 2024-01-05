import { FullAnime, LibraryStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { getFilters } from "../../features/anime";
import { FiltersSheet } from "../../features/filters";
import { useBottomModal, useQuery } from "../../hooks";
import { TopActions } from "../../features/navigation";
import { FiltersIcon } from "../../features/icons";
import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimeGridList } from "../../features/library";
import { getCollection } from "../../lib";
import { useStore } from "../../store";
import Toast from "react-native-toast-message";
import { Loader, CollectionLayout } from "../../components";

export const AnimeCollection: React.FC<
  StackScreenProps<LibraryStackParamsList, "AnimeCollection">
> = ({ route }) => {
  const { collection } = route.params;

  const { user } = useStore();

  if (!user) {
    return null;
  }

  const { bottomModalRef, openModal, closeModal } = useBottomModal();

  const { query, setQuery } = useQuery();

  const filters = useMemo(() => getFilters(""), []);

  const [data, setData] = useState<FullAnime[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchCollection = useCallback(async () => {
    try {
      const { error, data } = await getCollection(collection.key, user.id, true);

      if (error) {
        throw new Error("Unable to fetch collection.");
      }
      if (data) {
        setData(data as FullAnime[]);
      }
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    }
  }, [collection, user]);

  useEffect(() => {
    const inititalFetch = async () => {
      setIsLoading(true);
      await fetchCollection();
      setIsLoading(false);
    };

    inititalFetch();
  }, []);

  useEffect(() => {
    if (isRefreshing) {
      const refreshFetch = async () => {
        await fetchCollection();
        setIsRefreshing(false);
      };

      refreshFetch();
    }
  }, [isRefreshing]);

  const refresh = useCallback(() => {
    setIsRefreshing(true);
  }, []);

  return (
    <CollectionLayout
      collection={collection}
      accessoryRight={
        filters ? () => <TopActions icon={FiltersIcon} navigate={openModal} /> : undefined
      }
    >
      {isLoading ? (
        <Loader />
      ) : (
        <AnimeGridList data={data} isRefreshing={isRefreshing} refresh={refresh} />
      )}
      {filters && (
        <FiltersSheet
          query={query}
          setQuery={setQuery}
          filters={filters}
          ref={bottomModalRef}
          closeModal={closeModal}
        />
      )}
    </CollectionLayout>
  );
};
