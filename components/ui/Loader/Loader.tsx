import { Spinner } from "@ui-kitten/components";
import { DimensionValue, View } from "react-native";

interface LoaderProps {
  height?: DimensionValue;
}

export const Loader: React.FC<LoaderProps> = ({ height = "100%" }) => {
  return (
    <View style={{ display: "flex", alignItems: "center", justifyContent: "center", height }}>
      <Spinner size="large" />
    </View>
  );
};
