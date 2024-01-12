"use client";

import { useStarrySky } from "@/hooks/use-starry-sky";
import Steps from "./steps/Steps";
import Greeting from "./steps/greeting";
import { useIntroduction } from "@/hooks/use-introduction";
import BriefOverview from "@/screens/steps/brief-overview";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  const zoomIn = useStarrySky();
  const introduction = useIntroduction();

  return (
    <div className="">
      <Steps
        introduction={introduction}
        zoomIn={zoomIn}
        steps={[
          <Greeting key={1} zoomIn={zoomIn} introduction={introduction} />,
          <BriefOverview key={2} introduction={introduction} />,
        ]}
      />
    </div>
  );
};
export default IntroductionScreen;
