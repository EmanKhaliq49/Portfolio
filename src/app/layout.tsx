import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ 
  weight: ['400', '700'],
  subsets: ["latin"] 
});

import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Creative Developer | Portfolio",
  description: "High-end scrollytelling personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${oswald.className} bg-background text-foreground antialiased italic`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
