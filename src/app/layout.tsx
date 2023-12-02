import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col w-screen bg-[#FFF9E9] justify-between min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
