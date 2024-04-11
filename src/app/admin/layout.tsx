import { ReactNode } from "react";
import { Toaster } from "@/components/atom/toaster";
import "../globals.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen animate-in fade-in">
        <div className="flex flex-col grow h-full">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
