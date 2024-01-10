"use client";

import { useState } from "react";
const months = [
  {
    id: 1,
    name: "January",
    range: ["The Big Bang", "1.15 Billion Years"],
  },
  {
    id: 2,
    name: "February",
    range: ["1.15", "2.3 Billion Years"],
  },
  {
    id: 3,
    name: "Mars",
    range: ["2.3", "3.45 Billion Years"],
  },
  {
    id: 4,
    name: "April",
    range: ["3.45", "4.6 Billion Years"],
  },
  {
    id: 5,
    name: "May",
    range: ["4.6", "5.75 Billion Years"],
  },
  {
    id: 6,
    name: "June",
    range: ["5.75", "6.9 Billion Years"],
  },
  {
    id: 7,
    name: "July",
    range: ["6.9", "8.05 Billion Years"],
  },
  {
    id: 8,
    name: "August",
    range: ["8.05", "9.2 Billion Years"],
  },
  {
    id: 9,
    name: "September",
    range: ["9.2", "10.35 Billion Years"],
  },
  {
    id: 10,
    name: "October",
    range: ["10.35", "11.5 Billion Years"],
  },
  {
    id: 11,
    name: "November",
    range: ["11.5", "12.65 Billion Years"],
  },
  {
    id: 12,
    name: "December",
    range: ["12.65", "The present day."],
  },
];
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
          <div
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
            <p className="text-3xl font-[100] m-2">{month.name}</p>
            <p
              className={`text-sm transition duration-500 text-gray-400 ${
                showRange[month.id] ? "opacity-100" : "opacity-0"
              }`}
            >
              From {month.range[0]} to {month.range[1]}
            </p>
          </div>
        );
      })}
    </main>
  );
};

export default Explore;
