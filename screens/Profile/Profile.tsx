import { PersonalAccountParamsList } from "../../common/types";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { ProfileMenu } from "../../features/profile";

export const Profile: React.FC<StackScreenProps<PersonalAccountParamsList, "Profile">> = () => {
  return (
    <ProfileLayout title="Personal account">
      <View>
        <ProfileMenu />
      </View>
    </ProfileLayout>
  );
};
