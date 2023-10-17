import { Layout, Button, Text } from "@ui-kitten/components";
import { AuthStackParamList } from "../../common/types";
import { useCallback } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { SafeAreaView } from "react-native";
import { BackIcon } from "../../features/icons";
import { TopNavigation } from "../../features/navigation";

export const Register: React.FC<StackScreenProps<AuthStackParamList, "Register">> = ({
  navigation,
}) => {
  const navigateBack = useCallback(() => {
    navigation.navigate("Boarding");
  }, []);

  return (
    <SafeAreaView>
      <TopNavigation icon={BackIcon} title="Register" navigateBack={navigateBack} />
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Register</Text>
      </Layout>
    </SafeAreaView>
  );
};
