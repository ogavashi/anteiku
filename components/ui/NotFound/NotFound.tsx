import { DimensionValue, View } from "react-native";
import { Text } from "@ui-kitten/components";
import AnimatedLottieView from "lottie-react-native";

interface NotFoundProps {
  message?: string;
  height?: DimensionValue;
}

export const NotFound: React.FC<NotFoundProps> = ({
  message = "Nothing was found",
  height = "100%",
}) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height,
      }}
    >
      <AnimatedLottieView
        autoPlay
        style={{
          width: 400,
          height: 400,
        }}
        source={require("../../../assets/empty.json")}
      />
      <Text category="h5" style={{ textAlign: "center" }}>
        {message}
      </Text>
    </View>
  );
};
