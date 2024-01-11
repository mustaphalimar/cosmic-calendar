"use client";

import { UseIntroduction } from "@/hooks/use-introduction";
import { UseStarrySky } from "@/hooks/use-starry-sky";

import { motion } from "framer-motion";
import { useEffect } from "react";

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
    return (
      <motion.div
        initial={{ opacity: 0, y: 0, visibility: "hidden" }}
        animate={
          introduction.currentStep === 1 && {
            opacity: 1,
            y: -250,
            visibility: "visible",
          }
        }
        transition={{ duration: 0.5, delay: 2, ease: "backOut" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10, visibility: "hidden" }}
          animate={
            introduction.currentStep === 1 && {
              opacity: 1,
              y: 0,
              visibility: "visible",
            }
          }
          transition={{ duration: 0.5, delay: 0.8, ease: "backOut" }}
        >
          <p className="text-2xl lg:text-3xl font-roboto font-bold ">
            A quick brief on The Cosmos Calendar
          </p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div>
      <h1>Hello </h1>
    </motion.div>
  );
};
export default Steps;
