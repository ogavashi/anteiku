import { useCallback, useEffect, useMemo, useState } from "react";
import { Error as ErrorView, ItemLayout, Loader } from "../../components";
import { Title } from "../../features/manga";
import { ApiService } from "../../services";
import { StackScreenProps } from "@react-navigation/stack";
import { FullManga, HomeStackParamsList } from "../../common/types";
import { TopActions } from "../../features/navigation";
import { AddIcon } from "../../features/icons";
import { AddToLibrarySheet } from "../../features/library";
import { useBottomModal } from "../../hooks";

export const Manga: React.FC<StackScreenProps<HomeStackParamsList, "Manga">> = ({ route }) => {
  const { id, title: mangaTitle } = route.params;

  const [title, setTitle] = useState<FullManga | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const { bottomModalRef, openModal, closeModal } = useBottomModal();

  const fetchTitle = useCallback(async () => {
    try {
      setIsLoading(true);
      const manga = await ApiService().title.getManga(id);
      setTitle(manga);
    } catch (error) {
      console.log(error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchTitle();
  }, []);

  const renderContent = useCallback(() => {
    if (isLoading) {
      return <Loader />;
    }
    if (!title) {
      return <ErrorView message="Error" />;
    }

    return <Title item={title} />;
  }, [isLoading, title]);

  const shouldFlex = useMemo(() => !!(isLoading || error), [isLoading, error]);

  return (
    <ItemLayout
      title={mangaTitle}
      shouldFlex={shouldFlex}
      accessoryRight={
        !isLoading ? () => <TopActions icon={AddIcon} navigate={openModal} /> : undefined
      }
    >
      {renderContent()}
      {title && <AddToLibrarySheet ref={bottomModalRef} closeModal={closeModal} title={title} />}
    </ItemLayout>
  );
};
