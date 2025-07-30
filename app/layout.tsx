import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import type React from "react";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { Analytics } from "@vercel/analytics/next";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nicoladen - Developer",
  description: "Developer and creator of digital experiences.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetbrainsMono.className} bg-background text-foreground antialiased`}
      >
        <MouseMoveEffect />
        <Analytics />
        {children}
      </body>
    </html>
  );
}
