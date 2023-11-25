import { create } from "zustand";
import { useAppSlice } from "./../features/app";
import { AppSlice } from "../common/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./persist";

export const useStore = create<AppSlice>()(
  persist(
    (...a) => ({
      ...useAppSlice(...a),
    }),
    {
      name: "anteiku-store",
      storage: createJSONStorage(() => zustandStorage),
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
