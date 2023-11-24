import { PropsWithChildren, forwardRef, useMemo } from "react";
import { View } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

export const BottomSheetComponent = forwardRef<BottomSheetModalMethods, PropsWithChildren>(
  ({ children }, ref) => {
    const snapPoints = useMemo(() => ["25%", "50%"], []);

    return (
      <View>
        <BottomSheetModal ref={ref} index={1} snapPoints={snapPoints}>
          {children}
        </BottomSheetModal>
      </View>
    );
  }
);
