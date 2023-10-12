import { useAppSlice } from "./../features/app/store/appSlice";
import { create } from "zustand";
import { AppSlice } from "../common/types";

export const useStore = create<AppSlice>()((...a) => ({
  ...useAppSlice(...a),
}));
