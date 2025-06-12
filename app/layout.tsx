import type { Metadata } from "next";

import "./globals.css";


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
      <body className="font-geist antialiased">{children}</body>
    </html>
  );
}