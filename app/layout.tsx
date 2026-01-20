import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Growth learning app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Navbar />
      <div className="absolute inset-0 top-0 z-[-1] min-h-screen">
          <LightRays
            raysOrigin="top-center"
            raysColor="#5dfeca"
            raysSpeed={0.5}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.01}
            noiseAmount={0}
            distortion={0}
            fadeDistance={1}
            saturation={1}
        />
     </div>
     <main>
        {children}
        </main>
      </body>
    </html>
  );
}
