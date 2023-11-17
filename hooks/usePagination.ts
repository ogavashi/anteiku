import { useCallback, useState } from "react";

const default_data = { "page[limit]": 20, "page[offset]": 0 };

export const usePagination = () => {
  const [paginationData, setPaginationData] = useState(default_data);

  const nextPage = useCallback(() => {
    setPaginationData((prev) => ({
      ...prev,
      "page[offset]": +prev["page[limit]"] + +prev["page[offset]"],
    }));
  }, []);

  const resetPagination = () => {
    setPaginationData(default_data);
  };

  return { paginationData, nextPage, resetPagination };
};
