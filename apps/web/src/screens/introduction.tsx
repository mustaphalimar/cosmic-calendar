"use client";

import { useStarrySky } from "@/hooks/use-starry-sky";
import Steps from "./steps/Steps";
import Greeting from "./steps/greeting";
import { useIntroduction } from "@/hooks/use-introduction";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  const zoomIn = useStarrySky();
  const introduction = useIntroduction();

  return (
    <div className=" flex  p-4 ">
      <Steps
        introduction={introduction}
        zoomIn={zoomIn}
        steps={[
          <Greeting key={1} zoomIn={zoomIn} introduction={introduction} />,
        ]}
      />
    </div>
  );
};
export default IntroductionScreen;
