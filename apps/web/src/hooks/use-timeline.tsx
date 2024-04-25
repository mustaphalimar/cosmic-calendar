import { create } from "zustand";

export interface UseTimeline {
  month: string;
  day: number;
  hour: string;
  setMonth: (month: string) => void;
  setDay: (month: number) => void;
  setHour: (month: string) => void;
}

export const useTimeline = create<UseTimeline>((set) => ({
  month: "",
  day: 0,
  hour: "",
  setMonth: (month) => set({ month }),
  setDay: (day) => set({ day }),
  setHour: (hour) => set({ hour }),
}));
