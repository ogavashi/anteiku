import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type Theme = "light" | "dark" | "automatic";

export interface AppSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export interface GenresSlice {
  genres: Genre[];
  setGenres: (genres: Genre[]) => void;
}

export type AppStackParamsList = {
  App: undefined;
  Auth: undefined;
  Profile: undefined;
  Settings: undefined;
};

export type TabParamList = {
  HomeStack: undefined;
  Library: undefined;
};

export type AuthStackParamList = {
  Boarding: undefined;
  Login: undefined;
  Register: undefined;
  App: {
    screen: keyof TabParamList;
  };
};

export type HomeStackParamsList = {
  Home: undefined;
  AnimeList: { title: string; apiKey: string; filterKey?: string };
  MangaList: { title: string; apiKey: string };
};

export type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Library">;

export type Anime = {
  id: string;
  poster: string;
  type: string;
  title: string;
  image: string;
  year: string;
  genres: Genre[];
  score: number;
};

export type Manga = {
  id: string;
  poster: string;
  type: string;
  title: string;
  image: string;
  year: string;
  genres: Genre[];
  score: number;
};

export type Query = {
  [key in string]: string | number;
};

export type PageInfo = {
  limit: number;
  page: number;
};

export type Loading = "main" | "next" | "refresh" | false;

export type Meta = {
  hasNext: boolean | string;
  count: number;
};

export type Response<T> = { data: T; meta?: Meta };

export type Genre = { value: string; key: string };

export interface SelectFilterProps {
  filterData: Omit<Filter, "component">;
  query: Query;
  setQuery: (key: string, value: any) => void;
}

export type Option = { key: string; value: string | number };

export type Filter = {
  filterKey: string;
  component: React.FC<SelectFilterProps>;
  options?: Option[];
  defaultValue?: string;
  title?: string;
  multiple?: boolean;
  api?: () => Promise<any>;
};

export type Filters = Filter[];
