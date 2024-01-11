import { create } from "zustand";

interface UseStarrySky {
  zoomedIn: boolean;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

export const useStarrySky = create<UseStarrySky>((set) => ({
  zoomedIn: false,
  onZoomIn: () => set({ zoomedIn: true }),
  onZoomOut: () => set({ zoomedIn: false }),
}));
