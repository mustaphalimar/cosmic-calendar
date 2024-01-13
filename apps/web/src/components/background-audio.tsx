"use client";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "@/hooks/use-audio";

const BackgroundAudio = () => {
  const [volume, setVolume] = useState(0.05); // Default volume at 50%
  const audioRef = useRef<HTMLAudioElement>(null);
  const audio = useAudio();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = audio.playing ? volume : 0;
    }
  }, [volume, audio.playing]);
  return (
    <audio loop ref={audioRef}>
      <source src="/audio/background.mp3" type="audio/mp3" />
    </audio>
  );
};

export default BackgroundAudio;
