import { Divider, Layout, TopNavigation, Button } from "@ui-kitten/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeScreenProps } from "../../common/types";
import { useCallback } from "react";

export const Home: React.FC<HomeScreenProps> = ({ navigation }) => {
  const navigateDetails = useCallback(() => {
    navigation.navigate("Profile");
  }, []);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={navigateDetails}>Go to profile</Button>
    </Layout>
  );
};
