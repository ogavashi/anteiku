import { useCallback, useState } from "react";
import { GestureResponderEvent, TouchableWithoutFeedback, View } from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import { supabase } from "../../../../common/supabase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AuthError } from "@supabase/supabase-js";
import Toast from "react-native-toast-message";
import { authErrorFormatter } from "../../../error";

interface RegisterFormProps {
  handleRegister: (event: GestureResponderEvent) => void;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({ handleRegister }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: { email: "", username: "", fullname: "", password: "", confirmPassword: "" },
    reValidateMode: "onSubmit",
  });

  const toggleSecureEntry = useCallback(() => {
    setSecureTextEntry((prev) => !prev);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: {
            fullname: data.fullname,
            username: data.username,
            email: data.email,
          },
        },
      });

      if (error) {
        const formattedError = authErrorFormatter(error);

        if (formattedError?.toast) {
          Toast.show({ type: "error", text1: "Ops", text2: formattedError.toast });

          return;
        }

        setError(formattedError);
      }
    } catch (error) {
      if (error instanceof Error) {
        Toast.show({ type: "error", text1: "Error", text2: error.message });
      }
    } finally {
      setIsLoading(false);
    }
  });

  const renderIcon = (props: any) => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );

  return (
    <KeyboardAwareScrollView style={{ width: "90%" }}>
      <View
        style={{
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
                    status={errors?.email || error?.email ? "danger" : "basic"}
                    style={{ marginBottom: 5 }}
                  >
                    Email address
                  </Text>
                )}
                size="large"
                status={errors?.email || error?.email ? "danger" : "basic"}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                disabled={isLoading}
              />
            )}
          />
          {(errors?.email || error?.email) && (
            <Text category="h6" status="danger">
              {errors?.email?.message || error?.email}
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
                    status={errors?.username || error?.username ? "danger" : "basic"}
                    style={{ marginBottom: 5 }}
                  >
                    Username
                  </Text>
                )}
                size="large"
                status={errors?.username || error?.username ? "danger" : "basic"}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                disabled={isLoading}
              />
            )}
          />
          {(errors?.username || error?.username) && (
            <Text category="h6" status="danger">
              {errors?.username?.message || error?.username}
            </Text>
          )}
        </View>
        <View style={{ display: "flex", gap: 10, minHeight: 120 }}>
          <Controller
            name="fullname"
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
                    status={errors?.fullname || error?.fullame ? "danger" : "basic"}
                    style={{ marginBottom: 5 }}
                  >
                    Full name
                  </Text>
                )}
                size="large"
                status={errors?.fullname || error?.fullname ? "danger" : "basic"}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                disabled={isLoading}
              />
            )}
          />
          {(errors?.fullname || error?.fullname) && (
            <Text category="h6" status="danger">
              {errors?.fullname?.message || error?.fullname}
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
                    status={errors?.password || error?.password ? "danger" : "basic"}
                    style={{ marginBottom: 5 }}
                  >
                    Password
                  </Text>
                )}
                size="large"
                status={errors?.password || error?.password ? "danger" : "basic"}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                disabled={isLoading}
              />
            )}
          />
          {(errors?.password || error?.password) && (
            <Text category="h6" status="danger">
              {errors?.password?.message || error?.password}
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
                    status={errors?.confirmPassword || error?.confirmPassword ? "danger" : "basic"}
                    style={{ marginBottom: 5 }}
                  >
                    Confrim password
                  </Text>
                )}
                size="large"
                status={errors?.confirmPassword || error?.confirmPassword ? "danger" : "basic"}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry={secureTextEntry}
                disabled={isLoading}
              />
            )}
          />
          {(errors?.confirmPassword || error?.confirmPassword) && (
            <Text category="h6" status="danger">
              {errors?.confirmPassword?.message || error?.confirmPassword}
            </Text>
          )}
        </View>
        <View>
          <Button onPress={onSubmit} disabled={isLoading}>
            Sign me up!
          </Button>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};
