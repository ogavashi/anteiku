import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Library } from "../../../../screens";
import { BottomTabBar } from "../../components/BottomTabBar";
import { TabParamList } from "../../../../common/types";

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};
