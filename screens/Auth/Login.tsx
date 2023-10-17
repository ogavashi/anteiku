import { Layout, Button, Text } from "@ui-kitten/components";
import { AuthStackParamList } from "../../common/types";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { BackIcon } from "../../features/icons";
import { TopNavigation } from "../../features/navigation";

export const Login: React.FC<StackScreenProps<AuthStackParamList, "Login">> = ({ navigation }) => {
  const navigateBack = useCallback(() => {
    navigation.navigate("Boarding");
  }, []);

  return (
    <SafeAreaView>
      <TopNavigation icon={BackIcon} title="Login" navigateBack={navigateBack} />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Login</Text>
      </Layout>
    </SafeAreaView>
  );
};
