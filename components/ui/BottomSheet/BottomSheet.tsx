import { PropsWithChildren, forwardRef, useCallback, useMemo } from "react";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import { Layout } from "@ui-kitten/components";
import { useAppTheme } from "../../../hooks";

interface BottomSheetComponentProps {
  height?: string;
  onDismiss?: () => void;
}

export const BottomSheetComponent = forwardRef<
  BottomSheetModalMethods,
  PropsWithChildren<BottomSheetComponentProps>
>(({ children, height = "75%", onDismiss }, ref) => {
  const snapPoints = useMemo(() => [height], []);

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
        onDismiss={onDismiss}
      >
        {children}
      </BottomSheetModal>
    </Layout>
  );
});
