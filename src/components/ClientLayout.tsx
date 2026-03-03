"use client";

import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/SplashCursor";
import Loader from "@/components/Loader";

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
          <SplashCursor />
          <Navbar />
          {children}
          <Footer />
        </>
      )}
    </>
  );
}
