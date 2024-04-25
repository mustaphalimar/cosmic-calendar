import type { Metadata } from "next";
import { Fira_Code, Inter, Outfit, Roboto } from "next/font/google";
import localFont from "next/font/local";

import StarrySky from "@/components/StarrySky";
import BackgroundAudio from "@/components/background-audio";
import { cn } from "@/lib/utils";
import Providers from "@/providers";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const ddin = localFont({
  src: [
    {
      path: "../fonts/D-DIN.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/D-DIN-Bold.woff2",
      weight: "600",
      style: "normal",
    },
  ],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "The Cosmic Calendar",
  description: "The Web Desmonstration of the Cosmic Calendar Concept ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-black , font-outfit font-bold",
          roboto.variable,
          fira.variable,
          inter.variable,
          outfit.variable
        )}
      >
        <BackgroundAudio />
        <StarrySky />

        <div className="z-10">
          <Providers>{children}</Providers>
          <Analytics debug={false} />
        </div>
      </body>
    </html>
  );
}
