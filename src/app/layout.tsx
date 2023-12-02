import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import "./globals.css";
import FooterMobile from "@/components/Footer/FooterMobile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoodoo",
  // icons: {
  //   icon: [
  //     {
  //       url: "/assets/images/logo-zoodoo-green.png",
  //       media: "(prefers-color-scheme: light)",
  //     },
  //     {
  //       url: "/assets/images/logo-zoodoo-white.png",
  //       media: "(prefers-color-scheme: dark)",
  //     },
  //   ],
  // },
  description:
    "Welcome to Zoodoo, where the wonders of Australia's unique wildlife come to life! Immerse yourself in the diverse habitats of kangaroos, koalas, and other iconic Australian creatures. At Zoodoo, we blend education with entertainment, fostering a deep connection between visitors and our extraordinary wildlife. Join us in our commitment to wildlife conservation. Explore Zoodoo, where the wild heart of Australia beats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.className} flex flex-col w-screen bg-[#FFF9E9] justify-between min-h-screen`}
      >
        <Header />
        {children}
        <Footer />
        <FooterMobile />
      </body>
    </html>
  );
}
