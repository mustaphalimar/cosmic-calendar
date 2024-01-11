"use client";

import { Button } from "@/components/ui/button";
import { UseIntroduction, useIntroduction } from "@/hooks/use-introduction";
import { UseStarrySky, useStarrySky } from "@/hooks/use-starry-sky";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  introduction: UseIntroduction;
  zoomIn: UseStarrySky;
}

const Greeting: React.FC<Props> = ({ introduction, zoomIn }) => {
  const handleContinue = () => {
    introduction.onContinue();
    zoomIn.onZoomIn();
  };

  return (
    <section className="text-center">
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
          className="text-xl "
        >
          This is a web simulation of the Cosmic Calendar concept.
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
    </section>
  );
};

export default Greeting;
