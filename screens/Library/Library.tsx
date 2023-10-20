import { Divider, Layout, TopNavigation, Button } from "@ui-kitten/components";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { HomeScreenProps, ProfileScreenProps } from "../../common/types";
import { useCallback } from "react";

export const Library: React.FC<ProfileScreenProps> = ({ navigation }) => {
  const navigateHome = useCallback(() => {
    navigation.navigate("Home");
  }, []);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={navigateHome}>Go Home</Button>
    </Layout>
  );
};
