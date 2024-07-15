"use client";

import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { useTimeline } from "@/hooks/use-timeline";
import { useRouter } from "next/navigation";

const Day = () => {
  const router = useRouter();
  const timeline = useTimeline();

  console.log("CURRENT DAY: ", timeline.day);

  return (
    <main className="text-white">
      <Container className="py-10">
        <Button className="my-4" onClick={() => router.back()}>
          {" "}
          &larr; Go Back
        </Button>
        <h1 className="capitalize text-4xl ">
          {timeline.month} - {timeline.day}th
        </h1>
        <div className="mt-10">
          <p className="font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            sit vero officia, dolores odio assumenda consequatur quas facere
            architecto? Tempore ut nulla, temporibus tempora et obcaecati, saepe
            neque inventore magnam pariatur modi quos minima, deserunt
            repellendus quibusdam? Quaerat enim iure, nesciunt quis perferendis
            exercitationem! Fuga animi ea asperiores illo voluptas!
          </p>
        </div>
      </Container>
    </main>
  );
};
export default Day;
