import { Text, View } from "react-native";
import { BottomSheet } from "../../../../components";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { forwardRef } from "react";

export const FiltersSheet = forwardRef<BottomSheetModalMethods>((_, ref) => {
  return (
    <BottomSheet ref={ref}>
      <View>
        <Text>Hello</Text>
      </View>
    </BottomSheet>
  );
});
