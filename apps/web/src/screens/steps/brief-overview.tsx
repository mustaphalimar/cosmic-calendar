import { motion } from "framer-motion";
import { UseIntroduction } from "@/hooks/use-introduction";

interface Props {
  introduction: UseIntroduction;
}

const BriefOverview: React.FC<Props> = ({ introduction }) => {
  return (
    <section className="w-[60%] m-auto">
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
            <p className="text-2xl lg:text-3xl mt-10 lg:mt-0  font-bold ">
              A Brief Overview of The Cosmos Calendar :
            </p>
          </motion.div>
        </motion.div>

        <motion.div>
          <motion.div
            className="font-normal mt-4"
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
            The Cosmos Calendar is a unique and visionary timekeeping system
            designed to align with cosmic events and celestial phenomena. Unlike
            traditional calendars rooted in Earthly cycles, The Cosmos Calendar
            transcends planetary boundaries to embrace the vastness of the
            universe.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BriefOverview;
