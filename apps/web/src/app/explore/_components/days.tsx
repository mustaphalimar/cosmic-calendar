import { days } from "@/data/calendar";
import Link from "next/link";
import AnimateCell from "./animate-cell";

interface Props {
  month: string;
}

const Days: React.FC<Props> = ({ month }) => {
  return (
    <main className="w-full h-screen  text-gray-200 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-6 lg:grid-rows-5">
      {days.map((day) => {
        return (
          <Link
            href={`?month=${month}&day=${day.day}`}
            key={day.id}
            className=" cursor-pointer group w-full border transition duration-500 hover:bg-gray-950 p-2"
          >
            <AnimateCell id={day.id}>
              <p className=" text-2xl lg:text-4xl font-[100] m-2">{day.day}</p>
              <p
                className={`text-sm opacity-0 transition duration-300 group-hover:opacity-100 text-gray-400 font-thin `}
              >
                From {day.range[0]} to {day.range[1]}
              </p>
            </AnimateCell>
          </Link>
        );
      })}
    </main>
  );
};
export default Days;
