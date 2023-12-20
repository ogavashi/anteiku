import { AuthStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { LoginForm } from "../../features/auth";
import { AuthLayout } from "../../components";

export const Login: React.FC<StackScreenProps<AuthStackParamsList, "Login">> = () => {
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  );
};
