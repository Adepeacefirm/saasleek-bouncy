import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap"
});



export const metadata: Metadata = {
  title: "SaasLeek - Free Saas Template",
  description: "Saas made easy with SaasLeek, the free Saas template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased`}
    >
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
