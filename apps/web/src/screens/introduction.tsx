"use client";

import { useStarrySky } from "@/hooks/use-starry-sky";
import Steps from "./steps/Steps";
import Greeting from "./steps/greeting";
import { useIntroduction } from "@/hooks/use-introduction";
import BriefOverview from "@/screens/steps/brief-overview";
import Link from "next/link";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  const starrySky = useStarrySky();
  const introduction = useIntroduction();

  return (
    <div className="">
      <div className="flex fixed right-0 justify-end m-4">
        <Link href="/about" className="font-light hover:underline">
          About
        </Link>
      </div>
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
  );
};
export default IntroductionScreen;
