import { PropsWithChildren, forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Layout } from "@ui-kitten/components";
import { useAppTheme } from "../../../hooks";

export const BottomSheetComponent = forwardRef<BottomSheetModalMethods, PropsWithChildren>(
  ({ children }, ref) => {
    const snapPoints = useMemo(() => ["75%"], []);

    const { colorScheme } = useAppTheme();

    const renderBackdrop = useCallback(
      (props: any) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          pressBehavior="close"
        />
      ),
      []
    );

    return (
      <Layout>
        <BottomSheetModal
          ref={ref}
          snapPoints={snapPoints}
          index={0}
          backgroundStyle={{ backgroundColor: colorScheme === "light" ? "#e4e9f2" : "#343541" }}
          backdropComponent={renderBackdrop}
          enableDismissOnClose
        >
          {children}
        </BottomSheetModal>
      </Layout>
    );
  }
);
