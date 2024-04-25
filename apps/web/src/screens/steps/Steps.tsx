"use client";

import { UseIntroduction } from "@/hooks/use-introduction";
import { UseStarrySky } from "@/hooks/use-starry-sky";

import { motion } from "framer-motion";

interface StepsProps {
  steps: React.ReactNode[];
  introduction: UseIntroduction;
  zoomIn: UseStarrySky;
}

const Steps: React.FC<StepsProps> = ({ steps, introduction, zoomIn }) => {
  if (introduction.currentStep === 0) {
    return (
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={introduction.currentStep > 0 && { opacity: 0, scale: 1.1 }}
        // transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
      >
        {steps[0]}
      </motion.div>
    );
  }

  if (introduction.currentStep === 1) {
    return <>{steps[1]}</>;
  }

  return (
    <motion.div>
      <h1>Hello </h1>
    </motion.div>
  );
};
export default Steps;
