import { BottomNavigation, BottomNavigationTab } from "@ui-kitten/components";
import { HomeIcon, LibraryIcon } from "../../../../features/icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";

export const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title="HOME" icon={HomeIcon} />
    <BottomNavigationTab title="LIBRARY" icon={LibraryIcon} />
  </BottomNavigation>
);
