import { create } from "zustand";

export interface UseIntroduction {
  currentStep: number;
  maxSteps: number;
  onContinue: () => void;
  onReset: () => void;
}

export const useIntroduction = create<UseIntroduction>((set) => ({
  currentStep: 0,
  maxSteps: 4,
  onContinue: () =>
    set((state) => ({
      currentStep:
        state.currentStep + 1 > state.maxSteps ? 0 : state.currentStep + 1,
    })),
  onReset: () => set({ currentStep: 1 }),
}));
