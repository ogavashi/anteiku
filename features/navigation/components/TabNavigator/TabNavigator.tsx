import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Profile } from "../../../../screens";
import { BottomTabBar } from "../BottomTabBar";
import { TabParamList } from "../../../../common/types";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
