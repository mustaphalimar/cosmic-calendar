"use client";

import { motion } from "framer-motion";
import { UseIntroduction } from "@/hooks/use-introduction";
import Image from "next/image";
import { months } from "@/data/calendar";
import { useEffect } from "react";
import { UseStarrySky } from "@/hooks/use-starry-sky";
import StarrySky from "@/components/StarrySky";

interface Props {
  introduction: UseIntroduction;
  starrySky: UseStarrySky;
}

const BriefOverview: React.FC<Props> = ({ introduction, starrySky }) => {
  return (
    <section className="md:w-[75%] lg:w-[60%] m-auto p-2">
      <div className="py-10">
        <motion.div
          initial={{ opacity: 0, y: 0, visibility: "hidden" }}
          animate={
            introduction.currentStep === 1 && {
              opacity: 1,
              y: -10,
              visibility: "visible",
            }
          }
          transition={{ duration: 0.5, delay: 1, ease: "backOut" }}
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
            <p className="text-2xl lg:text-3xl mt-4 lg:mt-0  font-bold ">
              A Brief Overview of <br className="md:hidden" />
              The Cosmic Calendar :
            </p>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            className="font-normal mt-4  flex flex-col-reverse md:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 0, visibility: "hidden" }}
            animate={
              introduction.currentStep === 1 && {
                opacity: 1,
                y: -10,
                visibility: "visible",
              }
            }
            transition={{ duration: 0.5, delay: 1.5, ease: "backOut" }}
          >
            <div className=" flex flex-col w-full md:w-[600px] items-center gap-2">
              <Image
                src="/images/carl-sagan.png"
                width={200}
                height={200}
                alt="car-sagan"
                className="w-full md:w-[600px]  object-contain"
              />
              <p className="text-sm">Carl Sagan. (1934 - 1996)</p>
            </div>
            <p>
              The Cosmic Calendar is a method to visualize the history of the
              universe by scaling its 13.8 billion year lifespan down to a
              single year. In this calendar, each month represents a little more
              than a billion years. This concept was popularized by astronomer
              Carl Sagan in his book and television series Cosmos.
            </p>
          </motion.div>

          <motion.div
            className="font-normal mt-10"
            initial={{ opacity: 0, y: 0, visibility: "hidden" }}
            animate={
              introduction.currentStep === 1 && {
                opacity: 1,
                y: -10,
                visibility: "visible",
              }
            }
            transition={{ duration: 0.5, delay: 2.2, ease: "backOut" }}
          >
            <main className="w-full border  text-gray-200 grid grid-cols-3 lg:grid-cols-4">
              {months.map((month) => {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 1,
                      delay: 0.1 * month.id,
                    }}
                    key={month.id}
                    className=" h-[90px]  lg:h-[140px] w-full border transition duration-500 p-1 lg:p-2"
                  >
                    <p className="  lg:text-3xl font-[100] ">{month.name}</p>
                    <p
                      className={` text-xs lg:text-sm transition duration-300 text-gray-400`}
                    >
                      From {month.range[0]} to {month.range[1]}
                    </p>
                  </motion.div>
                );
              })}
            </main>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BriefOverview;
