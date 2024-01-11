import { create } from "zustand";

interface UseIntroduction {
  currentStep: number;
  maxSteps: number;
  onContinue: () => void;
  onReset: () => void;
}

export const useIntroduction = create<UseIntroduction>((set) => ({
  currentStep: 1,
  maxSteps: 4,
  onContinue: () =>
    set((state) => ({
      currentStep:
        state.currentStep + 1 > state.maxSteps ? 1 : state.currentStep + 1,
    })),
  onReset: () => set({ currentStep: 1 }),
}));
