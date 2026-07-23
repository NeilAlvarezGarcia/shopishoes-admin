import type { Metadata } from "next";
import {  Anybody, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopiShoes-admin",
  description: "Admin panel for ShopiShoes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${anybody.variable} ${hankenGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className='px-2 md:px-4 lg:px-8 pb-6 max-w-350 mx-auto flex-1 w-full'>
          {children}
        </main>
      </body>
    </html>
  );
}
