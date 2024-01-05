import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { Collection, LibraryStackParamsList } from "../../../common/types";
import { AnimeIcon, BackIcon, MangaIcon } from "../../../features/icons";

interface CollectionLayoutProps {
  accessoryRight?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  collection: Collection;
}

export const CollectionLayout: React.FC<React.PropsWithChildren<CollectionLayoutProps>> = ({
  children,
  accessoryRight,
  collection,
}) => {
  const navigation = useNavigation<NavigationProp<LibraryStackParamsList>>();
  const route = useRoute();

  const navigateBack = useCallback(() => {
    navigation.navigate("Library");
  }, [navigation]);

  const navigateCategory = useCallback(() => {
    const path = route.name === "AnimeCollection" ? "MangaCollection" : "AnimeCollection";

    navigation.navigate(path, { collection });
  }, [navigation, route]);

  const icon = useMemo(() => (route.name === "MangaCollection" ? MangaIcon : AnimeIcon), [route]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView style={{ marginBottom: 105 }}>
        <TopNavigation
          title={() => (
            <Text category="h3">{collection.title + collection.icon || "🍙 Anteiku"}</Text>
          )}
          accessoryLeft={() => <TopActions icon={BackIcon} navigate={navigateBack} />}
          accessoryRight={() => (
            <View>
              <TopActions icon={icon} navigate={navigateCategory} />
              {accessoryRight?.()}
            </View>
          )}
        />
        <Divider />
        <View style={{ height: "100%" }}>{children}</View>
      </SafeAreaView>
    </Layout>
  );
};
