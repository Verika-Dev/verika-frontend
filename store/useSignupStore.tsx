import { create } from "zustand";

interface SignupState {
  fullName: string;
  email: string;
  password: string;
  setFullName: (name: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  reset: () => void;
}

export const useSignupStore = create<SignupState>((set) => ({
  fullName: "",
  email: "",
  password: "",
  setFullName: (name) => set({ fullName: name }),
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  reset: () => set({ fullName: "", email: "", password: "" }),
}));
