"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useEffect, useState } from "react";
import CountdownTimer from "../CountdownTimer";
import Link from "next/link";

const LandingSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse tracking for the spotlight effect
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#030303]">
      {/* --- PREMIUM BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Dynamic Spotlight */}
        <motion.div
          className="absolute inset-0 z-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${smoothX}px ${smoothY}px, var(--primary-glow), transparent 40%)`,
          }}
        />

        {/* Ambient Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px]" />

        {/* Refined Grid with Mask */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse at center, black, transparent 80%)",
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-[10px] font-kodeMono uppercase tracking-[0.3em] text-accent/80">
            Protocol v2.0.26 Active
          </span>
        </motion.div>

        {/* MAIN TITLE: Kinetic Typography */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold font-orbitron tracking-tighter leading-none select-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20">
                TECHLAVYA
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-2 text-xl sm:text-3xl md:text-4xl lg:text-6xl font-spaceGrotesk tracking-[0.4em] text-highlight/90"
          >
            IGNITE <span className="text-primary font-black">2026</span>
          </motion.div>
        </div>

        {/* Subtext with Staggered Divider dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex items-center gap-4 sm:gap-8 mb-16"
        >
          {["Innovate", "Compete", "Create"].map((text, i) => (
            <div key={text} className="flex items-center gap-4 sm:gap-8">
              <span className="text-sm sm:text-lg font-spaceGrotesk text-muted-foreground tracking-[0.2em] uppercase hover:text-primary transition-colors duration-300 cursor-default">
                {text}
              </span>
              {i < 2 && (
                <div className="w-[1px] h-4 bg-white/20 rotate-[25deg]" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Timer Container with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mb-16 py-6 rounded-2xl"
        >
          <CountdownTimer />
        </motion.div>

        {/* CTA BUTTONS: Sleek & Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
        >
          <Link
            href="/#events"
            className="group relative px-10 py-4 bg-white text-black font-orbitron text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:bg-primary hover:text-white rounded-full overflow-hidden"
          >
            <span className="relative z-10">Explore Events</span>
            <motion.div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </Link>

          <Link
            href="/register"
            className="group px-10 py-4 border border-white/20 hover:border-primary/50 backdrop-blur-md text-white font-orbitron text-xs tracking-[0.2em] uppercase transition-all duration-300 rounded-full"
          >
            Register Now
          </Link>
        </motion.div>
      </div>

      {/* Side Decorative Elements (Premium aesthetic) */}
      <div className="absolute left-10 bottom-10 hidden xl:block">
        <div className="flex flex-col gap-2">
          <div className="h-[1px] w-24 bg-gradient-to-r from-primary to-transparent" />
          <span className="text-[9px] font-kodeMono text-muted-foreground uppercase tracking-widest">
            EST. 2026 / TECH SYMPOSIUM
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
