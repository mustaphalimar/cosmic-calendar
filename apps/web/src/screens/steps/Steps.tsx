"use client";

import { UseIntroduction } from "@/hooks/use-introduction";

import { motion } from "framer-motion";

interface StepsProps {
  steps: React.ReactNode[];
  introduction: UseIntroduction;
}

const Steps: React.FC<StepsProps> = ({ steps, introduction }) => {
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={introduction.currentStep === 1 && { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
    >
      <p className="text-3xl font-roboto font-bold ">
        A quick brief on The Cosmos Calendar
      </p>
    </motion.div>
  );
};
export default Steps;
