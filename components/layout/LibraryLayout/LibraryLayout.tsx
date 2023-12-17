import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopNavigation } from "../../../features/navigation";
import { Avatar, FAB } from "../../ui";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { AppStackParamsList, LibraryModalData } from "../../../common/types";
import { AddIcon } from "../../../features/icons";

interface LibraryLayoutProps {
  title?: string;
  setModalData: React.Dispatch<React.SetStateAction<LibraryModalData | null>>;
}

export const LibraryLayout: React.FC<React.PropsWithChildren<LibraryLayoutProps>> = ({
  children,
  title,
  setModalData,
}) => {
  const navigation = useNavigation<NavigationProp<AppStackParamsList>>();

  const openProfile = useCallback(() => {
    navigation.navigate("PersonalAccount");
  }, [navigation]);

  const handleCreateNew = useCallback(() => {
    setModalData({ mode: "create" });
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          title={() => <Text category="h3">{title || "🍙 Anteiku"}</Text>}
          accessoryRight={() => <Avatar onPress={openProfile} />}
        />
        <Divider />

        <ScrollView
          style={{ height: "100%" }}
          contentContainerStyle={{ marginVertical: 10, paddingBottom: 70 }}
        >
          {children}
        </ScrollView>
        <FAB title="New collection" icon={AddIcon} onPress={handleCreateNew} />
      </SafeAreaView>
    </Layout>
  );
};
