import { Layout } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { TopNavigation } from "../../../features/navigation";
import { BackIcon } from "../../../features/icons";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { TopActions } from "../../../features/navigation";

interface AuthLayoutProps {
  title: string;
}

export const AuthLayout: React.FC<React.PropsWithChildren<AuthLayoutProps>> = ({
  children,
  title,
}) => {
  const navigation = useNavigation();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          icon={BackIcon}
          title={title}
          alignment="center"
          accessoryLeft={() => <TopActions icon={BackIcon} navigate={navigateBack} />}
        />
        <View style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {children}
        </View>
      </SafeAreaView>
    </Layout>
  );
};
