import { DimensionValue, View } from "react-native";
import { Text } from "@ui-kitten/components";
import AnimatedLottieView from "lottie-react-native";

interface ErrorProps {
  message?: string;
  height?: DimensionValue;
}

export const Error: React.FC<ErrorProps> = ({ message = "An error occured", height = "100%" }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height,
        paddingHorizontal: 10,
      }}
    >
      <AnimatedLottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
        }}
        source={require("../../../assets/error.json")}
      />
      <Text category="h5" style={{ textAlign: "center" }}>
        {message}
      </Text>
    </View>
  );
};
