import { Divider, Layout, Text } from "@ui-kitten/components";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import { TopNavigation } from "../../../features/navigation";
import { Avatar, FAB, Loader } from "../../ui";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";
import { LibraryModalData, TabParamList } from "../../../common/types";
import { AddIcon } from "../../../features/icons";

interface LibraryLayoutProps {
  title?: string;
  setModalData: React.Dispatch<React.SetStateAction<LibraryModalData | null>>;
  refetch: boolean;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  isLoading: boolean;
}

export const LibraryLayout: React.FC<React.PropsWithChildren<LibraryLayoutProps>> = ({
  children,
  title,
  setModalData,
  refetch,
  setRefetch,
  isLoading,
}) => {
  const navigation = useNavigation<NavigationProp<TabParamList>>();

  const openProfile = useCallback(() => {
    navigation.navigate("PersonalAccount", { screen: "Profile" });
  }, [navigation]);

  const handleCreateNew = useCallback(() => {
    setModalData({ mode: "create" });
  }, []);

  const handleRefresh = useCallback(() => {
    setRefetch(true);
  }, []);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView style={{ height: "100%" }}>
        <TopNavigation
          title={() => <Text category="h3">{title || "🍙 Anteiku"}</Text>}
          accessoryRight={() => <Avatar onPress={openProfile} />}
        />
        <Divider />
        {isLoading ? (
          <Loader />
        ) : (
          <ScrollView
            style={{ height: "100%" }}
            contentContainerStyle={{ marginVertical: 10, paddingBottom: 70 }}
            refreshControl={<RefreshControl refreshing={refetch} onRefresh={handleRefresh} />}
          >
            {children}
          </ScrollView>
        )}
        <FAB title="New collection" icon={AddIcon} onPress={handleCreateNew} />
      </SafeAreaView>
    </Layout>
  );
};
