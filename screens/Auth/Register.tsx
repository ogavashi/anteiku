import { AuthStackParamsList } from "../../common/types";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { RegisterForm } from "../../features/auth";
import { AuthLayout } from "../../components";

export const Register: React.FC<StackScreenProps<AuthStackParamsList, "Register">> = ({
  navigation,
}) => {
  const handleRegister = useCallback(() => {
    navigation.navigate("App", { screen: "HomeStack" });
  }, []);

  return (
    <AuthLayout title="Register">
      <RegisterForm handleRegister={handleRegister} />
    </AuthLayout>
  );
};
