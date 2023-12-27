import { Layout, Text } from "@ui-kitten/components";
import { View } from "react-native";

interface IconProps {
  icon: string;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <Layout
      level="4"
      style={{
        borderRadius: 10,
        width: 85,
        height: 85,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 54 }}>{icon}</Text>
      </View>
    </Layout>
  );
};
