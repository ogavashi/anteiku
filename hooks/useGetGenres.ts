import { useEffect, useState } from "react";
import { ApiService } from "../services";
import { Genre } from "../common/types";
import { useStore } from "../store";

export const useGetGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isFetched, setIsFetched] = useState(false);

  const { setGenres: setLocalGenres } = useStore();

  const fetchGenres = async (url: string = "genres") => {
    try {
      const { data, meta } = await ApiService().genres.getAll(url);

      setGenres((prev) => [...prev, ...data]);

      if (meta?.hasNext) {
        fetchGenres(meta.hasNext as string);
      } else {
        setIsFetched(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // fetchGenres();
  }, []);

  useEffect(() => {
    if (isFetched) {
      setLocalGenres(genres);
    }
  }, [isFetched]);
};
