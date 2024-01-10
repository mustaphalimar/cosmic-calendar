import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import StarrySky from "@/components/StarrySky";

const inter = Inter({ subsets: ["latin"] });

const fira = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira",
});

export const metadata: Metadata = {
  title: "The Cosmic Calendar",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-black ${fira.variable} font-fira`}>
        <StarrySky />

        <div className="z-10">{children}</div>
      </body>
    </html>
  );
}
