import { Divider, Layout } from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import { TopActions, TopNavigation } from "../../../features/navigation";
import { NavigationProp, useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useMemo } from "react";
import { AppStackParamsList, Query, SearchStackParamsList } from "../../../common/types";
import { AnimeIcon, BackIcon, MangaIcon } from "../../../features/icons";
import { SearchInput } from "../../../features/search";

interface SearchLayoutProps {
  accessoryRight?: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  query: Query;
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
  showBack: boolean;
}

export const SearchLayout: React.FC<React.PropsWithChildren<SearchLayoutProps>> = ({
  children,
  accessoryRight,
  query,
  setQuery,
  showBack,
}) => {
  const navigation = useNavigation<NavigationProp<SearchStackParamsList>>();
  const route = useRoute();

  const navigateCategory = useCallback(() => {
    const path = route.name === "SearchManga" ? "SearchAnime" : "SearchManga";

    navigation.navigate(path, { query: undefined });
  }, [navigation, route]);

  const navigateBack = useCallback(() => {
    navigation.setParams({ query: undefined });
    navigation.goBack();
    setQuery({});
  }, []);

  const icon = useMemo(() => (route.name === "SearchManga" ? MangaIcon : AnimeIcon), [route]);

  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView style={{ marginBottom: 105 }}>
        <TopNavigation
          alignment="center"
          accessoryLeft={
            showBack
              ? () => <TopActions icon={BackIcon} navigate={navigateBack} />
              : () => <TopActions icon={icon} navigate={navigateCategory} />
          }
          title={<SearchInput queryKey="q" query={query} setQuery={setQuery} />}
          accessoryRight={accessoryRight}
        />
        <Divider />
        <View style={{ height: "100%" }}>{children}</View>
      </SafeAreaView>
    </Layout>
  );
};
