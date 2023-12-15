import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Library } from "../../../../screens";
import { BottomTabBar } from "../../components/BottomTabBar";
import { TabParamList } from "../../../../common/types";
import { HomeNavigator } from "../HomeNavigator";
import { SearchNavigator } from "../SearchNavigator";
import { LibraryNavigator } from "../LibraryNavigator";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="HomeStack" component={HomeNavigator} options={{ headerShown: false }} />
      <Tab.Screen name="Search" component={SearchNavigator} options={{ headerShown: false }} />
      <Tab.Screen
        name="LibraryStack"
        component={LibraryNavigator}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
