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
  description: "Techlavya is the official Tech Fest website of Ramkrishna Mahato Government Engineering College.",
  keywords: [
    "techlavya",
    "rkmgec",
    "rkmgec tech fest",
    "tech fest",
    "techlavya rkmgec",
  ],
  metadataBase: new URL("https://techlavya-rkmgec.com/"),
  openGraph: {
    title: "Techlavya",
    type: "website",
    siteName: "Techlavya",
    description:
      "Techlavya is the official Tech Fest website of Ramkrishna Mahato Government Engineering College",
  },
  alternates: {
    canonical: "https://techlavya-rkmgec.com/"
  },
  icons: ["/techlavya-logo.png"]
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
