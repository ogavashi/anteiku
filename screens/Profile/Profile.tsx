import { AppStackParamsList } from "../../common/types";
import { useStore } from "../../store";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { ProfileMenu } from "../../features/profile";

export const Profile: React.FC<StackScreenProps<AppStackParamsList, "Profile">> = () => {
  return (
    <ProfileLayout title="Personal account">
      <View>
        <ProfileMenu />
      </View>
    </ProfileLayout>
  );
};
