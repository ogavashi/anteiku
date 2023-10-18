import { Home } from "./../screens/Home/Home";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type Theme = "light" | "dark" | "automatic";

export interface AppSlice {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
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

export type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Profile">;
