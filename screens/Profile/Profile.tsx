import { AppStackParamsList } from "../../common/types";
import { useCallback } from "react";
import { useStore } from "../../store";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { Button } from "@ui-kitten/components";

export const Profile: React.FC<StackScreenProps<AppStackParamsList, "Profile">> = ({
  navigation,
}) => {
  const { theme, setTheme } = useStore();

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  return (
    <ProfileLayout title="Personal account">
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 10 }}>
        <Button onPress={toggleTheme}>Change theme</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
        <Button>dummy button</Button>
      </View>
    </ProfileLayout>
  );
};
