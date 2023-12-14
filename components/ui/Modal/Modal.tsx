import { Modal as KittenModal } from "@ui-kitten/components";
import { PropsWithChildren, useCallback } from "react";

interface ModalProps {
  isVisible: boolean;
  handleClose: () => void;
}

export const Modal: React.FC<PropsWithChildren<ModalProps>> = ({
  isVisible,
  handleClose,
  children,
}) => {
  return (
    <KittenModal
      visible={isVisible}
      onBackdropPress={handleClose}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      style={{ width: "80%" }}
      animationType="fade"
    >
      {children}
    </KittenModal>
  );
};
