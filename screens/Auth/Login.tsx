import { AuthStackParamList } from "../../common/types";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { LoginForm } from "../../features/auth";
import { AuthLayout } from "../../components";

export const Login: React.FC<StackScreenProps<AuthStackParamList, "Login">> = ({ navigation }) => {
  const handleLogin = useCallback(() => {
    navigation.navigate("App", { screen: "HomeStack" });
  }, []);

  return (
    <AuthLayout title="Login">
      <LoginForm handleLogin={handleLogin} />
    </AuthLayout>
  );
};
