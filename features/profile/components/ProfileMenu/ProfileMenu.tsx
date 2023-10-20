import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, IndexPath } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { AppStackParamsList } from "../../../../common/types";
import { SettingsIcon } from "../../../icons";

export const ProfileMenu = () => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const openSetting = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  return (
    <Menu scrollEnabled={false}>
      <MenuItem title="Settings" onPress={openSetting} accessoryLeft={SettingsIcon} />
    </Menu>
  );
};
