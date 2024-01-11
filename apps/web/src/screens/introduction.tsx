"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { useStarrySky } from "@/hooks/use-starry-sky";
import { useIntroduction } from "@/hooks/use-introduction";
import { useEffect } from "react";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  const zoomIn = useStarrySky();
  const introduction = useIntroduction();

  const handleContinue = () => {
    zoomIn.onZoomIn();
    introduction.onContinue();
  };

  useEffect(() => {
    console.log(introduction.currentStep);
  }, [introduction.currentStep]);

  return (
    <div className=" flex flex-col items-center justify-between p-4 text-center">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -5 }}
        transition={{ duration: 1, delay: 3, ease: "backOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start with 0% opacity and slightly lower position
          animate={{ opacity: 1, y: 0 }} // Animate to 100% opacity and move to original position
          transition={{ duration: 1.2, ease: "circInOut" }}
          className="text-4xl"
        >
          Welcome
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ y: 10 }} // Start with 0% opacity and slightly lower position
        animate={{ y: -6 }}
        transition={{ duration: 1.2, delay: 7.2, ease: "backOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 10, visibility: "hidden" }} // Start with 0% opacity and slightly lower position
          animate={{ opacity: 1, y: -10, visibility: "visible" }} // Animate to 100% opacity and move to original position
          transition={{ duration: 1.2, delay: 3.5, ease: "circInOut" }}
          className="text-xl"
        >
          This is the official web simulation of the Cosmic Calendar approach.
        </motion.p>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 6, visibility: "hidden" }}
          animate={{ opacity: 1, y: -6, visibility: "visible" }} // Animate to 100% opacity and move to original position
          transition={{ duration: 0.8, delay: 7.2, ease: "backOut" }}
        >
          <Button
            variant="outline"
            className="text-black"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default IntroductionScreen;
