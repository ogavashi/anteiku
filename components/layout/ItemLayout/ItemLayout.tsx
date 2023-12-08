import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView, View } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList } from "../../../common/types";
import { BackIcon } from "../../../features/icons";
import TextTicker from "react-native-text-ticker";

interface ItemLayoutProps {
  title?: string;
  accessoryRight?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  isLoading: boolean;
}

export const ItemLayout: React.FC<React.PropsWithChildren<ItemLayoutProps>> = ({
  children,
  title,
  accessoryRight,
  isLoading,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          alignment={title ? "center" : "start"}
          title={() => (
            <View style={{ maxWidth: 300 }}>
              <TextTicker animationType="scroll" scrollSpeed={50} loop>
                <Text category="h6" onPress={title ? undefined : navigateBack}>
                  {title || "Back"}
                </Text>
              </TextTicker>
            </View>
          )}
          accessoryLeft={() => <TopActions icon={BackIcon} navigate={navigateBack} />}
          accessoryRight={accessoryRight}
        />
        <Divider />
        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{
            marginVertical: 10,
            paddingBottom: 80,
            flex: +isLoading,
          }}
        >
          {children}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
