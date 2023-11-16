import { Spinner } from "@ui-kitten/components";
import { View } from "react-native";

export const Loader = () => {
  return (
    <View
      style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}
    >
      <Spinner size="large" />
    </View>
  );
};
