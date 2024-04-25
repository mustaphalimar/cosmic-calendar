import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="text-white w-screen h-screen flex justify-center ">
      <div className="mt-20 flex flex-col items-center gap-4 text-center">
        <h1 className=" text-3xl md:text-4xl text-center">
          The Cosmic Calendar
        </h1>
        <p className="font-thin md:w-[500px] mt-5">
          This website simulates the cosmic calendar concept. Work is still in
          progress, and it is not yet open-source. If you are interested in
          contributing to this project, please contact the developer.
        </p>
        <div className="mt-5 flex flex-col gap-2">
          <p className="text-xl">{`Developer's contact`}:</p>
          <p className="font-thin">
            Built with passion❤️‍🔥 by{" "}
            <span className="underline">Mustapha Limar</span>
          </p>
          <div className="mt-5">
            <ul className="flex flex-col font-thin gap-1 text-sm">
              <li className="flex items-center gap-1">
                <Github size={20} />
                <Link
                  href="https://github.com/mustaphalimar"
                  className="hover:underline"
                  target="_blank"
                >
                  @mustaphalimar
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Image src="/images/x.jpg" width={24} height={24} alt="x" />
                <Link
                  href="https://x.com/taph4m"
                  className="hover:underline"
                  target="_blank"
                >
                  @taph4m
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <Linkedin size={20} />
                <Link
                  href="https://linkedin.com/in/tapham079"
                  className="hover:underline"
                  target="_blank"
                >
                  @tapham079
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
export default page;
