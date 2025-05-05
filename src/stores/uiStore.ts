import { create } from "zustand";

interface UIState {
  isPayFormVisible: boolean;
  showPayForm: () => void;
  hidePayForm: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isPayFormVisible: false,
  showPayForm: () => set({ isPayFormVisible: true }),
  hidePayForm: () => set({ isPayFormVisible: false }),
}));
