"use client";

import React from "react";
import { Button } from "./ui/button";
import { Volume2, VolumeX } from "lucide-react";

import { useAudio } from "@/hooks/use-audio";

const AudioControl = () => {
  const audio = useAudio();

  const handleControlAudio = () => {
    if (audio.playing) {
      audio.onStop();
    } else {
      audio.onPlay();
    }
  };

  return (
    <div className="absolute right-3 top-3">
      <Button onClick={handleControlAudio}>
        {audio.playing ? <Volume2 /> : <VolumeX />}
      </Button>
    </div>
  );
};

export default AudioControl;
