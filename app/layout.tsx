import type { Metadata } from "next";

import "./globals.css";
import CursorTrail from "./components/ui/CursorTrack";
import Preloader from "./components/ui/Preloader";



export const metadata: Metadata = {
  title: "Harziiz Portfolio",
  keywords: [
    "Harziiz",
    "Portfolio",
    "Web Developer",
    "Web Designer",
  ],
  authors: [{ name: "Harziiz" }],
  creator: "Harziiz",
  description: "My personal developer portfolio showcasing my work and skills.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-geist antialiased">
        <Preloader/>
        <CursorTrail />
        {children}
        </body>
    </html>
  );
}