import type { Metadata } from "next";
import { Teko } from "next/font/google";
import { Toaster } from "@/components/ui/toaster"
import "./globals.css";
import Navbar from "@/components/Navbar";

const teko = Teko({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chinmay Gadgil",
  description: "Chinmay Gadgil's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${teko.className} bg-black text-white overflow-x-hidden`}><Navbar/>{children} 
        <Toaster /></body>
    </html>
  );
}
