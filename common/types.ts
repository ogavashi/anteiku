import { MangaList } from "./../screens/List/MangaList";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type Theme = "light" | "dark" | "automatic";

export interface AppSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
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
  AnimeList: { title: string };
  MangaList: undefined;
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
