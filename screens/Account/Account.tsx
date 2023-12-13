import { PersonalAccountParamsList } from "../../common/types";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { Text } from "@ui-kitten/components";
import { AccountForm } from "../../features/profile";

export const Account: React.FC<StackScreenProps<PersonalAccountParamsList, "Account">> = () => {
  return (
    <ProfileLayout title="Account" backMode>
      <AccountForm />
    </ProfileLayout>
  );
};
