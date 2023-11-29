import { useCallback, useEffect, useState } from "react";
import { Loading, Meta, PageInfo, Query, Response } from "../common/types";
import { usePagination } from "./usePagination";
import { useIsFirstRender } from "./useIsFirstRender";

export function useInfiniteScroll<T = unknown>(
  api: (query?: Query) => Promise<Response<T>>,
  query?: Query,
  pageInfo?: PageInfo
) {
  const [data, setData] = useState<T>([] as T);
  const [isLoading, setIsLoading] = useState<Loading>(false);
  const [meta, setMeta] = useState<Meta>();
  const [error, setError] = useState<Error>();

  const { paginationData, nextPage, resetPagination } = usePagination(pageInfo);

  const firstRender = useIsFirstRender();

  const fetch = useCallback(async () => {
    if (firstRender) {
      setIsLoading("main");
    }

    try {
      const { data, meta } = await api({ ...query, ...paginationData });

      setMeta(meta);

      setData((prev) => {
        return isLoading === "next" ? ([...(prev as []), ...(data as [])] as T) : data;
      });
    } catch (error) {
      console.log("error", error);
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, [query, paginationData]);

  const fetchNext = useCallback(() => {
    if (meta?.hasNext) {
      setIsLoading("next");
      nextPage();
    }
  }, [nextPage, meta]);

  const refresh = useCallback(async () => {
    setIsLoading("refresh");
    resetPagination();
  }, []);

  useEffect(() => {
    fetch();
  }, [paginationData]);

  useEffect(() => {
    setIsLoading("main");
    resetPagination();
  }, [query]);

  return { data, isLoading, error, fetchNext, refresh };
}
