import { Layout } from "@ui-kitten/components";
import { AuthStackParamList } from "../../common/types";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { BackIcon } from "../../features/icons";
import { TopNavigation } from "../../features/navigation";
import { LoginForm } from "../../features/auth";

export const Login: React.FC<StackScreenProps<AuthStackParamList, "Login">> = ({ navigation }) => {
  const navigateBack = useCallback(() => {
    navigation.navigate("Boarding");
  }, []);

  const handleLogin = useCallback(() => {
    navigation.navigate("App", { screen: "Home" });
  }, []);

  return (
    <SafeAreaView>
      <TopNavigation icon={BackIcon} title="Login" navigateBack={navigateBack} />
      <Layout style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <LoginForm handleLogin={handleLogin} />
      </Layout>
    </SafeAreaView>
  );
};
