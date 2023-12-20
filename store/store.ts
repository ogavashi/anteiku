import { useAuthSlice } from "./../features/auth/store/authSlice";
import { create } from "zustand";
import { useAppSlice } from "./../features/app";
import { AppSlice, AuthSlice } from "../common/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./persist";

export const useStore = create<AppSlice & AuthSlice>()(
  persist(
    (...a) => ({
      ...useAppSlice(...a),
      ...useAuthSlice(...a),
    }),
    {
      name: "anteiku-store",
      storage: createJSONStorage(() => zustandStorage),
      partialize: (state) => ({ theme: state.theme }),
    }
  )
);
