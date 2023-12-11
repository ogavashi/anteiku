import { useCallback, useEffect, useMemo, useState } from "react";
import { Error as ErrorView, ItemLayout, Loader } from "../../components";
import { Title } from "../../features/anime";
import { ApiService } from "../../services";
import { StackScreenProps } from "@react-navigation/stack";
import { FullAnime, HomeStackParamsList, SearchStackParamsList } from "../../common/types";

export const Anime: React.FC<
  StackScreenProps<HomeStackParamsList & SearchStackParamsList, "Anime">
> = ({ route }) => {
  const { id, title: animeTitle } = route.params;

  const [title, setTitle] = useState<FullAnime | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const fetchTitle = useCallback(async () => {
    try {
      setIsLoading(true);
      const anime = await ApiService().title.getAnime(id);
      setTitle(anime);
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
    <ItemLayout title={animeTitle} shouldFlex={shouldFlex}>
      {renderContent()}
    </ItemLayout>
  );
};
