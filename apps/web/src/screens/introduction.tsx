"use client";

import { useStarrySky } from "@/hooks/use-starry-sky";
import Steps from "./steps/Steps";
import Greeting from "./steps/greeting";
import { useIntroduction } from "@/hooks/use-introduction";
import BriefOverview from "@/screens/steps/brief-overview";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  const starrySky = useStarrySky();
  const introduction = useIntroduction();

  return (
    <div
      className={cn({
        "max-h-screen overflow-clip": introduction.currentStep === 0,
      })}
    >
      <div className="flex w-full fixed  bg-black z-10 right-0 justify-end p-4">
        <Link href="/about" className="font-light hover:underline">
          About
        </Link>
      </div>
      <div className="pt-10">
        <Steps
          introduction={introduction}
          zoomIn={starrySky}
          steps={[
            <Greeting key={1} zoomIn={starrySky} introduction={introduction} />,
            <BriefOverview
              key={2}
              introduction={introduction}
              starrySky={starrySky}
            />,
          ]}
        />
      </div>
    </div>
  );
};
export default IntroductionScreen;
