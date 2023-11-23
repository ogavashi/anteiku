import { useState } from "react";
import { Query } from "../common/types";

export const useQuery = (defaultQuery?: Query) => {
  const [query, setQuery] = useState<Query>(defaultQuery || {});

  return { query };
};
