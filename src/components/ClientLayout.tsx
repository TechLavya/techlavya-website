"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
// import SplashCursor from "@/components/SplashCursor";
import BackgroundMusic from "@/components/BackgroundMusic";
import Galaxy from "@/components/Galaxy";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0 -z-20">
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction
          density={1.5}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.5}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1.5}
        />
      </div>
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/45" />

      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <div className="relative z-10">
          {/* <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}> */}
          {/* <SplashCursor /> */}
          {/* </div> */}
          <Navbar />
          {children}
          <Footer />
          <BackgroundMusic />
        </div>
      )}
    </div>
  );
}
