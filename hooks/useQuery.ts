import { useEffect, useState } from "react";
import { Query } from "../common/types";

export const useQuery = (defaultQuery?: Query) => {
  const [query, setQuery] = useState<Query>({});

  useEffect(() => {
    if (!defaultQuery) {
      return;
    }
    setQuery(defaultQuery);
  }, [defaultQuery]);

  return { query, setQuery };
};
