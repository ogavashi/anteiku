import { useCallback, useState } from "react";
import { GestureResponderEvent, ImageProps, TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";

interface LoginFormProps {
  handleLogin: (event: GestureResponderEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" }, reValidateMode: "onSubmit" });

  const toggleSecureEntry = useCallback(() => {
    setSecureTextEntry((prev) => !prev);
  }, []);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

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
        gap: 10,
      }}
    >
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="email"
          control={control}
          rules={{ required: "Can't be empty" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={() => (
                <Text
                  category="h4"
                  status={errors?.email ? "danger" : "basic"}
                  style={{ marginBottom: 5 }}
                >
                  Email address
                </Text>
              )}
              size="large"
              status={errors?.email ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors?.email && (
          <Text category="h6" status="danger">
            {errors.email.message}
          </Text>
        )}
      </View>
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="password"
          rules={{ required: "Can't be empty" }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={() => (
                <Text
                  category="h4"
                  status={errors?.password ? "danger" : "basic"}
                  style={{ marginBottom: 5 }}
                >
                  Password
                </Text>
              )}
              size="large"
              status={errors?.password ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
            />
          )}
        />
        {errors?.password && (
          <Text category="h6" status="danger">
            {errors.password.message}
          </Text>
        )}
      </View>
      <View>
        <Button onPress={onSubmit}>Login</Button>
      </View>
    </View>
  );
};
