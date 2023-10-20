import { Divider, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView, ScrollView } from "react-native";
import { TopNavigation } from "../../../features/navigation";
import { Avatar } from "../../ui";

interface ScrollLayoutProps {
  title?: string;
}

export const ScrollLayout: React.FC<React.PropsWithChildren<ScrollLayoutProps>> = ({
  children,
  title,
}) => {
  return (
    <Layout style={{ height: "100%" }}>
      <SafeAreaView>
        <TopNavigation
          title={() => <Text category="h3">{title || "🍙 Anteiku"}</Text>}
          accessoryRight={() => <Avatar />}
        />
        <Divider />
        <ScrollView>{children}</ScrollView>
      </SafeAreaView>
    </Layout>
  );
};
