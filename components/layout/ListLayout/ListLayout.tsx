import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { Avatar } from "../../ui";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList } from "../../../common/types";
import { BackIcon } from "../../../features/icons";

interface ListLayoutProps {
  title?: string;
}

export const ListLayout: React.FC<React.PropsWithChildren<ListLayoutProps>> = ({
  children,
  title,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView style={{ marginBottom: 105 }}>
        <TopNavigation
          title={() => <Text category="h3">{title || "🍙 Anteiku"}</Text>}
          accessoryLeft={() => <TopActions icon={BackIcon} navigate={navigateBack} />}
        />
        <Divider />
        <View style={{ height: "100%" }}>{children}</View>
      </SafeAreaView>
    </Layout>
  );
};
