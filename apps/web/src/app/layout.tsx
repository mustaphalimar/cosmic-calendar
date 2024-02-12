import type { Metadata } from "next";
import { Inter, Fira_Code, Roboto, Outfit } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import StarrySky from "@/components/StarrySky";
import BackgroundAudio from "@/components/background-audio";
import { Analytics } from "@vercel/analytics/react";
import Providers from "@/providers";

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
        className={`bg-black   ${roboto.variable} ${fira.variable} ${inter.variable} ${outfit.variable} font-outfit font-bold`}
      >
        <BackgroundAudio />
        <StarrySky />

        <div className="z-10">
          <Providers>{children}</Providers>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
