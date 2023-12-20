import { useCallback, useState } from "react";
import {
  Alert,
  GestureResponderEvent,
  ImageProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Icon, Input, Text } from "@ui-kitten/components";
import { Controller, useForm } from "react-hook-form";
import { supabase } from "../../../../common/supabase";
import { AuthError } from "@supabase/supabase-js";
import Toast from "react-native-toast-message";

interface LoginFormProps {
  handleLogin?: (event: GestureResponderEvent) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ handleLogin }) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [error, setError] = useState<AuthError | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { email: "", password: "" }, reValidateMode: "onSubmit" });

  const toggleSecureEntry = useCallback(() => {
    setSecureTextEntry((prev) => !prev);
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    setIsLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword(data);

      if (error) {
        setError(error);
        Toast.show({ type: "error", text1: "Ops", text2: error.message });
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
              status={errors?.email || error ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              keyboardType="email-address"
              disabled={isLoading}
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
              status={errors?.password || error ? "danger" : "basic"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              accessoryRight={renderIcon}
              secureTextEntry={secureTextEntry}
              disabled={isLoading}
            />
          )}
        />
        {errors?.password && (
          <Text category="h6" status="danger">
            {errors?.password?.message}
          </Text>
        )}
      </View>
      <View>
        <Button onPress={onSubmit} disabled={isLoading}>
          Login
        </Button>
      </View>
    </View>
  );
};
