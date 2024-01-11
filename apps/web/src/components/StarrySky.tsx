"use client";

import { useStarrySky } from "@/hooks/use-starry-sky";
import { motion } from "framer-motion";
import Image from "next/image";

const StarrySky = () => {
  const zoomIn = useStarrySky();

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={zoomIn.zoomedIn && { scale: 1.3, opacity: 0 }} // Animate to 100% opacity and move to original position
      transition={{ ease: "backInOut", duration: 1.2 }}
      className={`sky `}
    >
      <Image
        src="/images/galaxy.png"
        width={60}
        height={60}
        alt=""
        className="galaxy opacity-50"
      />
      {/* <Image
        src="/images/sun.png"
        width={20}
        height={20}
        alt=""
        className="sun"
      /> */}
      <div className="sun" />
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </motion.div>
  );
};

export default StarrySky;
