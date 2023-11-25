import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

export const useBottomModal = () => {
  const bottomFiltersModalRef = useRef<BottomSheetModal>(null);

  const openFilters = useCallback(() => {
    bottomFiltersModalRef.current?.present();
  }, []);

  return { openFilters, bottomFiltersModalRef };
};
