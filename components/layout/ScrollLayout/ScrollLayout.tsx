import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopNavigation } from "../../../features/navigation";
import { Avatar } from "../../ui";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList } from "../../../common/types";

interface ScrollLayoutProps {
  title?: string;
}

export const ScrollLayout: React.FC<React.PropsWithChildren<ScrollLayoutProps>> = ({
  children,
  title,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const openProfile = useCallback(() => {
    navigation.navigate("PersonalAccount");
  }, [navigation]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          title={() => <Text category="h3">{title || "🍙 Anteiku"}</Text>}
          accessoryRight={() => <Avatar onPress={openProfile} />}
        />
        <Divider />
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ marginVertical: 10, paddingBottom: 70 }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
