import { useCallback } from "react";
import { Query } from "../common/types";
import { useFetch } from "./useFetch";
import { usePagination } from "./usePagination";

export function useInfiniteScroll<T = unknown>(
  api: (query?: Query) => Promise<T>,
  key: string,
  query?: Query
) {
  const { paginationData, nextPage, resetPagination } = usePagination();

  const { data, error, isLoading } = useFetch(api, key, query, paginationData);

  const fetchNext = useCallback(() => {
    if (isLoading) {
      return;
    }
    nextPage();
  }, [isLoading, nextPage]);

  const refresh = useCallback(() => {
    resetPagination();
  }, [resetPagination]);

  return { data, error, isLoading, fetchNext, refresh };
}
