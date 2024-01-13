import { create } from "zustand";

interface UseAudio {
  playing: boolean;
  onPlay: () => void;
  onStop: () => void;
}

export const useAudio = create<UseAudio>((set) => ({
  playing: false,
  onPlay: () => set({ playing: true }),
  onStop: () => set({ playing: false }),
}));
