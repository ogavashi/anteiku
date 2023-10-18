import { useCallback, useState } from "react";
import { GestureResponderEvent, ImageProps, TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";

interface LoginFormProps {
  handleLogin: (event: GestureResponderEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = useCallback(() => {
    setSecureTextEntry((prev) => !prev);
  }, []);

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <View
      style={{
        width: "90%",
        display: "flex",
        gap: 20,
      }}
    >
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Input
          label={() => (
            <Text category="h4" status="danger" style={{ marginBottom: 5 }}>
              Email address
            </Text>
          )}
          size="large"
          status="danger"
        />
        <Text category="h6" status="danger">
          Invalid email address
        </Text>
      </View>
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Input
          label={() => (
            <Text category="h4" style={{ marginBottom: 5 }}>
              Password
            </Text>
          )}
          size="large"
          accessoryRight={renderIcon}
          secureTextEntry={secureTextEntry}
        />
        <Text category="h6" status="danger"></Text>
      </View>
      <View>
        <Button onPress={handleLogin}>Login</Button>
      </View>
    </View>
  );
};
