import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { Avatar } from "../../ui";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList } from "../../../common/types";
import { BackIcon, CloseIcon } from "../../../features/icons";

interface ProfileLayoutProps {
  title?: string;
  backMode?: boolean;
}

export const ProfileLayout: React.FC<React.PropsWithChildren<ProfileLayoutProps>> = ({
  children,
  title,
  backMode = false,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          title={() => <Text category="h5">{title}</Text>}
          accessoryLeft={() => (
            <TopActions icon={backMode ? BackIcon : CloseIcon} navigate={navigateBack} />
          )}
        />
        <Divider />
        {children}
      </SafeAreaView>
    </Layout>
  );
};
