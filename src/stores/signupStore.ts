// src/stores/signupStore.ts
import { create } from "zustand";

type SignupData = {
  name: string;
  email: string;
  veriEmail: string;
  password: string;
  bank: string;
  accountNumber: string;
  veriAccount: string;
};

type Store = {
  data: Partial<SignupData>;
  setData: (newData: Partial<SignupData>) => void;
  reset: () => void;
};

export const useSignupStore = create<Store>((set) => ({
  data: {},
  setData: (newData) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
  reset: () => set({ data: {} }),
}));
