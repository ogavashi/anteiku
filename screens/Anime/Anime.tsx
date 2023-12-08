import { useCallback, useEffect, useMemo, useState } from "react";
import { Error, ItemLayout, Loader } from "../../components";
import { Title } from "../../features/anime";
import { ApiService } from "../../services";
import { StackScreenProps } from "@react-navigation/stack";
import { FullAnime, HomeStackParamsList } from "../../common/types";

export const Anime: React.FC<StackScreenProps<HomeStackParamsList, "Anime">> = ({ route }) => {
  const { id, title: animeTitle } = route.params;

  const [title, setTitle] = useState<FullAnime | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTitle = useCallback(async () => {
    try {
      setIsLoading(true);
      const anime = await ApiService().title.getAnime(id);
      setTitle(anime);
    } catch (error) {
      console.log(error);
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
      return <Error message="Error" />;
    }

    return <Title item={title} />;
  }, [isLoading, title]);

  return (
    <ItemLayout title={animeTitle} isLoading={isLoading}>
      {renderContent()}
    </ItemLayout>
  );
};
