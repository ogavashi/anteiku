import { Text } from "@ui-kitten/components";
import { View } from "react-native";

interface TextBlockProps {
  title: string;
  text: string;
}

export const TextBlock: React.FC<TextBlockProps> = ({ title, text }) => {
  return (
    <View style={{ gap: 10, marginHorizontal: 10 }}>
      <Text category="h4">{title}</Text>
      <Text style={{ textAlign: "justify" }}>{`${text}`}</Text>
    </View>
  );
};
