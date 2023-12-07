import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { StarIcon } from "../../../icons";

export const TopSegment = () => {
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
        <Text category="h3">Frieren</Text>
        <Text category="h6" appearance="hint">
          TV, 2023
        </Text>
      </View>
      <Button appearance="outline" accessoryRight={StarIcon}>
        Rate
      </Button>
    </View>
  );
};
