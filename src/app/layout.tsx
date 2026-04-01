import ClientLayout from "@/components/ClientLayout";
import type { Metadata } from "next";
import localFont from "next/font/local";
import {Bruno_Ace, Orbitron, Space_Grotesk, Sora, Inter, Poppins } from "next/font/google";
import "./globals.css";

const digitalFont = localFont({
  src: "./fonts/DigitalNumbers.woff",
  variable: "--font-digital",
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

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Techlavya 2026 | Official Tech Fest of RKMGEC",
    template: "%s | Techlavya",
  },
  description:
    "Techlavya 2026 is the official annual tech fest of Ramkrishna Mahato Government Engineering College (RKMGEC), featuring coding competitions, robotics, esports, innovation showcases, workshops, and campus-wide technical events.",
  keywords: [
    "techlavya",
    "techlavya 2026",
    "rkmgec",
    "ramkrishna mahato government engineering college",
    "tech fest",
    "engineering college tech fest",
    "coding competition",
    "hackathon",
    "robotics event",
    "esports tournament",
    "workshops",
    "innovation fest",
    "west bengal tech fest",
    "college fest india",
  ],
  metadataBase: new URL("http://techlavya.rkmgec.ac.in/"),
  applicationName: "Techlavya",
  category: "technology",
  authors: [{ name: "Techlavya Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Techlavya 2026 | Official Tech Fest of RKMGEC",
    type: "website",
    siteName: "Techlavya",
    url: "http://techlavya.rkmgec.ac.in/",
    description:
      "Join Techlavya 2026, the official tech fest of RKMGEC, for coding contests, robotics, esports, workshops, and innovation-driven student events.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Techlavya 2026 | Official Tech Fest of RKMGEC",
    description:
      "Explore events, competitions, workshops, and updates from Techlavya 2026 at RKMGEC.",
  },
  alternates: {
    canonical: "http://techlavya.rkmgec.ac.in/"
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
        className={`${digitalFont.variable} ${brunoAceFont.variable} ${orbitronFont.variable} ${spaceGrotesk.variable} ${sora.variable} ${inter.variable} ${poppins.variable} antialiased w-full text-foreground bg-background font-inter`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
