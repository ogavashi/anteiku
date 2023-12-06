import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList } from "../../../common/types";
import { BackIcon } from "../../../features/icons";

interface ItemLayoutProps {
  title?: string;
  accessoryRight?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}

export const ItemLayout: React.FC<React.PropsWithChildren<ItemLayoutProps>> = ({
  children,
  title,
  accessoryRight,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView style={{ marginBottom: 105 }}>
        <TopNavigation
          alignment={title ? "center" : "start"}
          title={() => (
            <Text category={title ? "h3" : "h6"} onPress={title ? undefined : navigateBack}>
              {title || "Back"}
            </Text>
          )}
          accessoryLeft={() => <TopActions icon={BackIcon} navigate={navigateBack} />}
          accessoryRight={accessoryRight}
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
