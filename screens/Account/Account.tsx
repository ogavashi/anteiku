import { PersonalAccountParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { AccountForm } from "../../features/profile";

export const Account: React.FC<StackScreenProps<PersonalAccountParamsList, "Account">> = () => {
  return (
    <ProfileLayout title="Account" backMode>
      <AccountForm />
    </ProfileLayout>
  );
};
