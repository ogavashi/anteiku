import { Modal, Spinner } from "@ui-kitten/components";

interface OverlayLoader {
  showLoader: boolean;
}

export const OverlayLoader: React.FC<OverlayLoader> = ({ showLoader }) => {
  return (
    <Modal
      visible={showLoader}
      backdropStyle={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      animationType="fade"
    >
      <Spinner size="large" />
    </Modal>
  );
};
