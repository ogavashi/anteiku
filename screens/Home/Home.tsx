import { Divider, Layout, TopNavigation, Button } from "@ui-kitten/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeScreenProps } from "../../common/types";
import { useCallback } from "react";
import { useStore } from "../../store";
import { SafeAreaView, ScrollView, View } from "react-native";
import { ScrollLayout } from "../../components";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateDetails = useCallback(() => {
    navigation.navigate("Library");
  }, []);

  const { theme, setTheme } = useStore();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ScrollLayout>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
        <Button onPress={navigateDetails}>Go to profile</Button>
        <Button onPress={toggleTheme}>Change theme</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
      </View>
    </ScrollLayout>
  );
};
