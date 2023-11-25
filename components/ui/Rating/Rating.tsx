import { Text } from "@ui-kitten/components";
import { StyleProp, View, ViewStyle } from "react-native";

interface RatingProps {
  score: number;
  style?: StyleProp<ViewStyle>;
}

export const Rating: React.FC<RatingProps> = ({ score, style }) => {
  return (
    <View style={[style, { backgroundColor: "rgba(0, 0, 0, 0.7)", borderRadius: 5, width: 40 }]}>
      <Text style={{ textAlign: "center", fontWeight: "600", color: "white" }}>{score}</Text>
    </View>
  );
};
