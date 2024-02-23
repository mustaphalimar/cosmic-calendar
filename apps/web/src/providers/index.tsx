"use client";

import NextNProgressClient from "@/components/progress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextNProgressClient />
      {children}
    </>
  );
};

export default Providers;
