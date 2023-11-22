import { useCallback, useState } from "react";
import { PageInfo } from "../common/types";

const default_data: PageInfo = { limit: 10, page: 1 };

export const usePagination = (pageInfo?: PageInfo) => {
  const [paginationData, setPaginationData] = useState(pageInfo || default_data);

  const nextPage = useCallback(() => {
    setPaginationData((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  }, []);

  const resetPagination = useCallback(() => {
    setPaginationData({ ...default_data });
  }, []);

  return { paginationData, nextPage, resetPagination };
};
