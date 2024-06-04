import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="text-muted py-20 px-4 w-screen h-screen flex flex-col items-center justify-between ">
      <div className=" flex flex-col items-center gap-4 text-center">
        <h1 className=" text-3xl font-semibold md:text-4xl text-center">
          The Cosmic Calendar
        </h1>
        <p className="font-thin md:w-[500px] mt-5">
          This website simulates the cosmic calendar concept. Work is still in
          progress. If you are interested in contributing to this project,
          please feel free to do so.
        </p>

        <Link
          href="https://github.com/mustaphalimar/cosmic-calendar"
          className={cn(
            buttonVariants(),
            "flex items-center font-normal gap-2 hover:underline"
          )}
          target="_blank"
        >
          <Github size={20} /> Link to the Github Repo
        </Link>
      </div>
      <div className="mt-5 flex flex-col gap-2 items-center">
        <p className="font-thin">
          Built with passion❤️‍🔥 by{" "}
          <span className="underline">Mustapha Limar</span>
        </p>
        <div className="mt-5">
          <ul className="flex font-thin gap-2 text-sm">
            <li className="flex items-center gap-1">
              <Link
                href="https://github.com/mustaphalimar"
                className={buttonVariants()}
                target="_blank"
              >
                <Github size={20} />
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link
                href="https://x.com/taph4m"
                className={buttonVariants()}
                target="_blank"
              >
                <Image src="/images/x.jpg" width={24} height={24} alt="x" />
              </Link>
            </li>
            <li className="flex items-center gap-1">
              <Link
                href="https://linkedin.com/in/tapham079"
                className={buttonVariants()}
                target="_blank"
              >
                <Linkedin size={20} />
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-sm font-normal mt-4">
          2024 &copy; | All rights reserved
        </p>
      </div>
    </main>
  );
};
export default page;
