"use client";

import { motion, useInView, useAnimation } from "framer-motion";
import { UseIntroduction } from "@/hooks/use-introduction";
import Image from "next/image";
import { months } from "@/data/calendar";
import { useEffect, useRef } from "react";
import { UseStarrySky } from "@/hooks/use-starry-sky";
import StarrySky from "@/components/StarrySky";
import SpaceCanvas from "@/components/space-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const infos = [
  {
    id: 1,
    time: "January 1st",
    text: "The Big Bang marks the beginning of the universe.",
  },
  {
    id: 2,
    time: "Late January",
    text: "Formation of the first galaxies.",
  },
  {
    id: 3,
    time: "April",
    text: "Our Milky Way Galaxy forms.",
  },
  {
    id: 4,
    time: "September 9th",
    text: "The Solar System and Earth are formed.",
  },
  {
    id: 5,
    time: "September 21st",
    text: " Emergence of the earliest life forms on Earth.",
  },
  {
    id: 6,
    time: "December 1-24th",
    text: "Significant evolutionary developments occur; life forms become more complex.",
  },
  {
    id: 7,
    time: "December 25th",
    text: "Appearance of the first vertebrates.",
  },
  {
    id: 8,
    time: "December 31st",
    text: "The entire recorded history of humans takes place in the final hours of this day. Modern humans appear about 11:59 pm.",
  },
];

const timeMeasurements = [
  {
    id: 1,
    text: "One year in the Cosmic Calendar represents",
    time: "13.8 billion years in real time.",
  },
  {
    id: 2,
    text: "Therefore, one month represents about ",
    time: "1.15 billion years.",
  },
  {
    id: 3,
    text: "One day represents about ",
    time: "37.7 million years.",
  },
  {
    id: 4,
    text: "One hour represents approximately ",
    time: "1.57 million years.",
  },
  {
    id: 5,
    text: "One minute represents about ",
    time: "26,300 years.",
  },
  {
    id: 6,
    text: "One second represents roughly ",
    time: "438 years.",
  },
];

interface Props {
  introduction: UseIntroduction;
  starrySky: UseStarrySky;
}

const BriefOverview: React.FC<Props> = ({ introduction, starrySky }) => {
  const calendarRef = useRef(null);
  const buttonRef = useRef(null);
  const soWhatHappendRef = useRef(null);
  const soTimeMeasurementRef = useRef(null);

  const isInView = useInView(calendarRef, { once: true });
  const isWhatHappendInView = useInView(soWhatHappendRef, { once: true });
  const isTimeMeasurementInView = useInView(soTimeMeasurementRef, {
    once: true,
  });
  const isButtonInView = useInView(buttonRef, { once: true });

  const calendarControls = useAnimation();
  const whatHappendControls = useAnimation();
  const timeMeasurementControls = useAnimation();
  const buttonControls = useAnimation();

  useEffect(() => {
    if (isButtonInView) {
      buttonControls.start("visible");
    }
  }, [isButtonInView]);

  useEffect(() => {
    if (isInView) {
      calendarControls.start("visible");
    }
  }, [isInView]);

  useEffect(() => {
    if (isWhatHappendInView) {
      whatHappendControls.start("visible");
    }
  }, [isWhatHappendInView]);

  useEffect(() => {
    if (isTimeMeasurementInView) {
      timeMeasurementControls.start("visible");
    }
  }, [isTimeMeasurementInView]);

  return (
    <section className="md:w-[75%] lg:w-[60%] m-auto ">
      <SpaceCanvas />
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
            <p className="text-3xl  mt-4 lg:mt-0  font-bold ">
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
            <div className=" flex flex-col w-full md:w-[800px] items-center gap-2">
              <Image
                src="/images/carl-sagan.png"
                width={200}
                height={200}
                alt="car-sagan"
                className="w-full md:w-[800px]  object-contain"
              />
              <p className="text-sm">Carl Sagan. (1934 - 1996)</p>
            </div>
            <p className="lg:text-lg">
              The Cosmic Calendar is a method to visualize the history of the
              universe by scaling its 13.8 billion year lifespan down to a
              single year. In this calendar, each month represents a little more
              than a billion years. This concept was popularized by astronomer
              Carl Sagan in his book and television series Cosmos.
            </p>
          </motion.div>

          <motion.div
            className="font-normal mt-10 space-y-10"
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
            {/* <Image
              src="/images/cosmiccalendar-2.jpg"
              width={300}
              height={300}
              alt=""
              className="w-full"
            /> */}

            {/* <main
              className="w-full border  text-gray-200 grid grid-cols-3 lg:grid-cols-4"
              ref={calendarRef}
            >
              {months.map((month) => {
                return (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 },
                    }}
                    initial="hidden"
                    animate={calendarControls}
                    transition={{
                      duration: 1,
                      delay: 0.1 * month.id,
                    }}
                    key={month.id}
                    className=" h-[70px]  lg:h-[120px] w-full border transition duration-500 p-1 lg:p-2"
                  >
                    <p className="  lg:text-3xl font-[100] ">{month.name}</p>
                  </motion.div>
                );
              })}
            </main> */}

            <div>
              <motion.div
                variants={{
                  hidden: { width: 0 },
                  visible: { width: "100%" },
                }}
                initial="hidden"
                animate={calendarControls}
                transition={{
                  duration: 1,
                  delay: 1,
                  ease: "backInOut",
                }}
                className="h-[0.5px] bg-white"
              />

              <motion.p
                ref={soTimeMeasurementRef}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={timeMeasurementControls}
                transition={{
                  duration: 1,
                }}
                className="my-10 text-2xl text-gray-100"
              >
                {`First, let's see what time looks in the cosmic calendar : `}
              </motion.p>

              <motion.p
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={timeMeasurementControls}
                transition={{
                  delay: 1,
                }}
                className="mt-2 md:text-lg"
              >
                At this scale, time is measured much differently than what we
                are used to, but it starts to make sense as you explore the
                calendar.{` Let's`} see what that looks like:
              </motion.p>

              <div className="mt-8">
                <ul className=" flex flex-col gap-6">
                  {timeMeasurements.map((item) => (
                    <TimeMeasurement key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: "backInOut",
              }}
              className="w-[90%] m-auto h-[0.5px] bg-white"
            />
            <div>
              <motion.p
                ref={soWhatHappendRef}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                initial="hidden"
                animate={whatHappendControls}
                transition={{
                  duration: 1,
                }}
                className="text-2xl text-gray-100"
              >
                So, what really happened in the universe on that scale?
              </motion.p>
              <div className="mt-8">
                <ul className=" flex flex-col gap-6">
                  {infos.map((item) => (
                    <Item key={item.id} item={item} />
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          ref={buttonRef}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={buttonControls}
          transition={{
            duration: 1,
            delay: 1,
          }}
          className="mt-10 flex justify-center"
        >
          <Button
            variant="outline"
            className="text-black"
            // onClick={handleContinue}
          >
            <Link className="" href="/explore">
              Start Exploring &rarr;
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

const TimeMeasurement = ({ item }: { item: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.li
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.2 * item.id,
      }}
      key={item.id}
      className="flex gap-2 items-start text-lg"
    >
      <div className="flex flex-col md:flex-row gap-1 px-2 ">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-white" />
          <p className="text-sm md:text-base">{item.text}</p>
        </div>
        <p className="underline text-sm md:text-base font-bold">{item.time}</p>
      </div>
    </motion.li>
  );
};

const Item = ({ item }: { item: any }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <motion.li
      ref={ref}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      initial="hidden"
      animate={mainControls}
      transition={{
        duration: 0.5,
        delay: 0.2 * item.id,
      }}
      key={item.id}
      className="flex flex-col md:flex-row gap-1 md:items-center  text-lg"
    >
      <div className="flex items-center gap-2 px-2">
        <div className="w-2 h-2 rounded-full bg-white" />
        <p className="md:min-w-[140px] text-sm lg:text-base font-bold">
          {item.time}
        </p>
        <span>:</span>
      </div>
      <p className="text-sm px-10">{item.text}</p>
    </motion.li>
  );
};

export default BriefOverview;
