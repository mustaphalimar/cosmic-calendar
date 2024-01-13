"use client";

import SpaceCanvas from "@/components/space-background";
import { useStarrySky } from "@/hooks/use-starry-sky";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const StarrySky = () => {
  const starrySky = useStarrySky();

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1 }}
      animate={starrySky.zoomedIn && { scale: 1.3, opacity: 0 }} // Animate to 100% opacity and move to original position
      transition={{ ease: "backInOut", duration: 1.2 }}
      className={`sky `}
    >
      {!starrySky.zoomedIn && <SpaceCanvas />}
      <div className="galaxy ">
        <Image
          src="/images/galaxy.png"
          width={80}
          height={80}
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
      {new Array(38).fill(1).map((item, index) => {
        return <span key={index}></span>;
      })}
    </motion.div>
  );
};

export default StarrySky;
