import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({ 
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
      <body className={`${spaceMono.className} bg-black text-[#00ff41] antialiased`}>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
