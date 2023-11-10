import { Layout, Button } from "@ui-kitten/components";
import { HomeStackParamsList } from "../../common/types";
import { StackScreenProps } from "@react-navigation/stack";

export const MangaList: React.FC<StackScreenProps<HomeStackParamsList, "MangaList">> = ({ navigation }) => {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button onPress={() => {}}>Go Home</Button>
    </Layout>
  );
};
