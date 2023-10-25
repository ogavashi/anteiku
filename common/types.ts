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
  Home: undefined;
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

export type HomeScreenProps = BottomTabScreenProps<TabParamList, "Home">;

export type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Library">;

export type FeaturedAnime = {
  id: string;
  type: string;
  title: string;
  image: string;
  showType: string;
  year: string;
};

export type FeaturedManga = {
  id: string;
  type: string;
  title: string;
  image: string;
  mangaType: string;
  year: string;
};

export type Anime = {
  id: string;
  title: string;
  poster: string;
  showType: string;
};
