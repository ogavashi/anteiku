import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type TabParamList = {
  Home: undefined;
  Profile: undefined;
};

export type HomeScreenProps = BottomTabScreenProps<TabParamList, "Home">;

export type ProfileScreenProps = BottomTabScreenProps<TabParamList, "Profile">;
