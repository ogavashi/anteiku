import { useCallback, useState } from "react";
import { PageInfo } from "../common/types";

const default_data = { "page[limit]": 10, "page[offset]": 0 };

export const usePagination = (pageInfo?: PageInfo) => {
  const [paginationData, setPaginationData] = useState(pageInfo || default_data);

  const nextPage = useCallback(() => {
    setPaginationData((prev) => ({
      ...prev,
      "page[offset]": +prev["page[limit]"] + +prev["page[offset]"],
    }));
  }, []);

  const resetPagination = useCallback(() => {
    setPaginationData({ ...default_data });
  }, []);

  return { paginationData, nextPage, resetPagination };
};
