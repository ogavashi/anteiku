  import { useCallback, useMemo, useState } from "react";
  import { Query } from "../common/types";

  export const useQuery = () => {
    const [query, setQuery] = useState<Query>({});

    return { query };
  };
