import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const front = Montserrat({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "JS Playground",
  description: "Run JavaScript code in the browser witout installing Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={front.className}>{children}</body>
    </html>
  );
}
