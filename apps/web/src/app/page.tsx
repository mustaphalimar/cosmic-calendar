import StarrySky from "@/components/StarrySky";
import IntroductionScreen from "@/screens/introduction";

import AudioControl from "@/components/audio-control";

export default function Home() {
  return (
    <main className="w-full h-screen text-gray-200 flex flex-col justify-center items-center">
      <AudioControl />
      <IntroductionScreen />
    </main>
  );
}
