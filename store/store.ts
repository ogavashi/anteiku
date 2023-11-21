import { create } from "zustand";
import { useGenreslice } from "./../features/genres";
import { useAppSlice } from "./../features/app";
import { AppSlice, GenresSlice } from "../common/types";
import { createJSONStorage, persist } from "zustand/middleware";
import { zustandStorage } from "./persist";

export const useStore = create<AppSlice & GenresSlice>()(
  persist(
    (...a) => ({
      ...useAppSlice(...a),
      ...useGenreslice(...a),
    }),
    {
      name: "anteiku-store",
      storage: createJSONStorage(() => zustandStorage),
      partialize: (state) => ({ theme: state.theme, genres: state.genres }),
    }
  )
);
