import { TouchableOpacity, View } from "react-native";
import { Avatar } from "../../../../components/ui";
import { Text } from "@ui-kitten/components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { PersonalAccountParamsList } from "../../../../common/types";
import { useCallback } from "react";

export const AccountShort = () => {
  const navigation = useNavigation<NavigationProp<PersonalAccountParamsList>>();

  const handleNavigateAccount = useCallback(() => {
    navigation.navigate("Account");
  }, [navigation]);

  return (
    <TouchableOpacity onPress={handleNavigateAccount}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          paddingVertical: 5,
          paddingHorizontal: 15,
          gap: 10,
          alignItems: "center",
        }}
      >
        <Avatar onPress={handleNavigateAccount} />
        <View style={{ display: "flex", justifyContent: "flex-start" }}>
          <Text category="h6">Test User</Text>
          <Text appearance="hint">test@gmail.com</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};