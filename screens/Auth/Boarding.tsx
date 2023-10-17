import { StackScreenProps } from "@react-navigation/stack";
import { Button, Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { AuthStackParamList } from "../../common/types";
import { useCallback } from "react";

export const Boarding: React.FC<StackScreenProps<AuthStackParamList, "Boarding">> = ({
  navigation,
}) => {
  const handleNavigate = useCallback((path: keyof AuthStackParamList) => {
    navigation.navigate(path);
  }, []);

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: "80%" }}>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text category="h1">Anteiku</Text>
          <Text appearance="hint">Powered by kitsu</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Text category="h4" status="primary">
            Millions of titles.
          </Text>
          <Text category="h4" style={{ textAlign: "center" }} status="info">
            Explore and save to your collections.
          </Text>
        </View>
        <View style={{ display: "flex", gap: 15, marginVertical: 40 }}>
          <Button onPress={() => handleNavigate("Register")}>Sign Up</Button>
          <Button appearance="ghost" onPress={() => handleNavigate("Login")}>
            Login
          </Button>
        </View>
      </View>
    </Layout>
  );
};
