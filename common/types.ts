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
  PersonalAccount: undefined;
};

export type PersonalAccountParamsList = {
  Profile: undefined;
  Settings: undefined;
  Account: undefined;
};

export type TabParamList = {
  HomeStack: undefined;
  Library: undefined;
  Search: {
    screen: keyof SearchStackParamsList;
    params: { query?: Query };
  };
};

export type SearchStackParamsList = {
  SearchAnime: { query?: Query };
  Anime: { id: string; title: string };
  SearchManga: { query?: Query };
  Manga: { id: string; title: string };
};

export type AuthStackParamsList = {
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
  MangaList: { title: string; apiKey: string; filterKey?: string };
  Anime: { id: string; title: string };
  Manga: { id: string; title: string };
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

export type FullAnime = Anime & {
  videoId: string;
  status: string;
  rating: string;
  rank: number;
  fullYear: number;
  source: string;
  season: string;
  episodes: number;
  synopsis: string;
  background: string;
  studios: Studio[];
  producers: Producer[];
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

export type FullManga = Manga & {
  status: string;
  rank: number;
  chapters: string;
  volumes: number;
  synopsis: string;
  background: string;
  authors: Author[];
  serializations: Serialization[];
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

export type Genre = { value: string; key: string; name: string };
export type Studio = { value: string; key: string; name: string };
export type Producer = { value: string; key: string; name: string };
export type Author = { value: string; key: string; name: string };
export type Serialization = { value: string; key: string; name: string };

export interface SelectFilterProps {
  filterData: Omit<Filter, "component">;
  query: Query;
  setQuery: (key: string, value: any) => void;
}

export interface ButtonsGroupFilterProps {
  filterData: Omit<Filter, "component">;
  query: Query;
  setQuery: (key: string, value: any) => void;
}

export interface DatePickerFilterProps {
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
  watchKey?: string;
  api?: () => Promise<any>;
};

export type Filters = Filter[];
