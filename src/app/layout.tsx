import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Kode_Mono, Bruno_Ace, Orbitron } from "next/font/google";
import "./globals.css";

const digitalFont = localFont({
  src: "./fonts/DigitalNumbers.woff",
  variable: "--font-digital",
});

const kodeMonoFont = Kode_Mono({
  subsets: ["latin"],
  variable: "--font-kode-mono",
});

const brunoAceFont = Bruno_Ace({
  subsets: ["latin"],
  variable: "--font-bruno-ace",
  weight: "400",
})

const orbitronFont = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Techlavya",
  description: "College Fest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${digitalFont.variable} ${kodeMonoFont.variable} ${brunoAceFont.variable} ${orbitronFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased w-full`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
