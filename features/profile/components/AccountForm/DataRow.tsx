import { Text } from "@ui-kitten/components";
import { TouchableOpacity, View } from "react-native";

interface DataRowProps {
  addModalData: () => void;
  label: string;
  value: string;
}

export const DataRow: React.FC<DataRowProps> = ({ addModalData, label, value }) => {
  return (
    <TouchableOpacity onPress={addModalData}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text category="h6">{label}:</Text>
        <Text category="h6" appearance="hint">
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
