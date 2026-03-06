"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Loader from "@/components/Loader";
import SplashCursor from "@/components/SplashCursor";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader finishLoading={() => setLoading(false)} />
      ) : (
        <>
          <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 9999 }}>
            <SplashCursor />
          </div>
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
