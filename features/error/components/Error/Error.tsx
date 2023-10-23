import { View } from "react-native";
import { Text } from "@ui-kitten/components";
import AnimatedLottieView from "lottie-react-native";

interface ErrorProps {
  message?: string;
}

export const Error: React.FC<ErrorProps> = ({ message = "An error occured" }) => {
  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <AnimatedLottieView
        autoPlay
        style={{
          width: 100,
          height: 100,
        }}
        source={require("../../../../assets/error.json")}
      />
      <Text category="h5">{message}</Text>
    </View>
  );
};
