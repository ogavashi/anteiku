import { PersonalAccountParamsList } from "../../common/types";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileLayout } from "../../components";
import { Text } from "@ui-kitten/components";

export const Account: React.FC<StackScreenProps<PersonalAccountParamsList, "Account">> = () => {
  return (
    <ProfileLayout title="Account" backMode>
      <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
        <Text>Account</Text>
      </View>
    </ProfileLayout>
  );
};
