import IntroductionScreen from "@/screens/introduction";
import AudioControl from "@/components/audio-control";

export default function Home() {
  return (
    <main className="w-full h-screen text-gray-200  ">
      {/* <AudioControl /> */}
      <IntroductionScreen />
    </main>
  );
}
