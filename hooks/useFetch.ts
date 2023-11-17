import { useEffect, useReducer, useRef } from "react";
import { Query } from "../common/types";

interface State<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}

type Cache<T> = { [key: string]: T };

// discriminated union type
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

export function useFetch<T = unknown>(
  api: (query?: Query) => Promise<T>,
  key: string,
  query?: Query,
  // Fix later
  pageInfo?: any
): State<T> {
  const cache = useRef<Cache<T>>({});

  // Used to prevent state update if the component is unmounted
  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    isLoading: false,
  };

  // Keep state logic separated
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, data: state.data, isLoading: true };
      case "fetched":
        return { ...initialState, data: action.payload, isLoading: false };
      case "error":
        return { ...initialState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    cancelRequest.current = false;

    const fetchData = async () => {
      const cacheKey = pageInfo ? key + pageInfo["page[offset]"] : key;

      dispatch({ type: "loading" });

      // If a cache exists for this url, return it
      if (cache.current[cacheKey]) {
        dispatch({ type: "fetched", payload: cache.current[cacheKey] });
        return;
      }

      try {
        const data = await api({ ...query, ...pageInfo });

        cache.current[cacheKey] = data;
        if (cancelRequest.current) return;

        let payload = data as T;

        if (pageInfo && state.data) {
          payload = [...(state.data as T[]), ...(data as T[])] as T;
        }

        dispatch({ type: "fetched", payload });
      } catch (error) {
        console.log("error", error);

        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    // Use the cleanup function for avoiding a possibly...
    // ...state update after the component was unmounted
    return () => {
      cancelRequest.current = true;
    };
  }, [key, query, pageInfo]);

  return state;
}
