import { create } from "zustand";

interface SignupState {
  role: string;
  setRole: (role: string) => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  role: "student",
  setRole: (role) => set({ role }),
}));
