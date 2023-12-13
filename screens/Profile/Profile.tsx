import { PersonalAccountParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { ProfileMenu } from "../../features/profile";

export const Profile: React.FC<StackScreenProps<PersonalAccountParamsList, "Profile">> = () => {
  return (
    <ProfileLayout title="Personal account">
      <ProfileMenu />
    </ProfileLayout>
  );
};
