"use client";

import { useTimeline } from "@/hooks/use-timeline";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Days from "./_components/days";
import Months from "./_components/months";

interface Props {}

const Explore: React.FC<Props> = ({}) => {
  const searchParams = useSearchParams();
  const [fullTimeline, setFullTimeline] = useState("");

  const timeline = useTimeline();

  const params = useMemo(
    () => new URLSearchParams(searchParams.toString()),
    [searchParams]
  );

  const monthParam = params.get("month");
  const dayParam = parseInt(params.get("day") as string, 10);
  const hourParam = params.get("hour");

  useEffect(() => {
    if (monthParam) {
      timeline.setMonth(monthParam);
    } else {
      timeline.setMonth("");
    }
    if (dayParam) {
      timeline.setDay(dayParam);
    } else {
      timeline.setDay(0);
    }
    if (hourParam) {
      timeline.setHour(hourParam);
    } else {
      timeline.setHour("");
    }
  }, [monthParam, dayParam, hourParam]);

  useEffect(() => {
    console.log(timeline);
  }, [timeline]);

  useEffect(() => {
    let newTimeline: string = "";
    params.forEach((p) => {
      newTimeline += `/${p}`;
    });
    setFullTimeline(newTimeline);
  }, [params]);

  if (timeline.month) {
    return <Days month={timeline.month} />;
  }

  return <Months />;
};

export default Explore;
