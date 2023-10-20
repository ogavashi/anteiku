import { AppStackParamsList } from "../../common/types";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { SettingsList } from "../../features/settings";

export const Settings: React.FC<StackScreenProps<AppStackParamsList, "Settings">> = () => {
  return (
    <ProfileLayout title="Settings" backMode>
      <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
        <SettingsList />
      </View>
    </ProfileLayout>
  );
};
