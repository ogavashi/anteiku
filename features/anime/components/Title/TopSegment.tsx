import { Text } from "@ui-kitten/components";
import { View } from "react-native";
import TextTicker from "react-native-text-ticker";
import { Rating } from "./Rating";
import { FullAnime } from "../../../../common/types";

interface TopSegmentProps {
  title: FullAnime;
}

export const TopSegment: React.FC<TopSegmentProps> = ({ title }) => {
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
          <Text category="h3">{title.title}</Text>
        </TextTicker>
        <Text category="h6" appearance="hint">
          {title.type}, {+title.year || title.fullYear}
        </Text>
      </View>
      <Rating title={title} />
    </View>
  );
};
