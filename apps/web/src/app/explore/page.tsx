"use client";

import { months } from "@/data/calendar";
import { motion } from "framer-motion";

import { useState } from "react";

const Explore = () => {
  const [showRange, setShowRange] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  return (
    <main className="w-full h-screen  text-gray-200 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:grid-rows-3">
      {months.map((month) => {
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.1 * month.id,
            }}
            onMouseOver={() => {
              setShowRange((prev) => {
                return prev.map((_, index) =>
                  index === month.id ? true : false
                );
              });
            }}
            key={month.id}
            className=" cursor-pointer w-full border transition duration-500 hover:bg-gray-950 p-2"
          >
            <p className=" text-3xl lg:text-4xl font-[100] m-2">{month.name}</p>
            <p
              className={`text-sm transition duration-300 text-gray-400 ${
                showRange[month.id] ? "opacity-100" : "opacity-0"
              }`}
            >
              From {month.range[0]} to {month.range[1]}
            </p>
          </motion.div>
        );
      })}
    </main>
  );
};

export default Explore;
