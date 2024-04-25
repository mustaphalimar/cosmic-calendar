"use client";

import { months } from "@/data/calendar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {}

const Explore: React.FC<Props> = ({}) => {
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  // params.forEach((p) => {});

  return (
    <main className="w-full h-screen  text-gray-200 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 lg:grid-rows-3">
      {months.map((month) => {
        return (
          <Link
            href={`?month=${month.name.toLowerCase()}`}
            key={month.id}
            className=" cursor-pointer group w-full border transition duration-500 hover:bg-gray-950 p-2"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.1 * month.id,
              }}
              className=""
            >
              <p className=" text-2xl lg:text-4xl font-[100] m-2">
                {month.name}
              </p>
              <p
                className={`text-base opacity-0 transition duration-300 group-hover:opacity-100 text-gray-400 font-thin `}
              >
                From {month.range[0]} to {month.range[1]}
              </p>
            </motion.div>
          </Link>
        );
      })}
    </main>
  );
};

export default Explore;
