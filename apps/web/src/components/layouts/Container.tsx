import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}
const Container = ({ className, children }: Props) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-xl px-2.5 md:px-20 lg:px-40",
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
