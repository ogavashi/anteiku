import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Menu, MenuItem, Divider, Text } from "@ui-kitten/components";
import { useCallback, useState } from "react";
import { PersonalAccountParamsList } from "../../../../common/types";
import { ExitIcon, SettingsIcon } from "../../../icons";
import { View } from "react-native";
import { AccountShort } from "../AccountShort";
import { supabase } from "../../../../common/supabase";
import { OverlayLoader } from "../../../../components";

export const ProfileMenu = () => {
  const [showLoader, setShowLoader] = useState(false);

  const navigation = useNavigation<NavigationProp<PersonalAccountParamsList>>();

  const openSetting = useCallback(() => {
    navigation.navigate("Settings");
  }, [navigation]);

  const logout = useCallback(async () => {
    setShowLoader(true);
    await supabase.auth.signOut();
  }, []);

  return (
    <View style={{ gap: 10 }}>
      <AccountShort />
      <View>
        <Text category="h6" style={{ paddingHorizontal: 15 }}>
          Preferences
        </Text>
        <Menu scrollEnabled={false}>
          <MenuItem title="Settings" onPress={openSetting} accessoryLeft={SettingsIcon} />
          <MenuItem title="Sign out" onPress={logout} accessoryLeft={ExitIcon} />
        </Menu>
      </View>
      <OverlayLoader showLoader={showLoader} />
    </View>
  );
};
