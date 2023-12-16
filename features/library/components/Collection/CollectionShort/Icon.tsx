import { Layout, Text } from "@ui-kitten/components";
import { View, ViewProps } from "react-native";

interface IconProps {
  icon: string;
}

export const Icon: React.FC<IconProps> = ({ icon }) => {
  return (
    <Layout
      level="4"
      style={{
        borderRadius: 10,
        width: 100,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <Text style={{ fontSize: 64 }}>{icon}</Text>
      </View>
    </Layout>
  );
};
