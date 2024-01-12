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
      <div className="galaxy ">
        <Image
          src="/images/galaxy.png"
          width={60}
          height={60}
          alt=""
          className="opacity-50 selection:bg-transparent"
        />
        {/* <div className="bg-gray-900 p-1 rounded">
          <p className="text-xs text-gray-300">That's the Andromeda galaxy.</p>
        </div> */}
      </div>

      {/* <Image
        src="/images/sun.png"
        width={20}
        height={20}
        alt=""
        className="sun"
      /> */}
      <div className="sun" />
      {new Array(77)
        .fill(1)
        .map((i) => new Date().getDate() + Math.random())
        .map((item) => {
          return <span key={item}></span>;
        })}
    </motion.div>
  );
};

export default StarrySky;
