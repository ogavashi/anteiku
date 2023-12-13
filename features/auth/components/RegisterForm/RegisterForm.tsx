import { useCallback, useState } from "react";
import { GestureResponderEvent, ImageProps, TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { Controller, useForm } from "react-hook-form";

interface RegisterFormProps {
  handleRegister: (event: GestureResponderEvent) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ handleRegister }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { email: "", username: "", fullName: "", password: "", confirmPassword: "" },
    reValidateMode: "onSubmit",
  });

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
        marginTop: 20,
      }}
    >
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Can't be empty",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Wait, it's not valid email",
            },
          }}
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
              keyboardType="email-address"
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
          name="username"
          control={control}
          rules={{
            required: "Can't be empty",
            minLength: { value: 2, message: "Can't be shorter than 2 characters" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={() => (
                <Text
                  category="h4"
                  status={errors?.username ? "danger" : "basic"}
                  style={{ marginBottom: 5 }}
                >
                  Username
                </Text>
              )}
              size="large"
              status={errors?.username ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors?.username && (
          <Text category="h6" status="danger">
            {errors.username.message}
          </Text>
        )}
      </View>
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="fullName"
          control={control}
          rules={{
            required: "Can't be empty",
            minLength: { value: 2, message: "Can't be shorter than 2 characters" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={() => (
                <Text
                  category="h4"
                  status={errors?.fullName ? "danger" : "basic"}
                  style={{ marginBottom: 5 }}
                >
                  Full name
                </Text>
              )}
              size="large"
              status={errors?.fullName ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
            />
          )}
        />
        {errors?.fullName && (
          <Text category="h6" status="danger">
            {errors.fullName.message}
          </Text>
        )}
      </View>
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Can't be empty",
            minLength: { value: 6, message: "Can't be shorter than 6 characters" },
          }}
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
      <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            validate: (val: string) => {
              if (watch("password") !== val) {
                return "Passwords does not match";
              }
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              label={() => (
                <Text
                  category="h4"
                  status={errors?.confirmPassword ? "danger" : "basic"}
                  style={{ marginBottom: 5 }}
                >
                  Confrim password
                </Text>
              )}
              size="large"
              status={errors?.confirmPassword ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              secureTextEntry={secureTextEntry}
            />
          )}
        />
        {errors?.confirmPassword && (
          <Text category="h6" status="danger">
            {errors.confirmPassword.message}
          </Text>
        )}
      </View>
      <View>
        <Button onPress={onSubmit}>Sign me up!</Button>
      </View>
    </View>
  );
};
