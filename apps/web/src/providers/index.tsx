"use client";

import { TrpcProvider } from "@cosmic-calendar/trpc-client/src/TrpcProvider";

import NextNProgressClient from "@/components/progress-bar";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <TrpcProvider>
      <NextNProgressClient />
      {children}
    </TrpcProvider>
  );
};

export default Providers;
