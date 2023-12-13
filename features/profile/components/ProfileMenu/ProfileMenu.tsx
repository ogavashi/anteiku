import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, Divider, Text } from "@ui-kitten/components";
import { useCallback } from "react";
import { PersonalAccountParamsList } from "../../../../common/types";
import { SettingsIcon } from "../../../icons";
import { View } from "react-native";
import { AccountShort } from "../AccountShort";

export const ProfileMenu = () => {
  const navigation = useNavigation<NavigationProp<PersonalAccountParamsList>>();

  const openSetting = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  return (
    <View style={{ gap: 10 }}>
      <AccountShort />
      <View>
        <Text category="h6" style={{ paddingHorizontal: 15 }}>
          Preferences
        </Text>
        <Menu scrollEnabled={false}>
          <MenuItem title="Settings" onPress={openSetting} accessoryLeft={SettingsIcon} />
        </Menu>
      </View>
    </View>
  );
};
