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
  AnimeList: { title: string; apiKey: string };
  MangaList: { title: string; apiKey: string };
};

export type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Library">;

export type Anime = {
  id: string;
  poster: string;
  type: string;
  title: string;
  image: string;
  showType: string;
  year: string;
  genres: string[];
};

export type Manga = {
  id: string;
  poster: string;
  type: string;
  title: string;
  image: string;
  mangaType: string;
  year: string;
};

export type Query = {
  [key in string]: string | number;
};

export type PageInfo = {
  "page[limit]": number;
  "page[offset]": number;
};

export type Loading = "main" | "next" | "refresh" | false;

export type Meta = {
  hasNext: boolean | string;
  count: number;
};

export type Response<T> = { data: T; meta?: Meta };

export type Genre = { id: string; name: string };
