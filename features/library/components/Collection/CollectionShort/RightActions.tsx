import { Button } from "@ui-kitten/components";
import { Animated, View } from "react-native";

interface RightActionsProps {
  progress: Animated.AnimatedInterpolation<string | number>;
  dragValue: Animated.AnimatedInterpolation<number>;
}

export const RightActions: React.FC<RightActionsProps> = ({ progress, dragValue }) => {
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button status="danger" size="giant">
        Erase
      </Button>
    </View>
  );
};
