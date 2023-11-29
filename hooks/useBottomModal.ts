import { useCallback, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useBottomModal = () => {
  const bottomModalRef = useRef<BottomSheetModal>(null);

  const openModal = useCallback(() => {
    bottomModalRef.current?.present();
  }, []);

  const closeModal = useCallback(() => {
    bottomModalRef.current?.close();
  }, []);

  return { openModal, closeModal, bottomModalRef };
};
