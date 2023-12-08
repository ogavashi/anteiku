import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { StarIcon } from "../../../icons";
import TextTicker from "react-native-text-ticker";

interface TopSegmentProps {
  title: string;
  year: number;
  type: string;
}

export const TopSegment: React.FC<TopSegmentProps> = ({ title, year, type }) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10,
        alignItems: "center",
      }}
    >
      <View>
        <TextTicker style={{ width: 250 }} animationType="scroll" scrollSpeed={50} loop>
          <Text category="h3">{title}</Text>
        </TextTicker>
        <Text category="h6" appearance="hint">
          {type}, {year}
        </Text>
      </View>
      <Button appearance="outline" accessoryRight={StarIcon}>
        Rate
      </Button>
    </View>
  );
};
