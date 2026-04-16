import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Notification from "@/components/homepage/Notification";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaasLeek - Free Saas Template",
  description:
    "Saas made easy with SaasLeek, the free Saas template built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full antialiased scroll-smooth`}
    >
      <body cz-shortcut-listen="true" className="min-h-full flex flex-col">
        <Notification />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
