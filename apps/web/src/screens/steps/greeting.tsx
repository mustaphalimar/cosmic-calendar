"use client";

import { Button } from "@/components/ui/button";
import { UseIntroduction } from "@/hooks/use-introduction";
import { UseStarrySky } from "@/hooks/use-starry-sky";
import { motion } from "framer-motion";

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
    <section className=" p-2 text-center w-full h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: -5, visibility: "hidden" }}
        transition={{ duration: 1, delay: 3, ease: "backOut" }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }} // Start with 0% opacity and slightly lower position
          animate={{ opacity: 1, y: 10 }} // Animate to 100% opacity and move to original position
          transition={{ duration: 1.2, ease: "circInOut" }}
          className=" text-2xl lg:text-4xl uppercase"
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
          className=" text-xl font-normal lg:text-3xl uppercase "
        >
          This is a web demonstration of the Cosmic Calendar concept
        </motion.p>
      </motion.div>

      <div>
        <motion.div
          initial={{ opacity: 0, y: 6, visibility: "hidden" }}
          animate={{ opacity: 1, y: -6, visibility: "visible" }} // Animate to 100% opacity and move to original position
          transition={{ duration: 0.8, delay: 7.2, ease: "backOut" }}
          className="flex items-center gap-2"
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
