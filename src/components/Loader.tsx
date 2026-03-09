"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  finishLoading: () => void;
}

const EventHorizonLoader = ({ finishLoading }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsExiting(true), 1200);
          setTimeout(finishLoading, 2500);
          return 100;
        }
        return prev + 1;
      });
    }, 60);
    return () => clearInterval(interval);
  }, [finishLoading]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#040406] overflow-hidden select-none"
        >
          {/* 1. DEPTH LAYER: VESTIGIAL STARS (Low opacity, no blur) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                className="absolute w-px h-px bg-white"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* 2. THE MAIN ENGINE CORE */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing Outer Orbit */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.05, 1] }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity },
              }}
              className="absolute w-72 h-72 border border-white/[0.05] rounded-full"
            >
              {/* Orbital Satellite Node */}
              <div className="absolute -top-1 left-1/2 w-2 h-2 bg-[#d97706] rounded-full shadow-[0_0_10px_#d97706]" />
            </motion.div>

            {/* The Glass Ring (Progress) */}
            <svg className="w-56 h-56 -rotate-90">
              <circle
                cx="112"
                cy="112"
                r="110"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
              <motion.circle
                cx="112"
                cy="112"
                r="110"
                fill="none"
                stroke="#d97706"
                strokeWidth="2"
                strokeDasharray="690"
                animate={{ strokeDashoffset: 690 - (690 * progress) / 100 }}
                transition={{ duration: 0.3 }}
                strokeLinecap="round"
              />
            </svg>

            {/* 3. THE CENTERPIECE: THE "MONOLITH" */}
            <div className="absolute flex flex-col items-center justify-center">
              <motion.div
                animate={{
                  rotateY: [0, 180, 360],
                  boxShadow: [
                    "0 0 20px #d9770633",
                    "0 0 40px #d9770666",
                    "0 0 20px #d9770633",
                  ],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="w-16 h-24 border border-[#d97706] bg-black/40 flex items-center justify-center backdrop-blur-sm"
                style={{ transformStyle: "preserve-3d" }}
              >
                <span className="text-white font-mono text-xl font-bold tracking-tighter">
                  {progress}%
                </span>
              </motion.div>

              <div className="mt-8 text-center uppercase tracking-[0.4em]">
                <div className="text-[10px] text-white/40 mb-1">
                  Engine_Core
                </div>
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-[9px] text-[#d97706] font-bold"
                >
                  {progress < 100 ? "Analyzing_Vortex" : "Stable_Ready"}
                </motion.div>
              </div>
            </div>

            {/* 4. TECHNICAL HUD BRACKETS */}
            <div className="absolute -inset-16 border-x border-white/10 flex justify-between items-center pointer-events-none">
              <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#d97706] to-transparent opacity-50" />
              <div className="h-32 w-px bg-gradient-to-b from-transparent via-[#d97706] to-transparent opacity-50" />
            </div>
          </div>

          {/* 5. BOTTOM BAR DATA FLOW */}
          <div className="absolute bottom-12 w-full max-w-md px-10">
            <div className="flex justify-between text-[8px] font-mono text-white/30 mb-2 uppercase italic">
              <span>Flux_Capacity</span>
              <span>Vector_01</span>
            </div>
            <div className="h-px w-full bg-white/5 relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                className="absolute inset-y-0 left-0 bg-[#d97706]"
              />
            </div>
            {/* Coordinate Counter */}
            <div className="mt-4 flex justify-center gap-8 text-[9px] text-white/20 font-mono">
              <span>X: {(progress * 1.23).toFixed(2)}</span>
              <span>Y: {(progress * 0.88).toFixed(2)}</span>
              <span>Z: {(progress * 3.41).toFixed(2)}</span>
            </div>
          </div>

          {/* Grainy Texture for Cinematic feel (Zero CPU impact) */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventHorizonLoader;
