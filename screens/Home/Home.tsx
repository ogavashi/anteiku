import { Divider, Layout, TopNavigation, Button } from "@ui-kitten/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeScreenProps } from "../../common/types";
import { useCallback } from "react";
import { useStore } from "../../store";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateDetails = useCallback(() => {
    navigation.navigate("Profile");
  }, []);

  const { theme, setTheme } = useStore();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
      <Button onPress={navigateDetails}>Go to profile</Button>
      <Button onPress={toggleTheme}>Change theme</Button>
    </Layout>
  );
};
