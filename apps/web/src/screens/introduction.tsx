"use client";

import { motion } from "framer-motion";
import { Button } from "../components/ui/button";

interface IntroductionScreenProps {}

const IntroductionScreen: React.FC<IntroductionScreenProps> = () => {
  return (
    <div className=" flex flex-col items-center justify-between">
      <motion.p
        initial={{ opacity: 0, y: 20 }} // Start with 0% opacity and slightly lower position
        animate={{ opacity: 1, y: 0 }} // Animate to 100% opacity and move to original position
        transition={{ duration: 1.2 }}
        className="text-4xl"
      >
        Welcome
      </motion.p>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} // Animate to 100% opacity and move to original position
          transition={{ duration: 0.8, delay: 2 }}
        >
          {/* <Button variant="outline" className="text-black">
            Explore
          </Button> */}
        </motion.div>
      </div>
    </div>
  );
};
export default IntroductionScreen;
